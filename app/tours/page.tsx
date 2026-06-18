"use client"

import { useState, useEffect, useMemo } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import TourCard from "@/components/tour-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, SlidersHorizontal, X, ChevronDown } from "lucide-react"
import { tourManager } from "@/lib/tour-manager"
import { siteConfig } from "@/config/site"

export default function ToursPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const urlSearch = searchParams.get('search') || ""
    const urlCategory = searchParams.get('category') || "All"


    const [searchQuery, setSearchQuery] = useState(urlSearch)
    const [selectedCategory, setSelectedCategory] = useState(urlCategory)
    const [showFilters, setShowFilters] = useState(false)
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000])
    const [minRating, setMinRating] = useState(0)
    const [sortBy, setSortBy] = useState("popular")

    useEffect(() => {
        setSearchQuery(urlSearch)
        setSelectedCategory(urlCategory || "All")
    }, [urlSearch, urlCategory])

    const categories = siteConfig.categories

    const filteredTours = useMemo(() => {

        let tours = tourManager.filterTours({
            search: searchQuery,
            category: selectedCategory,
            minPrice: priceRange[0],
            maxPrice: priceRange[1],
            minRating: minRating
        }
        )
        // Apply sorting
        switch (sortBy) {
            case "price-low":
                tours = tours.sort((a, b) => a.price - b.price)
                break
            case "price-high":
                tours = tours.sort((a, b) => b.price - a.price)
                break
            case "rating":
                tours = tours.sort((a, b) => b.rating - a.rating)
                break
            case "duration":
                tours = tours.sort((a, b) => {
                    const aDays = parseInt(a.duration.split(" ")[0])
                    const bDays = parseInt(b.duration.split(" ")[0])
                    return aDays - bDays
                })
                break
            default: // popular
                tours = tours.sort((a, b) => b.reviews - a.reviews)
        }
        return tours
    }, [searchQuery, selectedCategory, priceRange, minRating, sortBy])

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category)
        updateURL(searchQuery, category)
    }
    const handleSearchChange = (query: string) => {
        setSearchQuery(query)
        updateURL(query, selectedCategory)
    }
    const updateURL = (search: string, category: string) => {
        const params = new URLSearchParams()
        if (search) params.set('search', search)
        if (category && category != "All")
            params.set('category', category)
        const queryString = params.toString()
        router.push(queryString ? `/tours?${queryString}` : '/tours', { scroll: false })
    }
    const clearFilters = () => {
        setSearchQuery("")
        setSelectedCategory("All")
        router.push('/tours', { scroll: false })
    }
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Our Tours</h1>
                    <p className="text-xl opacity-90">Discover amazing destinations and experiences</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <Input
                                    type="text"
                                    placeholder="Search tours or destinations..."
                                    className="p1-10" value={searchQuery}
                                    onChange={(e) => handleSearchChange(e.target.value)}
                                />
                            </div>
                        </div>
                        <Button
                            variant="outline"
                            className="md: w-auto"
                            onClick={() => setShowFilters(!showFilters)}
                        >
                            <SlidersHorizontal className="mr-2 h-5 w-5" />
                            Filters
                        </Button>
                    </div>
                    {/* Advanced Filters Panel */}
                    {showFilters && (
                        <div className="mt-6 p-6 bg-gray-50 rounded-lg border">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Price Range */}
                                <div>
                                    < label className="block text-sm font-medium text-gray-700 mb-3">
                                        Price Range
                                    </ label>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <Input type="number" placeholder="Min" value={priceRange[0]}
                                                onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                                                className="w-full"
                                            />
                                            <span className="text-gray-500">-</span>
                                            <Input
                                                type="number"
                                                placeholder="Max"
                                                value={priceRange[1]}
                                                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 200000])}
                                                className="w-full"
                                            />
                                        </div>
                                        <p className="text-xs text-gray-500">
                                            ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                                {/* Rating Filter */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-3">
                                        Minimum Rating
                                    </label>
                                    <div className="flex gap-2">
                                        {[0, 3, 4, 4.5].map((rating) => (
                                            <Button
                                                key={rating}
                                                variant={minRating === rating ? "default" : "outline"} size="sm"
                                                onClick={() => setMinRating(rating)}
                                            >
                                                {rating === 0 ? "All" : `${rating}★+`}
                                            </Button>
                                        ))}
                                    </div>
                                </div>
                                {/* Sort By */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-3">
                                        Sort By
                                    </label>
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-d focus:outline-none focus: ring-2 focus: ring-blue-600 text-gray-900">
                                        <option value="popular">Most Popular</option>
                                        <option value="price-low">Price: Low to High</option>
                                        <option value="price-high">Price: High to Low</option>
                                        <option value="rating">Highest Rated</option>
                                        <option value="duration">Duration</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mt-4 flex justify-end gap-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => {
                                        setPriceRange([0, 200000])
                                        setMinRating(0)
                                        setSortBy("popular")
                                    }}>
                                    Reset Filters
                                </Button>
                                <Button size="sm"
                                    onClick={() => setShowFilters(false)}
                                >
                                    Apply Filters
                                </Button>
                            </div>
                        </div>
                    )}
                    <div className="mt-6 flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <Button
                                key={category}
                                variant={selectedCategory == category ? "default" : "outline"}
                                onClick={() => handleCategoryChange(category)}
                                size="sm"
                            >
                                {category}
                            </Button>
                        ))}

                        {(searchQuery || selectedCategory != "All") && (
                            <Button
                                variant="ghost"
                                onClick={clearFilters}
                                size="sm"
                                className="ml-auto">
                                <X className="mr-1 h-4 w-4" />
                                Clear Filters
                            </Button>
                        )}
                    </div>
                </div>
                <div className="mb-6">
                    <p className="text-gray-600">
                        Showing <span className="font-semibold">{filteredTours.length}</span> tours
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredTours.map((tour) => (
                        <TourCard key={tour.id} tour={tour} />
                    ))}
                </div>
                {
                    filteredTours.length === 0 && (<div className="text-center py-16">
                        <p className="text-xl text-gray-600">No tours found matching your criteria.</p>
                        <Button className="mt-4" onClick={clearFilters}>
                            Clear Filters
                        </Button>
                    </div>
                    )}
            </div>
        </div>
    )
}
"use client"

import { useState } from "react"
import ActivityCard from "@/components/activity-card"
import { activities } from "@/data/activities"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { Search, Filter } from "lucide-react"
export default function ActivitiesPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [showPopularOnly, setShowPopularOnly] = useState(false)

    const filteredActivities = activities.filter((activity) => {
        const searchLower = searchQuery.toLowerCase()
        const matchesSearch =
            activity.name.toLowerCase().includes(searchLower) ||
            activity.description.toLowerCase().includes(searchLower) ||
            activity.destinations.some(dest => dest.toLowerCase().includes(searchLower))
        const matchesPopular = showPopularOnly || activity.popular
        return matchesSearch && matchesPopular
    })
    const popularActivities = activities.filter(a => a.popular)
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-gray-900 text-white py-20">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=1600&g=80')",
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Explore Activities & Adventures
                    </h1>
                    <p className="text-xl opacity-90 mb-g">
                        Discover thrilling experiences and unforgettable adventures worldwide </p>
                    {/* Search Bar */}
                    <div className="max-w-2xl">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <Input
                                type="text"
                                placeholder="Search activities..." className="pl-12 h-14 text-lg bg-white" value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Filter Section */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                            {showPopularOnly ? "Popular Activities" : "All Activities"} </h2>
                        <p className="text-gray-600 mt-1">
                            Showing {filteredActivities.length} {filteredActivities.length === 1 ? 'activity' : 'activities'} </p>
                    </div>
                    <Button variant={showPopularOnly ? "default" : "outline"} onClick={() => setShowPopularOnly(!showPopularOnly)}>
                        <Filter className="mr-2 h-4 w-4" />
                        {showPopularOnly ? "Show All" : "Popular Only"} </Button>
                </div >
                {/* Popular Activities Section (when not filtering) */}
                {!showPopularOnly && !searchQuery && (
                    <div className="mb-16">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-3xl font-bold text-gray-900">Popular Activities</h2>
                            <Button variant="link" onClick={() => setShowPopularOnly(true)}>
                                View All Popular →
                            </Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {popularActivities.slice(0, 4).map((activity) => (
                                <ActivityCard key={activity.id} activity={activity} />
                            ))}
                        </div>
                    </div>
                )}
                {/* All Activities Grid */}
                <div>
                    {!showPopularOnly && !searchQuery && (
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">All Activities</h2>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredActivities.map((activity) => (
                            <ActivityCard key={activity.id} activity={activity} />
                        ))}
                    </div>
                    {filteredActivities.length == 0 && (
                        <div className="text-center py-16">
                            <p className="text-xl text-gray-600 mb-4">No activities found matching your search.</p>
                            <Button onClick={() => { setSearchQuery(""); setShowPopularOnly(false); }}>
                                Clear Filters
                            </Button>
                        </div>
                    )}
                </div >
                {/* Why Choose Us Section */}
                <div className="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-sm">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Why Book Activities With Us?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentcolor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Verified Activities</h3>
                            <p className="text-gray-600">All activities are verified and meet safety standards</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8C-1.657 0-3.895-3 251.343 2 3 2 3 .895 3 2-"></path></svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Best Price Guarantee</h3>
                            <p className="text-gray-600">Get the best deals on all adventure activities</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)}
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search, MapPin, Calendar, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Hero() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/tours?search=${encodeURIComponent(searchQuery)}`);
        } else {
            router.push('/tours')
        }
    }

    return (
        <div className="relative h-[600px] bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80')" }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Your tour, Perfectly Personalised!
                    </h1>
                </div>
                <div className="max-w-4xl mx-auto w-full">
                    <form onSubmit={handleSearch} className="bg-white rounded-2xl shadow-2xl p-6">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2"> Where to?</label>
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                    <Input
                                        type="text"
                                        placeholder="Search destinations.."
                                        className="pl-10"
                                        value={searchQuery}
                                        onChange={(e: any) => setSearchQuery(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">When?</label>
                                <div className="relative">
                                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                    <Input
                                        type="date"
                                        className="pl-10"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
                                <div className="relative">
                                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                    <Input
                                        type="number"
                                        className="pl-10"
                                        placeholder="2"
                                        min="1"
                                        defaultValue="2"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                            <Button type="submit" className="w-full h-12 text-lg" size="lg">
                                <Search className="mr-2 h-5 w-5" />
                                Search Tours
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
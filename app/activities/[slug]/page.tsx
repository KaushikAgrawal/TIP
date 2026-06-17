import { notFound } from "next/navigation"
import { activities } from "@/data/activities"
import { tourManager } from "@/lib/tour-manager"
import TourCard from "@/components/tour-card"
import { MapPin, Users, Clock, Star } from "lucide-react"

export function generateStaticParams() {
    return activities.map((activity: any) => ({
        slug: activity.slug,
    }))
}

export default async function ActivityDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const activity = activities.find((a) => a.slug === slug)

    if (!activity) {
        notFound()
    }
    // Get all tours and filter by activity name in title or highlights
    const allTours = tourManager.getAllTours()
    const activityTours = allTours.filter((tour) => {
        const searchTerm = activity.name.toLowerCase()
        return (
            tour.title.toLowerCase().includes(searchTerm) ||
            tour.highlights.some(h => h.toLowerCase().includes(searchTerm)) ||
            tour.description.toLowerCase().includes(searchTerm)
        )
    })

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-[400px] bg-gray-900">
                <img
                    src={activity.image} alt={activity.name}
                    className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="max-w-7xl mx-auto">
                        {activity.popular && (
                            <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                                Popular Activity
                            </span>
                        )}
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4"> {activity.name} </h1>
                        <p className="text-xl text-white/90 mb-4">{activity.description}</p>
                        <div className="flex flex-wrap items-center gap-6 text-white">
                            <div className="flex items-center">
                                <Users className="h-5 w-5 mr-2" />
                                <span>{activity.tourCount} tours available</span>
                            </div>
                            <div className="flex items-center">
                                <Star className="h-5 w-5 mr-2 fill-yellow-400 text-yellow-400" />
                                <span>Highly Rated</span>
                            </div>
                            <div className="flex items-center">
                                <Clock className="h-5 w-5 mr-2" />
                                <span>{activity.priceRange}</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-2 text-white/90 mt-4">
                            <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">
                                Available in: {activity.destinations.join(", ")}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* About Section */}
                <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
                    <h2 className="text-3xl font-bold mb-6">About {activity.name}</h2>
                    <div className="prose max-w-none">
                        <p className="text-gray-700 text-lg leading-relaxed mb-4">
                            {activity.description}
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Experience the thrill of {activity.name.toLowerCase()} with our carefully curated tours.
                            Whether you're a beginner or an experienced enthusiast, we have the perfect adventure for you.
                            All our tours are led by certified professionals and include top-quality equipment and safety gear.
                        </p>
                    </div>
                </div>
                {/* What to Expect */}
                <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
                    <h2 className="text-3xl font-bold mb-6">What to Expect</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-blde-100 rounded-full flex items-center justify-center" >
                                    <svg className=" w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1212 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold mb-2">Professional Guidance</h3>
                                <p className="text-gray-600">Expert instructors with years of experiences</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-green=600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1212 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.94" />
                                    </svg>
                                </div>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold mb-2">Safety First</h3>
                                <p className="text-gray-600">All necessary safety equipment provided</p>
                            </div>
                        </div>
                        <div className="flex items-start"> <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v413 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </ svg>
                            </div>
                        </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold mb-2">Flexible Duration</h3>
                                <p className="text-gray-600">Options from half-day to multi-day experiences</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 Ov-2c0-.656-.126" />
                                    </svg>
                                </div>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold mb-2">Small Groups</h3>
                                <p className="text-gray-600">Intimate group sizes for personalized attention</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Available Tours */}
                <div>
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold mb-2">Available {activity.name} Tours</h2>
                        <p className="text-gray-600">
                            {activityTours.length} {activityTours.length === 1 ? 'tour' : 'tours'} featuring {activity.name.toLowerCase()}
                        </p>
                    </div>
                    {activityTours.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {activityTours.map((tour: any) => (
                                <TourCard key={tour.id} tour={tour} />
                            ))}
                        </div>
                    ) : (
                        <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                            <p className="text-xl text-gray-600 mb-4">
                                No tours currently available for {activity.name}
                            </p>
                            <p className="text-gray-500">
                                Check back soon or explore our other activities
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}


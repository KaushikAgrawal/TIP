import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Activity } from "@/types/activity"
import { ArrowRight, MapPin } from "lucide-react"

interface ActivityCardProps {
    activity: Activity
}
export default function ActivityCard({ activity }: ActivityCardProps) {
    return (
        <Link href={`/activities/${activity.slug}`}>
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group h-full">
                <div className="relative h-56 overflow-hidden">
                    <img
                        src={activity.image}
                        alt={activity.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-D bg-gradient-to-t from-black/60 to-transparent" />
                    {activity.popular && (
                        <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            Popular </div>)}
                    <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-bold text-white mb-1">{activity.name}</h3>
                        <p className="text-sm text-white/90">{activity.tourCount} tours available</p>
                    </div>
                </div>
                <CardContent className="p-5">
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{activity.description}</p>
                    {/* Destinations */}
                    <div className="flex items-start mb-3">
                        <MapPin className="h-4 w-4 text-gray-400 mt-0.5 mr-1 flex-shrink-0" />
                        <p className="text-xs text-gray-500 line-clamp-2">
                            {activity.destinations.slice(0, 3).join(", ")}
                            {activity.destinations.length > 3 && ` +${activity.destinations.length - 3} more`}
                        </p>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-blue-600">{activity.priceRange}</span>
                        <div className="flex items-center text-blue-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
                            Explore
                            <ArrowRight className="ml-1 h-4 w-4" />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}
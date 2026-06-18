import Link from "next/link"
import { Star, Clock, Heart } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tour } from "@/types"
interface TourCardProps {
    tour: Tour
}
export default function TourCard({ tour }: TourCardProps) {
    return (
        <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="relative h-56 overflow-hidden">
                <img src={tour.image} alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <button className="absolute top-4 right-4 bg-white p-2 rounded-full hover:bg-gray-100 transition">
                    <Heart className="h-5 w-5 text-gray-600" />
                </button>
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {tour.category}
                </div>
            </div>
            <CardContent className="p-4">
                <Link href={`/tours/${tour.id}`}>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 hover: text-blue-600 transition line-clamp-2">
                        {tour.title}
                    </h3>
                </Link>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center">
                        <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{tour.rating}</span>
                        <span className="ml-1">({tour.reviews})</span>
                    </div>
                </div>
                <div className="border-t pt-3">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">Starting from</p>
                            <p className="text-2xl font-bold text-blue-600">
                                ₹{tour.price.toLocaleString()}
                            </p>
                            <p className="text-xs text-gray-500">per person</p>
                        </div>
                         <Link href={`/tours/${tour.slug}`}>
                            <Button>View Details & Inquire</Button>
                        </Link>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

import Link from "next/link";
import { MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card"
import { Destination } from "@/types"

interface DestinationCardProps {
    destination: Destination
}

export default function DestinationCard({ destination }: DestinationCardProps) {
    return (
        <Link href={`/destinations/${destination.slug}`}>
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <div className="relative h-64 overflow-hidden">
                    <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-2xl font-bold mb-1">{destination.name}</h3>
                        <div className="flex items-center text-sm">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{destination.country}</span>
                        </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold">
                        {destination.tourCount} Tours
                    </div>
                </div>
                <CardContent className="p-4">
                    <p className="text-gray-600 text-sm">{destination.description}</p>
                </CardContent>
            </Card>
        </Link>
    )
}
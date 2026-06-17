import { notFound } from "next/navigation";
import { MapPin } from "lucide-react";
import TourCard from "@/components/tour-card";
import { tourManager } from "@/lib/tour-manager";

export function generateStaticParams() {
    return tourManager.getAllDestinations().map((destination) => ({
        id: destination.slug
    }))
}

export default async function DestinationDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const destination = tourManager.getDestinationBySlug(id)

    if (!destination)
        notFound()

    const destinationTours = tourManager.getToursByDestination(destination.name)

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="relative h-[400px] bg-gray-900">
                <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            {destination.name}
                        </h1>
                        <div className="flex items-center text-white text-lg">
                            <MapPin className="h-6 w-6 mr-2" />
                            <span>{destination.country}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
                    <h2 className="'text-2xl font-bold mb-4">About {destination.name}</h2>
                    <p className="text-gray-700 text-lgpleading-relaxed">{destination.description}</p>
                    <div className="mt-6 inline-flex items-center bg-blue-50 px-4 py-2 rounded-lg">
                        <span className="text-blue-600 font-semibold">
                            {destination.tourCount} tours available
                        </span>
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-bold mb-8">Tours in {destination.name}</h2>
                    {destinationTours.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lgigrid-cols-3 gap-8">
                            {destinationTours.map((tour) => (
                                <TourCard key={tour.id} tour={tour} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16 bg-white rounded-lg">
                            <p className="text-xl text-gray-600">No tours available for this destination yet.
                            </p>
                        </div>)}
                </div>
            </div>

        </div>
    )
}


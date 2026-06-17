import DestinationCard from "@/components/destination-card";
import { tourManager } from "@/lib/tour-manager";

export default function DestinationsPage() {
    const destinations = tourManager.getAllDestinations()
    return (
        <div className="min-h-screen bg-gray-50">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Destinations</h1>
                        <p className="text-xl opacity-90">
                            Discover breathtaking locations around the world </p>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="mb-8">
                        <p className="text-gray-600">
                            Showing <span className="font-semibold">{destinations.length}</span> destinations
                        </p>
                    </div>
                    <div className="grid grid-cols-1 mdsgrid-cols-2 lgigrid-cols-4 gap-6"> {destinations.map((destination) => (
                        <DestinationCard key={destination.id} destination={destination} />
                    ))}
                    </div>
                </div>
        </div>

    )
}
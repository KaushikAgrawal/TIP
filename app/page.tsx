import Hero from "@/components/hero";
import DestinationCard from "@/components/destination-card"
import TourCard from "@/components/tour-card"
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Shield, HeadphonesIcon, Sparkles } from "lucide-react";
import Link from "next/link";
import { tourManager } from "@/lib/tour-manager"

export default function Home() {
  const destinations = tourManager.getAllDestinations()
  const tours = tourManager.getAllTours()

  return (
    <div>
      <Hero />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Best Price Guarantee</h3>
              <p className="text-gray-600 text-sm">We ensure you get the best deals on all tours</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Secure Booking</h3>
              <p className="text-gray-600 text-sm">Your data is safe with our secure payment system</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <HeadphonesIcon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Round-the-clock assistance for all your queries</p>
            </div>
            <div className="text-center">
              <div className=" inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Sparkles className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Personalized Tours</h3>
              <p className="text-gray-600 text-sm">Customized itineraries tailored to your preferences</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Destinations
            </h2>
            <p className="text-lg text-gray-600">
              Explore our handpicked destinations around the world </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.slice(0, 8).map((destination: any) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/destinations">
              <Button size="lg" className="group">
                View All Destinations
                <ArrowRight className="ml-2 h-5 w-5 group-hover: translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div >
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 1g:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">
              Featured Tours </h2>
            <p className="text-lg text-gray-600">
              Discover our most popular tour packages
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.slice(0, 6).map((tour: any) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/tours">
              <Button size="lg" className="group">
                View All Tours
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md: text-4xl font-bold mb-4">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let us help you create unforgettable memories </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Plan My Trip </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white/20">
              Contact Us </Button>
          </div>
        </div>
      </section>
    </div >
  )    
}

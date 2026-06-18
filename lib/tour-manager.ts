import { Tour, Destination, ItineraryDay } from "@/types"
import { tours as toursData, destinations as destinationsData } from "@/data/tours"

export class TourManager {
    private static tours: Tour[] = toursData
    private static destinations: Destination[] = destinationsData

    static getAllTours(): Tour[] {
        return this.tours
    }
    static getTourById(id: string): Tour | undefined {
        return this.tours.find(tour => tour.id === id)
    }
    static getTourBySlug(slug: string): Tour | undefined {
        return this.tours.find(tour => tour.slug === slug)
    }

    static getToursByDestination(destinationName: string): Tour[] {
        return this.tours.filter(tour => tour.destination.toLowerCase() === destinationName.toLowerCase())
    }
    static getToursByCategory(category: string): Tour[] {
        if (category === "All") return this.tours
        return this.tours.filter(tour => tour.category === category)
    }
    static searchTours(query: string): Tour[] {
        const searchLower = query.toLowerCase()
        return this.tours.filter(tour =>
            tour.title.toLowerCase().includes(searchLower) ||
            tour.destination.toLowerCase().includes(searchLower) ||
            tour.description.toLowerCase().includes(searchLower) ||
            tour.category.toLowerCase().includes(searchLower)
        )
    }
    static filterTours(params: {
        search?: string
        category?: string
        destination?: string
        minPrice?: number
        maxPrice?: number
        minRating?: number
    }): Tour[] {
        let filtered = this.tours
        if (params.search) {
            filtered = this.searchTours(params.search)
        }
        if (params.category && params.category !== "All") {
            filtered = filtered.filter(tour => tour.category === params.category)
        }
        if (params.destination) {
            filtered = filtered.filter(tour =>
                tour.destination.toLowerCase() === params.destination?.toLowerCase())
        }

        if (params.minPrice != undefined) {
            filtered = filtered.filter(tour => tour.price >= params.minPrice!)
        }
        if (params.maxPrice != undefined) {
            filtered = filtered.filter(tour => tour.price <= params.maxPrice!)
        }
        if (params.minRating != undefined) {
            filtered = filtered.filter(tour => tour.rating >= params.minRating!)
        }
        return filtered
    }

    static getSimilarTours(tourId: string, limit: number = 3): Tour[] {
        const tour = this.getTourById(tourId)
        if (!tour) return []
        return this.tours.filter(t => t.id !== tourId && t.destination === tour.destination).slice(0, limit)
    }

    static getAllDestinations(): Destination[] {
        return this.destinations
    }
    static getDestinationById(id: string): Destination | undefined {
        return this.destinations.find(dest => dest.id === id)
    }
    static getDestinationBySlug(slug: string): Destination | undefined {
        return this.destinations.find(dest => dest.slug === slug)
    }
    static getDestinationByName(name: string): Destination | undefined {
        return this.destinations.find(dest => dest.name.toLowerCase() === name.toLowerCase())
    }
    static addTour(tour: Tour): void {
        this.tours.push(tour)
    }
    static updateTour(id: string, updates: Partial<Tour>): boolean {
        const index = this.tours.findIndex(tour => tour.id === id)
        if (index === -1) return false
        this.tours[index] = { ...this.tours[index], ...updates }
        return true
    }
    static deleteTour(id: string): boolean {
        const index = this.tours.findIndex(tour => tour.id === id)
        if (index === -1) return false
        this.tours.splice(index, 1)
        return true;
    }
    static addItineraryDay(tourId: string, day: ItineraryDay): boolean {
        const tour = this.getTourById(tourId)
        if (!tour) return false
        if (!tour.itinerary) {
            tour.itinerary = []
        }
        tour.itinerary.push(day)
        tour.itinerary.sort((a, b) => a.day - b.day)
        return true
    }
    static updateItineraryDay(
        tourId: string,
        dayNumber: number,
        updates: Partial<ItineraryDay>
    ): boolean {
        const tour = this.getTourById(tourId)
        if (!tour || !tour.itinerary)
            return false
        const dayIndex = tour.itinerary.findIndex(d => d.day = dayNumber)
        if (dayIndex === -1)
            return false
        tour.itinerary[dayIndex] = { ...tour.itinerary[dayIndex], ...updates }
        return true
    }
    static deleteltineraryDay(tourId: string, dayNumber: number): boolean {
        const tour = this.getTourById(tourId)
        if (!tour || !tour.itinerary) return false
        const dayIndex = tour.itinerary.findIndex(d => d.day === dayNumber)
        if (dayIndex === -1) return false
        tour.itinerary.splice(dayIndex, 1)
        return true
    }
}
export const tourManager = TourManager

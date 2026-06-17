export interface Tour {
    id: string
    slug: string
    title: string
    destination: string
    duration: string
    price: number
    rating: number
    reviews: number
    image: string
    category: string
    highlights: string[]
    description: string
    included: string[]
    itinerary?: ItineraryDay[]
    freeOffer?: string
    trustBadges?: string[]
}

export interface ItineraryDay {
    day: number
    title: string
    description: string
    activities: string[]
}

export interface Destination {
    id: string
    slug: string
    name: string
    country: string
    image: string
    tourCount: number
    description: string
    popular: boolean
}

export interface Category {
    id: string
    name: string
    icon: string
    description: string
}
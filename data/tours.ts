import { Tour, Destination } from "@/types"

export const destinations: Destination[] = [
    {
        id: "1",
        slug: "bali",
        name: "Bali",
        country: "Indonesia",
        image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?g=80&w=800", 
        tourCount: 5,
        description: "Tropical paradise with stunning beaches and rich culture",
        popular: true
    },
    {
        id: "2",
        slug: "dubai",
        name: "Dubai",
        country: "UAE",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&g=80", 
        tourCount: 2,
        description: "Modern luxury meets Arabian heritage and rich culture",
        popular: true
    },
    {
        id: "3",
        slug: "maldives",
        name: "Maldives",
        country: "Maldives",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&g=80",
        tourCount: 8,
        description: "Crystal clear waters and overwater bungalows",
        popular: true
    }

]

export const tours: Tour[] = [
    {
        id: "1",
        slug: "bali-romantic-journey-discovering-highlands-heritage-hideaways",
        title: "Bali Romantic Journey | Discovering Highlands, Heritage & Hideaways",
        destination: "Bali",
        duration: "6 Days / 5 Nights",
        price: 45999, rating: 4.8, reviews: 1247,
        image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?g=80&w=800",
        category: "Honeymoon", highlights: [
            "Visit to Tanah Lot Temple",
            "Ubud Rice Terraces exploration",
            "Traditional Balinese massage",
            "Sunset dinner at Jimbaran Beach",
            "Water sports at Tanjung Benoa"
        ],
        description: "Experience the magic of Bali with this romantic getaway designed for couples. Explore ancient temples, pristine beaches",
        included: [
            "5 nights accommodation in 4-star hotels",
            "Daily breakfast",
            "Airport transfers",
            "All sightseeing as per itinerary",
            "Professional tour guide"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Bali",
                description: "Welcome to the Island of Gods",
                activities: ["Airport pickup", "Hotel check-in", "Welcome dinner", "Leisure time"],
            },
            {

                day: 2,
                title: "Ubud Cultural Tour",
                description: "Explore the heart of Bali",
                activities: ["Tegalalang Rice Terrace", "Traditional dance performance", "Art market shopping"]
            }
        ]
    },
    {
        id: "2",
        slug: "dubai-abu-dhabi-luxury-honeymoon-escape",
        title: "Dubai & Abu Dhabi Luxury Honeymoon Escape",
        destination: "Dubai",
        duration: "5 Days / 4 Nights",
        price: 65999,
        rating: 4.7, reviews: 1523,
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&g=80",
        category: "Luxury", highlights: [
            "Burj Khalifa visit",
            "Desert safari with BBQ dinner",
            "Dubai Marina cruise",
            "Sheikh Zayed Mosque tour",
            "Shopping at Dubai Mall"
        ],
        description: "Experience luxury and opulence in the UAE's most iconic cities. From towering skyscrapers to golden deserts, this package offers the best of both",
        included: [
            "4 nights in 5-star hotels",
            "Daily breakfast and dinner",
            "Private airport transfers",
            "ALl entrance fees",
            "Desert safari"
        ],
        freeOffer: "FREE Desert Safari with BBQ Dinner",
        trustBadges: ["Luxury Hotels", "private Transfers", "Visa Assistance"]
    },
    {
        id: "3",
        slug: "maldives-paradise-retreat-overwater-villa-experience",
        title: "Maldives Paradise Retreat | Overwater Villa Experience",
        destination: "Maldives",
        duration: "5 Days / 4 Nights",
        price: 89999, rating: 4.9,
        reviews: 2156,
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
        category: "Beach",
        highlights: [
            "Overwater villa stay",
            "Snorkeling in coral reefs",
            "Sunset dolphin cruise",
            "Spa treatments",
            "Private beach dinner"
        ],
        description: "Escape to paradise with crystal clear waters, white sandy beaches and luxurious overwater villas. Perfect for honeymoon",
        included: [
            "4 nights overwater villas",
            "All meals included",
            "Speedboat transfer",
            "Water sports activities",
            "Couple spa sessions"
        ]
    }
]

import {Activity} from "@/types/activity"

export const activities: Activity[] = [
    {
        id: "1",
        name: "Scuba Diving",
        slug: "scuba-diving",
        description: "Explore the underwater world with professioanl diving instructors",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
        tourCount: 15,
        icon: "waves",
        popular: true,
        priceRange: "₹3,000 - ₹15,000",
        destinations: ["Maldives", "Bali", "Dubai", "Thailand"]
    },
    {
        id: "2",
        name: "Paragliding",
        slug: "paragliding",
        description: "Explore the underwater world with professioanl diving instructors",
        image: "https://images.unsplash.com/photo-1522057306606-d0a7b3e60a3f?w=800&q=80",
        tourCount: 10,
        icon: "plane",
        popular: true,
        priceRange: "₹2,000 - ₹8,000",
        destinations: ["Dubai", "Thailand"]
    },
]
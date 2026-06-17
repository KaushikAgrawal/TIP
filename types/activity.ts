export interface Activity{
    id: string
    name:string
    slug: string
    description: string
    image: string
    tourCount: number
    icon: string
    popular: boolean
    priceRange: string
    destinations: string[]
}

export interface ActivityCategory{
    id: string
    name: string
    activites: Activity[]
}
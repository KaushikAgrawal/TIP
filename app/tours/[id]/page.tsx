import { notFound } from "next/navigation"
import { tourManager } from "@/lib/tour-manager"
import TourDetailClient from "@/components/tour-detail-client"
export function generateStaticParams() {
    return tourManager.getAllTours().map((tour) => ({
        id: tour.slug,
    }))
}
export default async function TourDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const tour = tourManager.getTourBySlug(id)
    if (!tour) {
        notFound()
    }
    const similarTours = tourManager.getSimilarTours(tour.id, 3)
    return (<TourDetailClient tour={tour} similarTours={similarTours} />)
}
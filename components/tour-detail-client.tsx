"use client"

import { useState } from "react";
import { Calendar, Check, Clock, Heart, MapPin, MessageSquare, Phone, Share2, Star, Users } from "lucide-react";
import Link from "next/link"
import { Tour } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CallbackForm from "./callback-form";

interface TourDetailClientProps {
    tour: Tour
    similarTours: Tour[]
}

export default function TourDetailClient({ tour, similarTours }: TourDetailClientProps) {
    const [showInquiryForm, setShowInquiryForm] = useState(false)
    const [showCallbackForm, setShowCallbackForm] = useState(false)
    const [selectedDate, setSelectedDate] = useState("");
    const [guests, setGuests] = useState(2)
    return (
        <div>
            <div className="min-h-screen bg-gray-50">
                <div className="relative h-[500px] bg-gray-900">
                    <img
                        src={tour.image}
                        alt={tour.title}
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                    {tour.category}
                                </ span>
                                <div className="flex items-center text-white">
                                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
                                    <span className="font-semibold">{tour.rating}</span>
                                    <span className="ml-1">({tour.reviews} reviews)</span>
                                </div>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{tour.title}</h1>
                            <div className="flex flex-wrap items-center gap-6 text-white">
                                <div className="flex items-center">
                                    <MapPin className="h-5 w-5 mr-2"></MapPin>
                                    <span>{tour.destination}</span>
                                </div>
                                <div className="flex items-center">
                                    <Clock className="h-5 w-5 mr-2" />
                                    <span>{tour.duration}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <Card className="mb-8">
                                <CardContent className="p-6">
                                    <h2 className="text-2xl font-bold mb-4">Overview</h2>
                                    <p className="text-gray-700 leading-relaxed">{tour.description}</p>
                                </CardContent>
                            </Card>

                            <Card className="mb-8">
                                <CardContent className="p-6">
                                    <h2 className="text-2xl font-bold mb-4">Highlights</h2>
                                    <ul className="space-y-3">
                                        {tour.highlights.map((highlight, index) => (
                                            <li key={index} className="flex items-start">
                                                <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-700">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="mb-8" >
                                <CardContent className="p-6">
                                    <h2 className="text-2xl font-bold mb-4">What's Included</h2>
                                    <ul className="space-y-3">
                                        {tour.included.map((item, index) => (
                                            <li key={index} className="flex items-start">
                                                <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>

                            {tour.itinerary && (
                                <Card>
                                    <CardContent className="p-6">
                                        <h2 className="text-2xl font-bold mb-6">Itinerary</h2>
                                        <div className="space-y-6">
                                            {tour.itinerary.map((day) => (
                                                <div key={day.day} className="border-l-4 border-blue-600 pl-6" >
                                                    <h3 className="text-lg font-semibold mb-2">
                                                        Day {day.day}: {day.title}
                                                    </h3>
                                                    <p className="text-gray-600 mb-3">{day.description}</p>
                                                    <ul className="space-y-1">
                                                        {day.activities.map((activity, index) => (
                                                            <li key={index} className="text-sm text-gray-700 flex items-start">
                                                                <span className="mr-2">•</span>
                                                                <span>{activity}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>))}
                                        </div>
                                    </CardContent>
                                </Card>
                            )}
                        </div>
                        <div className="lg:col-span-1">
                            <Card className="sticky top-24">
                                <CardContent className="p-6">
                                    <div className="mb-6">
                                        <p className="text-sm text-gray-600 mb-2">Starting from</p>
                                        <p className="text-4xl font-bold text-blue-600">
                                            ₹{tour.price.toLocaleString()}
                                        </p>
                                        <p className="text-xs text-gray-600">per person</p>
                                    </div>
                                    <div className="space-y-4 mb-6">
                                        <div className="border-b pb-3">
                                            <label className="flex items-center text-gray-700 text-sm mb-2">
                                                <Calendar className="h-4 w-4 mr-2" />
                                                <span>Select Date</span>
                                            </label>
                                            <input
                                                type="date"
                                                value={selectedDate}
                                                onChange={(e) => setSelectedDate(e.target.value)}
                                                min={new Date().toISOString().split('T')[0]}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-d focus:outline-none focus:ring-2 focus: ring-blue-600 text-gray-900"
                                            />
                                        </div>
                                        <div className="border-b pb-3">
                                            <label className="flex items-center text-gray-700 text-sm mb-2">
                                                <Users className="h-4 w-4 mr-2" />
                                                <span>Guests</span>
                                            </label>
                                            <div className="flex items-center gap-3">
                                                <button
                                                    onClick={() => setGuests(Math.max(1, guests - 1))}
                                                    className="w-10 h-10 flex items-center justify-center border border-gray-380 rounded-md hover:bg-gray-50 text-gray-700 font-seminbold"
                                                >
                                                    -
                                                </button>
                                                <span className="text-lg font-semibold text-gray-900 min-w-(40px] text-center">{guests}</span>
                                                <button onClick={() =>
                                                    setGuests(Math.min(20, guests + 1))}
                                                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-d hover:bg-gray-50 text-gray-700 font-semibold">
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        {/* <Button
                                            className="w-full h-12 text-lg" onClick={() => setShowInquiryForm(true)}
                                        >
                                            <MessageSquare className="mr-2 h-5 w-5" />
                                            Send Inquiry
                                        </Button> */}
                                        <Button
                                            className="w-full h-12"
                                            onClick={() => setShowCallbackForm(true)}
                                        >
                                            <Phone className="mr-2 h-5 w-5" />
                                            Request Callback
                                        </Button>
                                        <Button variant="outline" className="w-full h-12">
                                            <Heart className="mr-2 h-5 w-5" />
                                            Add to Wishlist </Button>
                                    </ div>
                                    {/* <div className="mt-6 pt-6 border-t">
                                        <Button variant="ghost" className="w-full justify-center">
                                            <Share2 className="mr-2 h-5 w-5" />
                                            Share this tour
                                        </Button>
                                    </ div> */}
                                    <div className="mt-6 pt-6 border-t">
                                        <h3 className="font-semibold mb-3">Need Help?</h3>
                                        <p className="text-sm text-gray-600 mb-3">
                                            Our travel experts are here to assist you </p>
                                        <div
                                            className="space-y-2">
                                            <a href="tel: +911234567890" className="flex items-center text-sm text-blue-600 hover: underline">
                                                <Phone className="h-4 w-4 mr-2" />
                                                +911234567890
                                            </a>
                                            <a href="mailto:info@adventuretravel.com" className="flex items-center text-sm text-blue-600 hover: underline">
                                                <MessageSquare className="h-4 w-4 mr-2" /> vacationinpocket@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                    <div className="mt-16">
                        <h2 className="text-3xl font-bold mb-8">Similar Tours</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {similarTours.map((similarTour) => (
                                <Link key={similarTour.id} href={`/tours/${similarTour.id}`}>
                                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group">
                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src={similarTour.image}
                                                alt={similarTour.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                            />
                                        </div>
                                        <CardContent className="p-4">
                                            <h3 className="font-bold text-lg mb-2 line-clamp-2">{similarTour.title}</h3>
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm text-gray-600">{similarTour.duration}</span>
                                                <span className="font-bold text-blue-600">
                                                    ₹{similarTour.price.toLocaleString()}
                                                </ span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* {showInquiryForm && (
                <InquiryForm
                    tourTitle={tour.title}
                    tourPrice={tour.price}
                    onClose={() => setShowInquiryForm(false)}
                />
            )} */}

            {showCallbackForm && (
                <CallbackForm
                    tourTitle={tour.title}
                    onClose={() => setShowCallbackForm(false)}
                />
            )}
        </div>
    )
}
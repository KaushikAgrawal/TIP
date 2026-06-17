"use client"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { Menu, X, Search, User, Heart, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"

import { useAuth } from "@/contexts/auth-context"

import AuthModal from "@/components/auth-modal"

import UserMenu from "@/components/user-menu"


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [showAuthModal, setShowAuthModal] = useState(false)
    const router = useRouter()
    const { isAuthenticated } = useAuth()
    return (
        <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        < Link href="/" className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">TIP</span>
                            </div>
                            <span className="text-xl font-bold text-gray-900 hidden sm:block">
                                Travel In Pocket </ span>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        < Link href="/destinations" className="text-gray-700 hover:text-blue-600 transition">
                            Destinations
                        </Link>
                        {/* < Link href="/tours" className="text-gray-700 hover:text-blue-600 transition">
                            Tours
                        </Link> */}
                        <Link href="/activities" className="text-gray-700 hover:text-blue-600 transition">
                            Activities
                        </Link>
                        <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
                            About
                        </Link>
                        <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">
                            Contact
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        < Button
                            variant="ghost"
                            size="icon"
                            onClick={() => router.push('/tours')}
                            title="Search Tours">
                            <Search className="h-5 w-5" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => alert('Wishlist coming soon')}
                            title="Wishlist">
                            <Heart className="h-5 w-5" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => alert('Cart coming soon')}
                            title="Cart">
                            <ShoppingCart className="h-5 w-5" />
                        </Button>
                        {isAuthenticated ? (
                            <UserMenu />
                        ) : (
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setShowAuthModal(true)}
                                title="Login">
                                <User className="h-5 w-5" />
                            </Button>
                        )}
                    </div>
                    <div className="md:hidden">
                        <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden border-t">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link href="/destinations" className="block px-3 py-2 rounded-ml text-gray-780 hover:bg-gray-100">
                            Destinations
                        </Link>
                        <Link href="/tours"
                            className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                            Tours
                        </Link>
                        <Link
                            href="/activities"
                            className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                            Activities
                        </Link>
                        <Link href="/about"
                            className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                            About
                        </Link>
                        <Link href="/contact"
                            className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                            Contact
                        </Link>
                    </div>
                </div >
            )}
            <AuthModal isOpen={showAuthModal} onClose={()=>setShowAuthModal(false)} />
        </nav>
    )
}

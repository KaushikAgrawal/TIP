"use client"
import { useState } from "react"
import { User, LogOut, Heart, ShoppingCart, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth-context"
export default function UserMenu() {
    const [isOpen, setIsOpen] = useState(false)
    const { user, logout } = useAuth()
    if (!user) return null
    return (
        <div className="relative">
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                title="Account">
                <User className="h-5 w-5" />
            </Button>
            {isOpen && (
                <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border z-50">
                        <div className="p-4 border-b">
                            <p className="font-semibold text-gray-900">{user.name}</p>
                            <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                        <div className="py-2">
                            <button className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center text-gray-700">
                                <Heart className="h-4 w-4 mr-3">My Wishlist</Heart>
                            </button>
                            <button className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center text-gray-700">
                                <ShoppingCart className="h-4 w-4 mr-3">My Bookings</ShoppingCart>
                            </button>
                            <button className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center text-gray-700">
                                <Settings className="h-4 w-4 mr-3">Settings</Settings>
                            </button>
                        </div>
                        <div className="border-t p-2">
                            <button
                                onClick={() => {
                                    logout()
                                    setIsOpen(false)
                                }}
                                className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center text-red-600 font-medium"
                                >
                                    <LogOut className="h-4 w-4 mr-3" />Logout
                                </button>
                        </div>
                        </div>

                    </>
            )}
            </div>
    )}
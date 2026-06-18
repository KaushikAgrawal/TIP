import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">VIP</span>
                            </div>
                            <span className="text-xl font-bold text-white">Vacation In Pocket</span>
                        </div>
                        <p className="text-sm mb-4">
                            Your trusted partner for unforgettable travel experiences across the globe.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-blue-400 transition">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533" />
                                </svg>
                                insta link
                            </a>
                            <a href="#" className="hover:text-blue-400 transition">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205--012 3.584-.069 4.849-.149 3.22" />
                                    <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.16252.759 6.163 6.162 6.163 6.162-2.759 6.162-6. 163C0-3.403-2.759-6.162-6.162-6.162zmO 10.162c-2.209" />
                                </svg>
                                other social media
                            </a>
                            {/* <a href="#" className="hover:text-blue-400 transition">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 0 00-8 384 4.482C7.69 8.095" />
                                </svg>
                            </a>
                            <a href="#" className="hover: text-blue-400 transition">
                                <svg className="h-S w-S" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 8.07 0 12 0 1" />
                                </svg>
                            </a> */}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="hover:text-blue-400 transition">
                                    About Us </Link>
                            </li>
                            <li>
                                <Link href="/destinations" className="hover:text-blue-400 transition">
                                    Destinations </Link>
                            </li>
                            <li>
                                <Link href="/tours" className="hover:text-blue-400 transition">
                                    Tours </Link>
                            </li>
                            <li>
                                <Link href="/activities" className="hover:text-blue-400 transition">
                                    Activities </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-blue-400 transition">
                                    Travel Blog </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
                        <ul className=" space-y-2">
                            <li>
                                <Link href="/contact" className="hover:text-blue-400 transition">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="hover:text-blue-400 transition">
                                    FAQ
                                </Link>
                            </li>
                            {/* <li>
                                <Link href="/terms" className="hover:text-blue-400 transition">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="hover: text-blue-400 transition">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/cancellation" className="hover: text-blue-400 transition">
                                    Cancellation Policy </Link>
                            </li> */}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold text-ly mb-4">Contact Info</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">
                                Address here
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 mr-2 flex-shrink-0" /> <span className="text-sm">+91 1234567890</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 mr-2 flex-shrink-g" />
                                <span className="text-sm">vacationinpocket@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Vacation In Pocket. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
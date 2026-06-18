"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Phone } from "lucide-react"
import { sendCallbackToWhatsApp } from "@/lib/whatsapp"

interface CallbackFormProps {
    tourTitle: string
    onClose: () => void
}

export default function CallbackForm({ tourTitle, onClose }: CallbackFormProps) {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        preferredTime: "anytime"
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Send callback request to WhatsApp

        sendCallbackToWhatsApp({
            name: formData.name,
            phone: formData.phone,
            tourName: tourTitle,
            preferredTime: formData.preferredTime
        })

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        console.log("Callback requested:", { ...formData, tourTitle })
        setIsSubmitting(false)
        setSubmitted(true)

        setTimeout(() => {
            setSubmitted(false)
            onClose()
        }, 3000)
    }

    if (submitted) {
        return (
            <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Phone className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Received! </h3>
                    <p className="text-gray-600">
                        Our travel expert will call you back within 30 minutes during business hours.
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-md w-full">
                <div className="p-6 border-b flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Request a Callback</h2>
                        <p className="text-sm text-gray-600 mt-1">We'll call you back shortly</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition">
                        <X className="h-6 w-6" />
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                        <p className="text-sm font-medium text-gray-900">{tourTitle}</p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Your Name *
                        </label>
                        <Input
                            type="text"
                            required
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb=2">
                            Phone Number *
                        </label>
                        <Input
                            type="tel"
                            required
                            placeholder="+91 1234567890"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Preferred Time </label>
                        <select
                            className="w-full px-3 py-2 border border-gray-300 rounded-d focus:out line-none focus: ring-2 focus: ring-blue-500"
                            value={formData.preferredTime}
                            onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        >
                            <option value="anytime">Anytime</option>
                            <option value="morning">Morning (9 AM - 12 PM) </option>
                            <option value="afternoon" > Afternoon(12 PM - 4 PM) </option >
                            <option value="evening" > Evening(4 PM - 8 PM)</option >
                        </select>
                    </div>
                    <Button type="submit"
                        className="w-full h-12 text-lg" disabled={isSubmitting}>
                        <Phone className="mr-2 h-5 w-5" />
                        {isSubmitting ? "Requesting..." : "Request Callback"}
                    </Button>
                    <p className="text-xs text-center text-gray-500" >
                        Our travel experts are available 9 AM - 8 PM (Mon-Sat)
                    </p>
                </form>
            </div>
        </div>
    )
}
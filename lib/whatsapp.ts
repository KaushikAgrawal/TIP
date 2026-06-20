// WhatsApp Business API Integration
// Your WhatsApp Business number (with country code, no * or spaces)
// Example: For +91 9876543210, use "919876543210"
export const WHATSAPP_NUMBER = "+918826609209" // Replace with your actual number:
/**
* Format inquiry data, for WhatsApp message
*/
export function chatOnMessage(): string {
    let message = `*Hi Vacation In Pocket! I would like to inquire for a tour*\n\n`
    return encodeURIComponent(message)
}

/** 
 *  Format callback request for WhatsApp message
*/

export function formatCallbackMessage(data: {
    name: string
    phone: string
    tourName: string
    preferredTime?: string
}): string {
    let message = `*Callback Request*\n\n`
    message += `*Tour:* ${data.tourName}\n\n`
    message += `*Name:* ${data.name}\n\n`
    message += `*Phone:* ${data.phone}\n`

    if (data.preferredTime) {
        message += `*Preferred Time:* ${data.preferredTime}\n`
    }

    message += `\n_Please call back at the earlies._`
    return encodeURIComponent(message)
}

/**
* Send message to WhatsApp
* Opens WhatsApp with pre-filled message
*/
export function sendToWhatsApp(message: string, phoneNumber: string = WHATSAPP_NUMBER): void {
    const whatsappUrl = `https://wa.me/${phoneNumber}/?text=${message}`
    window.open(whatsappUrl, '_blank')
}

/** 
    * Send inquiry to WhatsApp
*/
export function sendChatInquiryToWhatsApp(): void {
    const message = chatOnMessage()
    sendToWhatsApp(message)
}
/** 
 * Send callback request to WhatsApp
*/

export function sendCallbackToWhatsApp(data: {
    name: string
    phone: string
    tourName: string
    preferredTime?: string
}): void {
    const message = formatCallbackMessage(data)
    sendToWhatsApp(message)
}

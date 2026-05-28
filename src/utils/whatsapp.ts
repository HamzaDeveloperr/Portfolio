export const WHATSAPP_NUMBER = "923422072225";
export const BRAND_NAME = "SOCIAL DEV AGENCY";

export const formatWhatsAppMessage = (text: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

export const generateOrderMessage = (serviceTitle: string, description: string) => {
  return `Hello ${BRAND_NAME},\n\nI am interested in ordering the service: "${serviceTitle}"\n\nDescription: ${description}\n\nPlease provide more details.`;
};

export const generateContactMessage = (name: string, phone: string, email: string, message: string) => {
  return `Hello ${BRAND_NAME},\n\nNew Inquiry from Contact Form:\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage: ${message}`;
};

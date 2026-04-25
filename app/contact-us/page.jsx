import Image from "next/image"

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { MapPin, Phone, Mail, HelpCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function CustomerSupport() {
  return (
    <>
      <Navbar />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <h1 className="text-3xl font-medium text-gray-700 mb-8">Get In Touch</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-4">SEND US AN EMAIL</h2>
            <p className="mb-6 text-gray-600">
              Write us an e-mail via the form. Do you have questions about how we can help you? Send us an email and
              we&apos;ll get in touch shortly.
            </p>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-700">
                  Your name
                </label>
                <Input id="name" type="text" className="w-full border rounded-md" />
                {/* Legacy:
                <input
                  id="name"
                  type="text"
                  className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                /> */}
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-gray-700">
                  Your email
                </label>
                <Input id="email" type="email" className="w-full border rounded-md" />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 text-gray-700">
                  Subject
                </label>
                <Input id="subject" type="text" className="w-full border rounded-md" />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-gray-700">
                  Your message (optional)
                </label>
                <Textarea id="message" className="w-full border rounded-md h-32" />
              </div>

              <Button type="submit" className="bg-gray-200 hover:bg-gray-300 text-gray-800">
                SUBMIT
              </Button>
            </form>
          </div>

          {/* Map Section */}
          <div>
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-bold">HOW FIND US</h2>
              <Image
                src="/placeholder.svg?height=30&width=30"
                alt="Location Pin"
                width={30}
                height={30}
                className="ml-2"
              />
            </div>

            <div className="h-80 bg-gray-200 mb-6 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.3047490206344!2d77.19810867559805!3d28.647729175697364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d029f33fe3d89%3A0x589484570b8c96e4!2sJhandewalan%2C%20Delhi!5e0!3m2!1sen!2sin!4v1712229532112!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          {/* …the rest of your contact info and social icons stay unchanged … */}
        </div>
      </div>

      <Footer />
    </>
  )
}

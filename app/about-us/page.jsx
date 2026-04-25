import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Gift, Globe, Heart, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutUs() {
  return (
    <>
      <Navbar/>
      <div className="container mx-auto px-4 py-12">
        {/* Brand Name at the top */}
        {/* <div className="mb-12">
          <Link href="/" className="text-3xl font-bold">
            ZAX
          </Link>
        </div> */}

        {/* Hero Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">About ZAX</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            Redefining corporate gifting with thoughtful, personalized experiences that strengthen business relationships.
          </p>
          <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=400&width=1200" alt="ZAX Office" fill className="object-cover" priority />
          </div>
        </div>

        {/* Our Story Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2018, ZAX began with a simple observation: corporate gifting often felt impersonal and
                transactional. Our founder, Raza, experienced this firsthand as an executive receiving countless
                generic gift baskets that failed to make a meaningful impression.
              </p>
              <p>
                Raza envisioned a different approach—one where corporate gifts could tell a story, reflect shared values,
                and create lasting connections between businesses and their clients, partners, and employees.
              </p>
              <p>
                Today, ZAX has grown from a small startup to an industry leader in thoughtful corporate gifting solutions,
                maintaining our commitment to personalization and quality.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="ZAX Founding Story" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Our Mission & Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Mission & Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-background">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Thoughtfulness</h3>
                  <p className="text-muted-foreground">
                    We believe every gift should be chosen with care and consideration for the recipient, reflecting their
                    preferences and values.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                  <p className="text-muted-foreground">
                    We're committed to environmentally responsible practices, from sourcing eco-friendly products to
                    minimizing packaging waste.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Gift className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Quality</h3>
                  <p className="text-muted-foreground">
                    We partner with premium brands and artisans to ensure every gift reflects excellence and attention to
                    detail.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

      

        {/* Contact Section */}
        <div className="bg-muted rounded-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Ready to elevate your corporate gifting strategy? Our team is here to help you create meaningful
                connections through thoughtful gifts.
              </p>
              <div className="space-y-4">
               
                
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-primary" />
                  <span>inquiry.zax@gmail.com</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-4">Ready to get started?</h3>
              <p className="text-muted-foreground mb-6">
                Schedule a consultation with our gifting specialists to discuss your needs and discover how ZAX can help
                strengthen your business relationships.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="w-full sm:w-auto">
                  Schedule a Consultation
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  View Our Catalog <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Simple Copyright */}
        <div className="mt-20 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ZAX Gifting. All rights reserved.</p>
        </div>
      </div>
      <Footer/>
    </>
  )
}

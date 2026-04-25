import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FAQsPage() {
  return (
    <>
      <Navbar />
      <div className="container max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left">What is your return policy?</AccordionTrigger>
            <AccordionContent>
            No returns and only exchanges will be applicable on the orders which are placed during sale.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left">How long does shipping take?</AccordionTrigger>
            <AccordionContent>
              Standard shipping typically takes 3-5 to 1 week business days. 
            </AccordionContent>
          </AccordionItem>

        
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left">How can I track my order?</AccordionTrigger>
            <AccordionContent>
              Once your order ships, you'll receive a confirmation email with tracking information. You can also log into
              your account on our website to view your order status and tracking details.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left">Do you offer discounts for bulk orders?</AccordionTrigger>
            <AccordionContent>
              Yes, we offer volume discounts for bulk orders. Please contact our sales team at  <a href="sales@uzrindia.com" className="text-blue-600 underline ml-1">
                sales@uzrindia.com
              </a> for more
              information about bulk pricing.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="text-left">How do I contact customer support?</AccordionTrigger>
            <AccordionContent>
              Our customer support team is available Monday through Friday, 9am to 5pm IST.
              You can reach us by email at <a href="support@uzrindia.com" className="text-blue-600 underline ml-1">
                support@uzrindia.com
              </a>
              
            </AccordionContent>

          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger className="text-left">What payment methods do you accept?</AccordionTrigger>
            <AccordionContent>
              We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, UPI And Bank Transfer. We
              do not accept checks or money orders at this time.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <Footer />
    </>
  )
}

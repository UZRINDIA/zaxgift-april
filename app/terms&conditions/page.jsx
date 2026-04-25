
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const termsContent = [
  {
    id: "introduction",
    content:
      'These are the terms and conditions governing the use of this website and the agreement that operates between us and you (hereinafter, "the Terms"). These Terms set out the rights and obligations of all users (hereinafter, "You" / "your") and those of OUR COMPANY (hereinafter, "us" / "our" / "we" / "the Vendor") about the goods/services offered by us through this website www.yourcompany.com (hereinafter, collectively known as the "PRODUCTS/Services"). Before you click on the "Authorize Payment" button at the end of the ordering process, please carefully read these Terms and our Privacy Statement. By using this website or placing an order through it, You are consenting to be bound by these Terms and our Privacy Statement. If You do not agree to all of the Terms and the Privacy Statement, do not place an order.',
  },
  {
    id: "amendment-note",
    content: "These Terms may be subject to amendment, so You should carefully read them before placing any order.",
    isItalic: true,
  },
  {
    id: "contact-info",
    content:
      "If You have any questions about the Terms or the Privacy Policy, You may access our website or contact us through our contact web form. THE COMPANY is an Indian company with a registered office at ADDRESS LINE 1, ADDRESS LINE 2, CITY, STATE, PINCODE.",
  },
]



const termsSections = [

  {
    id: "use-of-website",
    title: "USE OF OUR WEBSITE",
    content:
      "These Terms are the only conditions that are applicable to the use of this website and they replace all other conditions, except with the express, prior written agreement of the Vendor. These Terms are important for both You and us as they have been designed to create a legally binding agreement between us, protecting your rights as a valued customer and our rights as a business. You agree that, by placing your order, You unreservedly accept these Terms, having read them.",
  },
  {
    id: "you-agree",
    title: "YOU AGREE THAT:",
    listItems: [
      "You may only use the website to make legitimate inquiries or orders.",
      "You will not make any speculative, false, or fraudulent orders. If we are reasonably of the opinion that such an order has been made, we shall be entitled to cancel the order and inform the relevant authorities.",
      "You also undertake to provide correct and accurate e-mail, postal, and/or other contact details to us and acknowledge that we may use these details to contact You in the event that this should prove necessary (see our Privacy Policy statement).",
      "If You do not give us all of the information that we need, we may not be able to complete your order.",
      "By placing an order through the website, You warrant that You are at least 18 years old and are legally capable of entering into binding contracts.",
    ],
  },
  {
    id: "availability-service",
    title: "AVAILABILITY OF SERVICE",
    content: "The items we offer on this website are available for worldwide shipping.",
  },
  {
    id: "contract",
    title: "HOW THE CONTRACT IS FORMED",
    content:
      "The information set out in the Terms and the detail contained on this website do not constitute an offer for sale but rather an invitation to treat. No contract in respect of any products shall exist between You and us until your order has been accepted by us. If we do not accept your order and funds have already been deducted from your account, these will be fully refunded. The brand (zax) holds the authority to verify the authenticity of an order by call or email. If there is any dissatisfaction, authenticity concern, or no response from the customer regarding the placed order, the brand (zax) holds the right to cancel the order.",
  },
  {
    id: "availability-products",
    title: "AVAILABILITY OF PRODUCTS",
    content:
      "All orders for products are subject to availability and in this regard, in the event of supply difficulties or because products are no longer in stock, we reserve the right to process your cancellation and initiate a refund for the prepaid orders.",
  },
  {
    id: "refusal-of-order",
    title: "REFUSAL OF ORDER",
    content:
      "We reserve the right to withdraw any products from this website at any time and/or remove or edit any materials or content on this website. Whilst we will make our best efforts to always process all the orders, there may be exceptional circumstances that mean that we may need to refuse to process an order after we have sent You an Order Confirmation, which we reserve the right to do at any time, at our sole discretion.",
  },
  {
    id: "right-to-cancel",
    title: "YOUR RIGHT TO CANCEL",
    content:
      "If You are contracting as a consumer, You may cancel a Contract at any time before the dispatch of goods. In this case, You shall receive a full refund of the price paid for the products by our Returns Policy. Your right to cancel a Contract only applies to products that are returned in the same condition as You received them.",
  },
  {
    id: "risk-and-title",
    title: "RISK AND TITLE",
    content:
      "The Products will be at your risk from the time of delivery. Ownership of the products will only pass to You when we receive full payment of all sums due in respect of the products, including delivery charges, or upon delivery, whichever is later.",
  },
  {
    id: "delivery",
    title: "DELIVERY",
    content:
      "Subject to availability, and unless there are any exceptional circumstances, we will endeavor to fulfill your order for product(s) listed in the Order Confirmation by the delivery date set out in the Order Confirmation.",
  },
 
];
const accordionData = [
  {
    title: "Shipping Policy",
    content: `
          The orders for the user are shipped through registered domestic courier companies and/or speed post only. Orders are shipped within 2 to 5 days from the date of the order and/or payment... (truncated for brevity)
          `
  },
  {
    title: "Detailed Transaction History",
    content: `
          Your "My Account" page will display a detailed transaction history, providing transparency on points earned and redeemed.
          `
  },
  {
    title: "Miscellaneous",
    content: `
          The company reserves the right to modify or terminate the Loyalty Points Program at any time without prior notice...
          `
  },
  {
    title: "Returns Policy",
    content: `
          If you wish to return a product(s) within the period of 2 days post-delivery, you can place a return order for the products... (truncated)
          `
  },
  {
    title: "Liability and Disclaimers",
    content: `
          Our liability in connection with any Product purchased through our website is strictly limited to the purchase price of that Product.
Nothing in these Terms shall exclude or limit in any way our liability:
For death or personal injury caused by our negligence;
For fraud or fraudulent misrepresentation;
For any matter for which it would be illegal or unlawful for us to exclude or limit, or attempt to exclude or limit, our liability.
Subject to the foregoing paragraph to the fullest extent permitted by law, and unless otherwise stated in these Terms, we accept no liability for indirect losses that happen as a side effect of the main loss or damage however arising and whether caused by tort (including negligence), breach of contract or otherwise, even if foreseeable, including (without limit) for any:
* Loss of income or revenue;
* Loss of business;
* Loss of profits or contracts;
* Loss of anticipated savings;
* Loss of data; and
* Waste of management or office time.
Due to the open nature of this website and the potential for errors in the storage and transmission of digital information, we do not warrant the accuracy and security of information transmitted to or obtained from this website unless otherwise expressly set out on this website.
Wrong product handover in return: Action will be taken on the basis of package opening footage & we will be returning the same product we have received. In such cases, the seller will not be liable for any loss & no action will be made if the customer fails to raise the query within 7 days of pickup.
All product descriptions, information, and materials posted on this website are provided "as is" and without warranties express, implied, or otherwise howsoever arising.
To the fullest extent permissible pursuant to law, but without excluding anything that may not lawfully be excluded in the case of consumers, we disclaim all other warranties of any kind.
Nothing in this Clause will affect your statutory rights as a consumer, or your Contract cancellation rights.
You acknowledge and agree that all copyright, trade marks and all other intellectual property rights in all material or content supplied as part of the website shall remain at all times vested in us or in our licensors. You are permitted to use this material only as expressly authorized by us or our licensors. This does not prevent You from using this website to the extent necessary to make a copy of any order or Contract details.
Written Communication
Applicable laws require that some of the information or communications we send to You should be in writing. When using our site, You accept that communication with us will be mainly electronic. We will contact You by e-mail or provide You with information by posting notices on our website. For contractual purposes, You agree to this electronic means of communication and You acknowledge that all contracts, notices, information, and other communications that we provide to You electronically comply with any legal requirement that such communications be in writing. This condition does not affect your statutory rights.

          `
  },
  {
    title: "Transfer of Rights and Obligations",
    content: `
        The Contract between You and us is binding on You and us and on our respective successors and assigns.
You may not transfer, assign, charge, or otherwise dispose of a Contract, or any of your rights or obligations arising under it, without our prior written consent.
We may transfer, assign, charge, sub-contract, or otherwise dispose of a Contract, or any of our rights or obligations arising under it, at any time during the term of the Contract. For the avoidance of doubt, any such transfer, assignment, charge, or other disposition will not affect your statutory rights as a consumer or cancel, reduce, or otherwise limit any warranty or guarantee which may have been provided by us to You, whether express or implied.

          `
  },
  {
    title: "Events Outside Our Control",
    content: `
          We will not be liable or responsible for any failure to perform, or delay in performance of any of our obligations under a Contract that is caused by events outside our reasonable control (“Force Majeure Event”).
A Force Majeure Event shall include any act, event, non-happening, omission, or accident beyond our reasonable control and shall include in particular (without limitation) the following:
Strikes, lock-outs, or other industrial action.
Civil commotion, riot, invasion, terrorist attack or threat of terrorist attack, war (whether declared or not), or threat or preparation for war.
Fire, explosion, storm, flood, earthquake, subsidence, epidemic, or other natural disaster.
Impossibility of the use of railways, shipping, aircraft, motor transport,  or other means of public or private transport.
Impossibility of the use of public or private telecommunications networks.
The acts, decrees, legislation, regulations, or restrictions of any government.
Any shipping, postal, or other relevant transport strike, failure, or accident.
Our performance under any Contract is deemed to be suspended for the period that the Force Majeure Event continues, and we will have an extension of time for performance for the duration of that period. We will use our reasonable endeavors to bring the Force Majeure Event to a close or to find a solution by which our obligations under the Contract may be performed despite the Force Majeure Event.

          `
  },
  {
    title: "Serviceability",
    content: `
         If any of these Terms or any provisions of a Contract are determined by any competent authority to be invalid, unlawful, or unenforceable to any extent, such term, condition, or provision will to that extent be severed from the remaining terms, conditions and provisions which will continue to be valid to the fullest extent permitted by law.

          `
  },
  {
    title: "Entire Agreement",
    content: `
          These Terms and any document expressly referred to in them represent the entire agreement between You and us about the subject matter of any Contract and supersede any prior agreement, understanding or arrangement between You and us, whether oral or in writing.
Both You and we acknowledge that, in entering this Contract, neither You nor us has relied on any representation, undertaking, or promise given by the other or be implied from anything said or written in negotiations between You and us prior to such Contract except as expressly stated in these Terms.
Neither You nor us shall have any remedy in respect of any untrue statement made by the other, whether orally or in writing, prior to the date of any Contract (unless such untrue statement was made fraudulently) and the other party´s only remedy shall be for breach of contract as provided in these Terms.

          `
  },
  {
    title: "Our Right to Vary These Terms",
    content: `
         We have the right to revise and amend these Terms from time to time.
You will be subject to the policies and terms in force at the time that You order products from us unless any change to those policies, Terms/Privacy Statement is required to be made by law or governmental authority (in which case it will apply to orders previously placed by You).

          `
  },
  {
    title: "Law and Jurisdiction",
    content: `
          Contracts for the purchase of products through our site will be governed by Indian law.
Any dispute arising from, or related to, such Contracts shall be subject to the non-exclusive jurisdiction of the Indian courts.
If You are contracting as a consumer, nothing in this clause will affect your statutory rights as such.

          `
  },
  {
    title: "Feedback",
    content: `
          We welcome your comments and feedback. Please send all feedback and comments to us via our Feedback form.
          `
  },
  {
    title: "Marketing Communication",
    content: "Giving acceptance for the newsletter subscription at the checkout page entitles us to send all zax Promotional content to the registered users like newsletters, SMS, emails, WhatsApp, etc."
  }
];





export default function TermsAndConditions() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-red-50">
        <main className="container mx-auto py-8 px-4 max-w-4xl">
          <h1 className="text-2xl font-semibold text-center mb-8">Our Terms and Conditions</h1>

          <div className="space-y-6 text-gray-700">
            {/* Terms sections */}
            {termsSections.map((section) => (
              <div key={section.id}>
                <h2 className="text-xl font-semibold mt-8 mb-4 uppercase">{section.title}</h2>

                {section.content && <p className="text-justify">{section.content}</p>}

                {section.listItems && (
                  <ul className="list-disc pl-5 space-y-3">
                    {section.listItems.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Accordion section */}
            <div className="mt-10">
              {accordionData.map((item, index) => (
                <details key={index} className="border rounded-md mb-4">
                  <summary className="cursor-pointer p-4 bg-white font-medium text-lg">{item.title}</summary>
                  <div className="p-4 bg-gray-100 whitespace-pre-line">{item.content}</div>
                </details>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}



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
            "The information set out in the Terms and the detail contained on this website do not constitute an offer for sale but rather an invitation to treat. No contract in respect of any products shall exist between You and us until your order has been accepted by us. If we do not accept your order and funds have already been deducted from your account, these will be fully refunded. The brand (UZR) holds the authority to verify the authenticity of an order by call or email. If there is any dissatisfaction, authenticity concern, or no response from the customer regarding the placed order, the brand (UZR) holds the right to cancel the order.",
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
        {
          id: "unable-to-deliver",
          title: "UNABLE TO DELIVER",
          content:
            "If we are unable to deliver the goods to you after three attempts, we will contact you for further instructions and may charge you additional delivery costs.",
        },
        {
            id: "unable_to_deliver",
            title: "UNABLE TO DELIVER",
            description: "If delivery attempts fail three times despite contact for rescheduling, the parcel will be returned to origin (RTO) and a credit amount will be issued to The UZR wallet. This applies to prepaid orders only. OTP-verified RTOs will not get shipping refunds."
          },
          {
            id: "merchandise_related",
            title: "MERCHANDISE RELATED",
            description: "For any manufacturing defects, contact us within 2 days of delivery. Issues raised beyond this period will be subjective."
          },
          {
            id: "price_and_payment",
            title: "PRICE AND PAYMENT",
            description: "Prices on the website are accurate but may contain errors. If an error is found, we will notify you to confirm the correct price or cancel the order. Refunds for canceled orders will be issued to The UZR wallet only. Taxes are included in product prices. Bulk or high-value orders may be declined.",
            notes: [
              "If it’s a prepaid order, refunds will be processed to the original payment source.",
              "For COD orders, bank details need to be provided for refunds.",
              "Payment failure notifications will be sent via email.",
              "In case of heavy delays, contact customer support at support@zaxgift.in."
            ]
          },
          {
            id: "checkout_process",
            title: "CHECKOUT PROCESS",
            steps: [
              "Register/Login",
              "Click the 'CART' button",
              "Click 'Checkout'",
              "Fill in or verify details",
              "Enter payment details",
              "Click 'Authorize Payment'",
              "Confirmation will be sent via email/SMS"
            ],
            notes: "Payment can be made via Indian cards, UZR vouchers, or gift cards. Payments are subject to validation and authorization."
          },
          {
            id: "loyalty_points_program",
            title: "LOYALTY POINTS PROGRAM",
            details: [
              { point: "Eligibility", description: "Only ZAX account holders are eligible. 1 point = 1 INR. 6% of the total bill amount is earned as points." },
              { point: "Gift Card Purchases", description: "Points are awarded for buying gift cards but not for redeeming them." },
              { point: "Accessibility", description: "Points are visible but accessible only after the return period. They are non-transferable and cannot be exchanged for cash." },
              { point: "Redemption", description: "Online points can be redeemed in-store, and offline points online. Points apply only to full-price products." },
              { point: "Validity", description: "Online points are valid for 60 days; offline points for 1 year." },
              { point: "Transaction History", description: "A detailed transaction history is available in 'My Account'." },
              { point: "Modification Rights", description: "The company may modify or terminate the program without notice." }
            ]
          },
          {
            id: "returns_policy",
            title: "RETURNS POLICY",
            description: "Products can be returned within 2 days post-delivery. Self-shipping is allowed if the provided pin code is unserviceable. Shipping costs will be refunded upon sharing the courier slip. Exchanges depend on size availability. Sale items are non-returnable but exchangeable.",
            refund: "Refunds are processed within 3 days of return pick-up and take 7-10 working days to reflect in the chosen mode.",
            defective: "Defective or incorrect products will be refunded."
          }
          
      ];
      

  export default function TermsAndConditions () {
  return (
   
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
            </div>
          </main>
        </div>
      );
    }
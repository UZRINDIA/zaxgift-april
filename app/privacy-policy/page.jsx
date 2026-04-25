export default function PrivacyPolicy() {
  const privacyContent = [
    {
      title: "OUR WEBSITE ADDRESS",
      content: "https://ZAXGIFT.IN",
    },
    {
      title: "PRIVACY POLICY",
      content: "At ZAX, we are committed to protecting your privacy and information.",
    },
    {
      title: "WEBSITE PRIVACY POLICY STATEMENT",
      content:
        "It is the policy of ZAX to act in accordance with current legislation and to meet the best practices on the Internet. Our aim is to be responsible, relevant, and secure when using your data.",
    },
    {
      title: "DATA PROTECTION",
      content:
        "We never give out any of your personal information to third parties, such as your name, postcode, email address, etc. If we feel there might be something of interest or use to you, we will inform you ourselves using the details you have provided. We do not log personal data via cookies, nor do we link any of your personal data with third parties to build customer demographics.",
    },
    {
      title: "DATA USAGE",
      content:
        "We collect data for the following purposes: technical administration of the website, enhancing your experience of the site, customer service, and ZAX promotion. If we wish to use your personal data for any new purposes, we will ask for your consent in advance.",
    },
    {
      title: "DATA SHARING",
      content:
        "We reserve the right to share your personal information if we are legally required to do so and to enforce our terms and conditions. This includes exchanging information with organizations for fraud and credit risk reduction.",
    },
    {
      title: "DATA SECURITY",
      content:
        "Unfortunately, no data transmission over the Internet is 100% secure. While we try to protect your personal information, ZAX cannot guarantee the security of any information you transmit to us, and you do so at your own risk.",
    },
    {
      title: "UPDATING OR REMOVING YOUR INFORMATION",
      content:
        "If at any time you wish to be completely removed from all our systems, or if you want to update any personal data we have about you or your business, please contact us by any means.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto py-8 px-4 max-w-4xl">
        <h1 className="text-2xl font-semibold text-center mb-8">Privacy Policy</h1>

        <div className="space-y-6 text-gray-700">
          {privacyContent.map((section, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-xl font-semibold mt-8 mb-2 uppercase">
                {section.title}
              </h2>
              <p className="text-justify">{section.content}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

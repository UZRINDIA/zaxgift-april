import { Outfit } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";
const outfit = Outfit({ subsets: ['latin'], weight: ["300", "400", "500"] })

export const metadata = {
  title: "ZAX-GIFT",
  description: " Brands online Clothing Store ",
};

export default function RootLayout({ children }) {
  return (
    
      <html lang="en">
       <body className={`${outfit.className} antialiased text-gray-700 overflow-x-hidden`}>
          <Toaster />
          <AppContextProvider>
            {children}
          </AppContextProvider>
        </body>
      </html>
    
  );
}

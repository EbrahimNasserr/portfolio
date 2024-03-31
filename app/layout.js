import { Hedvig_Letters_Serif } from "next/font/google";
import "./globals.css";
import Header from "./_components/header/Header";
import Footer from "./_components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const hedvig = Hedvig_Letters_Serif({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Ebrahim Naaser",
    template: "Ebrahim Naaser | %s",
  },
  description: "Front-end developer with a focus on building visually stunning and user-friendly websites. Driven to deliver engaging userexperiences and a strong attention to detail in all projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${hedvig.className}`}>
        <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

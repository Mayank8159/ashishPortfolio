import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata = {
  title: "Ashish Sharma | Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black min-h-screen font-sans antialiased flex flex-col">
        
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main className="flex-1 max-w-6xl mx-auto px-4 py-8 w-full">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}

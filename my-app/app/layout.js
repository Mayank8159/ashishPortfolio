// Your existing RootLayout.jsx is fine:

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

// ...

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black min-h-screen font-sans antialiased flex flex-col">
        {/* The 'font-sans' class here is now redundant but harmless, 
           as the 'font-family' property is explicitly set on the body in globals.css. */}
        
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
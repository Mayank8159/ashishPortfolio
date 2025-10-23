// app/layout.js (or pages/_app.js if using Pages Router)
import { Archivo } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';

// Load Archivo font with CSS variable
const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={archivo.variable}>
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
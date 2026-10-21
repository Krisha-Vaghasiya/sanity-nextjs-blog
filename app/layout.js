import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "My Blog Website",
  description: "A modern blog website built with Next.js and Sanity CMS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
} 
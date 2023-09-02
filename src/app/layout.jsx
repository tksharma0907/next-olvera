import Footer from "./_components/Footer";
import Header from "./_components/Header";
import {
  poppins,
  montserrat,
  jakarta,
  heebo,
  montserratSimp,
  archivo,
  oswald,
} from "./_lib/font";
import "./globals.css";

export const metadata = {
  title: "Olvera",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${montserrat.variable} ${jakarta.variable} ${heebo.variable} ${montserratSimp.variable} ${archivo.variable} ${oswald.variable}`}
    >
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

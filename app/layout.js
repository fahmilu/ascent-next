import { Poppins, Open_Sans } from "next/font/google";
import "../public/styles/global.scss";
import { Header, Footer } from "@/components/Partials";
import AosInit from "@/components/Aos";
const poppins = Poppins({
  variable: "--font-poppins",
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
});

export const metadata = {
  title: "Ascent",
  description: "Ascent",
};

const navigation = [
  { name: 'Our Portfolio', href: '/portfolio' },
  { name: 'Our Team', href: '/team' },
  { name: 'News', href: '/news' },
  { name: 'Partner with Us', href: '/contact' },
];


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AosInit />
      <body className={`${poppins.variable} ${openSans.variable} antialiased`} >
        <Header navigation={navigation} />
        <div className={`wrapper`}>
          {children}
        </div>
        <Footer navigation={navigation} />
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Anton, Poppins } from 'next/font/google';
import './globals.css';
import Header from './components/header';
import Footer from './components/footer';

const anton = Anton({ subsets: ['latin'], weight: ['400'] });

const poppins = Poppins({ subsets: ['latin'], weight: ['100', 
  '200',
  '300',
  '400', 
  '500',
  '600',
  '700',
  '800',
  '900',
] });

export const metadata: Metadata = {
  title: 'Bulldog Gym',
  description: 'Gym website created with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${poppins.className} bg-black text-gray-50 text-opacity-90 relative tracking-widest`}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
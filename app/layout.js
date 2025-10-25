import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';
import './style/main.css';

export const metadata = {
  title: "Melora Play School | Nurturing Young Minds",
  description: "Premier play school in Gurgaon offering quality early childhood education",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head ><title></title></head>
        <body>
        <Header />
        <main>{children}</main>
        <Footer />
        </body>
        </html>
    );
}

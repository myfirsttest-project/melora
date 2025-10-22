import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
    title: 'Melora Kindergarten',
    description: 'Your site description here',
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

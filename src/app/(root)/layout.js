import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";

export default function HomeLayout({ children }) {
  return (
    <section className="overflow-x-hidden">
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}

import GradientHero from "@/components/hero";
import Feature from "@/components/features";
import ContactUs from "@/components/contact";
import Pricing from "@/components/pricing";
import Faq3 from "@/components/FAQs";
import CTA from "@/components/CTA";
import Footer from "@/components/footer";

export default function Home() {
  return (
   <div>
    <GradientHero />
    <Feature />
    {/* <Pricing /> */}
    <CTA />
    <Footer />
   </div>
  );
}

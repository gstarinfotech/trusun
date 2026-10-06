import Navbar from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";
import AboutStats from "@/components/AboutStats";
import OurTeam from "@/components/OurTeam";
import HowItWorks from "@/components/HowItWorks";
import CustomerFeedback from "@/components/CustomerFeedback";
import Footer from "@/components/Footer";
import AboutFounder from "@/components/AboutFounder";

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main>
                <AboutHero />
                <AboutStats />
                <AboutFounder />
                <OurTeam />
                <HowItWorks />
                <CustomerFeedback />
            </main>
            <Footer />
        </>
    );
}
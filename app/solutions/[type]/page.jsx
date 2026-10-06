import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SolutionPage from "@/components/solutions/SolutionPage";

export function generateStaticParams() {
    return [
        { type: "homes" },
        { type: "commercial" },
        { type: "housing-societies" },
    ];
}

export default async function Page({ params }) {
    const { type } = await params;

    const normalizedType =
        type === "housing-societies"
            ? "housingSocieties"
            : type;

    return (
        <>
            <Navbar />
            <main>
                <SolutionPage type={normalizedType} />
            </main>
            <Footer />
        </>
    );
}
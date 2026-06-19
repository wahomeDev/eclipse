import Navbar from "@/components/layout/Navbar";
import MarketSection from "@/components/trading/MarketSection";
import AnalysisSection from "@/components/analysis/AnalysisSection";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto p-6">

    <Navbar />

    <MarketSection />

     <AnalysisSection />
     
    </main>
  );
}
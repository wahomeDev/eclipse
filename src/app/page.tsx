import Navbar from "@/components/layout/Navbar";
import MarketSection from "@/components/trading/MarketSection";
import AnalysisSection from "@/components/analysis/AnalysisSection";
import MarketStrip from "@/components/trading/MarketStrip";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto p-6">

    <Navbar />

    <MarketSection />

     <AnalysisSection />

      <MarketStrip />

    </main>
  );
}
<div style={{ height: "1500px" }}></div>
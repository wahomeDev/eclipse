import InstrumentInput from "./InstrumentInput";
import TradingViewWidget from "./TradingViewWidget";
import IndicatorChips from "./IndicatorChips";

export default function MarketSection() {
  return (
    <section className="bg-[#0d1117] border border-gray-800 rounded-xl p-6 mt-6">

      <h2 className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-6">
        Live Market Reference
      </h2>

      <InstrumentInput />

      <IndicatorChips />

      <TradingViewWidget />

    </section>
  );
}
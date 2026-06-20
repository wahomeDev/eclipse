import SymbolInput from "./SymbolInput";
import IndicatorToggle from "./IndicatorToggle";
import MarketChart from "./MarketChart";
import LayoutLoader from "./LayoutLoader";

export default function MarketStrip() {
  return (
    <section>
      <h2>Live Market Reference</h2>

      <SymbolInput />

      <IndicatorToggle />

      <MarketChart />

      <LayoutLoader />
    </section>
  );
}
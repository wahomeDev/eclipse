const indicators = [
  "MA",
  "RSI",
  "MACD",
  "Bollinger",
  "Volume",
];

export default function IndicatorChips() {
  return (
    <div className="flex flex-wrap gap-3 mt-5">
      {indicators.map((indicator) => (
        <button
          key={indicator}
          className="rounded-full border border-gray-700 px-5 py-2 text-sm text-gray-300 transition hover:border-amber-500 hover:text-amber-400"
        >
          {indicator}
        </button>
      ))}
    </div>
  );
}
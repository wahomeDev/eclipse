export default function InstrumentInput() {
  return (
    <div className="flex flex-wrap gap-4 items-end">

      <div className="flex-1 min-w-[250px]">

        <label className="block text-sm text-gray-400 mb-2">
          Instrument
        </label>

        <input
          type="text"
          defaultValue="GBPJPY"
          placeholder="e.g. GBPJPY"
          className="w-full rounded-lg border border-gray-700 bg-[#070B14] px-4 py-3 text-white outline-none focus:border-amber-500"
        />

      </div>

      <button
        className="rounded-lg bg-amber-500 px-6 py-3 font-semibold text-black hover:bg-amber-400"
      >
        Load Live Chart
      </button>

      <button
        className="rounded-lg border border-gray-700 px-6 py-3 hover:border-amber-500"
      >
        Open TradingView ↗
      </button>

    </div>
  );
}
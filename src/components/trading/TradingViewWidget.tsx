export default function TradingViewWidget() {
  return (
    <div className="mt-6 h-[620px] rounded-xl border border-gray-800 overflow-hidden bg-[#0b111b]">

      <iframe
        title="TradingView"
        className="w-full h-full"
        src="https://s.tradingview.com/widgetembed/?symbol=OANDA:GBPJPY&interval=240&theme=dark&style=1&toolbarbg=0B111B&hide_top_toolbar=0&saveimage=1"
      />

    </div>
  );
}
"use client";

import { useEffect } from "react";

export default function MarketChart() {

  useEffect(() => {

    const script = document.createElement("script");

    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";

    script.async = true;

    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: "OANDA:GBPJPY",
      interval: "240",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      allow_symbol_change: true,
      support_host: "https://www.tradingview.com",
    });

    const container = document.getElementById("tv-chart");

    if (container) {
      container.innerHTML = "";
      container.appendChild(script);
    }

  }, []);

  return (
    <div
      id="tv-chart"
      className="mt-6 h-[600px] w-full overflow-hidden rounded-xl border border-gray-800"
    />
  );
}
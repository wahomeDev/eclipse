export default function MarketStrip() {
  return (
    <section className="ecl-section">

      <div className="ecl-section-label">
  Live Market Reference
</div>

<div className="ecl-row">

  <div className="ecl-field ecl-symbol-field">

    <label>Instrument</label>

    <input
      className="ecl-input"
      placeholder="e.g. GBPJPY, XAUUSD, TSLA"
      defaultValue="GBPJPY"
    />

  </div>

  <div className="ecl-field">

    <button className="ecl-btn">
      Load Live Chart
    </button>

  </div>

  <div className="ecl-field">

    <button className="ecl-btn-ghost">
      Open TradingView
    </button>

  </div>

</div>

    </section>
  );
}
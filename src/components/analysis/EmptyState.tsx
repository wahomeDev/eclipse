export default function EmptyState() {
  return (
    <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-gray-700 bg-[#070B14] p-8 text-center text-gray-500">
      No analysis yet.

      <br />
      <br />

      Upload a chart and click
      <strong className="ml-1">
        Run Confluence Analysis
      </strong>
      to see trend, support, resistance, news alignment and trade quality.
    </div>
  );
}
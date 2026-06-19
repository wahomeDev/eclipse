import EmptyState from "./EmptyState";

export default function ResultsPanel() {
  return (
    <div className="h-[420px] rounded-xl border border-gray-800 bg-[#0b111b] p-5">
      <EmptyState />
    </div>
  );
}
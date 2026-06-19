"use client";

interface Props {
  disabled: boolean;
  loading: boolean;
  onAnalyze: () => void;
}

export default function AnalyzeButton({
  disabled,
  loading,
  onAnalyze,
}: Props) {
  return (
    <button
      disabled={disabled || loading}
      onClick={onAnalyze}
      className="mt-5 w-full rounded-lg bg-amber-500 py-3 font-semibold text-black disabled:cursor-not-allowed disabled:opacity-40 hover:bg-amber-400"
    >
      {loading ? "Analyzing..." : "Run Confluence Analysis"}
    </button>
  );
}
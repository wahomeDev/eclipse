"use client";

import { useState } from "react";

import DropZone from "./DropZone";
import AnalyzeButton from "./AnalyzeButton";
import ResultsPanel from "./ResultsPanel";

export default function AnalysisSection() {
  const [hasImage, setHasImage] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleAnalyze() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }

  return (
    <section className="mt-8 rounded-xl border border-gray-800 bg-[#0d1117] p-6">

      <h2 className="mb-6 text-xs uppercase tracking-[0.3em] text-gray-500">
        Confluence Analysis
      </h2>

      <div className="grid gap-6 lg:grid-cols-2">

        <div>

          <DropZone
            onImageSelected={() => setHasImage(true)}
          />

          <AnalyzeButton
            disabled={!hasImage}
            loading={loading}
            onAnalyze={handleAnalyze}
          />

        </div>

        <ResultsPanel />

      </div>

    </section>
  );
}
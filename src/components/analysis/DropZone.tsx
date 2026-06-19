"use client";

import useImageUpload from "@/hooks/useImageUpload";

interface Props {
  onImageSelected: () => void;
}

export default function DropZone({
  onImageSelected,
}: Props) {
  const { image, handleFile } = useImageUpload();

  return (
    <label className="flex h-[250px] cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-gray-700 bg-[#070B14] hover:border-amber-500 overflow-hidden">

      <input
        hidden
        type="file"
        accept="image/*"
        onChange={(e) => {
          if (e.target.files?.[0]) {
            handleFile(e.target.files[0]);
            onImageSelected();
          }
        }}
      />

      {image ? (
        <img
          src={image}
          alt="Preview"
          className="h-full w-full object-contain"
        />
      ) : (
        <div className="text-center">

          <div className="text-5xl mb-3">
            📈
          </div>

          <h3 className="font-semibold">
            Drop a chart screenshot
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            Click to browse
          </p>

        </div>
      )}

    </label>
  );
}
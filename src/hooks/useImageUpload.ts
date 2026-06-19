"use client";

import { useState } from "react";

export default function useImageUpload() {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function handleFile(file: File) {
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result as string);
    };

    reader.readAsDataURL(file);
  }

  return {
    image,
    loading,
    setLoading,
    handleFile,
  };
}
"use client";
import { useLocale } from "@/hooks/use-locale";
import React, { useEffect } from "react";

function LanguageDetector() {
  const locale = useLocale();

  useEffect(() => {
    if (locale) {
      localStorage.setItem("lng", locale);
    }
  }, [locale]);
  return null;
}

export default LanguageDetector;

"use client";
import { useThemeConfig } from "@/components/active-theme";
import { Label } from "./ui/label";
import {
  Select,
  SelectSeparator,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useState } from "react";
import Image from "next/image";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { LoadingSpinner } from "./icons";
import { useLocale } from "@/hooks/use-locale";

const lanuages = [
  {
    name: "English",
    value: "en",
    image: "/images/united-kingdom.png",
  },
  {
    name: "Farsi",
    value: "fa",
    image: "/images/iran.png",
  },
  {
    name: "Turkish",
    value: "tr",
    image: "/images/turkey.png",
  },
  {
    name: "Arabic",
    value: "ar",
    image: "/images/united-arab-emirates.png",
  },
];

export function LanguageSelector() {
  const [activeLng, setActiveLng] = useState("en");
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const locale = useLocale();

  useEffect(() => {
    if (locale) {
      setActiveLng(locale);
    }
  }, [locale]);

  const activeLanguageHandler = (language: string): void => {
    setActiveLng(language);
    localStorage.setItem("lng", language);

    if (language) {
      setLoading(true);
      const segments = pathname.split("/");

      if (segments.length > 1) {
        segments[1] = language;
        const newPath = segments.join("/");
        router.replace(newPath);
      }
    }
  };

  return (
    <>
      <div className="flex items-center gap-2">
        <Label htmlFor="language-selector" className="sr-only">
          Language
        </Label>
        <Select
          value={activeLng}
          onValueChange={(e) => activeLanguageHandler(e)}
        >
          <SelectTrigger
            id="language-selector"
            size="sm"
            className="justify-start *:data-[slot=select-value]:w-12"
          >
            <span className="text-muted-foreground hidden sm:block">
              Select a language:
            </span>
            <span className="text-muted-foreground block sm:hidden">
              Language
            </span>
            <SelectValue placeholder="Select a language" />
          </SelectTrigger>
          <SelectContent align="end">
            <SelectGroup>
              {lanuages.map((lng) => (
                <SelectItem key={lng.name} value={lng.value}>
                  <Image src={lng.image} alt="flag" width={20} height={20} />
                  {lng.name}
                </SelectItem>
              ))}
            </SelectGroup>
            <SelectSeparator />
          </SelectContent>
        </Select>
      </div>
      {loading && <LoadingSpinner />}
    </>
  );
}

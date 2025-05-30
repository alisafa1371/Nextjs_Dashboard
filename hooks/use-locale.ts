import { usePathname } from "next/navigation";
import { useMemo } from "react";

export function useLocale() {
  const pathname = usePathname();

  return useMemo(() => {
    const match = pathname?.match(/^\/([a-z]{2})(?:-[A-Z]{2})?/);
    return match?.[1] ?? null;
  }, [pathname]);
}

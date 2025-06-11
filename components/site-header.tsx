import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "./ui/mode-toggle";
import { ThemeSelector } from "./theme-selector";
import { LanguageSelector } from "./language-selector";

export function SiteHeader({ locale }: { locale: string }) {
  return (
    <header className="flex md:h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height) h-auto">
      <div
        className={`flex flex-wrap justify-between w-full items-center gap-5 px-4 md:gap-2 lg:px-6 ${
          locale === "fa" || locale === "ar" ? "flex-row-reverse" : ""
        }`}
      >
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">Documents</h1>
        <div
          className={`${
            locale === "fa" || locale === "ar" ? "mr-auto" : "ml-auto"
          } flex items-center gap-4 flex-wrap justify-end`}
        >
          <Button variant="ghost" asChild size="sm" className="hidden sm:flex">
            <a
              href="https://github.com/alisafa1371"
              rel="noopener noreferrer"
              target="_blank"
              className="dark:text-foreground"
            >
              GitHub
            </a>
          </Button>
          <ThemeSelector />
          <LanguageSelector />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

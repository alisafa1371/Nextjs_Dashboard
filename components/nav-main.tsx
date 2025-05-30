"use client";

import { IconCirclePlusFilled, IconMail, type Icon } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { redirect, usePathname } from "next/navigation";
import { useState } from "react";
import SimpleDialog from "./simple-dialog";
import { useTranslations } from "next-intl";

interface Item {
  title: string;
  url: string;
  icon?: Icon;
}

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: Icon;
  }[];
}) {
  const [showDialog, setShowDialog] = useState(false);
  const onSidebarMenuItemClickHandler = (item: Item) => {
    if (item.url === "/others") {
      setShowDialog(true);
    } else {
      redirect(item.url);
    }
  };

  const t = useTranslations("AppSidebar");

  const pathname = usePathname();
  const normalizedPath = pathname.replace(/^\/[a-z]{2}(?:-[A-Z]{2})?/, "");

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        {/* <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton
              tooltip="Quick Create"
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear"
            >
              <IconCirclePlusFilled />
              <span>Quick Create</span>
            </SidebarMenuButton>
            <Button
              size="icon"
              className="size-8 group-data-[collapsible=icon]:opacity-0"
              variant="outline"
            >
              <IconMail />
              <span className="sr-only">Inbox</span>
            </Button>
          </SidebarMenuItem>
        </SidebarMenu> */}
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={item.title}
                isActive={item.url === normalizedPath}
                onClick={() => onSidebarMenuItemClickHandler(item)}
              >
                {item.icon && <item.icon />}
                <span>{t(item.title)}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
      <SimpleDialog
        title="This is just a demo version of the dashboard"
        description="It can be fully customized and developed based on your specific needs and requirements"
        open={showDialog}
        onOpenChange={() => setShowDialog(!open)}
      />
    </SidebarGroup>
  );
}

"use client";
import {
  IconLoader,
  IconTrendingDown,
  IconTrendingUp,
} from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { OrdersResponse, SystemResponse, UserResponse } from "@/types/data";
import { SkeletonCard } from "./skeltonCard";
import { useTranslations } from "next-intl";

export function SectionCards() {
  const [data, setData] = useState<{
    users: UserResponse;
    orders: OrdersResponse;
    system: SystemResponse;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const [userRes, ordersRes, systamRes] = await Promise.all([
          fetch("/api/users"),
          fetch("/api/orders"),
          fetch("/api/system"),
        ]);

        const [users, orders, system] = await Promise.all([
          userRes.json(),
          ordersRes.json(),
          systamRes.json(),
        ]);

        setData({ users, orders, system });
      } catch (error) {
        console.log("fetchingError");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const t = useTranslations("SectionCard");

  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      {loading ? (
        <>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </>
      ) : (
        <>
          <Card className="@container/card">
            <CardHeader>
              <CardDescription>{t("Today Total Revenue")}</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                {data?.orders?.salesStats?.totalToday}$
              </CardTitle>
              <CardAction>
                <Badge variant="outline">
                  {data?.orders?.salesStats?.growth &&
                  data?.orders?.salesStats?.growth > 0 ? (
                    <>
                      <IconTrendingUp />+{data?.orders?.salesStats?.growth}%
                    </>
                  ) : (
                    <>
                      <IconTrendingDown />
                      {data?.orders?.salesStats?.growth}%
                    </>
                  )}
                </Badge>
              </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                {data?.orders?.salesStats?.growth &&
                data?.orders?.salesStats?.growth > 0 ? (
                  <>
                    {t("Trending up this month")}
                    <IconTrendingUp className="size-4" />
                  </>
                ) : (
                  <>
                    {t("Trending down this month")}
                    <IconTrendingDown className="size-4" />
                  </>
                )}
              </div>
              <div className="text-muted-foreground">
                {t(
                  data?.orders?.salesStats?.analysisTip
                    ? data?.orders?.salesStats?.analysisTip
                    : " "
                )}
              </div>
            </CardFooter>
          </Card>
          <Card className="@container/card">
            <CardHeader>
              <CardDescription>{t("New Customers")}</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                {data?.users?.stats?.newSignups}
              </CardTitle>
              <CardAction>
                <Badge variant="outline">
                  {data?.users?.stats?.growthRate &&
                  data?.users?.stats?.growthRate > 0 ? (
                    <>
                      <IconTrendingUp />+{data?.users?.stats?.growthRate}%
                    </>
                  ) : (
                    <>
                      <IconTrendingDown />
                      {data?.users?.stats?.growthRate}%
                    </>
                  )}
                </Badge>
              </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                {data?.users?.stats?.growthRate &&
                data?.users?.stats?.growthRate > 0 ? (
                  <>
                    Up {data?.users?.stats?.growthRate} this period
                    <IconTrendingDown className="size-4" />
                  </>
                ) : (
                  <>
                    {t("trend_down", {
                      c: data?.users?.stats?.growthRate
                        ? Math.abs(data?.users?.stats?.growthRate)
                        : 0,
                    })}{" "}
                    {t("this period")} <IconTrendingDown className="size-4" />
                  </>
                )}
              </div>
              <div className="text-muted-foreground">
                {t(
                  data?.users?.stats?.analysisTip
                    ? data?.users?.stats?.analysisTip
                    : " "
                )}
              </div>
            </CardFooter>
          </Card>
          <Card className="@container/card">
            <CardHeader>
              <CardDescription>{t("Active Accounts")}</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                {data?.users?.stats?.activeUsers}
              </CardTitle>
              <CardAction>
                <Badge variant="outline">
                  {data?.users?.stats?.activeUserGrowth &&
                  data?.users?.stats?.activeUserGrowth > 0 ? (
                    <>
                      <IconTrendingUp />+{data?.users?.stats?.activeUserGrowth}%
                    </>
                  ) : (
                    <>
                      <IconTrendingDown />
                      {data?.users?.stats?.activeUserGrowth}%
                    </>
                  )}
                </Badge>
              </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                {t("Strong user retention")}{" "}
                <IconTrendingUp className="size-4" />
              </div>
              <div className="text-muted-foreground">
                {t("Engagement exceed targets")}
              </div>
            </CardFooter>
          </Card>
          <Card className="@container/card">
            <CardHeader>
              <CardDescription>{t("Growth Rate")}</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                4.5%
              </CardTitle>
              <CardAction>
                <Badge variant="outline">
                  <IconTrendingUp />
                  +4.5%
                </Badge>
              </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                {t("Steady performance increase")}
                <IconTrendingUp className="size-4" />
              </div>
              <div className="text-muted-foreground">
                {t("Meets growth projections")}
              </div>
            </CardFooter>
          </Card>
        </>
      )}
    </div>
  );
}

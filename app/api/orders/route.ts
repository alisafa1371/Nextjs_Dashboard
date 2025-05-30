import { NextResponse } from "next/server";

export async function GET() {
  const orders = Array.from({ length: 10 }, (_, i) => ({
    id: `ORD-${100 + i}`,
    customer: [
      "Neda Abbasi",
      "Ali Mousavi",
      "Samaneh Rezaei",
      "Mehdi Moradi",
      "Zahra Akbari",
      "Alireza Yousefi",
      "Hamed Hasani",
      "Maryam Mohammadi",
      "Ahmad Amini",
      "Sara Fallahi",
    ][i],
    amount: Math.floor(Math.random() * 2000000) + 100000,
    status: ["paid", "pending", "failed"][i % 3],
    date: `2025-05-${(1 + i).toString().padStart(2, "0")}`,
  }));

  const salesStats = {
    totalToday: 2200000,
    totalWeek: 14600000,
    totalMonth: 62000000,
    totalOrders: 235,
    growth: 12,
    topProducts: [
      { name: "Disposable Cup", count: 128 },
      { name: "Economy Tissue", count: 102 },
      { name: "50m Disposable Tablecloth", count: 78 },
    ],
    analysisTip: "Performance is steadily improving",
  };

  return NextResponse.json({ orders, salesStats });
}

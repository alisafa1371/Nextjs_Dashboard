import { NextResponse } from "next/server";

export async function GET() {
  const systemStatus = {
    serverStatus: "online",
    uptime: "99.98%",
    cpuUsage: 62,
    ramUsage: 73,
    errorsToday: 5,
    recentErrors: [
      { time: "10:23", message: "Database connection error" },
      { time: "14:11", message: "API timeout in user section" },
      { time: "17:35", message: "Authentication error on login page" },
      { time: "18:45", message: "Failed attempt to delete order" },
      { time: "20:22", message: "File loading error in reports" },
    ],
    servers: Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      name: `Server-${i + 1}`,
      cpu: Math.floor(Math.random() * 100),
      ram: Math.floor(Math.random() * 100),
      status: ["online", "offline"][i % 2],
    })),
  };

  return NextResponse.json(systemStatus);
}

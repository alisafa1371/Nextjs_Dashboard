export interface TopProduct {
  name: string;
  count: number;
}

export type SalesStats = {
  totalToday: number;
  totalWeek: number;
  totalMonth: number;
  totalOrders: number;
  topProducts: TopProduct[];
  growth: number;
  analysisTip: string;
};

export interface Order {
  id: string;
  customer: string;
  amount: number;
  status: "paid" | "pending" | "failed";
  date: string; // ISO date string
}

export interface OrdersResponse {
  orders: Order[];
  salesStats: SalesStats;
}

export interface UserGrowth {
  date: string; // ISO date string
  count: number;
}
export interface Stats {
  activeUsers: number;
  growthRate: number;
  newSignups: number;
  onlineUsers: number;
  userGrowth: UserGrowth[];
  activeUserGrowth: number;
  analysisTip: string;
}

export interface Users {
  id: number;
  name: string;
  status: "online" | "ofline";
  joinedAt: string; //ISO date
}

export interface ChartData {
  date: string;
  desktop: number;
  mobile: number;
}
export interface UserResponse {
  stats: Stats;
  users: Users[];
  chartData: ChartData[];
}

export interface RecentErrors {
  time: string; // ISO date
  message: string;
}
export interface Servers {
  id: number;
  name: string;
  cpu: number;
  ram: number;
  status: "online" | "ofline";
}
export interface SystemResponse {
  cpuUsage: number;
  errorsToday: number;
  ramUsage: number;
  recentError: RecentErrors[];
  serverStatus: string;
  servers: Servers[];
  uptime: string;
}

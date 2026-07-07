import {
  ChevronDown,
  ChevronRight,
  Search,
  Bell,
  Home,
  CheckSquare,
  ArrowLeftRight,
  CreditCard,
  Landmark,
  Wallet,
  Layers,
  Route,
  BellRing,
  Settings,
  Check,
  Plus,
  MoreVertical,
} from "lucide-react";

const sidebarMain = [
  { icon: Home, label: "Home", active: true },
  { icon: CheckSquare, label: "Tasks", badge: "10" },
  { icon: ArrowLeftRight, label: "Transactions" },
  { icon: Wallet, label: "Payments", chevron: true },
  { icon: CreditCard, label: "Cards" },
  { icon: Landmark, label: "Capital" },
  { icon: Layers, label: "Accounts", chevron: true },
];

const sidebarWorkflows = [
  { icon: Route, label: "Trake rutes" },
  { icon: Wallet, label: "Payments" },
  { icon: BellRing, label: "Notifications" },
  { icon: Settings, label: "Settings" },
];

const actions = ["Send", "Request", "Transfer", "Deposit", "Pay Bill", "Create Invoice"];

const accounts = [
  { name: "Credit", amount: "$98,125.50" },
  { name: "Treasury", amount: "$6,750,200.00" },
  { name: "Operations", amount: "$1,592,864.82" },
];

const transactions = [
  { date: "Jun 12", desc: "AWS", amount: "-$5,200", status: "Pending", color: "text-amber-600", bg: "bg-amber-50" },
  { date: "Jun 11", desc: "Client Payment", amount: "+$125,000", status: "Completed", color: "text-emerald-600", bg: "bg-emerald-50" },
  { date: "Jun 10", desc: "Payroll", amount: "-$85,450", status: "Completed", color: "text-emerald-600", bg: "bg-emerald-50" },
  { date: "Jun 09", desc: "Office Supplies", amount: "-$1,200", status: "Completed", color: "text-emerald-600", bg: "bg-emerald-50" },
];

export default function DashboardPreview() {
  return (
    <div
      data-testid="dashboard-preview"
      className="bg-background rounded-xl border border-border text-[11px] select-none pointer-events-none font-body text-foreground"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border">
        <div className="flex items-center gap-1.5">
          <div className="h-5 w-5 rounded bg-primary text-primary-foreground flex items-center justify-center font-semibold text-[10px]">
            N
          </div>
          <span className="font-medium">Nexxy</span>
          <ChevronDown className="h-3 w-3 text-muted-foreground" />
        </div>
        <div className="flex items-center gap-1.5 rounded-md bg-secondary px-3 py-1.5 w-64">
          <Search className="h-3 w-3 text-muted-foreground" />
          <span className="text-muted-foreground flex-1">Search</span>
          <span className="text-muted-foreground text-[9px] border border-border rounded px-1">⌘K</span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="rounded-full bg-primary text-primary-foreground px-3 py-1 font-medium">
            Move Money
          </span>
          <Bell className="h-3.5 w-3.5 text-muted-foreground" />
          <div className="h-5 w-5 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-[9px] font-semibold">
            JB
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-40 shrink-0 border-r border-border p-2.5 space-y-0.5">
          {sidebarMain.map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-2 rounded-md px-2 py-1.5 ${
                item.active ? "bg-secondary font-medium" : "text-muted-foreground"
              }`}
            >
              <item.icon className="h-3 w-3" />
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <span className="rounded-full bg-secondary px-1.5 text-[9px] text-foreground">
                  {item.badge}
                </span>
              )}
              {item.chevron && <ChevronRight className="h-2.5 w-2.5" />}
            </div>
          ))}
          <div className="pt-3 pb-1 px-2 text-[9px] uppercase tracking-wider text-muted-foreground">
            Workflows
          </div>
          {sidebarWorkflows.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 rounded-md px-2 py-1.5 text-muted-foreground"
            >
              <item.icon className="h-3 w-3" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 bg-secondary/30 p-4 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold">Welcome, Jane</span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {actions.map((a, i) => (
              <span
                key={a}
                className={`rounded-full px-3 py-1.5 text-[10px] font-medium ${
                  i === 0
                    ? "bg-accent text-accent-foreground"
                    : "bg-background border border-border text-foreground"
                }`}
              >
                {a}
              </span>
            ))}
            <span className="text-[10px] text-muted-foreground ml-1">Customize</span>
          </div>

          <div className="flex gap-4">
            {/* Balance card */}
            <div className="flex-1 basis-0 bg-background rounded-lg border border-border p-4">
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <span>Mercury Balance</span>
                <span className="h-3.5 w-3.5 rounded-full bg-accent/10 flex items-center justify-center">
                  <Check className="h-2 w-2 text-accent" />
                </span>
              </div>
              <div className="mt-1 text-lg font-semibold">
                $8,450,190<span className="text-xs text-muted-foreground">.32</span>
              </div>
              <div className="mt-2 flex items-center gap-4 text-[10px]">
                <span className="text-muted-foreground">Last 30 Days</span>
                <span className="text-emerald-600 font-medium">+$1.8M</span>
                <span className="text-red-500 font-medium">-$900K</span>
              </div>
              <svg viewBox="0 0 300 80" className="mt-3 h-20 w-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="balanceGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(239 84% 67%)" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="hsl(239 84% 67%)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,60 C30,58 45,40 75,42 C105,44 120,62 150,55 C180,48 195,25 225,28 C255,31 275,15 300,10 L300,80 L0,80 Z"
                  fill="url(#balanceGradient)"
                />
                <path
                  d="M0,60 C30,58 45,40 75,42 C105,44 120,62 150,55 C180,48 195,25 225,28 C255,31 275,15 300,10"
                  fill="none"
                  stroke="hsl(239 84% 67%)"
                  strokeWidth="1.5"
                />
              </svg>
            </div>

            {/* Accounts card */}
            <div className="flex-1 basis-0 bg-background rounded-lg border border-border p-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">Accounts</span>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Plus className="h-3 w-3" />
                  <MoreVertical className="h-3 w-3" />
                </div>
              </div>
              <div>
                {accounts.map((acc) => (
                  <div key={acc.name} className="flex items-center justify-between py-3 text-xs">
                    <span className="text-muted-foreground">{acc.name}</span>
                    <span className="font-medium">{acc.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Transactions */}
          <div className="bg-background rounded-lg border border-border p-4">
            <div className="font-medium mb-2">Recent Transactions</div>
            <table className="w-full text-[10px]">
              <thead>
                <tr className="text-muted-foreground text-left">
                  <th className="font-normal py-1.5">Date</th>
                  <th className="font-normal py-1.5">Description</th>
                  <th className="font-normal py-1.5">Amount</th>
                  <th className="font-normal py-1.5">Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((t) => (
                  <tr key={t.desc} className="border-t border-border">
                    <td className="py-2 text-muted-foreground">{t.date}</td>
                    <td className="py-2">{t.desc}</td>
                    <td className={`py-2 font-medium ${t.amount.startsWith("+") ? "text-emerald-600" : ""}`}>
                      {t.amount}
                    </td>
                    <td className="py-2">
                      <span className={`rounded-full px-2 py-0.5 ${t.bg} ${t.color}`}>{t.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

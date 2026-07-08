import {
  Search,
  Bell,
  Phone,
  Home,
  Users,
  GitBranch,
  MessageSquare,
  Calendar,
  Mic,
  Megaphone,
  Zap,
  Bot,
  BarChart2,
  UserCheck,
  CreditCard,
  CloudLightning,
  Briefcase,
  RefreshCw,
  DollarSign,
  Trophy,
  UserPlus,
  Rocket,
  CalendarPlus,
  GitCommit,
} from "lucide-react";

const BLUE = "#2B66FF";
const DARK = "#0A1931";

const sidebarIcons = [Users, GitBranch, MessageSquare, Calendar, Mic, Megaphone, Zap, Bot, BarChart2, UserCheck, CreditCard];

const metrics = [
  { icon: Users, label: "Total Leads", value: "50", tag: "3 hot", blue: false },
  { icon: GitBranch, label: "Active Deals", value: "12", blue: true },
  { icon: DollarSign, label: "Pipeline Value", value: "$4.2M", blue: false },
  { icon: Calendar, label: "Upcoming Appts", value: "8", blue: false },
  { icon: Trophy, label: "Win Rate", value: "68%", blue: false },
];

const actions = [
  { icon: UserPlus, label: "Add Lead" },
  { icon: Rocket, label: "Launch Campaign" },
  { icon: CalendarPlus, label: "Book Appointment" },
  { icon: GitCommit, label: "Create Workflow", rotate: true },
  { icon: Bot, label: "Ask AI" },
];

export default function DashboardPreview() {
  return (
    <div
      data-testid="dashboard-preview"
      className="rounded-xl overflow-hidden border border-white/80 text-[11px] select-none pointer-events-none font-body"
      style={{ backgroundColor: "#EBF1FA", color: "#334155" }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-blue-50" style={{ backgroundColor: "#F3F7FC" }}>
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-lg flex items-center justify-center text-white font-bold text-xs" style={{ backgroundColor: BLUE }}>
            N
          </div>
          <span className="font-bold tracking-wider text-xs" style={{ color: DARK }}>NEXXY</span>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 rounded-lg bg-[#EBF1FA]/60 border border-slate-200/60 px-3 py-1.5 w-44 md:w-72">
          <Search className="h-3 w-3 text-slate-400" />
          <span className="text-slate-400">Search contacts, leads, deals...</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative h-7 w-7 bg-white rounded-lg border border-slate-100 shadow-sm flex items-center justify-center text-slate-500">
            <Bell className="h-3.5 w-3.5" />
            <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 bg-red-500 rounded-full border border-white" />
          </div>
          <div className="h-7 w-7 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-500/20" style={{ backgroundColor: BLUE }}>
            <Phone className="h-3.5 w-3.5" />
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Icon sidebar */}
        <div className="w-14 shrink-0 py-3 flex flex-col items-center justify-between border-r border-blue-50" style={{ backgroundColor: "#F3F7FC" }}>
          <div className="flex flex-col gap-1 items-center w-full">
            <div className="relative w-full flex justify-center py-1">
              <div className="absolute left-0 top-1 bottom-1 w-0.5 rounded-r" style={{ backgroundColor: BLUE }} />
              <div className="h-8 w-8 bg-white rounded-xl border border-blue-100/50 shadow-sm flex items-center justify-center" style={{ color: BLUE }}>
                <Home className="h-3.5 w-3.5" />
              </div>
            </div>
            {sidebarIcons.map((Icon, i) => (
              <div key={i} className="h-7 w-8 rounded-xl flex items-center justify-center text-slate-400">
                <Icon className="h-3.5 w-3.5" />
              </div>
            ))}
          </div>
          <div className="border-t border-slate-200 pt-2 mt-1">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
              alt="Profile"
              className="h-7 w-7 rounded-full object-cover ring-2 ring-slate-200"
            />
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-5 space-y-5">
          {/* Welcome jumbotron */}
          <div className="rounded-2xl p-5 border border-white/60 relative bg-gradient-to-br from-white via-white to-blue-50/30" style={{ boxShadow: "0 10px 30px -5px rgba(200,210,230,0.3)" }}>
            <div className="absolute top-5 right-5 flex items-center gap-1 rounded-full px-2.5 py-1 text-[9px] font-medium border" style={{ backgroundColor: "#E6F7ED", borderColor: "#BCE8CC", color: "#1E7E44" }}>
              <CloudLightning className="h-2.5 w-2.5" /> Live · CRM
            </div>
            <div className="text-xl font-light" style={{ color: DARK }}>Welcome back</div>
            <p className="text-[10px] text-slate-400 mb-3">Here's what your AI assistant has prepared for you today.</p>
            <div className="bg-white/90 border border-blue-100/50 rounded-xl p-3.5" style={{ boxShadow: "0 4px 20px rgba(220,225,240,0.4)" }}>
              <div className="flex items-center gap-2 font-semibold text-[10px] mb-1" style={{ color: BLUE }}>
                <div className="h-5 w-5 rounded-md flex items-center justify-center" style={{ backgroundColor: "#E8EFFF" }}>
                  <Briefcase className="h-3 w-3" />
                </div>
                AI Business Summary
              </div>
              <p className="text-[10px] text-slate-500 leading-relaxed pl-7">
                You have <span className="font-medium text-slate-700">3 hot leads</span> and{" "}
                <span className="font-medium text-slate-700">12 active deals</span>. I recommend reaching out to{" "}
                <span className="font-medium" style={{ color: BLUE }}>(310) 370-3438</span> first — your highest-scoring lead.
              </p>
            </div>
          </div>

          {/* Live Overview */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-xs" style={{ color: DARK }}>Live Overview</span>
              <div className="h-6 w-6 bg-white rounded-md border border-slate-100 flex items-center justify-center text-slate-400" style={{ boxShadow: "0 4px 20px rgba(220,225,240,0.4)" }}>
                <RefreshCw className="h-3 w-3" />
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {metrics.map((m) => (
                <div key={m.label} className="bg-white rounded-xl p-3.5 border border-white/80 relative h-24 flex flex-col justify-between" style={{ boxShadow: "0 4px 20px rgba(220,225,240,0.4)" }}>
                  <div className="h-7 w-7 rounded-lg flex items-center justify-center" style={m.blue ? { backgroundColor: "#E8EFFF", color: BLUE } : { backgroundColor: "#F4F7FC", color: "#64748b" }}>
                    <m.icon className="h-3.5 w-3.5" />
                  </div>
                  {m.tag && (
                    <span className="absolute top-3.5 right-3.5 text-[8px] font-medium text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded-full">{m.tag}</span>
                  )}
                  <div>
                    {m.value ? (
                      <div className="text-base font-semibold" style={{ color: DARK }}>{m.value}</div>
                    ) : (
                      <div className="h-4 w-12 bg-slate-100 rounded mb-0.5" />
                    )}
                    <div className="text-[8px] font-bold tracking-wider text-slate-400 uppercase">{m.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-2.5">
            <span className="font-semibold text-xs" style={{ color: DARK }}>Quick Actions</span>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {actions.map((a) => (
                <div key={a.label} className="bg-white/80 rounded-xl p-3.5 border border-white/80 flex flex-col items-center justify-center gap-2 h-20" style={{ boxShadow: "0 4px 20px rgba(220,225,240,0.4)" }}>
                  <div className="h-7 w-7 rounded-full flex items-center justify-center text-slate-600 bg-slate-50">
                    <a.icon className={`h-3.5 w-3.5 ${a.rotate ? "rotate-45" : ""}`} />
                  </div>
                  <span className="text-[9px] font-medium text-slate-600 text-center leading-tight">{a.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

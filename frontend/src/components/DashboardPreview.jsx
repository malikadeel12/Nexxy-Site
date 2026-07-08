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
  Sparkles,
} from "lucide-react";
import { useTheme } from "@/ThemeContext";

const BLUE = "#2B66FF";
const GOLD = "#D1AD46";

const light = {
  base: "#EBF1FA",
  panel: "rgba(255,255,255,0.8)",
  panelBorder: "rgba(255,255,255,0.8)",
  card: "#ffffff",
  cardBorder: "rgba(255,255,255,0.8)",
  heading: "#0A1931",
  text: "#334155",
  subtle: "#94a3b8",
  label: "#94a3b8",
  iconBg: "#F4F7FC",
  iconColor: "#64748b",
  blueIconBg: "#E8EFFF",
  accent: BLUE,
  accentText: "#ffffff",
  accentGradient: "linear-gradient(135deg, #2B66FF 0%, #6366F1 100%)",
  accentShadow: "shadow-blue-500/20",
  searchBg: "rgba(235,241,250,0.6)",
  searchBorder: "rgba(226,232,240,0.6)",
  jumboFrom: "#ffffff",
  jumboTo: "rgba(239,246,255,0.3)",
  capsuleBg: "rgba(255,255,255,0.9)",
  capsuleBorder: "rgba(219,234,254,0.5)",
  capsuleText: "#64748b",
  strong: "#334155",
  livePillBg: "#E6F7ED",
  livePillBorder: "#BCE8CC",
  livePillText: "#1E7E44",
  bellBg: "#ffffff",
  bellBorder: "#f1f5f9",
  divider: "#e2e8f0",
  actionCircle: "#f8fafc",
  actionText: "#475569",
  shadow: "0 4px 20px rgba(220,225,240,0.4)",
};

const dark = {
  base: "#0A0A0A",
  panel: "rgba(22,22,22,0.9)",
  panelBorder: "rgba(209,173,70,0.14)",
  card: "#141414",
  cardBorder: "rgba(209,173,70,0.1)",
  heading: "#F2EDDF",
  text: "#C9C4B4",
  subtle: "#797363",
  label: "#797363",
  iconBg: "#1D1B14",
  iconColor: "#A39C87",
  blueIconBg: "rgba(209,173,70,0.14)",
  accent: GOLD,
  accentText: "#0A0A0A",
  accentGradient: "linear-gradient(135deg, #D1AD46 0%, #B08F2E 100%)",
  accentShadow: "shadow-yellow-500/20",
  searchBg: "rgba(255,255,255,0.05)",
  searchBorder: "rgba(209,173,70,0.12)",
  jumboFrom: "#141414",
  jumboTo: "rgba(209,173,70,0.07)",
  capsuleBg: "rgba(10,10,10,0.7)",
  capsuleBorder: "rgba(209,173,70,0.25)",
  capsuleText: "#A39C87",
  strong: "#EDE7D6",
  livePillBg: "rgba(209,173,70,0.12)",
  livePillBorder: "rgba(209,173,70,0.35)",
  livePillText: "#D1AD46",
  bellBg: "#1D1B14",
  bellBorder: "rgba(209,173,70,0.15)",
  divider: "rgba(209,173,70,0.18)",
  actionCircle: "#1D1B14",
  actionText: "#C9C4B4",
  shadow: "0 4px 20px rgba(0,0,0,0.5)",
};

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
  const { isDark } = useTheme();
  const t = isDark ? dark : light;

  return (
    <div
      data-testid="dashboard-preview"
      className="rounded-xl overflow-hidden border text-[11px] select-none pointer-events-none font-body"
      style={{ backgroundColor: t.base, color: t.text, borderColor: t.cardBorder }}
    >
      {/* Top bar: floating rounded panel */}
      <div className="mx-3 mt-3 flex items-center justify-between px-4 py-2.5 rounded-2xl border" style={{ backgroundColor: t.panel, borderColor: t.panelBorder, boxShadow: t.shadow }}>
        <div className="flex items-center gap-2">
          <img src="/nexxy-logo.png" alt="Nexxy" className="h-3.5 w-auto" style={isDark ? { filter: "invert(1) hue-rotate(15deg) saturate(1.1) brightness(1.05)" } : undefined} />
        </div>
        <div className="hidden sm:flex items-center gap-1.5 rounded-lg border px-3 py-1.5 w-44 md:w-72" style={{ backgroundColor: t.searchBg, borderColor: t.searchBorder }}>
          <Search className="h-3 w-3" style={{ color: t.subtle }} />
          <span style={{ color: t.subtle }}>Search contacts, leads, deals...</span>
        </div>
        <div className="flex items-center gap-2">
          <div
            data-testid="nexxy-intelligence-button"
            className="h-7 rounded-lg flex items-center gap-1.5 px-3 font-medium shadow-lg"
            style={{ background: t.accentGradient, color: t.accentText }}
          >
            <Sparkles className="h-3 w-3" />
            <span className="text-[10px] whitespace-nowrap">Nexxy Intelligence</span>
          </div>
          <div className="relative h-7 w-7 rounded-lg border shadow-sm flex items-center justify-center" style={{ backgroundColor: t.bellBg, borderColor: t.bellBorder, color: t.iconColor }}>
            <Bell className="h-3.5 w-3.5" />
            <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 bg-red-500 rounded-full border border-white" />
          </div>
          <div className="h-7 w-7 rounded-lg flex items-center justify-center shadow-lg" style={{ backgroundColor: t.accent, color: t.accentText }}>
            <Phone className="h-3.5 w-3.5" />
          </div>
        </div>
      </div>

      <div className="flex gap-0 px-3 pb-3 pt-3">
        {/* Icon sidebar: floating rounded panel */}
        <div className="w-14 shrink-0 py-3 flex flex-col items-center justify-between self-start rounded-2xl border" style={{ backgroundColor: t.panel, borderColor: t.panelBorder, boxShadow: t.shadow }}>
          <div className="flex flex-col gap-1 items-center w-full">
            <div className="relative w-full flex justify-center py-1">
              <div className="absolute left-0 top-1 bottom-1 w-0.5 rounded-r" style={{ backgroundColor: t.accent }} />
              <div className="h-8 w-8 rounded-xl shadow-sm flex items-center justify-center" style={{ color: t.accent, backgroundColor: t.blueIconBg }}>
                <Home className="h-3.5 w-3.5" />
              </div>
            </div>
            {sidebarIcons.map((Icon, i) => (
              <div key={i} className="h-7 w-8 rounded-xl flex items-center justify-center" style={{ color: t.subtle }}>
                <Icon className="h-3.5 w-3.5" />
              </div>
            ))}
          </div>
          <div className="pt-2 mt-1 border-t" style={{ borderColor: t.divider }}>
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
              alt="Profile"
              className="h-7 w-7 rounded-full object-cover ring-2"
              style={{ "--tw-ring-color": t.divider }}
            />
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 pl-3 space-y-5">
          {/* Welcome jumbotron */}
          <div className="rounded-2xl p-5 border relative" style={{ background: `linear-gradient(135deg, ${t.jumboFrom} 0%, ${t.jumboFrom} 55%, ${t.jumboTo} 100%)`, borderColor: t.cardBorder, boxShadow: t.shadow }}>
            <div className="absolute top-5 right-5 flex items-center gap-1 rounded-full px-2.5 py-1 text-[9px] font-medium border" style={{ backgroundColor: t.livePillBg, borderColor: t.livePillBorder, color: t.livePillText }}>
              <CloudLightning className="h-2.5 w-2.5" /> Live · CRM
            </div>
            <div className="text-xl font-light" style={{ color: t.heading }}>Welcome back</div>
            <p className="text-[10px] mb-3" style={{ color: t.subtle }}>Here's what your AI assistant has prepared for you today.</p>
            <div className="rounded-xl p-3.5 border" style={{ backgroundColor: t.capsuleBg, borderColor: t.capsuleBorder, boxShadow: t.shadow }}>
              <div className="flex items-center gap-2 font-semibold text-[10px] mb-1" style={{ color: t.accent }}>
                <div className="h-5 w-5 rounded-md flex items-center justify-center" style={{ backgroundColor: t.blueIconBg }}>
                  <Briefcase className="h-3 w-3" />
                </div>
                AI Business Summary
              </div>
              <p className="text-[10px] leading-relaxed pl-7" style={{ color: t.capsuleText }}>
                You have <span className="font-medium" style={{ color: t.strong }}>3 hot leads</span> and{" "}
                <span className="font-medium" style={{ color: t.strong }}>12 active deals</span>. I recommend reaching out to{" "}
                <span className="font-medium" style={{ color: t.accent }}>(512) 345-6789</span> first, your highest-scoring lead.
              </p>
            </div>
          </div>

          {/* Live Overview */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-xs" style={{ color: t.heading }}>Live Overview</span>
              <div className="h-6 w-6 rounded-md border flex items-center justify-center" style={{ backgroundColor: t.card, borderColor: t.cardBorder, color: t.subtle, boxShadow: t.shadow }}>
                <RefreshCw className="h-3 w-3" />
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {metrics.map((m) => (
                <div key={m.label} className="rounded-xl p-3.5 border relative h-24 flex flex-col justify-between" style={{ backgroundColor: t.card, borderColor: t.cardBorder, boxShadow: t.shadow }}>
                  <div className="h-7 w-7 rounded-lg flex items-center justify-center" style={m.blue ? { backgroundColor: t.blueIconBg, color: t.accent } : { backgroundColor: t.iconBg, color: t.iconColor }}>
                    <m.icon className="h-3.5 w-3.5" />
                  </div>
                  {m.tag && (
                    <span className="absolute top-3.5 right-3.5 text-[8px] font-medium px-1.5 py-0.5 rounded-full" style={{ color: t.subtle, backgroundColor: t.iconBg }}>{m.tag}</span>
                  )}
                  <div>
                    <div className="text-base font-semibold" style={{ color: t.heading }}>{m.value}</div>
                    <div className="text-[8px] font-bold tracking-wider uppercase" style={{ color: t.label }}>{m.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-2.5">
            <span className="font-semibold text-xs" style={{ color: t.heading }}>Quick Actions</span>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {actions.map((a) => (
                <div key={a.label} className="rounded-xl p-3.5 border flex flex-col items-center justify-center gap-2 h-20" style={{ backgroundColor: t.card, borderColor: t.cardBorder, boxShadow: t.shadow }}>
                  <div className="h-7 w-7 rounded-full flex items-center justify-center" style={{ backgroundColor: t.actionCircle, color: t.actionText }}>
                    <a.icon className={`h-3.5 w-3.5 ${a.rotate ? "rotate-45" : ""}`} />
                  </div>
                  <span className="text-[9px] font-medium text-center leading-tight" style={{ color: t.actionText }}>{a.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

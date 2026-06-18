import { Link, useRouterState } from "@tanstack/react-router";
import { Home, Calculator, Briefcase, Gift, User } from "lucide-react";

const leftItems = [
  { to: "/", label: "Home", icon: Home },
  { to: "/estimator", label: "Estimate", icon: Calculator },
] as const;

const rightItems = [
  { to: "/portfolio", label: "Portfolio", icon: Briefcase },
  { to: "/profile", label: "Profile", icon: User },
] as const;

const centerItem = { to: "/referral", label: "Refer & Earn", icon: Gift } as const;

function NavLink({
  to,
  label,
  icon: Icon,
  active,
}: {
  to: string;
  label: string;
  icon: React.ElementType;
  active: boolean;
}) {
  return (
    <li className="flex justify-center">
      <Link
        to={to}
        aria-current={active ? "page" : undefined}
        className={`group flex h-14 w-full max-w-[76px] flex-col items-center justify-center gap-1 rounded-2xl transition-all duration-200 ease-out ${
          active ? "bg-primary/[0.08]" : "active:scale-95"
        }`}
      >
        <Icon
          className={`h-5 w-5 transition-colors duration-200 ${
            active
              ? "text-primary"
              : "text-muted-foreground group-hover:text-foreground"
          }`}
          strokeWidth={active ? 2.4 : 1.8}
        />
        <span
          className={`text-[10px] font-medium leading-none transition-colors duration-200 ${
            active
              ? "text-primary"
              : "text-muted-foreground group-hover:text-foreground"
          }`}
        >
          {label}
        </span>
      </Link>
    </li>
  );
}

export function BottomNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname === "/splash" || pathname === "/auth") return null;

  const centerActive =
    pathname === centerItem.to || pathname.startsWith(centerItem.to);

  const isActive = (route: string) =>
    pathname === route || (route !== "/" && pathname.startsWith(route));

  return (
    <nav className="fixed bottom-0 left-1/2 z-50 w-full max-w-[480px] -translate-x-1/2 border-t border-border/50 bg-background/90 shadow-[0_-4px_20px_-8px_rgba(0,0,0,0.08)] backdrop-blur-2xl">
      <ul className="grid grid-cols-5 items-end px-1 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-1">
        {leftItems.map(({ to, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            label={label}
            icon={icon}
            active={isActive(to)}
          />
        ))}

        {/* Center floating CTA — premium refer button */}
        <li key={centerItem.to} className="relative flex justify-center">
          {/* Animated pulse rings */}
          <span className="absolute -top-3 left-1/2 z-0 h-12 w-12 -translate-x-1/2 rounded-full bg-primary/20 animate-[ping_2.5s_ease-in-out_infinite]" />
          <span className="absolute -top-3 left-1/2 z-0 h-12 w-12 -translate-x-1/2 rounded-full bg-primary/10 animate-[ping_2.5s_ease-in-out_infinite_0.6s]" />

          <Link
            to={centerItem.to}
            aria-current={centerActive ? "page" : undefined}
            className="relative z-10 -top-3 flex h-[52px] w-[52px] items-center justify-center rounded-[18px] bg-gradient-primary shadow-glow ring-[3px] ring-background transition-all duration-300 ease-out hover:scale-110 hover:shadow-[0_0_30px_-4px_oklch(0.55_0.24_274/0.5)] active:scale-95"
          >
            {/* Inner glass shine */}
            <span className="absolute inset-0 rounded-[18px] bg-[linear-gradient(145deg,rgba(255,255,255,0.25)_0%,transparent_50%)]" />
            
            {/* Rotating border gradient */}
            <span 
              className="absolute -inset-[1px] rounded-[19px] opacity-60"
              style={{
                background: 'conic-gradient(from 0deg, oklch(0.72 0.2 290), oklch(0.55 0.24 274), oklch(0.72 0.2 290))',
                animation: 'spin 3s linear infinite',
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'exclude',
                WebkitMaskComposite: 'xor',
                padding: '1.5px',
              }}
            />

            <centerItem.icon
              className="relative z-10 h-[22px] w-[22px] text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]"
              strokeWidth={2.2}
            />
          </Link>
          <span
            className={`absolute bottom-1 left-1/2 -translate-x-1/2 text-[9px] font-bold whitespace-nowrap tracking-wide uppercase transition-colors duration-200 ${
              centerActive ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {centerItem.label}
          </span>
        </li>

        {rightItems.map(({ to, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            label={label}
            icon={icon}
            active={isActive(to)}
          />
        ))}
      </ul>
    </nav>
  );
}


import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "accent" | "ghost" | "tab" | "tabActive";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
  accent:
    "rounded-full border border-accent/45 bg-accent px-5 py-3 text-sm uppercase tracking-[0.22em] text-paper-strong",
  ghost:
    "rounded-full border border-main/12 bg-transparent px-5 py-3 text-sm uppercase tracking-[0.22em] text-main/72",
  tab: "rounded-[22px] border border-main/15 bg-paper text-main/72",
  tabActive: "rounded-[22px] border border-accent/55 bg-accent/[0.06] text-accent",
};

function Button({
  children,
  className = "",
  type = "button",
  variant = "ghost",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`tab-lift inline-flex items-center justify-center ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;

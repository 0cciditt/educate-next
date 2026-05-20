import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "accent" | "secondary" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2.5 font-heading font-bold leading-none whitespace-nowrap rounded-pill border-2 border-transparent transition-[transform,box-shadow,background-color,color] duration-200 ease-out cursor-pointer no-underline";

const sizes: Record<Size, string> = {
  sm: "px-[18px] py-[10px] text-sm",
  md: "px-[26px] py-[14px] text-base",
  lg: "px-8 py-[18px] text-lg",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-navy text-white shadow-brand-sm hover:bg-navy-deep hover:-translate-y-px hover:shadow-brand-md",
  accent:
    "bg-orange text-white shadow-brand-sm hover:bg-orange-deep hover:-translate-y-px hover:shadow-brand-md",
  secondary:
    "bg-white text-navy border-navy hover:bg-navy-soft",
  ghost:
    "bg-transparent text-ink !px-2 hover:text-navy",
  danger: "bg-red text-white",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type AsAnchorProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type AsButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function Button(props: AsAnchorProps | AsButtonProps) {
  const { variant = "primary", size = "md", className = "", children, ...rest } = props;
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`.trim();

  if ("href" in rest && rest.href !== undefined) {
    return (
      <a className={cls} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}

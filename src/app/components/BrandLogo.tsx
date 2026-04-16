import logoPng from "@/assets/rich-living-logo.png";

type BrandLogoProps = {
  /** Nav: compact on light background. Footer: larger, on off-white panel over navy. */
  variant: "nav" | "footer";
  className?: string;
};

export function BrandLogo({ variant, className = "" }: BrandLogoProps) {
  const sizeClass =
    variant === "nav"
      ? "h-9 w-auto max-h-10 md:h-11 md:max-h-12 max-w-[min(100%,14rem)] object-contain object-left"
      : "h-14 w-auto md:h-[4.5rem] max-w-[min(100%,16rem)] object-contain object-left";

  return (
    <img
      src={logoPng}
      alt="Rich Living Realty"
      className={`${sizeClass} ${className}`.trim()}
      width={1080}
      height={1237}
      decoding="async"
    />
  );
}

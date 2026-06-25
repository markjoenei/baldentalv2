import Image from "next/image";

type LogoProps = {
  className?: string;
  width?: number;
  height?: number;
};

export function Logo({ className = "", width = 130, height = 70 }: LogoProps) {
  return (
    <div className={`relative inline-block ${className}`} style={{ width, height }}>
      <Image
        src="/baldental/logo-main.png"
        alt="Bal Dental Centre"
        fill
        sizes={`${width}px`}
        className="object-contain"
        priority
      />
    </div>
  );
}

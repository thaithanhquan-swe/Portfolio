import { ArrowUpRight } from "lucide-react";
import { ComponentType, SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

interface SocialLinkItemProps {
  href: string;
  title: string;
  subtitle: string;
  icon: ComponentType<IconProps>;
}

function SocialLinkItem({
  href,
  title,
  subtitle,
  icon: Icon,
}: SocialLinkItemProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center justify-between rounded-2xl border border-white/10 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/5 sm:p-5"
    >
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
        <Icon
          size={22}
          className="shrink-0 text-white/70 transition-colors group-hover:text-white"
        />

        <div className="min-w-0">
          <p className="font-medium text-white">{title}</p>

          <p className="truncate text-sm text-white/40">
            {subtitle}
          </p>
        </div>
      </div>

      <ArrowUpRight
        size={19}
        className="shrink-0 text-white/50 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
      />
    </a>
  );
}

export default SocialLinkItem;

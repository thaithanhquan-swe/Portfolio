import SocialLinkItem from "../SocialLinkItem/SocialLinkItem";
import { socialLinks } from "@/data/contact.data";

function SocialLinks() {
  return (
    <div className="flex flex-col">
      <h3 className="text-xl font-semibold text-white sm:text-2xl">
        Social Links
      </h3>

      <div className="mt-6 grid gap-3 min-[440px]:grid-cols-2 sm:mt-8 sm:gap-4">
        {socialLinks.map((item) => (
            <SocialLinkItem key={item.title} {...item} />
        ))}
    </div>

      <a
        href="mailto:your.email@gmail.com"
        className="mt-6 flex h-12 items-center justify-center rounded-2xl bg-white text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/85 sm:mt-8 sm:h-14 sm:text-base"
      >
        Send me an email
      </a>
    </div>
  );
}

export default SocialLinks;

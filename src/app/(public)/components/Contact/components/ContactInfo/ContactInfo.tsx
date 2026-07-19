import { Mail, MapPin } from "lucide-react";

function ContactInfo() {
  return (
    <div>
      <h3 className="text-xl font-semibold text-white sm:text-2xl">
        Get in touch
      </h3>

      <p className="mt-3 text-sm leading-6 text-white/45 sm:mt-4 sm:text-base sm:leading-7">
        Whether you&apos;re looking for a Fullstack Developer, have an exciting
        project in mind, or just want to connect, I&apos;d love to hear from
        you.
      </p>

      <div className="mt-7 space-y-5 sm:mt-10 sm:space-y-6">
        <a
          href="mailto:thaithanhquan.developer@gmail.com"
          className="group flex min-w-0 items-center gap-3 sm:gap-4"
        >
          <div className="flex size-12 items-center justify-center rounded-xl border border-white/10 bg-white/3 transition-colors group-hover:bg-white/8">
            <Mail size={20} className="text-white/70" />
          </div>

          <div className="min-w-0">
            <p className="text-sm text-white/35">Email</p>

            <p className="break-all text-sm text-white/70 transition-colors group-hover:text-white sm:text-base">
              thaithanhquan.developer@gmail.com
            </p>
          </div>
        </a>

        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex size-12 items-center justify-center rounded-xl border border-white/10 bg-white/3">
            <MapPin size={20} className="text-white/70" />
          </div>

          <div>
            <p className="text-sm text-white/35">Location</p>

            <p className="text-white/70">
              Ho Chi Minh City, Vietnam
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Certificate } from "@/types/portfolio.types";


interface CertificateCardProps {
  certificate: Certificate;
}

function CertificateCard({
  certificate,
}: CertificateCardProps) {
  return (
    <article className="group rounded-[20px] border border-white/10 bg-[#181818]/90 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 sm:rounded-[26px] sm:p-4">
      <div className="relative aspect-video overflow-hidden rounded-[18px] border border-white/10 bg-white/5">
        <Image
          src={certificate.image}
          alt={certificate.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="px-1 pt-4">
        <h3 className="text-lg font-semibold text-white">
          {certificate.title}
        </h3>

        <p className="mt-1 text-sm text-white/40">
          {certificate.issuer}
        </p>

        {certificate.credentialUrl && (
          <a
            href={certificate.credentialUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 flex w-fit items-center gap-2 text-sm text-white/55 transition-colors hover:text-white"
          >
            View Credential
            <ArrowRight size={14} />
          </a>
        )}
      </div>
    </article>
  );
}

export default CertificateCard;

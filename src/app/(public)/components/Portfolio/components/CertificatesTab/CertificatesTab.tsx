import { certificates } from "@/data/portfolio.data";
import CertificateCard from "../CertificateCard/CertificateCard";

function CertificatesTab() {
  return (
    <div className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
      {certificates.map((certificate) => (
        <CertificateCard
          key={certificate.id}
          certificate={certificate}
        />
      ))}
    </div>
  );
}

export default CertificatesTab;

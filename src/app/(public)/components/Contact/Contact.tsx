import ContactFooter from "./components/ContactFooter/ContactFooter";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import ContactInfo from "./components/ContactInfo/ContactInfo";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import ScrollReveal from "@/components/motion/ScrollReveal";


function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-16 :scroll-mt-20 pt-4"
    >
      <div className="mx-auto flex max-w-7xl flex-col justify-center">
        <ScrollReveal direction="down">
          <ContactHeader />
        </ScrollReveal>

        <ScrollReveal
          direction="left"
          delay={0.08}
          className="mx-auto mt-5 w-full max-w-5xl rounded-[22px] border border-white/10 bg-[#181818]/90 p-4 min-[400px]:p-5 sm:mt-7 sm:rounded-[32px] sm:p-8"
        >
          <div className="grid gap-10 md:grid-cols-2 md:gap-12">
            <ContactInfo />
            <SocialLinks />
          </div>
        </ScrollReveal>

        <ContactFooter />
      </div>
    </section>
  );
}

export default Contact;

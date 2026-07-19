function ContactHeader() {
  return (
    <div className="text-center">
      <h2 className="text-[clamp(2.2rem,10vw,3rem)] leading-[1.05] font-black tracking-tighter text-white sm:text-5xl">
        Let&apos;s Build Something
        <br />
        Together.
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/45 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
        I&apos;m currently looking for internship and freelance opportunities.
        If you have a project, an idea, or simply want to say hello, feel free
        to reach out.
      </p>
    </div>
  );
}

export default ContactHeader;

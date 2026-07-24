'use client';
import { ArrowUpRight, FileText } from 'lucide-react';
import Image from 'next/image';

import { images } from '@/assets/images';
import ScrollReveal from '@/components/motion/ScrollReveal';

function About() {
  return (
    <section
      id='about'
      className='relative scroll-mt-16 overflow-hidden lg:min-h-screen'
    >
      <div className='mx-auto grid max-w-7xl items-center gap-10 sm:gap-14 lg:min-h-[calc(100vh-12rem)] lg:grid-cols-[1.25fr_0.75fr] lg:gap-16'>
        {/* Content */}
        <ScrollReveal direction='left' className='max-w-2xl'>
          <div className='mb-4 flex items-center gap-3 font-mono text-[10px] tracking-[0.24em] text-white/30 uppercase sm:mb-6 sm:text-xs sm:tracking-[0.3em]'>
            <span className='h-px w-6 bg-white/20' />
            <span>About me</span>
          </div>

          <h2 className='max-w-3xl text-[clamp(2.35rem,11vw,4rem)] leading-[0.94] font-black tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl'>
            Thái Thanh Quân
          </h2>

          <p className='mt-6 max-w-xl text-sm leading-6 text-white/45 sm:mt-8 sm:text-base sm:leading-7'>
            I&apos;m a final-year Information Systems student at the Posts and
            Telecommunications Institute of Technology, pursuing a career as a
            Software Engineer. I specialize in building modern, responsive, and
            scalable full-stack web applications using React, Next.js,
            TypeScript, Java, and Spring Boot. I enjoy turning ideas into
            reliable digital products through intuitive user interfaces,
            well-structured backend systems, and clean, maintainable code.
            I&apos;m always eager to learn, take on new challenges, and grow
            within a collaborative development environment.
          </p>

          <div className='mt-5 max-w-xl rounded-xl border border-white/10 bg-white/3 px-4 py-4 sm:mt-6 sm:px-6 sm:py-5'>
            <p className='text-sm leading-6 font-medium text-white/75 italic'>
              “Turning ideas into clean, modern, and meaningful digital
              experiences.”
            </p>
          </div>

          <div className='mt-6 grid gap-3 min-[430px]:flex min-[430px]:flex-wrap'>
            <a
              href='/ThaiThanhQuan_FullstackDeveloper_Intern.pdf'
              target='_blank'
              className='flex h-11 items-center justify-center gap-2 rounded-lg bg-white px-5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/85'
            >
              <FileText size={17} />
              View Resume
            </a>

            <button
              type='button'
              onClick={() =>
                document.getElementById('portfolio')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                })
              }
              className='flex h-11 cursor-pointer items-center justify-center gap-2 rounded-lg border border-white/65 px-5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-black'
            >
              <ArrowUpRight size={17} />
              View Projects
            </button>
          </div>
        </ScrollReveal>

        {/* Profile image */}
        <ScrollReveal
          direction='right'
          delay={0.12}
          className='relative flex items-center justify-center lg:justify-end'
        >
          <div className='relative flex size-56 items-center justify-center rounded-full border border-white/10 p-3 min-[400px]:size-64 sm:size-72 lg:size-80'>
            <div className='relative size-full overflow-hidden rounded-full border border-white/10'>
              <Image
                src={images.main2}
                alt='Thái Thanh Quân'
                fill
                priority
                className='object-cover'
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default About;

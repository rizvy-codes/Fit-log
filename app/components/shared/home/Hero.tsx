import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="fit-container mt-8">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#15171d]">
        <div className="flex flex-col items-center justify-between gap-10 px-7 py-10 md:px-12 md:py-14 lg:flex-row lg:px-16">
          
          <div className="max-w-2xl">
            <span className="font-semibold tracking-wide text-[#c2f800]">
              WORKOUT LIBRARY
            </span>

            <h1 className="mt-5 text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
              TRAIN WITH INTENT. LOG EVERY SET.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 md:text-lg">
              FitLog is a dark, no-nonsense gym companion: pick a lift,
              lock it into today&apos;s plan, and watch the week&apos;s work
              add up.
            </p>

            <Link
              href="#library"
              className="btn mt-8 border-0 bg-[#c2f800] px-7 text-black hover:bg-[#b6e800]"
            >
              BROWSE WORKOUTS
              <span>↓</span>
            </Link>
          </div>

          <div className="flex w-full justify-center lg:w-[45%]">
            <Image
              src="/images/banner.png"
              alt="Workout exercise illustration"
              width={420}
              height={420}
              priority
              className="h-auto w-full max-w-[420px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
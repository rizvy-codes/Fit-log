import Image from "next/image";
import Link from "next/link";
import bannerImage from "@/assets/images/banner.png";

const NotFound = () => {
  return (
    <main className="fit-container flex min-h-[70vh] items-center justify-center py-10">
      <div className="grid w-full max-w-5xl items-center gap-10 md:grid-cols-2">
        
        <div className="flex justify-center">
          <Image
            src={bannerImage}
            alt="Workout not found"
            width={500}
            height={500}
            className="w-full max-w-sm opacity-70"
          />
        </div>

        <div className="text-center md:text-left">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#c2f800]">
            FITLOG
          </p>

          <h1 className="mt-3 text-7xl font-black text-white">
            404
          </h1>

          <h2 className="mt-2 text-2xl font-bold uppercase text-white">
            WORKOUT NOT FOUND
          </h2>

          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-gray-500 md:mx-0">
            This workout could not be found. There are
            plenty of other workouts waiting in the library.
          </p>

          <Link
            href="/"
            className="btn mt-6 border-0 bg-[#c2f800] text-black"
          >
            BACK TO WORKOUTS
          </Link>
        </div>

      </div>
    </main>
  );
};

export default NotFound;
import Image from "next/image";
import Link from "next/link";
import logoImage from "@/assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-white/10 bg-[#0b0c0f]">
      <div className="fit-container py-8">
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
          
          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <Image
  src={logoImage}
  alt="FitLog logo"
  width={38}
  height={38}
/>

            <span className="text-lg font-bold text-white">
              FITLOG
            </span>
          </Link>

          <p className="text-center text-sm text-gray-500 md:text-right">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
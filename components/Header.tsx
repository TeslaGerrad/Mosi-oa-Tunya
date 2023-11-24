import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <div className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="/logo.jpg"
            width={100}
            className="rounded-full"
            height={50}
            alt="logo"
          />
        </Link>
        <h1>Mosi-oa-Tunya</h1>
      </div>

      <div>
        <Link
          href="/"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center"
        >
          Sign up for more experience 
        </Link>
      </div>
    </div>
  );
}

export default Header;

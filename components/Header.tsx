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
            className="rounded-[50px] w-[50px] h-[50px]"
            height={50}
            alt="logo"
            
          />
        </Link>
        <h1 className="bg-gradient-to-r bg-clip-text text-transparent from-black to-yellow-600">Mosi-oa-Tunya</h1>
      </div>

      <div>
        <Link
          href="/"
          className="lg:px-5 lg:py-3 px-4 py-3 text-sm md:text-base hover:bg-gray-800 bg-gray-900 text-[#F7AB0A] flex items-center rounded-lg lg:text-center"
        >
          Sign up  
        </Link>
      </div>
    </div>
  );
}

export default Header;

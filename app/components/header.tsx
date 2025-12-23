import Link from "next/link";
import Button from "./button";

export default function header() {
  return (
    <header className="flex justify-between items-center bg-white text-black border-b-[1px] border-gray-200 py-4 px-6 ">
      <div className="flex items-center gap-5">
        <img className="w-[80px] h-[30px]" src="/logo.png" alt="" />
        <ul className="flex items-center gap-4 mt-3">
          <li>
            <a href="">Product</a>
          </li>
          <li>
            <a href="">Solutions</a>
          </li>
          <li>
            <a href="">Resources</a>
          </li>
          <li>
            <a href="">Enterprise</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex items-center gap-4">
            <li><a href="">Contact Sales</a></li>
            <li>
              <Link href='/login'>Login</Link>
            </li>
            <li><Button className="w-[150px] h-[35px]">Sign up free</Button></li>
        </ul>
      </div>
    </header>
  );
}

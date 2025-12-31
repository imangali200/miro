import Link from "next/link";
import Button from "./button";

export default async function header() {
  interface Navigation {
    id: string;
    navigation: string;
    url: string;
  }

  const blob = process.env.BLOB_URL;
  const url = process.env.BASE_URL;
  const res = await fetch(
    `${url}/api/header/1?depth=2&draft=false&locale=undefined&trash=false`
  );
  const data = await res.json();

  return (
    <header className="flex justify-between items-center bg-white text-black border-b-[1px] border-gray-200 py-4 px-6 ">
      <div className="flex items-center gap-5">
        <img
          className="w-[80px] h-[30px]"
          src={blob + data.logo.filename}
          alt={blob + data.logo.alt}
        />
        <ul className="flex items-center gap-4 mt-3">
          {data.navigations.map((navigation: Navigation, index: number) => (
            <li key={index}>
              <Link href={navigation.url}>{navigation.navigation}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul className="flex items-center gap-4">
         {data.rightSideNavigation[0].navigations.map((n: Navigation, indexId: number) => (
            <li key={indexId}>
              <Link href={n.url}>{n.navigation}</Link>
            </li>
          ))}
          <li>
            <Button className="w-[150px] h-[35px]">{data.rightSideNavigation[0].buttonText}</Button>
          </li>
        </ul>
      </div>
    </header>
  );
}

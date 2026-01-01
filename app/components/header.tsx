"use client";
import Link from "next/link";
import Button from "./button";
import { useEffect, useState } from "react";

interface Navigation {
  id: string;
  navigation: string;
  url: string;
}

export default function Header() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `/api/header/1?depth=2&draft=false&locale=undefined&trash=false`
        );
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching header data:", error);
      }
    };
    fetchData();
  }, []);

  if (!data) return null; 
  const blob = process.env.NEXT_PUBLIC_BLOB_URL;

  return (
    <header className="flex justify-between items-center bg-white text-black border-b-[1px] border-gray-200 py-4 px-6 ">
      <div className="flex items-center gap-5">
        <img
          className="w-[80px] h-[30px]"
          src={blob + data.logo.filename}
          alt={data.logo.alt || "Logo"}
        />
        <ul className="flex items-center gap-4 mt-3">
          {data.navigations &&
            data.navigations.map((navigation: Navigation, index: number) => (
              <li key={index}>
                <Link href={navigation.url}>{navigation.navigation}</Link>
              </li>
            ))}
        </ul>
      </div>
      <div>
        <ul className="flex items-center gap-4">
          {data.rightSideNavigation &&
            data.rightSideNavigation[0]?.navigations.map(
              (n: Navigation, indexId: number) => (
                <li key={indexId}>
                  <Link href={n.url}>{n.navigation}</Link>
                </li>
              )
            )}
          <li>
            <Button className="w-[150px] h-[35px]">
              {data.rightSideNavigation && data.rightSideNavigation[0]?.buttonText}
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}

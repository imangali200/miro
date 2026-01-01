"use client";
import { useEffect, useState } from "react";

export default function Users() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = process.env.NEXT_PUBLIC_BASE_URL;
        const res = await fetch(
          `${url}/api/companies/1?depth=2&draft=false&locale=undefined&trash=false`
        );
        const json = await res.json();
        console.log(json);
        setData(json);
      } catch (error) {
        console.error("Error fetching users data:", error);
      }
    };
    fetchData();
  }, []);

  if (!data) return null;

  const blob = process.env.NEXT_PUBLIC_BLOB_URL;

  return (
    <div className="flex flex-col items-center justify-center mt-[50px]">
      <h3 className="text-[#05003899]">{data.title}</h3>
      <div className="flex items-center w-full justify-between mt-[40px]">
        {data.images &&
          data.images.map((image: any, index: number) => (
            <img
              key={index}
              className=" h-[50px]"
              src={blob + image.image.filename}
              alt=""
            />
          ))}
      </div>
    </div>
  );
}
"use client";
import Button from "./button";
import StarRating from "./Star";
import { useEffect, useState } from "react";

export default function Hero() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `/api/hero/1?depth=2&draft=false&locale=undefined&trash=false`
        );
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching hero data:", error);
      }
    };
    fetchData();
  }, []);

  if (!data) return null;

  const blob = process.env.NEXT_PUBLIC_BLOB_URL;

  return (
    <div className="text-black flex justify-center gap-[30px] mt-[40px]">
      <div className="w-[440px]">
        <h1 className="text-[48px] leading-[50px] text-black font-[700]">
          {data.title}
        </h1>
        <p className="text-[#050038B8]">{data.description}</p>
        <div className="flex flex-col gap-2">
          <input type="text" />
          <Button className="w-full h-[35px]">{data.buttonText}</Button>
          <p className="text-[#050038B8]">
            Collaborate with your team within minutes
          </p>
        </div>
        <div className="bg-[#F5F5F7] flex items-center justify-between px-3 py-1 rounded-xl">
          <div>
            {data.statistics && <StarRating rating={data.statistics.start} />}
            <p>{data.statistics && data.statistics.reviewsNumber}</p>
          </div>
          <div className="flex gap-[10px]">
            {data.statistics &&
              data.statistics.images.map((image: any, index: number) => (
                <img
                  key={index}
                  className="w-auto h-[40px]"
                  src={blob + image.img.filename}
                  alt=""
                />
              ))}
          </div>
        </div>
      </div>
      {data.img && (
        <img
          className="w-[640px] h-[462px]"
          src={blob + data.img.filename}
          alt=""
        />
      )}
    </div>
  );
}

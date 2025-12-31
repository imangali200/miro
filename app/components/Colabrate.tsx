import Button from "./button";

type ColabrateItems = {
  id:string
  title:string,
  description:string
}

  const blob = process.env.BLOB_URL;
  const url = process.env.BASE_URL;
  const res = await fetch(
    `${url}/api/ourServices/1?depth=2&draft=false&locale=undefined&trash=false`
  );
  const data = await res.json();

export default function Collaborate() {
  return (
    <div className="mt-[70px] flex flex-col gap-[20px] items-center">
      <h1 className="text-[48px] font-[700] leading-[48px] text-black text-center ">{data.title}</h1>
      <div className="flex  gap-[30px] mt-[30px]">
        {data.services.map((item:ColabrateItems,index:number)=>(
                  <div className="flex flex-col gap-[10px]">
          <h3 className="text-[24px] text-black font-[700]">{item.title}</h3>
          <p className="text-[18px] text-[#05003899]">
            {item.description}
          </p>
        </div>
        ))}
      </div>

    <Button className="w-[150px] h-[35px]">Sign up free</Button>
    </div>
  );
}

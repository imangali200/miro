import Button from "./button";

type ColabrateItems = {
  title:string,
  description:string
}

type ColabrateProps = {
  items:ColabrateItems[]
}

export default function Collaborate({items}:ColabrateProps) {
  return (
    <div className="mt-[70px] flex flex-col gap-[20px] items-center">
      <h1 className="text-[48px] font-[700] leading-[48px] text-black text-center ">Collaborate without <br/> constraints</h1>
      <div className="flex  gap-[30px] mt-[30px]">
        {items.map((item,index)=>(
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

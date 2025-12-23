type statisticaItems = {
  title:string,
  description:string
}
type statisticaProps = {
  items:statisticaItems[]
}

export default function Statistica({items}:statisticaProps) {
  return (
    <div className="bg-[#FFD02F] w-full flex flex-col items-center text-black py-[60px]">
      <h1 className="text-[40px] leading-[45px] text-center font-[700]">Why companies large <br/> and small trust Miro</h1>
      <p className="text-[18px] underline mt-4">Contact Sales to request a demo</p>
      <div className="grid grid-cols-3 gap-[40px] mt-[40px]">
        {items.map((item,index)=>(
          <div key={index} className="flex items-center flex-col">
            <h1 className="text-[40px] font-[700]">{item.title}</h1>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

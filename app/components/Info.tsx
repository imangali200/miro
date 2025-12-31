
export default function Info({ title, description, className ,imgsrc ,key }: any) {
  return (
    <div key={key} className={`${className} items-center gap-[30px] mt-[40px]`}>
      <div className="flex flex-col w-[550px] gap-[20px]">
        <h1 className="text-[48px] text-black leading-[50px] font-[700]">{title}</h1>
        <p className="text-[#05003899] text-[18px]">{description}</p>
        <p className="text-[#4262FF]">Learn more</p>
      </div>
      <img className="w-[550px]" src={imgsrc} alt="" />
    </div>
  );
}

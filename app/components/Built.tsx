type subtitles = {
  subTitle: string;
};
type facts = {
  fact: string;
};
type buildProps = {
  title: string;
  items: subtitles[];
  facts?: facts[];
  descriptionTitle?: string;
  description?: string;
  imgUrl: string;
};

export default function Built({ item }: { item: buildProps }) {
  return (
    <div className="text-black mt-[40px]">
      <h1 className="text-[48px] font-[700]">{item.title}</h1>
      <div className="flex gap-4 mt-3">
        {item.items.map((i, index) => (
          <p
            className="bg-[#F2F2F2] border-[1px] border-gray-200 rounded-3xl px-3 py-1"
            key={index}
          >
            {i.subTitle}
          </p>
        ))}
      </div>
      <div className="flex items-start gap-3 mt-7">
        <div className="w-[360px] flex flex-col gap-5 mt-5">
          {item.descriptionTitle && (
            <h3 className="text-[18px]">{item.descriptionTitle}</h3>
          )}
          {item.description && (
            <h3 className="text-[18px]">{item.description}</h3>
          )}

          {item.facts && (
            <ul className="flex flex-col gap-4">
                {item.facts.map((it,ind)=>(
                <li key={ind}>{it.fact}</li>
            ))}
            </ul>
            
          )}

          <p className="text-[#4262FF]"> Learn more →</p>
        </div>
        <img className="w-[700px]" src={item.imgUrl} alt="" />
      </div>
    </div>
  );
}

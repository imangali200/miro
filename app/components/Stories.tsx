type storyitems = {
  title: string;
  description: string;
  avatar: string;
  name: string;
  profesion: string;
};
type StoryProps = {
  story: storyitems[];
};

export default function Stories({ story }: StoryProps) {
  return (
    <div className="text-black flex flex-col items-center mt-[50px] py-[20px]">
      <h1 className="text-[40px] leading-[45px] text-center font-[700]">
        Loved by the world's best teams
      </h1>
      <button className="text-[#4262FF] border-[1px] border-[#4262FF] rounded-3xl py-2 px-4 mt-3">
        See all customer stories →
      </button>

      <div className="flex justify-between gap-6 mt-5">
        {story.map((s, index) => (
          <div key={index} className="w-[360px] h-[400px] flex flex-col justify-between p-4">
            <div>
              <h1 className="text-[40px] font-[700]">{s.title}</h1>
              <p>{s.description}</p>
            </div>

            <div className="flex gap-3 mt-8">
              <img className="w-[48px] h-[48px]" src={s.avatar} alt="" />
              <div>
                <h4>{s.name}</h4>
                <p>{s.profesion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

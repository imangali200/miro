import Button from "./button";

export default function hero() {
  return (
    <div className="text-black flex justify-center gap-[30px] mt-[40px]">
      <div className="w-[440px]">
        <h1 className="text-[48px] leading-[50px] text-black font-[700]">
          Take ideas from better to best
        </h1>
        <p className="text-[#050038B8]">
          Miro is your team's visual platform to connect, collaborate, and
          create — together.
        </p>
        <div className="flex flex-col gap-2">
          <input type="text" />
          <Button className="w-full h-[35px]">Sign up free</Button>
          <p className="text-[#050038B8]">Collaborate with your team within minutes</p>
        </div>
        <img className="mt-5" src="/image.png" alt="" />
      </div>
      <img className="w-[640px] h-[462px]" src="/image copy.png" alt="" />
    </div>
  );
}

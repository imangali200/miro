import Button from "@/app/components/button";

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center w-[400px] border-[1px] border-gray-300 rounded-xl p-3">
        <h1 className="text-[25px] font-[500]">Login</h1>
        <div className="flex flex-col w-full">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input className="border-[1px] border-gray-300 rounded-[6px] pl-3 py-2" placeholder="write your phone number" type="text" id="phoneNumber" />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="phoneNumber">Password</label>
          <input className="border-[1px] border-gray-300 rounded-[6px] pl-3 py-2" placeholder="write your password" type="text" id="phoneNumber" />
        </div>
        <Button className="w-full h-[35px]">Sign in</Button>
      </div>
    </div>
  );
}

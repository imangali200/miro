
import Button from "./button"
export default function CurrentUsers(){
    return(
        <div className="bg-[#050038] rounded-2xl h-[448px] flex items-center justify-center flex-col gap-1">
            <h1 className="text-[40px] text-white font-[700]">Join 45M+ users today</h1>
            <p className="text-[#FFFFFF99]">Start for free — upgrade anytime.</p>
            <p className="text-[#FFFFFF99]">Joining as an organization? Contact Sales.</p>
            <Button className="w-[170px] h-[35px] mt-4">Sign up free</Button>
        </div>
    )
}
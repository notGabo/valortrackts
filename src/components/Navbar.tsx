import SunIcon from "@/components/icons/SunIcon"
import CrosshairLogo from "@/components/icons/CrosshairLogo"

const Navbar = () => {
    return (
    <> 
        <div className="flex flex-wrap gap-2 items-center justify-between bg-gray-900 p-2 rounded-lg">
            {/* <h1 className="text-rose-600 sm:min-w-[20px] md:min-w-[50px] lg:md-w-[70px] font-valorant">Valortrack</h1> */}
            <CrosshairLogo className="fill-rose-600" width={'50px'}/>
            <h1 className="font-VALORANT text-2xl text-rose-600">VAlortrack</h1>
            <SunIcon className="fill-rose-600" width={'35px'}/>
        </div>
    </> 
    )
}
export default Navbar   
import SunIcon from "@/components/icons/SunIcon"
import CrosshairLogo from "@/components/icons/CrosshairLogo"

const Navbar = () => {
    return (
    <> 
        <div className="flex flex-grow:1;flex-wrap gap-2 items-center justify-between bg-gray-900 p-2 rounded-lg mb-10">
            {/* <h1 className="text-rose-600 sm:min-w-[20px] md:min-w-[50px] lg:md-w-[70px] font-valorant">Valortrack</h1> */}
            <div className="flex items-center gap-2 p-3">
                <CrosshairLogo className="fill-rose-600" width={'45px'}/>
                <h1 className="font-VALORANT text-3xl text-rose-600">VAlortrack</h1>
                <div  className="">

                </div>
            </div>
            <SunIcon className="fill-rose-600" width={'35px'}/>
        </div>
    </> 
    )
}
export default Navbar   

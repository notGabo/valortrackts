import Link from "next/link"
import CrosshairLogo from "@/components/icons/CrosshairLogo"


const Navbarv2 = () => {
    return (
        <div className="bg-gray-900">
        <div className="bg-gray-900 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
          <div className="relative flex items-center justify-between">
            <div className="flex items-center">
              <Link className="inline-flex items-center mr-8" href="#">
                <span className="text-2xl text-white">
                  <div className="font-size:inheritcolor:inherit;padding:2px">
                  <CrosshairLogo className="fill-rose-600" width={'35px'}/>
                  </div>
                </span>
                <span className="font-VALORANT ml-2 text-xl font-bold tracking-wide text-rose-600 lg:text-rose-600">
                VAlortrack
                </span>
              </Link>
              <ul className="items-center hidden space-x-8 text-rose-600 lg:flex">
                <li>
                  <Link
                    className="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
                    href="#">
                    Product
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
                    href="#">
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
                    href="#">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
                    href="#">
                    About us
                  </Link>
                </li>
              </ul>
            </div>
            <ul className="items-center hidden space-x-8 lg:flex">
              <li>
                <Link
                  className="font-medium tracking-wide transition-colors duration-200 hover:text-primary text-rose-600"
                  href="#">
                  Sign in
                </Link>
              </li>
              <li>
                <Link
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 shadow-md focus:shadow-outline focus:outline-none rounded-global bg-rose-600"
                  href="#">
                  
                  Sign up
                </Link>
              </li>
            </ul>
            <div className="lg:hidden">
              <button className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline">
                <span className="w-fit">
                  <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                    
                    <path
                      fill="currentColor"
                      d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path>
                    <path
                      fill="currentColor"
                      d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"></path>
                    <path
                      fill="currentColor"
                      d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

    )
}

export default Navbarv2
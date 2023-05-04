import Link from "next/link";
import { logoAJUPIS } from "../public/assets";
import Image from "next/image";



const Navbar = () =>{
    return (
      <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-white px-4"> 
        <div className="max-w-container h-full mx-auto py-1 font-ttleFont flex items-center
        justify-between">
          <div>
            <Image className="w-14" src={logoAJUPIS} alt="logoAJUPIS"/>
          </div>
          <div>
            <ul>
              <Link href="#Home"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer
              duration-300 nav-link"
              >
              <li>Home</li>  
              </Link>
            </ul>
          </div> 
        </div>
      </div>
    )
}
export default Navbar;
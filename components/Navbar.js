import Link from 'next/link'
import Image from 'next/image'
import { BsFillBellFill } from "react-icons/bs";
import { RiSettings5Fill } from "react-icons/ri";

const Navbar = () =>{
  return(
    <nav>
      <div className='links'>
        <Link href='/'>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: 'auto', height: '40px' }}
            alt="logo marvel, link to home"
          />
        </Link>
        <div className='menu'>
          <div className="menu-item">
            <Link href='/'>HOME</Link>
          </div>
          <div className="menu-item">
            <Link href='/characters'>PERSONAJES</Link>
          </div>
        </div>  
      </div>

      <div className='icons'>
        <div className="icon">
          <BsFillBellFill width={16}/>
        </div>
        <div className="icon">
          <RiSettings5Fill width={16}/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
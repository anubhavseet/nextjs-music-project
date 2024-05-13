
import Link from 'next/link';


function Navbar() {
  return (
  
<div className="fixed w-full z-10 m-4 px-16 md:px-24 lg:px-32">
  <nav className="container mx-auto flex items-center justify-between flex-wrap bg-teal-500 p-4 rounded-3xl">
    <div className="w-full block flex-grow md:flex md:items-center md:w-auto">
      <div className="text-sm sm:flex-grow md:flex md:justify-center">
        <Link href="/home">
          <div className="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4 cursor-pointer">
            Home
          </div>
        </Link>
        <Link href="/about">
          <div className="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4 cursor-pointer">
            About
          </div>
        </Link>
        <Link href="/contact">
          <div className="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white cursor-pointer">
            Contact
          </div>
        </Link>
      </div>
    </div>
  </nav>
</div>



  
  )
}

export default Navbar
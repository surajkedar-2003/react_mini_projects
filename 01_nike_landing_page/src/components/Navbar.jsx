import brand_logo from '../assets/brand_logo.png';

function Navbar() {
  return (
    <>
        <div className='flex flex-row justify-between items-center px-16 py-3'>
        <img src={brand_logo} className='w-[60px] cursor-pointer' alt="brand_logo"/>
        <div>
            <ul className='flex flex-row gap-8 font-semibold cursor-pointer'>
                <li>MENU</li>
                <li>LOCATION</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>
        </div>
        <button className='text-white bg-red-600 px-3 py-1 hover:bg-red-700'>Login</button>
        </div>
    </>
  )
}

export default Navbar
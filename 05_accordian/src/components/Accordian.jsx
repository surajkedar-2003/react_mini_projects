import { useState } from "react"

function Accordian() {
    const [isActive, setisActive] = useState(false);
  return (
    <>
        <div className="bg-white p-4 w-[500px] h-fit cursor-pointer" onClick={()=> setisActive(!isActive)}>
            <div className="flex justify-between items-center font-semibold text-xl">
                <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                <p className={isActive ? 'transition-transform text-3xl rotate-45':'transition-transform text-3xl rotate-0'}>+</p>
            </div>
            <div className={isActive ? 'transition-h ease-in-out duration-400 h-fit p-4' : 'transition-h ease-in-out duration-500 h-0 overflow-hidden'}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quia, maxime laboriosam natus a facilis sit omnis assumenda, enim voluptatum dignissimos eveniet iusto sint voluptatibus quod, consequuntur repellendus itaque. Blanditiis?
            </div>
        </div>
    </>
  )
}

export default Accordian
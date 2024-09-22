
function Accordian() {
  return (
    <>
        <div className="bg-white p-4 w-[500px] h-fit cursor-pointer">
            <div className="flex justify-between items-center font-semibold text-xl">
                <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                <p className="text-3xl">+</p>
            </div>
            <div className={`h-0 overflow-hidden`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quia, maxime laboriosam natus a facilis sit omnis assumenda, enim voluptatum dignissimos eveniet iusto sint voluptatibus quod, consequuntur repellendus itaque. Blanditiis?
            </div>
        </div>
    </>
  )
}

export default Accordian
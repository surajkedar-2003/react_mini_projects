import todo_list from '../assets/to-do-list.gif'
function Header() {
  return (
    <>
        <div className='bg-[#041E42] text-orange-50 italic font-serif h-24 flex flex-row justify-around content-baseline border-b'>
          <img src={todo_list} className='mix-blend-color' alt="" />
        <h1 className="text-7xl pt-3">TaskTrack</h1>
        <h2 className="text-4xl pt-7">Track. Manage. Achieve</h2>
        </div>
        
    </>
  )
}

export default Header
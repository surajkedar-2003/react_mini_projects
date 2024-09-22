import './App.css'
import Accordian from './components/Accordian'

function App() {

  return (
    <>
      <div className="w-full min-h-screen p-12 bg-pink-300 flex flex-col items-center gap-4 font-sans leading-7">
        <h1 className='text-3xl font-semibold'>Accordian</h1>
        <Accordian/>
        <Accordian/>
        <Accordian/>
      </div>
    </>
  )
}

export default App

import { useRef} from 'react'
import Cards from './Cards'

function Foreground() {
    const ref = useRef(null);
    const data = [
        {
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            filesize:".4mb",
            close:false,
            tag:{
                isOpen:true,
                tagTitle: 'download now',
                tagColor: 'green'
            }
        },
        {
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            filesize:".4mb",
            close:true,
            tag:{
                isOpen:true,
                tagTitle: 'download now',
                tagColor: 'blue'
            }
        },
        {
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            filesize:".5mb",
            close:true,
            tag:{
                isOpen:true,
                tagTitle: 'Upload',
                tagColor: 'green'
            }
        },
        {
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            filesize:".9mb",
            close:true,
            tag:{
                isOpen:false,
                tagTitle: 'Upload',
                tagColor: 'green'
            }
        }
    ];

  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-20 flex-wrap p-5'>
        {
            data.map((item)=>(
                <Cards data={item} reference={ref}/>
            ))
        }

    </div>
  )
}

export default Foreground
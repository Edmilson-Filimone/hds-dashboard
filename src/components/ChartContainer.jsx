/* eslint-disable react/prop-types */
import { useState } from "react"
//import ChartLine from "./ChartLine"

function ChartContainer({chart, type}) {
    const[category, setCategory] = useState('total')
  return (
    <>
        <section className="w-full h-[450px] border border-outline bg-white flex flex-col justify-between px-2 pt-14 shadow-xl">
            {chart}
            <ul className={`Buttons mx-auto text-[12px] relative flex flex-nowrap w-fit`}>
                <li className={`w-[105px] text-center p-1.5 border-x border-t border-b-0 border-outline cursor-pointer hover:border-slate-400 ${category == 'total' ? 'bg-btn-clicked text-white' : 'bg-transparent'}`} title="Display all data" onClick={()=> setCategory('total')}>Total</li>
                <li className={`w-[105px] text-center p-1.5 border-x border-t border-b-0 border-outline cursor-pointer hover:border-slate-400 ${category == 'sync' ? 'bg-btn-clicked text-white' : 'bg-transparent'}`} title="Display synchronized forms" onClick={()=> setCategory('sync')}>Synchronized</li>
                <li className={`w-[105px] text-center p-1.5 border-x border-t border-b-0 border-outline cursor-pointer hover:border-slate-400 ${category == 'pending' ? 'bg-btn-clicked text-white' : 'bg-transparent'}`} title="Display pending forms" onClick={()=> setCategory('pending')}>Pending</li>
                <li className={`w-[105px] text-center p-1.5 border-x border-t border-b-0 border-outline cursor-pointer hover:border-slate-400 ${category == 'error' ? 'bg-btn-clicked text-white' : 'bg-transparent'}`} title="Display errors forms" onClick={()=> setCategory('error')}>Error</li>
                {type=='pie' ? (<li className="absolute w-full h-full"></li>) : null}
            </ul>
        </section>
    </> 
  )
}

export default ChartContainer
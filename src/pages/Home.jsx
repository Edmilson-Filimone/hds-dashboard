import Card from "../components/Card"
import { HiOutlineLogout, HiOutlineLogin} from 'react-icons/hi'
import {AiOutlineUserAdd, AiOutlineUserDelete ,AiOutlineUserSwitch} from 'react-icons/ai'
import {BsHouseAdd, BsHouseCheck, BsPeople} from 'react-icons/bs'
import {MdExpandLess, MdExpandMore, MdOutlinePregnantWoman} from 'react-icons/md'
import {BiChild} from 'react-icons/bi'
import { useState } from "react"
import ChartContainer from "../components/ChartContainer"
import ChartLine from "../components/ChartLine"
import ChartBar from "../components/ChartBar"
import { Table } from "../components/Table"
import { dataB } from "../../public/mockData"
import ChartPie from "../components/ChartPie"

function Home() {
  //State to control expand card area
  const [expandCardArea, setExpandCardArea] = useState(false) 
  return (
    <section className="px-5">
      <div className="cards">
        <section className="grid gap-5 md:w-fit xl:w-full md:grid-cols-2 xl:flex xl:justify-between xl:mx-auto max-w-[2400px]">
          <Card label={'Household Registration'} value={45} balance={23} icon={<BsHouseAdd className="text-[42px] font-thin "/>} iconBg={'bg-white'} iconColor={'text-orange-300'}/>
          <Card label={'Household Visit'} value={45} balance={23} icon={<BsHouseCheck className="text-[42px] font-thin"/>} iconBg={'bg-white'} iconColor={'text-emerald-300'}/>
          <Card label={'Member Enumeration'} value={45} balance={23} icon={<AiOutlineUserAdd className="text-[42px] font-thin "/>} iconBg={'bg-white'} iconColor={'text-red-300'}/>
          <Card label={'Change Head Household'} value={45} balance={23} icon={<AiOutlineUserSwitch className="text-[42px] font-thin "/>} iconBg={'bg-white'} iconColor={'text-blue-300'}/>
        </section>
        <div className={`card-wrapper ${expandCardArea == true ? 'block' : 'hidden'}`}>
          <section className="grid gap-5 md:w-fit xl:w-full md:grid-cols-2 xl:flex xl:justify-between xl:mx-auto max-w-[2400px]">
            <Card label={'Marital Relationship'} value={45} balance={23} icon={<BsPeople className="text-[42px] font-thin "/>} iconBg={'bg-white'} iconColor={'text-orange-300'}/>
            <Card label={'External InMigration'} value={45} balance={23} icon={<HiOutlineLogout className="text-[42px] font-thin"/>} iconBg={'bg-white'} iconColor={'text-emerald-300'}/>
            <Card label={'Internal InMigration'} value={45} balance={23} icon={<HiOutlineLogin className="text-[42px] font-thin "/>} iconBg={'bg-white'} iconColor={'text-red-300'}/>
            <Card label={'Death Registration'} value={45} balance={23} icon={<AiOutlineUserDelete className="text-[42px] font-thin "/>} iconBg={'bg-white'} iconColor={'text-blue-300'}/>
          </section>
          <section className="grid gap-5 md:w-fit xl:w-full md:grid-cols-2 xl:flex xl:justify-between xl:mx-auto max-w-[2400px]">
            <Card label={'Pregnancy Registration'} value={45} balance={23} icon={<MdOutlinePregnantWoman className="text-[42px] font-thin "/>} iconBg={'bg-white'} iconColor={'text-orange-300'}/>
            <Card label={'Birth Registration'} value={45} balance={23} icon={<BiChild className="text-[42px] font-thin "/>} iconBg={'bg-white'} iconColor={'text-emerald-300'}/>
            <span className="placeholder w-[300px]"></span>
            <span className="placeholder w-[300px]"></span>
          </section>
        </div>
        <button className="flex justify-center items-center my-2 mx-auto w-[50px] h-[30px] border border-outline rounded-sm bg-white" title={expandCardArea ? 'Collapse': 'Expand'} onClick={()=> setExpandCardArea(!expandCardArea)}>
          {expandCardArea ? <MdExpandLess className="text-3xl text-title"/> : <MdExpandMore className="text-3xl text-title"/>}
        </button>
        {/*Charts*/}
        <section className="w-full flex flex-wrap xl:flex-nowrap gap-6 mb-6">
          <ChartContainer chart={<ChartPie/>} type="pie"/>
          <ChartContainer chart={<ChartBar/>} type="bar"/>
        </section>
        <section>
          <ChartContainer chart={<ChartLine/>}/>
        </section>
        {/*Table*/}
        <section className="overflow-auto my-6">
          <Table dataList={dataB}/>
        </section>
      </div>
    </section>
  )
}

export default Home
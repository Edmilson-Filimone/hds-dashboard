import Card from "../components/Card"
import { HiOutlineLogout, HiOutlineLogin, HiUserGroup} from 'react-icons/hi'
import {AiOutlineUserAdd, AiOutlineUserDelete ,AiOutlineUserSwitch} from 'react-icons/ai'
import {BsHouseAdd, BsHouseAddFill, BsHouseCheck, BsPeople} from 'react-icons/bs'
import {MdExpandLess, MdExpandMore, MdOutlinePregnantWoman} from 'react-icons/md'
import {RiUserSharedFill, RiUserUnfollowFill} from 'react-icons/ri'
import {FaHouseUser} from 'react-icons/fa'
import {BiChild} from 'react-icons/bi'
import { useState } from "react"
import ChartContainer from "../components/ChartContainer"
import ChartBar from "../components/ChartBar"
import { Table } from "../components/Table"
import { dataB } from "../../public/mockData"
import ChartPie from "../components/ChartPie"
import CardMain from "../components/CardMain"
import ChartPyramid from "../components/ChartPyramid"
import LineChartContainer from "../components/LineChartContainer"

function Home() {
  //State to control expand card area
  const [expandCardArea, setExpandCardArea] = useState(false) 
  return (
    <section className="px-5">
      <div className="cards block-1">
        <h3 className="text-title-alt text-lg font-semibold">General Summary</h3>
        <section className="grid gap-5 md:w-fit xl:w-full md:grid-cols-2 xl:flex xl:justify-between xl:mx-auto max-w-[2400px]">
          <CardMain label={'Total Households'} value={1342} icon={<BsHouseAddFill className="text-[25px] font-thin "/>} iconBg={'bg-costume-dark'} genderStatus={false}/>
          <CardMain label={'Total Individuals'} value={78424} icon={<HiUserGroup className="text-[25px] font-thin "/>} iconBg={'bg-costume-blue'} genderStatus={true}/>
          <CardMain label={'Total Residents'} value={3402} icon={<FaHouseUser className="text-[25px] font-thin "/>} iconBg={'bg-costume-green'} genderStatus={true}/>
          <CardMain label={'Total Outmigrated'} value={2162} icon={<RiUserSharedFill className="text-[25px] font-thin "/>} iconBg={'bg-costume-pink'} genderStatus={true}/>
          <CardMain label={'Total Deaths'} value={4270} icon={<RiUserUnfollowFill className="text-[25px] font-thin text- "/>} iconBg={'bg-rose-800'} genderStatus={true}/>
        </section>
        <section className="w-full flex flex-wrap xl:flex-nowrap gap-6 mb-6">
          <ChartContainer chart={<ChartPie/>} type="pie" label={"Out events status"}/>
          <ChartContainer chart={<ChartPyramid />} type="bar" label={"Population by age and gender"}/>
        </section>
      </div>
      <div className="block-2">
        <h3 className="text-title-alt text-lg font-bold">Data collection status - Last 15 to 30 days</h3>
        <section className="grid gap-5 md:w-fit xl:w-full md:grid-cols-2 xl:flex xl:justify-between xl:mx-auto max-w-[2400px]">
          <Card label={'Household Registration'} value={45} balance={23} icon={<BsHouseAdd className="text-[42px] font-thin "/>} iconBg={'bg-white'} iconColor={'text-orange-400'}/>
          <Card label={'Household Visit'} value={45} balance={23} icon={<BsHouseCheck className="text-[42px] font-thin"/>} iconBg={'bg-white'} iconColor={'text-emerald-400'}/>
          <Card label={'Member Enumeration'} value={45} balance={23} icon={<AiOutlineUserAdd className="text-[42px] font-thin "/>} iconBg={'bg-white'} iconColor={'text-red-400'}/>
          <Card label={'Change Head Household'} value={45} balance={23} icon={<AiOutlineUserSwitch className="text-[42px] font-thin "/>} iconBg={'bg-white'} iconColor={'text-blue-400'}/>
        </section>
        <section className="grid gap-5 md:w-fit xl:w-full md:grid-cols-2 xl:flex xl:justify-between xl:mx-auto max-w-[2400px]">
            <Card label={'Marital Relationship'} value={45} balance={23} icon={<BsPeople className="text-[42px] font-thin "/>} iconBg={'bg-white'} iconColor={'text-orange-400'}/>
            <Card label={'External InMigration'} value={45} balance={23} icon={<HiOutlineLogout className="text-[42px] font-thin"/>} iconBg={'bg-white'} iconColor={'text-emerald-400'}/>
            <Card label={'Internal InMigration'} value={45} balance={23} icon={<HiOutlineLogin className="text-[42px] font-thin "/>} iconBg={'bg-white'} iconColor={'text-red-400'}/>
            <Card label={'Death Registration'} value={45} balance={23} icon={<AiOutlineUserDelete className="text-[42px] font-thin "/>} iconBg={'bg-white'} iconColor={'text-blue-400'}/>
          </section>
        <div className={`card-wrapper ${expandCardArea == true ? 'block' : 'hidden'}`}>
          <section className="grid gap-5 md:w-fit xl:w-full md:grid-cols-2 xl:flex xl:justify-between xl:mx-auto max-w-[2400px]">
            <Card label={'Pregnancy Registration'} value={45} balance={23} icon={<MdOutlinePregnantWoman className="text-[42px] font-thin "/>} iconBg={'bg-white'} iconColor={'text-orange-400'}/>
            <Card label={'Birth Registration'} value={45} balance={23} icon={<BiChild className="text-[42px] font-thin "/>} iconBg={'bg-white'} iconColor={'text-emerald-400'}/>
            <span className="placeholder w-[300px]"></span>
            <span className="placeholder w-[300px]"></span>
          </section>
        </div>
        <button className="flex justify-center items-center my-2 mx-auto w-[50px] h-[30px] border border-outline rounded-sm bg-white shadow-xl" title={expandCardArea ? 'Collapse': 'Expand'} onClick={()=> setExpandCardArea(!expandCardArea)}>
          {expandCardArea ? <MdExpandLess className="text-3xl text-title"/> : <MdExpandMore className="text-3xl text-title"/>}
        </button>
        {/*Charts*/}
        <section className="w-full flex flex-wrap xl:flex-nowrap gap-6 mb-6">
          <ChartContainer chart={<ChartPie/>} type="pie" label={"Data validation status"}/>
          <ChartContainer chart={<ChartBar/>} type="bar" controls={true} label={"Data collection status per form"}/>
        </section>
      </div>
      <div className="block-3 my-3">
        <h3 className="text-title-alt text-lg font-semibold">Fieldworkers Performance</h3>
        <section className="my-3">
          <LineChartContainer/>
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
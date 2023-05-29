import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { data } from "../../public/mockData"

function ChartBar() {
  return (
    <ResponsiveContainer width={"95%"} height={"80%"}>
          <BarChart width={400} height={400} data={data}>
            <XAxis dataKey="Date" angle={0}/>
            <YAxis/>
            <Tooltip/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Bar  dataKey="HouseHold" stroke="#99c1f1" fill="#99c1f1"/>
          </BarChart>
    </ResponsiveContainer>)
    }

export default ChartBar
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { data } from "../../public/mockData"

function ChartLine() {
  return (
    <ResponsiveContainer width={"95%"} height={"80%"}>
          <LineChart width={400} height={400} data={data}>
            <XAxis dataKey="Date" angle={0}/>
            <YAxis/>
            <Tooltip/>
            <CartesianGrid strokeDasharray="2 2"/>
            <Line type="monotone" dataKey="HouseHold" stroke="#52a0ea" />
          </LineChart>
    </ResponsiveContainer>
  )
}

export default ChartLine
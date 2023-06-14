import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { dataD } from "../../public/mockData"

function ChartPyramid() {
  return (
    <ResponsiveContainer width={"90%"} height={"95%"}>
          <BarChart width={400} height={450} data={dataD} barGap={0} layout="vertical" stackOffset="sign">
            <XAxis type="number" reversed tickFormatter={(value)=>{return value < 0 ? -value : value}}/>
            <YAxis dataKey="Date" type="category" reversed={true} orientation="right" angle={0}/>
            <Tooltip formatter={(value) => {return value < 0 ? -value : value}}/>
            <Legend/>
            <Bar  dataKey="Female" strokeWidth={0.1} stroke="black" barSize={8} radius={[0, 10, 10, 0]} stackId='stack' fill="#f06595"/>
            <Bar  dataKey="Male" strokeWidth={0.1} stroke="black" barSize={8} radius={[0, 10, 10, 0]} stackId='stack' fill="#8bacd6"/>
          </BarChart>
    </ResponsiveContainer>)
    }

export default ChartPyramid
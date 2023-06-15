import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { dataD } from "../../public/mockData"

function ChartPyramid() {
  "#DD2567  #ced4da"
  return (
    <ResponsiveContainer width={"90%"} height={"95%"}>
          <BarChart width={400} height={450} data={dataD} barGap={0} layout="vertical" stackOffset="sign">
            <XAxis type="number" reversed tickFormatter={(value)=>{return value < 0 ? -value : value}}/>
            <YAxis dataKey="Date" type="category" reversed={true} orientation="right" angle={0}/>
            <Tooltip formatter={(value) => {return value < 0 ? -value : value}}/>
            <Legend/>
            <Bar  dataKey="Female" strokeWidth={0.1} stroke="black" barSize={8} radius={[10, 10, 0, 10]} stackId='stack' fill="#a4b5c4"/>
            <Bar  dataKey="Male" strokeWidth={0.1} stroke="black" barSize={8} radius={[10, 10, 0, 10]} stackId='stack' fill="#4896ea"/>
          </BarChart>
    </ResponsiveContainer>)
    }

export default ChartPyramid
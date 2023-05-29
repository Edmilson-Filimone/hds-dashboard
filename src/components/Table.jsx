import { useState } from "react"

/* eslint-disable react/prop-types */
export function Table({dataList}){
    //State for max number of displayed rows on the table
    const [maxRow, setMaxRow] = useState(5)
    //Function for handle max number of rows change
     const handleMaxRowChange = (e) => {
            setMaxRow(e.target.value)
    }

    return (
        <section className="overflow-auto">
            <table className="w-full table-auto border-collapse my-10 text-sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Field worker</th>
                        <th>Total Registered</th>
                        <th>Synchronized</th>
                        <th>Pending</th>
                        <th>Error</th>
                    </tr>
                </thead>
                <tbody>
                    {dataList.slice(0, maxRow).map((item)=>
                    (<tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.total}</td>
                        <td>{item.synchronized}</td>
                        <td>{item.pending}</td>
                        <td>{item.error}</td>
                        <td>
                            <button className="p-1 mx-2 rounded-md w-[60px] bg-blue-300 text-white hover:brightness-90">See</button>
                        </td>
                    </tr>)
                    )}
            </tbody>
            <div className="flex items-center gap-2 mt-4 text-title">
                <label htmlFor="row">Rows</label>
                <input className="border border-outline p-1.5 w-16" type="number" name="row" id="1" value={maxRow} onChange={handleMaxRowChange}/>
            </div>
        </table>
    </section>
    )
}
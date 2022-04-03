import React from 'react'
import { IRights } from '../../../types'

const RightsTable = (option: IRights) => (
  <div className="rounded-3xl mt-2.5 border border-solid border-borderGray min-w-180">
    <table className="bg-white text-left table-auto rounded-3xl text-sm w-full">
      <thead className=" border-b border-solid border-borderGray font-medium">
        <tr>
          <th className="w-58 border-r border-solid border-borderGray py-3 pl-5">Right</th>
          <th className="p-3">Description</th>
        </tr>
      </thead>
      <tbody>
        {option.items.map((item, index) => (
          <tr key={index} className="border-t border-solid border-borderGray ">
            <td className="w-58 border-r border-solid border-borderGray p-5">{item[0]}</td>
            <td className="p-5">{item[1]}</td>
          </tr>
        ))}
      </tbody>
      <tbody></tbody>
    </table>
  </div>
)

export default RightsTable

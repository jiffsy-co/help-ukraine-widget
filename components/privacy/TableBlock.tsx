import React from 'react'

type Table = {
  tableTitle: string
  whenData: string
  descOfData: string[]
  legalBasic: string
  reasons: string
}

const TableBlock = (options: Table) => (
  <div className="py-3 w-full overflow-y-scroll	">
    <span className="font-bold text-base md:text-xl leading-5">{options.tableTitle}</span>
    <div className="w-180 md:w-full bg-white border border-solid border-borderGray table-auto rounded-3xl mt-2.5">
      <table className="w-full text-center text-sm">
        <thead>
          <tr className="border-b border-solid border-borderGray p-3 font-medium">
            <th className="border-r border-solid border-borderGray p-3">We collect data when</th>
            <th className="border-r border-solid border-borderGray p-3">Description of data</th>
            <th className="border-r border-solid border-borderGray p-3">Legal basic</th>
            <th>Reasons for processing</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-r w-48 border-solid border-borderGray p-5 align-baseline text-left">
              {options.whenData}
            </td>
            <td className="border-r border-solid border-borderGray align-baseline">
              <div>
                <ul className="list-disc text-left w-42 p-3 ml-3.5">
                  {options.descOfData.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </td>
            <td className="border-r border-solid border-borderGray p-5 align-baseline text-left">
              <span>{options.legalBasic}</span>
            </td>
            <td className="p-5 align-baseline text-left">
              <span>{options.reasons}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)

export default TableBlock

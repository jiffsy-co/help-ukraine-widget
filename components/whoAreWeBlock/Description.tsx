import React from 'react'
import { IDescription } from '../../types'
import Button from '../customComponents/Button'

const Description = (options: IDescription) => {
  return (
    <div>
      <div>
        <a
          href={options.link}
          target="_blank"
          rel="noreferrer"
          className="w-fit float-left mt-0.5 opacity-70 hover:opacity-100 transition"
        >
          {options.logo}
        </a>
        <span className="ml-2.5">{options.description}</span>
      </div>
      <div className="w-25.5 my-7 h-11">
        <Button title="Learn more" location={options.link} />
      </div>
    </div>
  )
}

export default Description

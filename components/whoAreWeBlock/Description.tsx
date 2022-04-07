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
      <div className="my-7 h-11 w-auto">
        <Button title="Learn more" href={options.link} isExternal className='w-auto inline-flex' />
      </div>
    </div>
  )
}

export default Description

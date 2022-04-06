import React from 'react'
import { IDescription } from '../../types'
import Button from '../customComponents/Button'

const Description = (options: IDescription) => {
  return (
    <div>
      <div>
        <div className="w-fit float-left mt-0.5">{options.logo}</div>
        <span className="ml-10px">{options.description}</span>
      </div>
      <div className="w-25.5 my-7">
        <Button title="Learn more" location={options.link} />
      </div>
    </div>
  )
}

export default Description

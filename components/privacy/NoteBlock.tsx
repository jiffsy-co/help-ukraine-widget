import React from 'react'

type Note = {
  text: string
  textBlock: string
}

const NoteBlock = (option: Note) => (
  <div
    className="bg-beige text-base leading-5 rounded-2xl md:rounded-3xl
   md:text-lg md:leading-6
   h-full
   flex items-center
   my-2.5 md:my-3.5
   pl-2.5 md:pl-5
   "
  >
    <div className="inline">
      <span className="font-bold">{option.textBlock}</span>
      <span>{option.text}</span>
    </div>
  </div>
)

export default NoteBlock

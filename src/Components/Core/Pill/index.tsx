import React from "react"

interface IPillProps {
  colour: string
  children: React.ReactNode
}
const Pill = ({ colour, children }: IPillProps): React.ReactElement => {
  return (
    <div
      className={`rounded-2xl align-middle py-1 px-3 my-3 leading-4 bg-${colour}`}
    >
      {children}
    </div>
  )
}

export default Pill

import React, { ReactNode } from "react"

// Styles
import "./Card.styles.css"

interface ICardProps {
  theme: string
  rounded?: boolean
  children: ReactNode
}
const Card = ({
  theme,
  rounded = false,
  children,
}: ICardProps): React.ReactElement => {
  return (
    <div
      className={`
      card
      px-6
      drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]
      bg-white
      ${theme === "dark" ? "border-t-dark" : "border-t-ctaBlue-100"} ${
        rounded ? "rounded-xl" : "border-t-4"
      }`}
    >
      <div>{children}</div>
    </div>
  )
}

export default Card

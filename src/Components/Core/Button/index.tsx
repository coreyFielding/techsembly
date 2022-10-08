import React from "react"

interface IButtonProps {
  theme: string
  outline?: boolean
  hover?: boolean
  children: React.ReactNode
  onClick: (props: any) => void
  classes?: any
}

const Button = ({
  theme,
  outline = false,
  children,
  classes,
}: IButtonProps): React.ReactElement => {
  return (
    <button
      className={`
          px-12 
          hover:px-14
          transition ease-in-out
          py-4
          mx-auto
          rounded-lg
          ${
            outline
              ? `border-2 ${
                  theme === "blue"
                    ? "text-ctaBlue-100 border-ctaBlue-100"
                    : "border-dark"
                }`
              : `${
                  theme === "blue"
                    ? "text-white bg-ctaBlue-100"
                    : "text-white bg-dark"
                }`
          }
          rounded-lg
          ${classes}`}
    >
      <div>{children}</div>
    </button>
  )
}

export default Button

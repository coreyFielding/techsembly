import React from "react"

// Components
import Button from "../Core/Button"

const Hero = (): React.ReactElement => {
  return (
    <section>
      <div className="container mx-auto">
        <h1 className="md:px-0 m-0 mt-10 xs:text-4xl lg:text-5xl text-center font-circularBold black">
          Join us with your team for 30 days.
        </h1>
        <h2 className="xs:mt-10 lg:mt-4 text-center text-xl font-circularLight text-grey">
          Try Techsembly free, no obligations.
        </h2>

        <div className="flex flex-col">
          <Button
            theme="blue"
            outline={true}
            onClick={() => {}}
            classes="m-auto mt-10 mb-6 px-3 py-3 hover:bg-ctaBlue"
          >
            <span className="font-circularMedium">Start your free trial</span>
          </Button>

          <span className="text-sm leading-5 text-center font-circularMedium">
            No credit card required.
          </span>
        </div>
      </div>
    </section>
  )
}

export default Hero

import React from "react"

// Components
import Card from "../../Core/Card"
import Button from "../../Core/Button"
import Pill from "../../Core/Pill"

// Images
import { ReactComponent as Tick } from "./Tick.svg"
import { useState } from "react"

export interface IProductCardProps {
  heading: string
  description: string
  price: string
  cta?: {
    buttonText: string
    details: string[]
  }
  fee: string
  additionalInfo?: any
  addons?: {
    text: string
    price: string
  }[]
  benefits: string[]
  theme: string
  rounded?: boolean
}

const ProductCard = ({
  heading,
  description,
  price,
  cta,
  fee,
  additionalInfo,
  addons,
  benefits,
  ...props
}: IProductCardProps): React.ReactElement => {
  const [expand, setExpand] = useState(false)

  const handleExpand = () => setExpand(!expand)

  return (
    <Card {...props}>
      <div>
        {heading && (
          <div className="text-center mt-10 mb-4 text-2xl">
            <h3>{heading}</h3>
          </div>
        )}

        {description && (
          <div className="text-center h-10">
            <span className="font-normal text-md leading-4 text-grey">
              {description}
            </span>
          </div>
        )}

        {price && (
          <div className="border-t-grey text-center mt-12 mb-4">
            <h1 className="text-4xl font-circularMedium">{price}</h1>
            <h2></h2>
          </div>
        )}

        {cta && (
          <div className="flex flex-col pb-4">
            <ul className="h-20 mx-auto mb-4 text-center font-circularBold">
              {cta.details.map((item) => {
                const length = cta.details.length
                return (
                  <li
                    className={`${
                      length >= 3 &&
                      "last:text-grey last:mt-2 last:font-circularLight"
                    }`}
                  >
                    {item}
                  </li>
                )
              })}
            </ul>
            <Button
              theme={props.theme}
              onClick={() => {}}
              classes="mx-auto w-2/3"
            >
              <span>{cta.buttonText}</span>
            </Button>
          </div>
        )}

        {!expand ? (
          <>
            <div
              className="flex justify-center font-circularMedium cursor-pointer"
              onClick={() => handleExpand()}
            >
              See less
            </div>
            {fee && (
              <div className="flex justify-between py-6 mt-6 border-t-[.5px] border-t-grey">
                <span className="text-grey font-circularItalic">
                  Transaction fee
                </span>
                <span className="font-circularMedium">{fee}</span>
              </div>
            )}
            {additionalInfo && (
              <div className="pt-2 pb-6 border-t-[.5px] border-t-grey">
                <div className="flex">
                  <Pill colour="purple">
                    <span className="font-circularBold text-sm">
                      {additionalInfo.pillText}
                    </span>
                  </Pill>
                  <h2 className="font-circularBold m-auto ml-4">
                    {additionalInfo.heading}
                  </h2>
                </div>

                <p>{additionalInfo.description}</p>
              </div>
            )}
            {addons && (
              <div className="pb-12 border-t-[.5px] border-t-grey">
                <h1 className="text-xl py-8">Storefront/Vendors addons</h1>
                <ul>
                  {addons.map(({ text, price }) => {
                    return (
                      <div className="flex justify-between leading-10">
                        <li className="font-circularItalic text-grey">
                          {text}
                        </li>
                        <li className="font-circularMedium">{price}</li>
                      </div>
                    )
                  })}
                </ul>
              </div>
            )}
            {benefits && (
              <ul className="py-4 border-t-[.5px] border-t-grey">
                {benefits.map((item) => {
                  return (
                    <div className="flex leading-10">
                      <span className="mt-3 mr-2">
                        <Tick />
                      </span>

                      <span className="font-circularItalic text-grey leading-2">
                        {item}
                      </span>
                    </div>
                  )
                })}
              </ul>
            )}
          </>
        ) : (
          <div
            className="flex justify-center pb-4 font-circularMedium cursor-pointer"
            onClick={() => handleExpand()}
          >
            See more
          </div>
        )}
      </div>
    </Card>
  )
}

export default ProductCard

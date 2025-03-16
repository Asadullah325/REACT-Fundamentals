import React from 'react'

const Card = ({channel, title, image, No, year}) => {

    console.log({channel, title, image, No, year});
    

  return (
    <>
      <div className="flex flex-col items-center m-4 gap-6 p-7 md:flex-row md:gap-8 rounded-lg bg-gray-900 text-white">
        <div>
          <img
            className="size-48 shadow-xl rounded-md"
            alt=""
            src={image}
          />
        </div>
        <div className="flex items-center flex-col md:items-start">
          <span className="text-2xl font-medium">{channel}</span>
          <span className="font-medium text-sky-500">{title}</span>
          <span className="flex gap-2 font-medium text-white dark:text-gray-400">
            <span>No. {No}</span>
            <span>·</span>
            <span>{year}</span>
          </span>
        </div>
      </div>
    </>
  )
}

export default Card

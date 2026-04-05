import React from 'react'

const CustomButton = ({text}) => {
  return (
    <button className='bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-700 hover:shadow-2xl shadow-blue-500 cursor-pointer'>
        {text}
    </button>
  )
}

export default CustomButton  
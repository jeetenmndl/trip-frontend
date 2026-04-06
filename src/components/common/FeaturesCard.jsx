import { Angry, User } from 'lucide-react'
import React from 'react'

const FeaturesCard = ({feature}) => {
  return (
    <div className='border border-gray-300 rounded-lg p-4'>
        <feature.Icon size={40} className='mb-4 text-blue-600' />

        <h3 className='text-2xl font-medium mb-4'>{feature.title}</h3>

        <p className='text-gray-600'>{feature.description}</p>
    </div>
  )
}

export default FeaturesCard
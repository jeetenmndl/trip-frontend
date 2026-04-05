import { Angry, User } from 'lucide-react'
import React from 'react'

const FeaturesCard = () => {
  return (
    <div className='border border-gray-300 rounded-lg p-4'>
        <Angry size={40} className='mb-4 text-blue-600' />

        <h3 className='text-2xl font-medium mb-4'>24/7 Availability</h3>

        <p className='text-gray-600'>Our team is available around the clock to assist you with any questions or concerns.</p>
    </div>
  )
}

export default FeaturesCard
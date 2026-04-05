import React from 'react'
import FeaturesCard from '../common/FeaturesCard'

const Features = () => {
  return (
    <section className='px-20 py-20'>

        {/* heading */}
        <div>
            <h2 className='text-5xl font-bold text-center mb-16'>Our Features</h2>
        </div>

        {/* content  */}
        <div className='grid grid-cols-4 gap-6'>
            <FeaturesCard />
            <FeaturesCard />
            <FeaturesCard />
            <FeaturesCard />
        </div>

    </section>
  )
}

export default Features
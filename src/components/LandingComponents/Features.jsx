import React from 'react'
import FeaturesCard from '../common/FeaturesCard'
import { PhoneCall, ShieldCheck, Smile, Zap } from 'lucide-react'

const Features = () => {

  let featuresData = [
    {
      title: "24/7 Support",
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque  adipisicing elit. Voluptas, eaque.",
      Icon: PhoneCall
    },
    {
      title: "Secure Payments",
      description: "We ensure safe transactions with advanced encryption and reliable systems protecting your financial data.",
      Icon: ShieldCheck
    },
    {
      title: "Fast Performance",
      description: "Experience lightning fast loading speeds and smooth interactions optimized for efficiency and productivity.",
      Icon: Zap
    },
    {
      title: "User Friendly",
      description: "Our intuitive interface makes navigation simple, helping users easily access features without confusion or delay.",
      Icon: Smile
    }
  ]
  return (
    <section className='px-20 py-20'>

      {/* heading */}
      <div>
        <h2 className='text-5xl font-bold text-center mb-16'>Our Features</h2>
      </div>

      {/* content  */}
      <div className='grid grid-cols-4 gap-6'>
        {
          featuresData.map((feature, index)=>{
            return (
              <FeaturesCard feature={feature} key={index} />
            )
          })
        }
      </div>

    </section>
  )
}

export default Features
import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div>
        <section className="flex flex-col lg:flex-row w-full p-8 min-h-screen justify-between items-center space-x-1 lg:items-stretch">
            <div className='bg-slate-300 rounded lg:w-1/2 flex flex-col justify-center lg:text-left space-y-7 '>
                <h1 className='text-center lg:text-4xl font-bold text-2xl p-1'>Certified Applied AI Engineering</h1>
                <p className='text-center lg:text-left p-2'>Applied Artificial Intelligence Engineering focuses on designing, developing, and deploying AI-powered systems 
                    to solve real-world problems. It integrates principles of computer science, data analytics, and machine learning to create intelligent
                     solution. Engineers in this field work on diverse applications such as automation, natural language processing, and predictive analytics.
                      The role involves optimizing algorithms, ensuring scalability, and maintaining ethical AI practices. By leveraging cutting-edge technologies, Applied AI engineers enhance
                     efficiency and decision-making across industries. This discipline bridges the gap between theoretical AI research and practical implementation for impactful outcomes.</p>
                     <div className='text-center mb-2 p-5'>
                <button className='text-center text-red-50 rounded bg-slate-700 h-12 w-40  '> Get started </button>
                </div>
                </div>
            <div className='lg:w-1/2 '>
                <img className='rounded-lg shadow-lg w-full h-full object-cover' src = "/AiPic.jpeg" />
            </div>
        </section>
    </div>
  )
}

export default HeroSection
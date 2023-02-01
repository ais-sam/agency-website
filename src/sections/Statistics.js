'use content'
import React from 'react'

const Statistics = () => {
  return (
    <section className="py-20 bg-statistics bg-no-repeat bg-cover bg-fixed">
    <div className="container ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center gap-x-64 lg:gap-x-0">

            <div className="flex gap-3 items-end">
                <div className="w-20 h-20 rounded-sm bg-w-yellow flex items-center justify-center">
                    <i className="fa-solid fa-list-check text-white text-4xl"></i>
                </div>
                <div className="flex flex-col text-white">
                    <strong className="text-3xl font-bold mb-1">4800</strong>
                    <span className="uppercase text-xs font-semibold">project completed</span>
                </div>
            </div>

            <div className="flex gap-3 items-end">
                <div className="w-20 h-20 rounded-sm bg-w-yellow flex items-center justify-center">
                    <i className="fa-solid fa-user-tie text-white text-4xl"></i>
                </div>
                <div className="flex flex-col text-white">
                    <strong className="text-3xl font-bold mb-1">1000</strong>
                    <span className="uppercase text-xs font-semibold">our staff</span>
                </div>
            </div>

            <div className="flex gap-3 items-end">
                <div className="w-20 h-20 rounded-sm bg-w-yellow flex items-center justify-center">
                    <i className="fa-solid fa-headset text-white text-4xl"></i>
                </div>
                <div className="flex flex-col text-white">
                    <strong className="text-3xl font-bold mb-1">350</strong>
                    <span className="uppercase text-xs font-semibold">services provide</span>
                </div>
            </div>

            <div className="flex gap-3 items-end">
                <div className="w-20 h-20 rounded-sm bg-w-yellow flex items-center justify-center">
                    <i className="fa-regular fa-face-smile text-white text-4xl"></i>
                </div>
                <div className="flex flex-col text-white">
                    <strong className="text-3xl font-bold mb-1">7650</strong>
                    <span className="uppercase text-xs font-semibold">happy customers</span>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Statistics
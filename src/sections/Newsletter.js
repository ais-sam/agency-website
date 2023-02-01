

import React from 'react'

const Newsletter = () => {
  return (
    <section className="pt-2 ">
    <div className="container">
        <div className="relative bg-[url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80')] bg-center translate-y-8 rounded-md overflow-hidden">
            <div className="text-center bg-[#3ea9e3af] text-white py-12">
                <h3 className="uppercase mb-2 font-bold text-3xl font-roboto-con">join our newsletter</h3>
                <p className="mb-2">Sing Up to our Newsletter and get our latest news update</p>
                <form action="" className="py-2 flex items-center mx-auto md:w-1/2 justify-center rounded-md overflow-hidden ">
                    <input type="email" name="" id="" className="p-3 placeholder:text-sm rounded-l-md basis-2/3 focus:outline-none text-w-black" placeholder="Enter email address" />
                    <button type="submit" className="capitalize bg-w-grey text-white py-3 px-2 rounded-r-md">subscribe</button>
                </form>
            </div>
        </div>
    </div>
</section> 
  )
}

export default Newsletter
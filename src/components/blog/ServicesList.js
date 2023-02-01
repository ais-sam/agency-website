import React from 'react'

const ServicesList = () => {
    const services = ["UX/UI Design","Web development","Branding & Quiz","Search Optimization","Graphic Design","Advance Analytic"]
  return (
    <div className="px-2  mb-12">
      <h4 className="uppercase text-xl font-bold font-roboto-con mb-3">
        services
      </h4>
      <ul className="text-[15px]">
        {services.map((el,index)=><li key={index} className="py-2 border-b border-b-gray-200">{el}</li>)}
      </ul>
    </div>
  );
}

export default ServicesList
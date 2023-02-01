

import { ServiceCard } from "../components/index";

const Services = ({className}) => {
    const services = [
      "digital products",
      "online marketing",
      "graphic design",
      "application development",
      "web development",
      "ui/ux design",
    ];
  return (
    <section className={`${className} py-20 bg-w-grey`}>
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 font-roboto-con">
                <div className="text-white md:col-span-2">
                    <h2 className="font-bold uppercase text-section mb-2 tracking-wider ">WE SHAPE THE PERFECT SOLUTIONS</h2>
                    <p className="text-p-grey leading-6 font-roboto ">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic
                        country, in which roasted parts of sentences fly into your mouth.</p>
                </div>
                {services.map((el,index)=><ServiceCard key={index} service={el} />)}
            </div>
        </div>
    </section>
  )
}

export default Services
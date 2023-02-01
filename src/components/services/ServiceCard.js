

const ServiceCard = ({service}) => {
    const [s1,s2] = service.split(" ")
    const services = {
        "digital products" : "fa-solid fa-lightbulb",
        "online marketing" : "fa-solid fa-bullseye",
        "graphic design" : "fa-solid fa-pen-nib",
        "application development" : "fa-solid fa-code",
        "web development" : "fa-solid fa-laptop-code",
        "ui/ux design" : "fa-brands fa-figma"
    }

  return (
    <div className="p-6 text-white bg-w-black rounded-md  group hover:bg-w-yellow transition">
      <div className="flex justify-end mb-8">
        <i className={`${services[service]} text-w-yellow text-3xl ml-auto group-hover:text-black transition`}></i>
      </div>
      <h3 className=" mt-6 uppercase text-lg font-bold group-hover:text-black transition">
        {s1} <br/>
        {s2}
      </h3>
    </div>
  );
}

export default ServiceCard
;

const PlanCard = ({plan}) => {
    const features =['Planning Solution','10 Construction Drawings','Selection Materials','Unlimited Revision']
  return (
    <div className="bg-white hover:drop-shadow-md transition">
      <img src={plan.img}/>
      <ul className="px-6 py-8">
        {features.map((el, index) => {
          return (
            <li key={index}>
              <i class="fa-solid fa-circle-check text-w-yellow text-md mr-3 mb-6"></i>
              {el}
            </li>
          );
        })}
      </ul>
      <div className="py-4 px-7 bg-[#f6f8fdec] flex flex-col xl:flex-row xl:items-center gap-3 xl:gap-0 justify-between font-roboto-con">
        <p>
          <span className="font-bold text-5xl">
            <sup className="text-2xl relative -top-8 right-1 font-medium">$</sup>{plan.price}
          </span>
          /mos
        </p>
        <button className=" tracking-wider uppercase px-4 py-3 bg-w-yellow rounded-[4px] font-bold text-white">
          get started
        </button>
      </div>
    </div>
  );
}

export default PlanCard
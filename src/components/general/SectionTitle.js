;

const SectionTitle = ({className,subtitle,title_1,title_2,color}) => {

  return (
      <div className={`${className}`}>
        {
            subtitle ?
            <span className="text-w-yellow uppercase text-xs font-bold">{subtitle}</span>
            :
            null
        }
        <h2 className={`font-bold uppercase text-section mb-2 tracking-wider font-roboto-con ${color=="white" ? "text-white" :"text-w-black" }`}>
          {title_1} <br /> {title_2}
        </h2>
      </div>
  );
}

export default SectionTitle
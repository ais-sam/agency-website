;

const CenterTitle = ({title,subtitle}) => {
  return (
    <div className="text-center font-roboto-con">
      <span className="text-w-yellow uppercase text-xs font-bold">{subtitle}</span>
      <h2 className="font-bold uppercase text-section mb-2 tracking-wider ">
        {title}
      </h2>
    </div>
  );
}

export default CenterTitle
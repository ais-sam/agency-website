

const ProjectCard = ({project}) => {
    const {category,title,img} = project
  return (
    <div className="relative group overflow-hidden">
      <img src={img} alt="" />
      <div className="font-roboto-con uppercase bg-w-grey p-2 py-4 absolute left-0 w-full text-white -bottom-28 group-hover:-translate-y-28 transition duration-500 z-10">
        <span className="text-xs text-w-yellow font-bold mb-1 block">{category}</span>
        <h4 className="text-xl font-bold">{title}</h4>
      </div>
      <div className="absolute w-full h-full left-0 top-0 bg-w-yellow opacity-0  group-hover:opacity-60 transition  duration-500"></div>
    </div>
  );
}

export default ProjectCard


const TeamMemberCard = ({member}) => {
    const {name,role,img} = member
  return (
    <div className="relative group overflow-hidden">

      <img
        className="object- object-cover w-[32rem]  sm:w-80 h- h-96 "
        src={img}
        alt=""
      />
      <div className="text-center uppercase bg-w-grey p-2 py-3 absolute left-0 w-full text-white -bottom-28 group-hover:-translate-y-28 transition duration-500 z-10">
        <h4 className="text-md font-bold">{name}</h4>
        <span className="text-xs">{role}</span>
        <div className="flex items-center justify-center gap-3 py-2">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin-in"></i>
        </div>
      </div>
        <div className="absolute w-full h-full left-0 top-0 bg-w-yellow opacity-0  group-hover:opacity-40 transition  duration-500"></div>
    </div>
  );
}

export default TeamMemberCard
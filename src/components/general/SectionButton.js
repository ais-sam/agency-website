

import { Link } from "react-router-dom";
const SectionButton = ({content,link}) => {
  return (
    <Link
      to={link}
      className="p-2 border-w-yellow border-2 uppercase text-w-yellow mb-5 text-xs font-bold w-fit"
    >
      {content} <i className="fa-solid fa-chevron-right"></i>
    </Link>
  );
}

export default SectionButton


import { SectionButton } from "../components/index"
import SectionTitle from "../components/general/SectionTitle"
import {TeamMemberCard} from "../components/index"

const Team = () => {
    const members = [
        {
            name:"liam neil",
            role:"web developer",
            img:"https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
        },
        {
            name:"liam neil",
            role:"web developer",
            img:"https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
        },
        {
            name:"liam neil",
            role:"web developer",
            img:"https://images.unsplash.com/photo-1562159278-1253a58da141?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        },
        {
            name:"liam neil",
            role:"web developer",
            img:"https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=848&q=80"
        }
    ]
  return (
    <section className="py-20">
    <div className="container">
        <div className="flex flex-col md:flex-row items-start justify-between md:items-end font-roboto-con">
            <SectionTitle title_1="professional" title_2="creative team members" subtitle="meet our team" />
            <SectionButton content="view all members" link="#"/>
        </div>

        <div className="mt-16 grid gridc grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  justify-items-center items-center gap-4 ">
            {members.map((el,index)=><TeamMemberCard key={index} member={el}/>)}
        </div>
    </div>
</section>
  )
}

export default Team
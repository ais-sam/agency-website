

import { SectionButton,ProjectCard } from "../components/index";
import SectionTitle from "../components/general/SectionTitle";
import { projects } from "../constants";

const Projects = () => {
  return (
    <div>
    <section className="py-20 relative ">
      <div className="absolute top-0 left-0 w-full h-[50%] bg-w-grey -z-10"></div>
      
      <div className="container z-10">
        <div className="flex flex-col md:flex-row items-start justify-between p-0 md:items-end font-roboto-con">
          <SectionTitle subtitle="recent portfolio" title_1="we have done" title_2="many last projects" color="white"/>
          <SectionButton content="view all projects" link="#"/>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {projects.map(el=><ProjectCard key={el.id} project={el}/>)}
          {/* <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1590608897129-79da98d15969?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          /> */}
        </div>
      </div>
    </section>

    </div>
  );
};

export default Projects;



import { BlogCard, CenterTitle } from '../components';
import { blogs } from '../constants';

const Blog = () => {
  return (
    <section className="pt-20 pb-10">
      <div className="container">
        <CenterTitle title="recent post" subtitle="our blog"/>

        <div className="mt-12 flex flex-col md:flex-row gap-8">
          {blogs.slice(0,3).map((blog,index)=><BlogCard key={index} blog={blog}/>)}
        </div>
      </div>
    </section>
  );
}

export default Blog

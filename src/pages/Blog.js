import { Hero, Newsletter } from '../sections'
import { blogs } from '../constants/index'
import { BlogCard, Paragraph, RecentBlogs, RelatedTags, SearchBox, ServicesList } from '../components';

const Blog = () => {
  return (
    <>
      <Hero title="blog" />
        <div className="container pt-24 pb-20">
          <div className="my-6 flex flex-col md:flex-row md:items-start gap-8">
            
            <div className=" basis-8/12 grid grid-cols-1 md:grid-cols-2 gap-4">
              {blogs.map((blog)=><BlogCard key={blog.id} blog={blog} />)}
            </div>

            <div className=" md:basis-4/12">
             
              <SearchBox/>
              
              <ServicesList/>
             
              <RecentBlogs/>

              <RelatedTags/>

              <Paragraph/>
            </div>

          </div>
        </div>
      <Newsletter/>
    </>
  );
}

export default Blog
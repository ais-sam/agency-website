
import { blogs } from '../../constants';
import BlogCard from './BlogCard';


const RecentBlogs = () => {
  return (
    <div className="px-2 mb-12">
    <h4 className="uppercase text-xl font-roboto-con mb-3 font-bold">
      recent blog
    </h4>
    <div>
      {blogs.slice(0, 3).map((blog) => {
        return (
          <BlogCard blog={blog} recent={true}/>
        );
      })}
    </div>
  </div>
  )
}

export default RecentBlogs
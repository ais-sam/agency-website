;

const BlogCard = ({blog,recent}) => {
    const {title,date,author,img,comments,description} = blog
  return (
    
      recent ?
        <div key={blog.id} className="flex items-center mb-3 gap-4">
              <div className="flex-none">
                <img
                  src={blog.img}
                  alt=""
                  className="object-cover w-20 h-20"
                />
              </div>
              <div className="lg:pr-8">
                <h5 className="font-bold text-sm ">{blog.title}</h5>
                <div className="text-w-yellow text-xs mt-2">
                  <span className="mr-2">
                    <i className="fa-regular fa-calendar-days text-w-yellow mr-1"></i>
                    {blog.date}
                  </span>
                  <span>
                    <i className="fa-solid fa-comment text-w-yellow mr-1"></i>
                    {blog.comments}
                  </span>
                </div>
              </div>
        </div> 
          :

        <div className="shadow-sm">
                <div className="relative">
                  <img
                    src={img}
                    alt=""
                  />
                  <div className=" absolute left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0 text-[12px] uppercase py-4  shadow-md bg-white w-5/6 rounded-sm mx-auto flex justify-center items-center gap-2">
                    <div>
                      <i className="fa-regular fa-calendar-days text-w-yellow mr-1"></i>
                      {date}
                    </div>
                    <div>
                      <i className="fa-solid fa-user text-w-yellow mr-1"></i>{author}
                    </div>
                    <div>
                      <i className="fa-solid fa-comment text-w-yellow mr-1"></i>{comments}
                    </div>
                  </div>
                </div>

                <div className="mt-12 mb-8 text-center md:px-4">
                  <h3 className="uppercase font-bold font-roboto-con text-xl hover:text-w-yellow transition">
                    {title}
                  </h3>
                  <p className="text-gray-400 leading-6 mt-4 mb-2 ">
                    {description}
                  </p>
                </div>
        </div>
  )
}

export default BlogCard
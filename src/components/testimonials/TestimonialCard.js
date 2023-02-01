;

const TestimonialCard = () => {
  return (
    <div className="px-1  bg-gary-100  z-10">
        <div className='bg-white py-6 px-3 rounded-md shadow-sm'>
        <p className="mb-8  text-gray-500 text-base leading-7">Far far away, behind the word mountains, far from the countries Vokalia and
                    Consonantia, there live the blind texts.</p>
                <div className="flex gap-2 items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                        <img className="w-full" src="https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt=""/>
                    </div>
                    <div>
                        <span>
                            <i className="fa-solid fa-star text-w-yellow text-[10px]"></i>
                            <i className="fa-solid fa-star text-w-yellow text-[10px]"></i>
                            <i className="fa-solid fa-star text-w-yellow text-[10px]"></i>
                            <i className="fa-solid fa-star text-w-yellow text-[10px]"></i>
                            <i className="fa-solid fa-star text-w-yellow text-[10px]"></i>
                        </span>
                        <h6 className="capitalize font-bold">Roger scott</h6>
                        <span className="text-[10px] font-light uppercase text-w-yellow">marketing manager</span>
                    </div>
                </div>
        </div>
                
            </div>
  )
}

export default TestimonialCard
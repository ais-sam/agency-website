import { Link } from "react-router-dom"


const Hero = ({home,title,img}) => {
    const heroImg = "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    const BG_HERO = {
        backgroundImage: `url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }
    
  return (
        // <section className={`relative bg-hero ${home ? 'h-screen' : `h-[34rem] bg-fixed`} bg-no-repeat w-full bg-cover flex`} style={!home && {backgroundImage: `url(${heroImg})`}}>
        <section className={`relative  ${home ? 'h-screen bg-hero' : `h-[34rem] bg-fixed`} bg-no-repeat w-full bg-cover flex`}  style={!home ? BG_HERO : null}>
            <div className="absolute w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.5)] "></div>
            <div className="container z-10">
                {home ? 
                    <div className="md:w-4/5 lg:w-[34rem] flex flex-col justify-center mt-8 text-white uppercase gap-4 h-full">
                        <h6 className="text-sm font-bold tracking-[3px]">Welcome to itexc</h6>
                        <h1 className="font-bold text-5xl mb-3">degital innovation company that creates solution</h1>
                        <p className="normal-case">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

                        <div className="w-fit flex gap-3 mt-2">
                            <Link to="/contact" className="px-4 py-3 bg-w-yellow uppercase rounded-sm text-white tracking-wide font-bold text-xs ">get started</Link>
                            <Link to="/portfolio" className="px-3 py-3 bg-white uppercase rounded-sm text-black  tracking-wide font-bold text-xs">view portfolio</Link>
                        </div>
                    </div>
                :
                <div className=" h-full flex flex-col justify-end">
                    <h1 className="uppercase text-section sm:text-[50px] text-white font-bold font-roboto-con mb-3">{title}</h1>
                </div>
                }
            </div>
        </section>

  )
}

export default Hero
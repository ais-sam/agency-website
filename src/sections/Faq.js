

import { FaqCard, SectionTitle } from "../components/index"


const Faq = () => {
    const faqs = [
      {
        question: "how to fixe a problem ?",
        answer: [
          "Far far away, behind the word mountains",
          "Consonantia, there live the blind texts",
          "When she reached the first hills of the Italic Mountains",
          "Bookmarksgrove, the headline of Alphabet Village",
          "Separated they live in Bookmarksgrove right",
        ],
      },
      {
        question: "how to manage your website?",
        answer: [
          "Far far away, behind the word mountains",
          "Consonantia, there live the blind texts",
          "When she reached the first hills of the Italic Mountains",
          "Bookmarksgrove, the headline of Alphabet Village",
          "Separated they live in Bookmarksgrove right",
        ],
    },
    {
        question: "how to grow your investments funds?",
        answer: [
          "Far far away, behind the word mountains",
          "Consonantia, there live the blind texts",
          "When she reached the first hills of the Italic Mountains",
          "Bookmarksgrove, the headline of Alphabet Village",
          "Separated they live in Bookmarksgrove right",
        ],
    },
    ,
    {
        question: "what are those requirements for businesses?",
        answer: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean",
    },
    
   
    ];
  return (
    <section className="py-20 bg-gray-100">
    <div className="container">
        <div className="flex flex-col md:flex-row gap-12">
            <div className="basis-1/2 md:order-last">
                <div className="mb-4">
                    <img src="https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt=""/>
                </div>
                <div className="font-roboto-con z-20">
                    <h2 className="font-bold uppercase text-section mb-11 tracking-wider ">we are very experienced & professionals</h2>
                    <div className="mb-5">
                        <h3 className="uppercase text-sm tracking-wide font-semibold mb-3 ">creative design</h3>
                        <span className="percentage after:content-['90%'] after:left-[87%] before:w-[90%] "></span>
                    </div>
                    <div className="mb-5">
                        <h3 className="uppercase text-sm tracking-wide font-semibold mb-3 ">product engineering</h3>
                        <span className="percentage after:content-['85%'] after:left-[83%] before:w-[85%] "></span>
                    </div>
                    <div className="mb-5">
                        <h3 className="uppercase text-sm tracking-wide font-semibold mb-3 ">marketing strategy</h3>
                        <span className="percentage after:content-['95%'] after:left-[93%] before:w-[95%] "></span>
                    </div>
                    <div className="mb-5">
                        <h3 className="uppercase text-sm tracking-wide font-semibold mb-3 ">support tips</h3>
                        <span className="percentage after:content-['90%'] after:left-[87%] before:w-[90%] "></span>
                    </div>
                </div>
            </div>
            <div className="basis-1/2">
                <div className="mb-6 font-roboto-con">
                    <SectionTitle subtitle="frequently ask question" title_1="frequently" title_2="ask question"/>
                </div>
                <div className="font-roboto-con">
                   {faqs.map((el,index)=>{
                    return <FaqCard key={index} question={el.question} answer={el.answer}/>
                   })}
                        {/* <button className=" text-start p-4 shadow-md flex items-center justify-between mb-3 bg-white w-full">
                            <p className="text-md uppercase"> how to fixed a problem ?</p>
                            <i className="fa-solid fa-chevron-up text-gray-400"></i>
                        </button>
                        <button className=" text-start p-4 shadow-md flex items-center justify-between mb-3 bg-white w-full">
                            <p className="text-md uppercase"> how to manage your website?</p>
                            <i className="fa-solid fa-chevron-up text-gray-400"></i>
                        </button>
                        <button className=" text-start p-4 shadow-md flex items-center justify-between mb-3 bg-white w-full">
                            <p className="text-md uppercase"> how to grow your investments funds?</p>
                            <i className="fa-solid fa-chevron-up text-gray-400"></i>
                        </button>
                        <button className=" text-start p-4 shadow-md flex items-center justify-between mb-3 bg-white w-full">
                            <p className="text-md uppercase"> what are those requirements for businesses?</p>
                            <i className="fa-solid fa-chevron-up text-gray-400"></i>
                        </button> */}
                   
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Faq
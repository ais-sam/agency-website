
import { SectionTitle } from "../components/index"

const Experience = () => {
  return (
    <section >
    <div className="container flex flex-col md:flex-row items-center gap-8 mb-">
        <div className="flex-1">
            <img className="h-full" src="https://images.unsplash.com/photo-1612093991429-acd0fc7b1804?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=473&q=80" alt=""/>
        </div>
        <div className="flex-1">
            <SectionTitle subtitle="Welcome to itexc" title_1="highest" title_2="creative standards"/>
            <p className="text-p-grey leading-6 mb-12">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named
                Duden flows by their place and supplies it with the necessary regelialia
            </p>
            <div className="bg-w-yellow flex items-center p-3 gap-5 md:w-fit :-translate-x-36 mb-6">
                <span className="w-16 h-16 flex items-center justify-center bg-w-grey rounded-full">
                    <i className="fa-regular fa-lightbulb text-white text-2xl"></i>
                </span>
                <div className="text-white ">
                    <span className="text-4xl font-bold">10</span>
                    <br/>
                    <span className="uppercase text-xs font-bold">years of experience</span>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Experience
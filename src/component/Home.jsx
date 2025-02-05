import img from '../assets/Mathesh.jpg';
export const Home = () => {
    return (
        <section className="home w-screen h-screen flex flex-col items-center justify-center text-center" >
             <div id="stars3"></div>
             <div id="stars3"></div>

             <div className="image md:w-60 visible md:invisible md:h-60 max-sm:w-48 max-sm:h-48 mt-14">
                <img className="profile-image md:w-64 md:h-[290px] sm:w-64 sm:h-64 max-sm:w-48 max-sm:h-56" src={img} alt="" draggable="false" style={{ userSelect: "none", pointerEvents: "none", WebkitUserDrag: "none" }} />
            </div>


            <div className="invisible md:visible z-30 image absolute w-[230px] h-56 md:h-[250px]" >
                <img className="profile-image md:w-64 md:h-[260px] sm:w-54 sm:h-45  " src={img} alt="" />
            </div>

            <div className="content-text font-popin ">
                <h1 className='invisible md:visible md:text-[11rem] lg:text-[9rem] xl:text-[9rem] font-semibold font-bely constex-span relative bottom-9 '>MATHESH</h1>
                <h1 className='invisible md:visible md:text-[6rem] lg:text-[8rem] xl:text-[9rem]  font-semibold font-bely constex-span relative bottom-5 '>RAVICHANDRAN  </h1>
                <h2 className='visible md:invisible  text-3xl  font-medium font-bely'>Hi, I'm<span className=' text-6xl  font-bely constex-span'> MATHESH </span></h2> 

                 <p className=' visible md:invisible  md:text-2xl sm:text-xs font-semibold font-Satoshi pg-text-span'>
                    Delivering dynamic digital experiences through the perfect harmony of <span className='pg-text-span'>design and technology</span>.
                </p> 
            </div>
            {/* <a href="#end" className="visible md:collapse   md:text-lg  sm:text-xs m-4 text-center hover:bg-[rgba(143,143,143,0.32)]  px-8 py-2 bg-[#000000] rounded-full text-white font-light transition duration-200 ease-linear">Connect With Me</a> */}
        </section>

    )
}

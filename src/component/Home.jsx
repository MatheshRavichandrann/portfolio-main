import img from '../assets/mth.jpg';

export const Home = () => {
    return (
        <section className="home w-screen h-screen flex flex-col items-center justify-center text-center">
            <div id="stars3"></div>
            <div id="stars3"></div>
            <div className="image md:w-64 md:h-64 max-sm:w-48 max-sm:h-48 mt-12">
                <img 
                    className="profile-image md:w-64 md:h-[290px] sm:w-64 sm:h-64 max-sm:w-48 max-sm:h-56"
                    src={img} 
                    alt="" 
                    draggable="false" 
                    style={{ pointerEvents: 'none' }} 
                />
            </div>
            <div className="content-text font-popin">
                <h2 className='md:text-4xl sm:text-2xl font-semibold font-tsan'>
                    Hi, I'm<span className='md:text-6xl max-sm:text-4xl font-tsan constex-span'> MATHESH RAVICHANDRAN</span>
                </h2>
                <p className='md:text-2xl sm:text-xs font-semibold pg-text-span'>
                    Delivering dynamic digital experiences through the perfect harmony of <span className='pg-text-span'>design and technology</span>.
                </p>
            </div>
            <a href="#end" className="md:text-lg sm:text-xs m-4 text-center hover:bg-[rgba(143,143,143,0.32)] px-8 py-2 bg-[#000000] rounded-full text-white font-light transition duration-200 ease-linear">
                Connect With Me
            </a>
        </section>
    );
};

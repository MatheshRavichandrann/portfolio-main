import TextGenerateEffect from "./text-generate-effect";

const words = `Fusing the creativity of design with the exactness of technology, my portfolio showcases my proficiency in Java and backend development. With a focus on web development and app creation, I leverage my knowledge of Data Structures and Algorithms (DSA) to build impactful digital solutions. Each project is crafted with a balance of innovation and functionality, ensuring it stands out in the digital landscape. From developing robust applications to optimizing performance through strategic problem-solving, I’m committed to creating engaging and effective digital experiences.
`;
 
export const About = () => {
  return (
    <div className="flex w-screen items-center justify-center my-40">
        <p className="md:text-xl sm:text-sm w-3/5 text-center project-textp tracking-wide leading-8 font-poppins" >
            {/* <span className=" text-6xl ">
                About &nbsp;
            </span> */}
            <TextGenerateEffect words={words} />
            </p>
    </div>
  )
}

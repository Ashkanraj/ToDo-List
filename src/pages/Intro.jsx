import { Link } from "react-router-dom";
import IntroImage from "../assets/intro.png";

const Intro = () => {
  return (
    <section className="w-full h-[100vh] flex flex-col items-center justify-evenly p-6 gap-6 md:flex-row-reverse max-w-[1000px] md:mx-auto md:gap-16 ">
      <div className="w-1/2 min-w-[200px] max-w-[300px]">
        <img
          src={IntroImage}
          alt="Intro image"
          width={200}
          height={200}
          className="w-full"
        />
      </div>
      <div className="w-3/4 min-w-[250px] max-w-[600px] flex flex-col  gap-8 text-center md:w-1/2 md:text-left">
        <h1 className="font-bold text-3xl text-wrap">
          Task Management &<span className="text-nowrap"> To-Do List</span>
        </h1>
        <p className="text-md font-semibold">
          This productive tool is designed to help you better manage your task
          project-wise conveniently!
        </p>
        <Link to="/pages/Home" className="w-full">
          <button className="btn btn-primary w-full md:w-1/2">
            Let’s Start
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Intro;

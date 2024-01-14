import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="h-5/6 bg-[url('/working.png')] bg-no-repeat bg-center">
        <div className="h-full w-full flex flex-col flex-wrap justify-between items-center gap-8">
          <h1
            className="text-4xl md:text-5xl xl:text-7xl text-center font-medium tracking-widest text-secondary 
            mt-24 animate-[slideDown_1s_ease-in-out] md:animate-[slideToRight_1s_ease-in-out]"
          >
            MARK JAYSON NOGUERRA
          </h1>
          <div
            className="w-full md:w-1/2 h-max px-10 md:px-24 lg:px-36 mb-[4rem] md:mb-0 self-end 
            animate-[slideToRight_1s_ease-in-out] md:animate-[slideDown_1s_ease-in-out]"
          >
            <h3 className="text-lg lg:text-xl font-medium text-center md:text-left text-white tracking-wide">
              Hello world Hello Helloworld Helloworldworld Hello world
              Helloworld Hello world Hello world Hello world Hello world
            </h3>
          </div>
          <Link
            to="/projects"
            className="hidden md:block mt-auto bg-primary text-white py-10 px-6 text-lg font-medium rounded-[50%] 
              hover:border-white hover:border-2"
          >
            PROJECTS
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;

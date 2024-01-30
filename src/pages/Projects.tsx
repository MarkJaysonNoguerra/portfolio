type Project = {
  title: string;
  summary: string;
  demo: string;
  github: string;
};

function Projects() {
  const projects: Project[] = [
    {
      title: "League of Legends",
      summary: "Simple angular 8 web app that uses riot api",
      demo: "https://markjaysonnoguerra.github.io/lol/main",
      github: "https://github.com/MarkJaysonNoguerra",
    },
    {
      title: "League of Legends",
      summary: "Simple angular 8 web app that uses riot api",
      demo: "https://markjaysonnoguerra.github.io/lol/main",
      github: "https://github.com/MarkJaysonNoguerra",
    },
    {
      title: "League of Legends",
      summary: "Simple angular 8 web app that uses riot api",
      demo: "https://markjaysonnoguerra.github.io/lol/main",
      github: "https://github.com/MarkJaysonNoguerra",
    },
    {
      title: "League of Legends",
      summary: "Simple angular 8 web app that uses riot api",
      demo: "https://markjaysonnoguerra.github.io/lol/main",
      github: "https://github.com/MarkJaysonNoguerra",
    },
    {
      title: "League of Legends",
      summary: "Simple angular 8 web app that uses riot api",
      demo: "https://markjaysonnoguerra.github.io/lol/main",
      github: "https://github.com/MarkJaysonNoguerra",
    },
  ];

  return (
    <>
      <div className="h-5/6">
        <h1 className="text-5xl xl:text-7xl font-bold tracking-widest text-secondary mt-8 ml-12">
          My Projects
        </h1>
        <hr className="w-[15rem] mt-6 ml-12" />
        <div className="w-full flex flex-wrap justify-center lg:justify-evenly mt-8">
          {projects.map((project: Project, index: number) => {
            return (
              <div
                key={index}
                className="w-full md:w-1/2 xl:w-2/6 px-12 mx-auto my-6"
              >
                <img src="/phaser.png" alt="working" className="rounded-md" />
                <div className="h-[12rem]">
                  <div className="text-center text-white mt-4">
                    <h3 className="text-xl md:text-3xl font-bold">
                      {project.title}
                    </h3>
                    <hr className="w-[10rem] sm:w-[15rem] mx-auto my-2" />
                    <span className="text-base md:text-xl">
                      {project.summary}
                    </span>
                  </div>
                  <div className="flex justify-center my-8 text-white">
                    <a
                      href={project.demo}
                      target="_blank"
                      className="p-6 mx-6 rounded-md bg-primary font-medium"
                    >
                      Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      className="p-6 mx-6 rounded-md bg-primary font-medium"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;

type Project = {
  title: string;
  summary: string;
  demo: string;
  github: string;
  image: string;
};

function Projects() {
  const projects: Project[] = [
    {
      title: "League of Legends",
      summary: `This web application utilizes the Riot API to showcase detailed information about League of Legends characters.
        This could be used for exploring the game champions which is built using the Angular framework.`,
      demo: "https://markjaysonnoguerra.github.io/lol/main",
      github: "https://github.com/MarkJaysonNoguerra/lol",
      image: "/projects/league-of-legend.png",
    },
    {
      title: "Shooter Game",
      summary:
        "This is a straightforward shooting game created using Phaser.js. ",
      demo: "https://markjaysonnoguerra.github.io/shooter",
      github: "https://github.com/MarkJaysonNoguerra/shooter",
      image: "/projects/shooter.png",
    },
    {
      title: "Montrer",
      summary: `This website is a comprehensive repository of TV series and movies, featuring data sourced from the TMDb API (The Movie Database). 
        Explore a vast collection of entertainment content through this platform.`,
      demo: "https://markjaysonnoguerra.github.io/Montrer",
      github: "https://github.com/MarkJaysonNoguerra/Montrer",
      image: "/projects/montrer.png",
    },
    {
      title: "One Piece Cards",
      summary: `This webpage showcases One Piece trading cards, with the card data gathered using Puppeteer for web scraping. 
        Explore the world of One Piece through this collection of cards presented on the website.`,
      demo: "https://markjaysonnoguerra.github.io/op-cards/",
      github: "https://github.com/MarkJaysonNoguerra/op-cards",
      image: "/projects/op-cards.png",
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
                className="h-[28rem] sm:h-[37rem] w-full md:w-1/2 xl:w-2/6 px-12 mx-auto my-6"
              >
                <img src={project.image} alt="working" className="rounded-md" />
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

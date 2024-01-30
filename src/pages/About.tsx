function About() {
  const paragraphs = [
    `As someone who has been fortunate enough to work in various fields
    for over 4 years, I am constantly amazed by the depth of knowledge
    and expertise that surrounds me. As a website developer, e-commerce
    brand manager, visual artist,`,
    `As someone who has been fortunate enough to work in various fields
    for over 4 years, I am constantly amazed by the depth of knowledge
    and expertise that surrounds me. As a website developer, e-commerce
    brand manager, visual artist,`,
    `As someone who has been fortunate enough to work in various fields
    for over 4 years, I am constantly amazed by the depth of knowledge
    and expertise that surrounds me. As a website developer, e-commerce
    brand manager, visual artist,`,
  ];

  return (
    <>
      <div className="h-5/6 mx-12">
        <div className="flex flex-wrap">
          <div className="w-full xl:w-1/2">
            <h1 className="text-5xl xl:text-7xl font-bold tracking-widest text-secondary mt-8">
              About Me
            </h1>

            <hr className="w-[13rem] xl:w-[18rem] mx-auto mt-6 ml-0" />

            <div className="flex my-12 gap-4">
              <a
                href="https://github.com/MarkJaysonNoguerra"
                target="_blank"
                className="flex gap-4 p-4 bg-secondary rounded-md"
              >
                Github{" "}
                <img src="/github-icon.png" alt="github" className="w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/mark-jayson-noguerra/"
                target="_blank"
                className="flex gap-4 p-4 bg-secondary rounded-md"
              >
                Linkin{" "}
                <img src="/linkedin-icon.png" alt="linkedin" className="w-6" />
              </a>
            </div>

            {paragraphs.map((paragraph: string, index: number) => {
              return (
                <p
                  key={index}
                  className="w-full text-xl md:text-2xl my-4 text-white text-wrap"
                >
                  {paragraph}
                </p>
              );
            })}
          </div>

          <div className="hidden xl:block w-full xl:w-1/2 mt-16 self-center">
            <img
              src="/about-me-img.png"
              alt="about me image"
              className="rounded-md mx-auto lg:mx-8"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

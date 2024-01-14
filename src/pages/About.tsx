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
      <div className="h-5/6 m-6 md:m-12">
        <h1
          className="text-5xl xl:text-7xl 
          font-bold tracking-widest text-secondary mt-16"
        >
          About Me
        </h1>
        <hr className="w-[13rem] xl:w-[18rem] mx-auto mt-6 ml-0" />
        <div className="flex mt-8 gap-16">
          <div className="p-4 bg-secondary rounded-md">Github</div>
          <div className="p-4 bg-secondary rounded-md">Linkin</div>
        </div>
        <div className="my-16">
          {paragraphs.map((paragraph: string, index: number) => {
            return (
              <p
                key={index}
                className="w-full md:w-5/6 text-2xl my-4 text-white text-wrap"
              >
                {paragraph}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default About;

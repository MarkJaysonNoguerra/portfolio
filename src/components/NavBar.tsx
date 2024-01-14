type Link = {
  label: string;
  route: string;
};

function NavBar() {
  const links: Link[] = [
    {
      label: "HOME",
      route: "/",
    },
    {
      label: "PROJECTS",
      route: "/projects",
    },
    {
      label: "ABOUT ME",
      route: "/about_me",
    },
  ];

  return (
    <>
      <nav className="w-screen lg:w-1/2 flex flex-nowrap justify-around lg:justify-between mx-auto">
        {links.map((link: Link, index: number) => {
          return (
            <a
              key={index}
              href={link.route}
              className="text-lg md:text-2xl text-white p-6 pb-4 border-b-2 border-transparent hover:border-primary focus:outline-none focus:border-primary focus:border-2"
            >
              {link.label}
            </a>
          );
        })}
      </nav>
    </>
  );
}

export default NavBar;

import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    devlopment,
    fullstack2,
    wordpress,
    // meta,
    // starbucks,
    // tesla,
    // shopify,
    asthetic,
    agency,
    aqua,
    booksnbarbell,
    rooms,
    showtime,
    inck,
    alpha,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      name: "devlopment",
      icon: devlopment,
    },
    {
      name: "fullstack2",
      icon: fullstack2,
    },
    {
      name: "native ",
      icon: wordpress ,
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "WordPress Developer",
      icon: mobile,
    },
    
    {
      title: "Content Creator",
      icon: creator,
    },
 
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    // {
    //   name: "devlopment",
    //   icon: devlopment,
    // },
    // {
    //   name: "fullstack2",
    //   icon: fullstack2,
    // },
    // {
    //   name: "native ",
    //   icon: native ,
    // },
  
  ];
  
  const experiences = [
    {
      title: "React.js Devlopment",
      // company_name: "Starbucks",
      icon: reactjs,
      iconBg: "#383E56",
      // date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "WordPress Development",
      // company_name: "Tesla",
      icon: wordpress,
      iconBg: "#E6DEDD",
      // date: "Jan 2021 - Feb 2022",
      points: [
        "Developing websites for medium and small businesses using Wordpress CMS",
        "Setting up online store, Donation page or use of different plugins and themes we got it all covered.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      
      ],
    },
    // {
    //   title: "Backend Development",
    //   // company_name: "Shopify",
    //   icon: devlopment,
    //   iconBg: "#383E56",
    //   // date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "We provide Api development services for businesses who already have frontend",
    //     "We use NodeJs to create our",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    {
      title: "Full stack Development",
      // company_name: "Meta",
      icon: fullstack2,
      iconBg: "#E6DEDD",
      // date: "Jan 2023 - Present",
      points: [
        "Need a complete web application for your business, we got you covered.",
        "Our team specailizes in creating web applications for all types of businesses using latest technologies ",
        "UI/UX, Authentication, Authorization, Optimization and many more would be implemented from our side, without you having to worry about dealing with technical problems",
        
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    // {
    //   name: "roomsandshrooms",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     { 
    //       name: "mongodb",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "tailwind",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: rooms,

    //   link:"https://roomsandshrooms.online/",
      
    //   source_code_link: "https://github.com/",
    // },

    {
      name: "INCK Foundation",
      description:
        "Thane based NGO which works for providing free education to poor and special children, helping Women, providing medical support to needy",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "ngo",
          color: "green-text-gradient",
        },
        {
          name: "elementor",
          color: "pink-text-gradient",
        },
      ],
      image: inck,

      link:"https://inckfoundation.org/",

    },
    {
      name: "Alpha-Modern",
      description:
        "Kanpur based company which provides wholesale rates to local vendors and Kirana shops using their mobile app",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: alpha,

      link:"https://alpha-modern.in/",

    },
    {
      name: "Showtimescoop",
      description:
        "Applications where user could register and search for the movies they like and get information about them and add them to their favourite list.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: showtime,

      link:"https://showtimescoop.in/",

      source_code_link: "https://github.com/",
    },

    {
      name: "aqua agency",
      description:
        "Web application that enables users to search services for purifiers.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: aqua,
      link:"https://aaquapurifierservices.com/",
      source_code_link: "https://github.com/",
    },

    {
      name: "asthetic",
      description:
        "Web application that enables users to search and buy cloths.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: asthetic,

      link:"https://simplyaesthetic.shop//",

      source_code_link: "https://github.com/",
    },

    {
      name: "agency",
      description:
        "Web application that provides small scale business digital platform.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: agency,

      link:"https://desiginingagency.online/",

      source_code_link: "https://github.com/",
    },

    {
      name: "booksnbarbell",
      description:
        "Web application that enables people to look for books.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: booksnbarbell,

      link:"https://booksnbarbells.in/",

      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
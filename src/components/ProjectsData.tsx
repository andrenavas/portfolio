const projectsData = [
  {
    id: 1,
    name: "Talks+40",
    date: "2024",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-fa111.appspot.com/o/images%2Ftalksplus40.png?alt=media&token=965dd74c-5f05-4db2-8bb7-d19ffdaede8e",
    description:
      "Institutional blog-style website built in WordPress for publishing articles and content related to aging and wellness.",
    liveLink: "https://talksplus40.com",
    githubLink: "https://talksplus40.com",
  },
  {
    id: 2,
    name: "Luxury Driver Services",
    date: "2024",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-fa111.appspot.com/o/images%2Fluxury-driver-services.png?alt=media&token=353d54c1-620a-41ad-bac4-b629c8aef914",
    description:
      "Professional booking website built in WordPress for private transportation services. Includes service plan subscription feature.",
    liveLink: "https://luxurydriverservices.com",
    githubLink: "https://luxurydriverservices.com",
  },
  {
    id: 3,
    name: "JR Plumbing",
    date: "2024",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-fa111.appspot.com/o/images%2Fjr-plumbingva.png?alt=media&token=aa9f445d-37bf-40f9-ba90-a64a0db91b5d",
    description:
      "Informational WordPress website for a plumbing services business, featuring responsive design and service listings.",
    liveLink: "https://jrplubingva.com",
    githubLink: "https://jrplubingva.com",
  },
  {
    id: 4,
    name: "Flora Pharma",
    date: "2024",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-fa111.appspot.com/o/images%2Fflora-pharma.png?alt=media&token=f193a567-1b8a-4350-b7d2-f83a9af071fd",
    description:
      "Shopify-based e-commerce for natural products and supplements. Includes dropshipping integration and custom apps for optimal functionality.",
    liveLink: "https://www.florapharmaec.com/",
    githubLink: "https://www.florapharmaec.com/",
  },
  {
    id: 5,
    name: "Blackjack Chauffeurs",
    date: "February 2024",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-fa111.appspot.com/o/images%2FHome%20BJC.jpg?alt=media&token=d013bcc4-b133-4cad-bcaf-5280f7ab0b69",
    description:
      "Customized WordPress website with personalized styling and seamless navigation. Recently added subscription feature for private transport plans, enhancing customer engagement and service offerings.",
    liveLink: "https://www.blackjackchauffeurs.com",
    githubLink: "https://www.blackjackchauffeurs.com",
  },
  {
    id: 6,
    name: "Home Shop 593",
    date: "April 2024",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-fa111.appspot.com/o/images%2FHS593%20-%20HomePage.jpg?alt=media&token=c6ac213c-374d-40ac-9318-f99789f053e5",
    description:
      "Developed and customized the online store using Shopify. Implemented custom applications such as counters, urgency purchase banners, dropshipping forms, and CSS coding for optimal functionality.",
    liveLink: "https://www.homeshop593.com/",
    githubLink: "https://www.homeshop593.com/",
  },
  {
    id: 7,
    name: "Loly Fernandez Nails",
    date: "March 2024",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-fa111.appspot.com/o/images%2FLolyHome.jpg?alt=media&token=c1a64ab5-5f04-4f20-8834-e9f3d23907c1",
    description:
      "Developed WordPress website to elevate user experience through customized design and intuitive navigation. Employed a variety of themes, plugins, and CSS coding to ensure peak performance and functionality.",
    liveLink: "https://www.lolyfernandez.es/",
    githubLink: "https://www.lolyfernandez.es/",
  },
  {
    id: 8,
    name: "JS Motos",
    date: "October 2023",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-fa111.appspot.com/o/images%2FJSHome.jpg?alt=media&token=7dec0e64-a361-4fb7-aab4-45f39edb00f5",
    description:
      "Website for a business dedicated to the sale of motorcycle parts, integrating Gmail for forms and enabling WhatsApp connection.",
    liveLink: "https://www.jsmotos.com/",
    githubLink: "https://www.jsmotos.com/",
  },
  {
    id: 9,
    name: "Burger Queen API Client",
    date: "July 2023",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-fa111.appspot.com/o/images%2FloginBQ.png?alt=media&token=95fb1f95-77c1-4d8f-aa8d-26ac3d4fd79b",
    description:
      "Restaurant application to be used in tablet format, for taking orders, selecting products, and managing order status.",
    liveLink:
      "https://dev-005-burger-queen-api-client-git-master-paulivega.vercel.app/",
    githubLink: "https://github.com/andrenavas/DEV005-burger-queen-api-client",
  },
  {
    id: 10,
    name: "CLI Library | Md-Links",
    date: "June 2023",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-fa111.appspot.com/o/images%2Fimg-validate-true.jpg?alt=media&token=4f59a4ea-1617-4c62-a121-0775a201db1b",
    description:
      "CLI library to extract links from Markdown files, validate them, and report statistics.",
    liveLink: "https://www.npmjs.com/package/andre-mdlinks",
    githubLink: "https://github.com/andrenavas/DEV005-md-links",
  },
  {
    id: 11,
    name: "Social Network | Mascoteando",
    date: "May 2023",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-fa111.appspot.com/o/images%2Fmascoteando.jpg?alt=media&token=8551300f-6f26-4f43-b82c-ef4b9aebcc10",
    description:
      "SPA-style social network for pet lovers. Features include register, login, posting, editing, and liking.",
    liveLink: "https://mascoteando.vercel.app/",
    githubLink: "https://github.com/andrenavas/DEV005-social-network",
  },
  {
    id: 12,
    name: "Data Lovers | Rick and Morty Website",
    date: "April 2023",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-fa111.appspot.com/o/images%2Fdatalovers.jpg?alt=media&token=f00bd623-f934-4765-9283-08ed9573b234",
    description:
      "SPA that allows users to view, filter, and sort character data from the Rick and Morty series.",
    liveLink: "https://sofia-torres-v.github.io/Data-Lovers/src/index.html",
    githubLink: "https://github.com/andrenavas/Data-Lovers",
  },
];

export default projectsData;

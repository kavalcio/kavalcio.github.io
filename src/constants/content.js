// TODO: add typescript for each object here

export const EXPERIENCE = [
  {
    id: 'lumiq',
    title: 'Full Stack Developer',
    employer: 'LumiQ',
    employerUrl: 'https://lumiqlearn.com',
    icon: '/images/lumiq.jpg',
    dateFrom: 'June 2021',
    dateTo: 'Present',
    hook: 'Contributed to the continuous development of a professional education platform for finance professionals',
    description: [
      'Utilized React and React Native extensively to implement and maintain responsive front-end applications',
      'Engineered the client app network layer from scratch using Redux Saga integrated with a PostgREST API',
      'Expanded the functionality of Node.js microservices running on Docker and Kubernetes',
      'Played a pivotal role in a major overhaul to facilitate the U.S. expansion of the company',
      'Collaborated closely with UI/UX designers to implement visually appealing and intuitive user interfaces',
      'Identified and addressed technical debt, ensuring maintainability and scalability of the codebase',
    ],
    tech: [
      'React',
      'React Native',
      'Redux',
      'Node.js',
      'PostgreSQL',
      'Docker',
      'Kubernetes',
    ],
  },
  {
    id: 'modiface',
    title: 'Full Stack Developer',
    employer: 'Modiface',
    employerUrl: 'https://www.modiface.com',
    icon: '/images/modiface.png',
    dateFrom: 'June 2019',
    dateTo: 'August 2020',
    hook: 'Contributed to the development of a Content Management System used by international beauty brands',
    description: [
      'Employed a robust tech stack with frameworks like Laravel and Vue.js',
      'Maintained and expanded a RESTful API based in PHP with an Eloquent ORM interface',
      'Actively participated in team code reviews and mob programming sessions',
      'Worked in a fast-paced development cycle with an automated CI/CD pipeline',
    ],
    tech: ['Vue.js', 'Laravel', 'PHP', 'MySQL'],
  },
  {
    id: 'rp4k',
    title: 'Programming Instructor',
    employer: 'Real Programming 4 Kids',
    employerUrl: 'https://realprogramming.com',
    icon: '/images/rp4k.jpg',
    dateFrom: 'July 2018',
    dateTo: 'September 2018',
    hook: 'Delivered engaging programming and game development classes to a diverse group of students',
    description: [
      'Instructed using multiple languages, including Visual Basic and Java, providing students with a comprehensive understanding of programming concepts',
      'Managed classrooms with students possessing varying levels of knowledge, tailoring teaching methods to accommodate individual learning styles and pace',
      'Provided hands-on support at debugging code and guided students in implementing extra features',
    ],
    tech: ['Visual Basic', 'Java'],
  },
];

export const EDUCATION = [
  {
    id: 'uoft',
    title: 'Computer Engineering - Bachelor of Applied Science',
    institution:
      'University of Toronto, Department of Electrical and Computer Engineering',
    icon: '/images/uoft.png',
    dateFrom: 'September 2016',
    dateTo: 'May 2021',
  },
  {
    id: 'circuit-stream',
    title: 'XR Development with Unity',
    institution:
      'University of Toronto – School of Continuing Studies + Circuit Stream',
    icon: '/images/circuit-stream.png',
    dateFrom: 'October 2022',
    dateTo: 'December 2022',
  },
];

export const PROJECTS = [
  {
    id: 'raytracer',
    title: 'Ray Tracer',
    hook: 'A simple ray tracing renderer written from scratch using C++. Accepts a list of 3D primitives and outputs a rendered image into a .ppm file.',
    img: '/images/raytracer.jpg',
    tech: ['C++'],
    githubUrl: 'https://github.com/kavalcio/raytracer',
  },
  {
    id: 'screensavers',
    title: 'Windows XP Screensavers',
    hook: 'Recreation of several iconic screensavers from the Windows XP operating system.',
    img: '/images/mystify.png',
    tech: ['Three.js'],
    playUrl: 'https://three-js-screen-savers.vercel.app',
    githubUrl: 'https://github.com/kavalcio/three-js-screen-savers',
  },
  {
    id: 'dither',
    title: 'Dither Shaders',
    hook: `Series of shaders written in GLSL rendered with Three.js that apply different forms of dithering
    (from a simple random threshold dither to ordered Bayer dithering) to a sample image.
    Dithering is traditionally used to reduce the effects of quantization error in audiovisual data.`,
    img: '/images/dither.png',
    tech: ['Three.js', 'GLSL'],
    playUrl: 'https://kavalcio-playground.vercel.app/dither',
    githubUrl:
      'https://github.com/kavalcio/three-js-playground/blob/main/src/pages/Dither',
  },
  {
    id: 'dice',
    title: 'Dice Roller [WIP]',
    hook: 'A demo that allows rolling 4, 6, 8, 10, 12 or 20-sided dice in a 3D environment using physics simulation powered by the Rapier.js library. The total of the rolled dice is calculated using raycasting and shown on screen.',
    img: '/images/dice.png',
    tech: ['Three.js'],
    playUrl: 'https://kavalcio-playground.vercel.app/dice-fiber',
    githubUrl:
      'https://github.com/kavalcio/three-js-playground/blob/main/src/pages/DiceFiber',
  },
  {
    id: 'inkblot',
    title: 'Rorschach Inkblot Generator',
    hook: 'A shader that generates shifting inkblot patterns using Perlin noise and several layers of filtering.',
    img: '/images/inkblot.png',
    tech: ['Three.js', 'GLSL'],
    playUrl: 'https://kavalcio-playground.vercel.app/inkblot',
    githubUrl:
      'https://github.com/kavalcio/three-js-playground/blob/main/src/pages/Inkblot',
  },
  {
    id: 'combat-robot',
    title: 'Annie - RC Combat Robot',
    hook: `Lead a university robotics team in designing and building a 30lbs remote controlled robot to fight in
    an arena deathmatch against other robots. We competed in RoboBrawl 2019 at the University of Illinois and ranked
    8th place out of 30+ teams from various universities across the US and Canada.`,
    img: '/images/utra_2.jpg',
    tech: [],
  },
  {
    id: 'dev-portfolio',
    title: 'This Website',
    hook: 'Recursion! A portfolio website showcasing my projects and experience, built using React.',
    img: '/images/dev-portfolio.png',
    playUrl: 'https://kavalcio.github.io/',
    githubUrl: 'https://github.com/kavalcio/kavalcio.github.io',
    tech: ['React', 'Vite'],
  },
  {
    id: 'fashion-portfolio',
    title: 'Fashion Designer Portfolio',
    img: '/images/fashion-portfolio.png',
    hook: 'Simple portfolio website for a fashion and costume designer built using Next.js.',
    playUrl: 'https://charlotte-claytor.vercel.app/',
    githubUrl: 'https://github.com/kavalcio/char-portfolio',
    tech: ['Next.js', 'Typescript'],
  },
  {
    id: 'tissue-annotation',
    title: 'Tissue Annotation Tool',
    hook: 'A web-based image annotation tool used to populate a tissue histology image database for computational pathology research.',
    img: '/images/adp_image.png',
    playUrl: 'https://www.dsp.utoronto.ca/projects/ADP/',
    tech: ['HTML', 'CSS', 'Javascript'],
  },
  {
    id: 'maze-game',
    title: 'Hardware-based Maze Game',
    img: '/images/maze.png',
    hook: `A maze traversal game built using Verilog code on a field-programmable gate array (FPGA). Created I/O modules
    for user input and image output to the display, performed simulation testing using ModelSim.`,
    githubUrl: 'https://github.com/kavalcio/fpga-maze-game',
    tech: ['Verilog', 'Computer Hardware', 'ModelSim'],
  },
];

// <!--------------------------- Three.js Screensavers --------------------------->
// <div id='proj-threejs-screensavers' class="proj-container">
//     <a href='#proj-threejs-screensavers' class="proj-title">Three.js Screensavers</a>
//     <div class="proj-subheader">Recreation of some one of the classic screensavers from the Windows XP operating system, built using Three.js.</div>
//     <div class="proj-content horizontal">
//         {%
//             title="XP Screensaver - Mystify"
//             description="The first Windows XP screensaver I recreated, which consists of several polygons whose vertices bounce around the screen, creating interesting shapes."
//         %}
//         {%
//             title="XP Screensaver - Bezier"
//             description="Another Three.js app recreating a Windows XP screensaver. This one is similar to Mystify, but instead consists of several cubic Bezier curves instead of polygons."
//         %}
//         {%
//             title="XP Screensaver - Tubes"
//             description="A wise man once said the internet is \"a series of tubes\". What is this, if not a metaphor for the vastly interconnected world we live in today? <br> My favourite among the XP screensavers, originally referred to as 3D Pipes."
//         %}
//     </div>
// </div>

// <!--------------------------- ADP --------------------------->
// <div id='proj-adp' class="proj-container">
//     <a href='#proj-adp' class="proj-title">Atlas of Digital Pathology - Tissue Annotation Tool</a>
//     <div class="proj-subheader">Created a web-based annotation tool for computational pathology research.</div>
//     <div class="proj-content">
//             For my Capstone project, I was part of a 3-people team that designed and built a web-based annotation tool for populating a tissue histology image database. The purpose of this database is to train machine learning models in various areas of computational pathology (like cancer detection).
//     </div>
// </div>

// <!------------------------ UTRA Combat Robot ------------------------>
// <div id='proj-utra' class="proj-container">
//     <a href='#proj-utra' class="proj-title">Combat Robot Design</a>
//     <div class="proj-subheader">Lead a university team in designing and building an RC combat robot.</div>
//     <div class="proj-content">
//         Between 2018-2020, I co-led the Combat division of the UofT Robotics Association.
//         During this time we designed, manufactured and assembled a 30lbs remote controlled robot to fight in an arena deathmatch against other robots.<br><br>
//         We competed in RoboBrawl 2019 at the University of Illinois Urbana-Champaign and ranked 8th place out of 30+ teams from various universities around North America.<br>
//         <br>
//         My responsibilities included:<br>
//         • Overseeing electrical/mechatronic design<br>
//         • Managing budget, logistics and integration<br>
//         • Manufacturing parts using tools such as a lathe, vertical mill, drill press, laser cutter<br>
//         • Performing quick repairs and maintenance during pit stops between matches<br>
//     </div>
// </div>

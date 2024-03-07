export const EXPERIENCE = [
  {
    id: 'lumiq',
    title: 'Full Stack Developer',
    employer: 'LumiQ',
    icon: 'src/assets/images/lumiq.jpg',
    dateFrom: 'June 2021',
    dateTo: 'Present',
    hook: 'Contributed to the continuous development of a professional education platform for finance professionals.',
    description: [
      'Utilized React and React Native extensively to implement and maintain responsive front-end applications.',
      'Engineered the client app network layer from scratch using Redux Saga integrated with a PostgREST API.',
      'Expanded the functionality of Node.js microservices running on Docker and Kubernetes.',
      'Played a pivotal role in a major overhaul to facilitate the U.S. expansion of the company.',
      'Collaborated closely with UI/UX designers to implement visually appealing and intuitive user interfaces.',
      'Identified and addressed technical debt, ensuring maintainability and scalability of the codebase.',
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
    icon: 'src/assets/images/modiface.png',
    dateFrom: 'June 2019',
    dateTo: 'August 2020',
    hook: 'Contributed to the development of a Content Management System used by international beauty brands.',
    description: [
      'Employed a robust tech stack with frameworks like Laravel and Vue.js.',
      'Maintained and expanded a RESTful API based in PHP with an Eloquent ORM interface.',
      'Actively participated in team code reviews and mob programming sessions.',
      'Worked in a fast-paced development cycle with an automated CI/CD pipeline.',
    ],
    tech: ['Laravel', 'Vue.js', 'PHP', 'MySQL'],
  },
];

export const EDUCATION = [
  {
    id: 'uoft',
    title: 'Computer Engineering - Bachelor of Applied Science',
    institution:
      'University of Toronto, Department of Electrical and Computer Engineering',
    icon: 'src/assets/uoft.png',
    dateFrom: 'September 2016',
    dateTo: 'May 2021',
  },
  {
    id: 'circuit-stream',
    title: 'XR Development with Unity',
    institution:
      'University of Toronto – School of Continuing Studies + Circuit Stream',
    icon: 'src/assets/circuit-stream.png',
    dateFrom: 'October 2022',
    dateTo: 'December 2022',
  },
];

export const PROJECTS = {
  screensavers: {
    id: 'screensavers',
    title: 'Windows XP Screensavers',
    hook: 'Recreation of some one of the classic screensavers from the Windows XP operating system, built using Three.js.',
    img: 'src/assets/mystify.png',
    tech: ['Three.js'],
    // playUrl: 'https://three-js-screen-savers.vercel.app/mystify.html',
    // githubUrl: 'https://github.com/kavalcio/three-js-screen-savers',
  },
  dither: {
    id: 'dither',
    title: 'Dither Shaders',
    hook: 'Series of shaders written in GLSL deployed on Three.js that apply different forms of dithering to a sample image.',
    img: 'src/assets/dither.png',
    tech: ['Three.js', 'GLSL'],
    // playUrl: 'https://three-js-screen-savers.vercel.app/dither.html',
    // githubUrl:
  },
  'tissue-annotation': {
    id: 'tissue-annotation',
    name: 'Atlas of Digital Pathology - Tissue Annotation Tool',
    hook: 'Created a web-based image annotation tool for computational pathology research.',
    img: 'src/assets/adp_image.png',
    tech: [],
    playUrl: 'https://www.dsp.utoronto.ca/projects/ADP/',
  },
  'combat-robot': {
    id: 'combat-robot',
    name: 'Combat Robot Design',
    hook: 'Lead a university team in designing and building an RC combat robot.',
    description: `Between 2018-2020, I co-led the Combat division of the UofT Robotics Association.
      During this time we designed, manufactured and assembled a 30lbs remote controlled robot to fight in an arena deathmatch against other robots.<br><br>
      We competed in RoboBrawl 2019 at the University of Illinois Urbana-Champaign and ranked 8th place out of 30+ teams from various universities around North America.`,
    img: 'src/assets/utra_1.jpg',
    tech: [],
  },
  'dev-portfolio': {
    id: 'dev-portfolio',
    name: 'This Website',
    img: 'src/assets/portfolio-1.png',
    tech: ['React'],
  },
  'fashion-portfolio': {
    id: 'fashion-portfolio',
    name: 'Fashion Designer Portfolio',
    img: 'src/assets/portfolio-2.png',
    tech: ['Next.js', 'Typescript'],
  },
};

// <ol class='project-list'>
//     <a href='#proj-threejs-screensavers'>1. Three.js Screensavers</a>
//     <a href='#proj-threejs-dither'>2. Three.js & GLSL - Dither Shader</a>
//     <a href='#proj-adp'>3. Atlas of Digital Pathology - Tissue Annotation Tool</a>
//     <a href='#proj-leukofight'>4. LeukoFight - Unity Game</a>
//     <a href='#proj-threejs-solar'>5. Three.js Solar System</a>
//     <a href='#proj-utra'>6. Combat Robot Design</a>
//     <a href='#proj-maze'>7. FPGA-based Maze Traversal Game</a>
// </ol>

// <!--------------------------- Three.js Screensavers --------------------------->
// <div id='proj-threejs-screensavers' class="proj-container">
//     <a href='#proj-threejs-screensavers' class="proj-title">Three.js Screensavers</a>
//     <div class="proj-subheader">Recreation of some one of the classic screensavers from the Windows XP operating system, built using Three.js.</div>
//     <div class="proj-content horizontal">
//         {%
//             include cell.html
//             title="XP Screensaver - Mystify"
//             description="The first Windows XP screensaver I recreated, which consists of several polygons whose vertices bounce around the screen, creating interesting shapes."
//             img="../images/mystify.png"
//             playUrl="https://three-js-screen-savers.vercel.app/mystify.html"
//             githubUrl="https://github.com/kavalcio/three-js-screen-savers"
//         %}
//         {%
//             include cell.html
//             title="XP Screensaver - Bezier"
//             description="Another Three.js app recreating a Windows XP screensaver. This one is similar to Mystify, but instead consists of several cubic Bezier curves instead of polygons."
//             img="../images/bezier.png"
//             playUrl="https://three-js-screen-savers.vercel.app/bezier.html"
//             githubUrl="https://github.com/kavalcio/three-js-screen-savers"
//         %}
//         {%
//             include cell.html
//             title="XP Screensaver - Tubes"
//             description="A wise man once said the internet is \"a series of tubes\". What is this, if not a metaphor for the vastly interconnected world we live in today? <br> My favourite among the XP screensavers, originally referred to as 3D Pipes."
//             img="../images/pipes.png"
//             playUrl="https://three-js-screen-savers.vercel.app/pipes.html"
//             githubUrl="https://github.com/kavalcio/three-js-screen-savers"
//         %}
//     </div>
// </div>

// <!--------------------------- Three.js Dither Shader --------------------------->
// <div id='proj-threejs-dither' class="proj-container">
//     <a href='#proj-threejs-dither' class="proj-title">Three.js & GLSL - Dither Shader</a>
//     <div class="proj-subheader">Series of shaders written in GLSL deployed on Three.js that apply different forms of dithering to a sample image.</div>
//     <div class="proj-content horizontal">
//         {%
//             include cell.html
//             title="Dither Shaders"
//             description="I've implemented several dithering shaders (which are traditionally used to reduce the effects of quantization error in audiovisual data) using GLSL ranging from a simple random threshold dither to ordered dithering with Bayer matrices. You may test out the different algorithms using the options in the GUI."
//             img="../images/dither.png"
//             playUrl="https://three-js-screen-savers.vercel.app/dither.html"
//             githubUrl="https://github.com/kavalcio/three-js-screen-savers"
//         %}
//     </div>
// </div>

// <!--------------------------- ADP --------------------------->
// <div id='proj-adp' class="proj-container">
//     <a href='#proj-adp' class="proj-title">Atlas of Digital Pathology - Tissue Annotation Tool</a>
//     <div class="proj-subheader">Created a web-based annotation tool for computational pathology research.</div>
//     <div class="proj-content">
//         <div class="proj-content">
//             <div class="proj-img-container">
//                 <img class="proj-img" style="margin-right:5px;" src="../images/workflow.png">
//                 <img class="proj-img" src="../images/adp_image.png">
//             </div>
//             For my Capstone project, I was part of a 3-people team that designed and built a web-based annotation tool for populating a tissue histology image database. The purpose of this database is to train machine learning models in various areas of computational pathology (like cancer detection).
//         </div>
//     </div>
// </div>

// <!------------------------ UTRA Combat Robot ------------------------>
// <div id='proj-utra' class="proj-container">
//     <a href='#proj-utra' class="proj-title">Combat Robot Design</a>
//     <div class="proj-subheader">Lead a university team in designing and building an RC combat robot.</div>
//     <div class="proj-content">
//         <div class="proj-img-container">
//             <img class="proj-img" style="margin-right:5px;" src="../images/utra_1.jpg">
//             <img class="proj-img" src="../images/utra_2.jpg">
//         </div>
//         Between 2018-2020, I co-led the Combat division of the UofT Robotics Association.
//         During this time we designed, manufactured and assembled a 30lbs remote controlled robot to fight in an arena deathmatch against other robots.<br><br>
//         We competed in RoboBrawl 2019 at the University of Illinois Urbana-Champaign and ranked 8th place out of 30+ teams from various universities around North America.<br>
//         <br>
//         <!-- <div class="proj-img-container">
//             <img class="proj-img" style="margin-right:5px;" src="../images/utra_3.jpg">
//         </div> -->
//         My responsibilities included:<br>
//         • Overseeing electrical/mechatronic design<br>
//         • Managing budget, logistics and integration<br>
//         • Manufacturing parts using tools such as a lathe, vertical mill, drill press, laser cutter<br>
//         • Performing quick repairs and maintenance during pit stops between matches<br>
//     </div>
// </div>

// <!------------------------ Maze Game ------------------------>
// <div id='proj-maze' class="proj-container">
//     <a href='#proj-maze' class="proj-title">FPGA-based Maze Traversal Game</a>
//     <div class="proj-subheader">Created a basic video game using computer hardware and low-level software.</div>
//     <div class="proj-content">
//         <div class="proj-img-container">
//             <img class="proj-img" style="margin-right:5px;" src="../images/mazegame_1.jpg">
//             <img class="proj-img" src="../images/mazegame_2.jpg">
//         </div>
//         I created a maze traversal game using Verilog code on a field-programmable gate array (FPGA).
//         The goal of the game is to traverse a maze and get to the finish line without coming into contact with any walls while controlling a constantly-moving player character.<br><br>
//         This design process involved:<br>
//         • Designing a finite state machine (FSM) representing interactions between the different states of the game<br>
//         • Creating I/O modules for user input and image output to the display<br>
//         • Testing code functionality using a simulation via ModelSim<br>
//         • Launching project onto a live FPGA using Quartus Prime
//     </div>
// </div>

// <img onclick="scrollToTop()" id="scroll-to-top" title="Go to top" src='../images/scroll_top.png'>

// <script>
//     // Smooth scroll to project when link is clicked
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function (e) {
//             e.preventDefault();
//             const hash = anchor.href.split('#')[1];
//             history.pushState({}, '', '#' + hash)
//             document.querySelector(this.getAttribute('href')).scrollIntoView({
//                 behavior: 'smooth'
//             });
//         });
//     });

//     // Scroll to top when button is clicked
//     function scrollToTop() {
//         window.scrollTo({ top: 0 });
//     }

//     // When the user scrolls down 20px from the top of the document, show the button
//     let scrollToTopButton = document.getElementById("scroll-to-top");
//     window.onscroll = () => {
//         if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//             scrollToTopButton.style.display = "block";
//         } else {
//             scrollToTopButton.style.display = "none";
//         }
//     };
// </script>

// <!------------------------ TODO: Pneumatic Engine ------------------------>
// <!-- <div id="proj7" class="collapsible">
//     <div class="collapsible-arrow-container">
//         <div id="proj7-arrow" class="collapsible-arrow"></div>
//     </div>
//     <div class="collapsible-title">Machine Learning Labs</div>
// </div>
// <div id="proj7-content" class="collapsible-content">
//     * Lorem ipsum
//     * Dolor sit amet
// </div>
// -->

---
layout: page
title: Projects
---
Here you can find some of the projects I have worked on in the past.

<ol class='project-list'>
    <a href='#proj-threejs-screensavers'>1. Three.js Screensavers</a>
    <a href='#proj-adp'>2. Atlas of Digital Pathology - Tissue Annotation Tool</a>
    <a href='#proj-leukofight'>3. LeukoFight - Unity Game</a>
    <a href='#proj-threejs-solar'>4. Three.js Solar System</a>
    <a href='#proj-utra'>5. Combat Robot Design</a>
    <a href='#proj-maze'>6. FPGA-based Maze Traversal Game</a>
</ol>

<!--------------------------- Three.js Screensavers --------------------------->
<div id='proj-threejs-screensavers' class="proj-container">
    <a href='#proj-threejs-screensavers' class="proj-title">Three.js Screensavers</a>
    <div class="proj-subheader">Recreation of some one of the classic screensavers from the Windows XP operating system, built using Three.js.</div>
    <div class="proj-content horizontal">
        {%
            include cell.html
            title="XP Screensaver - Mystify"
            description="The first Windows XP screensaver I recreated, which consists of several polygons whose vertices bounce around the screen, creating interesting shapes."
            img="../images/mystify.png"
            playUrl="https://three-js-screen-savers.vercel.app/mystify.html"
            githubUrl="https://github.com/kavalcio/three-js-screen-savers"
        %}
        {%
            include cell.html
            title="XP Screensaver - Bezier"
            description="Another Three.js app recreating a Windows XP screensaver. This one is similar to Mystify, but instead consists of several cubic Bezier curves instead of polygons."
            img="../images/bezier.png"
            playUrl="https://three-js-screen-savers.vercel.app/bezier.html"
            githubUrl="https://github.com/kavalcio/three-js-screen-savers"
        %}
        {%
            include cell.html
            title="XP Screensaver - Tubes"
            description="A wise man once said the internet is \"a series of tubes\". What is this, if not a metaphor for the vastly interconnected world we live in today? <br> My favourite among the XP screensavers, originally referred to as 3D Pipes."
            img="../images/pipes.png"
            playUrl="https://three-js-screen-savers.vercel.app/pipes.html"
            githubUrl="https://github.com/kavalcio/three-js-screen-savers"
        %}
    </div>
</div>

<!--------------------------- Three.js Dither Shader --------------------------->
<div id='proj-threejs-screensavers' class="proj-container">
    <a href='#proj-threejs-screensavers' class="proj-title">Three.js & GLSL - Dither Shader</a>
    <div class="proj-subheader">Series of shaders written in GLSL deployed on Three.js that apply different forms of dithering to a sample image.</div>
    <div class="proj-content horizontal">
        {%
            include cell.html
            title="Dither Shaders"
            description="I've implemented several dithering shaders (which are traditionally used to reduce the effects of quantization error in audiovisual data) using GLSL ranging from a simple random threshold dither to ordered dithering with Bayer matrices. You may test out the different algorithms using the options in the GUI."
            img="../images/dither.png"
            playUrl="https://three-js-screen-savers.vercel.app/dither.html"
            githubUrl="https://github.com/kavalcio/three-js-screen-savers"
        %}
    </div>
</div>

<!--------------------------- ADP --------------------------->
<div id='proj-adp' class="proj-container">
    <a href='#proj-adp' class="proj-title">Atlas of Digital Pathology - Tissue Annotation Tool</a>
    <div class="proj-subheader">Created a web-based annotation tool for computational pathology research.</div>
    <div class="proj-content">
        <div class="proj-content">
            <div class="proj-img-container">
                <img class="proj-img" style="margin-right:5px;" src="../images/workflow.png">
                <img class="proj-img" src="../images/adp_image.png">
            </div>
            For my Capstone project, I was part of a 3-people team that designed and built a web-based annotation tool for populating a tissue histology image database. The purpose of this database is to train machine learning models in various areas of computational pathology (like cancer detection).
        </div>
    </div>
</div>

<!------------------------ LeukoFight ------------------------>
<div id='proj-leukofight' class="proj-container">
    <a href='#proj-leukofight' class="proj-title">LeukoFight - Unity Game</a>
    <div class="proj-subheader">Created a 2D side-scroller action game on the Unity engine.</div>
    <div class="proj-content">
        <div class="proj-img-container">
            <img class="proj-img" src="../images/leukofight_2.png">
        </div>
        I am creating a 2D side-scroller action game named LeukoFight
        where you play as a white blood cell fighting off infections in a body.<br><br>
        I built the project on Unity and used C# scripts to implement the following features among others:<br>
        • Customized movement and collision system<br>
        • 4 functional enemy types with unique behaviour, models and stats<br>
        • Sprite-based animation controller for player character and all enemies<br>
        • A playable scene and a menu screen<br>
        <div class="proj-img-container">
            <img class="proj-img" style="margin-right:5px;width:40%;" src="../images/leukofight_5.png">
            <img class="proj-img" src="../images/leukofight_3.png">
        </div>
        <div class="proj-img-container">
            <img class="proj-img" src="../images/leukofight_4.png">
        </div>
    </div>
</div>

<!------------------------ Three.js Solar System Model ------------------------>
<div id="proj-threejs-solar" class="proj-container">
    <a href='#proj-threejs-solar' class="proj-title">Three.js Star System Model</a>
    <div class="proj-subheader">Created a 3D model of a star system using Three.js.</div>
    <div class="proj-content">
        <div class="proj-img-container no-fixed-height">
            <img class="proj-img" src="../images/solar.png">
        </div>
        I created a model of a star system using Three.js, a Javascript library that utilizes WebGL to render graphics on a browser.<br><br>
        • Added shaders to create a bloom effect for the sun<br>
        • Implemented support for planets that orbit the central star and moons that orbit their respective planets<br>
        • Designed an object hierarchy that allows recursively rendering and transforming all celestial bodies in the system<br>
        • Created a simple GUI for camera and environment controls<br>
    </div>
</div>

<!------------------------ UTRA Combat Robot ------------------------>
<div id='proj-utra' class="proj-container">
    <a href='#proj-utra' class="proj-title">Combat Robot Design</a>
    <div class="proj-subheader">Lead a university team in designing and building an RC combat robot.</div>
    <div class="proj-content">
        <div class="proj-img-container">
            <img class="proj-img" style="margin-right:5px;" src="../images/utra_1.jpg">
            <img class="proj-img" src="../images/utra_2.jpg">
        </div>
        Between 2018-2020, I co-led the Combat division of the UofT Robotics Association.
        During this time we designed, manufactured and assembled a 30lbs remote controlled robot to fight in an arena deathmatch against other robots.<br><br>
        We competed in RoboBrawl 2019 at the University of Illinois Urbana-Champaign and ranked 8th place out of 30+ teams from various universities around North America.<br>
        <br>
        <!-- <div class="proj-img-container">
            <img class="proj-img" style="margin-right:5px;" src="../images/utra_3.jpg">
        </div> -->
        My responsibilities included:<br>
        • Overseeing electrical/mechatronic design<br>
        • Managing budget, logistics and integration<br>
        • Manufacturing parts using tools such as a lathe, vertical mill, drill press, laser cutter<br>
        • Performing quick repairs and maintenance during pit stops between matches<br>
    </div>
</div>

<!------------------------ Maze Game ------------------------>
<div id='proj-maze' class="proj-container">
    <a href='#proj-maze' class="proj-title">FPGA-based Maze Traversal Game</a>
    <div class="proj-subheader">Created a basic video game using computer hardware and low-level software.</div>
    <div class="proj-content">
        <div class="proj-img-container">
            <img class="proj-img" style="margin-right:5px;" src="../images/mazegame_1.jpg">
            <img class="proj-img" src="../images/mazegame_2.jpg">
        </div>
        I created a maze traversal game using Verilog code on a field-programmable gate array (FPGA).
        The goal of the game is to traverse a maze and get to the finish line without coming into contact with any walls while controlling a constantly-moving player character.<br><br>
        This design process involved:<br>
        • Designing a finite state machine (FSM) representing interactions between the different states of the game<br>
        • Creating I/O modules for user input and image output to the display<br>
        • Testing code functionality using a simulation via ModelSim<br>
        • Launching project onto a live FPGA using Quartus Prime
    </div>
</div>

<img onclick="scrollToTop()" id="scroll-to-top" title="Go to top" src='../images/scroll_top.png'>

<script>
    // Smooth scroll to project when link is clicked
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const hash = anchor.href.split('#')[1];
            history.pushState({}, '', '#' + hash)
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll to top when button is clicked
    function scrollToTop() {
        window.scrollTo({ top: 0 });
    }

    // When the user scrolls down 20px from the top of the document, show the button
    let scrollToTopButton = document.getElementById("scroll-to-top");
    window.onscroll = () => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    };
</script>

<!------------------------ This Website ------------------------>
<!-- <div id="proj5" class="collapsible">
    <div class="collapsible-arrow-container">
        <div id="proj5-arrow" class="collapsible-arrow"></div>
    </div>
    <div class="collapsible-title">This Website</div>
</div>
<div id="proj5-content" class="collapsible-content">
    <div class="proj-subheader">Personal website design and development using Jekyll.</div>
    I built this personal website using Jekyll, a static site generator written in Ruby.
    I based it on Hyde, an existing Jekyll template, and proceded to add some additional functionality using HTML, CSS and Javascript code.<br>
    <div class="proj-icon-container">
        <img class="proj-icon" src="../images/jekyll.png">
        <img class="proj-plus-icon" src="../images/plus-icon.png">
        <svg class="proj-icon" viewBox="0 0 128 128">
            <path fill="#E44D26" d="M19.569 27l8.087 89.919 36.289 9.682 36.39-9.499 8.096-90.102h-88.862zm72.041 20.471l-.507 5.834-.223 2.695h-42.569l1.017 12h40.54l-.271 2.231-2.615 28.909-.192 1.69-22.79 6.134v-.005l-.027.012-22.777-5.916-1.546-17.055h11.168l.791 8.46 12.385 3.139.006-.234v.012l12.412-2.649 1.296-13.728h-38.555l-2.734-30.836-.267-3.164h55.724000000000004l-.266 2.471zM27.956 1.627h5.622v5.556h5.144v-5.556h5.623v16.822h-5.623v-5.633h-5.143v5.633h-5.623v-16.822zM51.738 7.206h-4.95v-5.579h15.525v5.579h-4.952v11.243h-5.623v-11.243zM64.777 1.627h5.862l3.607 5.911 3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867 5.981h-.098l-3.87-5.981v8.338h-5.502v-16.822zM86.513 1.627h5.624v11.262h7.907v5.561h-13.531v-16.823z"></path>
        </svg>
        <img class="proj-plus-icon" src="../images/plus-icon.png">
        <svg class="proj-icon" viewBox="0 0 128 128">
            <path fill="#1572B6" d="M19.67 26l8.069 90.493 36.206 10.05 36.307-10.063 8.078-90.48h-88.66zm69.21 50.488l-2.35 21.892.009 1.875-22.539 6.295v.001l-.018.015-22.719-6.225-1.537-17.341h11.141l.79 8.766 12.347 3.295-.004.015v-.032l12.394-3.495 1.308-14.549h-25.907000000000004l-.222-2.355-.506-5.647-.265-2.998h27.886000000000003l1.014-11h-42.473l-.223-2.589-.506-6.03-.265-3.381h55.597l-.267 3.334-2.685 30.154"></path><path fill="#1572B6" d="M89 14.374l-7.149-8.374h7.149v-5h-16v4.363l8.39 7.637h-8.39v5h16zM70 14.374l-6.807-8.374h6.807v-5h-15v4.363l7.733 7.637h-7.733v5h15zM52 13h-8v-7h8v-5h-14v17h14z"></path>
        </svg>
        <img class="proj-plus-icon" src="../images/plus-icon.png">
        <svg class="proj-icon" viewBox="0 0 128 128">
            <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185h-125.184z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>
        </svg>
    </div>
    Some of the features I have added include:<br>
    • Collapsible sections (such as the ones you see on this page)<br>
    • A resume format with icons for each entry<br>
    • A contacts page with hyperlinks<br>
</div> -->


<!------------------------ TODO: Computer Graphics (CSC317) ------------------------>
<!-- <div id="proj3" class="collapsible">
    <div class="collapsible-arrow-container">
        <div id="proj3-arrow" class="collapsible-arrow"></div>
    </div>
    <div class="collapsible-title">Computer Graphics Labs</div>
</div>
<div id="proj3-content" class="collapsible-content">
    * Lorem ipsum
    * Dolor sit amet
</div>
-->

<!------------------------ TODO: Machine Learning Labs (ECE420) ------------------------>
<!-- <div id="proj4" class="collapsible">
    <div class="collapsible-arrow-container">
        <div id="proj4-arrow" class="collapsible-arrow"></div>
    </div>
    <div class="collapsible-title">Machine Learning Labs</div>
</div>
<div id="proj4-content" class="collapsible-content">
    * Lorem ipsum
    * Dolor sit amet
</div>
-->

<!------------------------ TODO: Pneumatic Engine ------------------------>
<!-- <div id="proj7" class="collapsible">
    <div class="collapsible-arrow-container">
        <div id="proj7-arrow" class="collapsible-arrow"></div>
    </div>
    <div class="collapsible-title">Machine Learning Labs</div>
</div>
<div id="proj7-content" class="collapsible-content">
    * Lorem ipsum
    * Dolor sit amet
</div>
-->

<!------------------------ BMEC 2017 ------------------------>
<!-- <div id="proj8" class="collapsible">
    <div class="collapsible-arrow-container">
        <div id="proj8-arrow" class="collapsible-arrow"></div>
    </div>
    <div class="collapsible-title">Ergonomic Keyboard Design for Individuals with Cerebral Palsy</div>
</div>
<div id="proj8-content" class="collapsible-content">
    <div class="proj-subheader">Designed, built and presented a keyboard prototype for a Biomedical Engineering competition.</div>
    <div class="proj-img-container">
        <img class="proj-img" style="margin-right:5px;" src="../images/beezyboard_4.jpg">
        <img class="proj-img" src="../images/beezyboard_3.jpg">
    </div>
    I participated in the Biomedical Engineering Competition (BMEC 2017) organized by the Club for Undergraduate Biomedical Engineering (CUBE) at the University of Toronto. Our goal was to design a text communication device catered towards individuals living with cerebral palsy. Along with several teammates, I designed and built a functional prototype for a specialized keyboard over the course of two days. We presented our design to a team of judges made up of IBBME professors and experts.
</div>
-->

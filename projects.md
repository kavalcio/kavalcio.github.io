---
layout: page
title: Projects
---
Here you can find some of the projects I have worked on in the past.
<hr>

<!--------------------------- ADP --------------------------->
<div id="proj1" class="collapsible">
    <div class="collapsible-arrow-container">
        <div id="proj1-arrow" class="collapsible-arrow"></div>
    </div>
    <div class="collapsible-title">Atlas of Digital Pathology - Tissue Annotation Tool</div>
    </div>
<div id="proj1-content" class="collapsible-content">
    <div class="proj-img-container">
        <img class="proj-img" style="margin-right:5px;" src="../images/workflow.png">
        <img class="proj-img" src="../images/adp_image.png">
    </div>
    For my Capstone project, I was part of a 3-people team that designed and built a web-based annotation tool for populating a tissue histology image database. The purpose of this database is to train machine learning models in various areas of computational pathology (like cancer detection).
</div>

<hr>

<!------------------------ MindUnite ------------------------>
<div id="proj2" class="collapsible">
    <div class="collapsible-arrow-container">
        <div id="proj2-arrow" class="collapsible-arrow"></div>
    </div>
    <div class="collapsible-title">MindUnite - Brainstorming Tool</div>
    </div>
<div id="proj2-content" class="collapsible-content">
    * Lorem ipsum
    * Dolor sit amet
</div>

<hr>

## Computer Graphics (CSC317)
<hr>

## ECE420
<hr>

## This Website
<hr>

## UTRA Combat Robot

<script>
    // Add functionality to collapsible boxes
    const coll = document.getElementsByClassName("collapsible");
    
    for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        let content = document.getElementById(this.id+"-content");
        
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

        let arrow = document.getElementById(this.id+"-arrow");
        arrow.classList.toggle("expanded");
    });
    }
</script>
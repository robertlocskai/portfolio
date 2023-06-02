<template>

    <div :class="{mobileProject: mobileView, project: !mobileView}">

        <div class="projectHeader" :style="{ backgroundImage: `url(${this.pImg})` }">
            <div class="gradient"></div>
        </div>
        <div class="projectContent">

            <div class="projectTitle"> {{ this.pName }} </div>
            <div class="projectTechs">
                <span class="pTech" v-for="tech in techUsed" :id=tech> {{tech}} </span>
            </div>
            <div class="projectDesc">
                {{ pDesc }}
            </div>
            <a href="#">Learn More</a>
            <a v-if="this.pId==2" id="view" href="http://tovabbfejleszto.fejlessz.hu" target="_blank">View</a>
            <a v-if="this.pId==3" id="view" href="https://login.musicanum.at/" target="_blank">View</a>
        </div>
    </div>

</template>

<script>
import watchtowerBg from '@/assets/images/thumbnails/watchtower.png'
import frogBg from '@/assets/images/thumbnails/frogs.png'
import szakkorBg from '@/assets/images/thumbnails/tovabbfejleszto.png'
import musicaBg from '@/assets/images/thumbnails/musica.png'
import portfolioBg from '@/assets/images/thumbnails/portfolio.png'


    export default {
        name: "Project",
        props: {
            pId: Number
        },
        data() {
            return {
                pNames: ["Java Watchtower DEMO Game", 
                        "Java Frog DEMO Game", 
                        "School Programming Club Site",
                        "Musica - Music School's Site",
                        "My Portfolio"],
                pDescs: ["A Java game project testing my design and mechanism skills with scnenes, entrances and colliders! It was all made without a game engine or any libraries.",
                        "A local 2 player platformer Java project, that has 2 frogs running around and eating mushrooms, flies.",
                        "This is a responsive website where people could/can sign up for a programming club. You can only sign up with the email you got from the school. It has an Admin dashboard too where admins can send emails to the members.",
                        "An Austrian music school's website with roles, where you can manage lessons as a teacher, sign up to trial lessons and more...",
                        "This mobile responsive portfolio was made with Vue.js, by only me. The design was also created by me."],
                pImgs: [watchtowerBg,
                        frogBg,
                        szakkorBg,
                        musicaBg,
                        portfolioBg],
                pName: String,
                pDesc: String,
                pImg: String,
                techUsed: [],
                mobileView: false
            }
        },
        methods: {
            getData() {
                this.pName=this.pNames[this.pId]
                this.pDesc=this.pDescs[this.pId]
                this.pImg=this.pImgs[this.pId];
            },
            initTechs() {
                if(this.pId===0){
                    this.techUsed.push("Java");
                    this.techUsed.push("Indie");
                }
                if(this.pId===1) {
                    this.techUsed.push("Java");
                    this.techUsed.push("Indie");
                }
                if(this.pId===2){
                    this.techUsed.push("HTML");
                    this.techUsed.push("PHP");
                    this.techUsed.push("JavaScript");
                    this.techUsed.push("MySQL");
                    this.techUsed.push("Full-Stack");
                }
                if(this.pId===3){
                    this.techUsed.push("HTML");
                    this.techUsed.push("PHP");
                    this.techUsed.push("JavaScript");
                    this.techUsed.push("Twig");
                    this.techUsed.push("Full-Stack");
                }
                if(this.pId===4){
                    this.techUsed.push("HTML");
                    this.techUsed.push("JavaScript");
                    this.techUsed.push("VueJS");
                    this.techUsed.push("Full-Stack");
                }
            },
            handleView() {
                this.mobileView = window.innerWidth <= 990
            }
        },
        created() {
            this.getData();
            this.initTechs();
            this.handleView()
            window.addEventListener("resize", this.handleView)
        }

    }

</script>

<style scoped>

    .project {
        text-align: left;
        display: inline-block;
        width: 30%;
        padding-bottom: 1rem;
        margin: 1% 1% 0px 1%;
        border-radius: 13px;
	    box-shadow: rgba(0,0,0,0.2) 2px 2px 5px;
	    border: rgba(255,255,255, 0.04) 1px solid;
        overflow: hidden;

    }

    .mobileProject {
        text-align: left;
        display: block;
        width: 70%;
        padding-bottom: 1rem;
        margin-left: 15%; margin-right: 15%; margin-top: 1rem;
        border-radius: 13px;
	    box-shadow: rgba(0,0,0,0.2) 2px 2px 5px;
	    border: rgba(255,255,255, 0.04) 1px solid;
        overflow: hidden;
    }

    .projectHeader {
	
        /*background-color: rgba(255,255,255,0.0);*/
        /*background-image: url("@/assets/images/thumbnails/watchtower.png");*/
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 10rem;
        
	
    }

    .gradient {
        width: 100%;
        height: 50%;
        top: 50%;
        position: relative;
        background: linear-gradient(0deg, rgba(32,33,36,1) 0%, rgba(0,0,0,0) 100%);
    }

    .projectContent {

        margin: 1rem;

    }

    .projectTitle {
	
	font-size: 25px;
	font-family: Inter;
    height: 2.5rem;
    overflow: hidden;
    white-space: nowrap;
	text-overflow: ellipsis;
    }

    .projectTechs {
        height: auto;
        line-height: 2rem;
        overflow: hidden;
        white-space: nowrap;
	    text-overflow: ellipsis;
    }


    .projectDesc {
        font-family: Source Code Pro;
        color: #e3e3e3;
        font-size: 0.8rem;
        margin-top: 1rem;
        height: 7rem;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .project a, .mobileProject a {
	
        float: right;
        border: rgba(255,255,255,0.07) 1px solid;
        padding: 10px;
        color: rgba(255,255,255,0.7);
        border-radius: 4px;
        transition: 0.2s;
        margin-left: 10px;
        text-decoration: none;
        font-family: Source Code Pro;
        
    }

    .project a:hover, .mobileProject a:hover {
	
	box-shadow: rgba(0,0,0,0.4) 0px 0px 5px;
	
    }

    .project a#view, .mobileProject a#view {
        
        border-color: rgba(0,0,0,0);
        background-color: rgba(181, 144, 65, 0.4);
        color: #ffe1b8;
        
    }

    .project a#view:hover, .mobileProject a#view:hover {
        
        background-color: rgba(204, 173, 105, 0.7);
        color: #ffe1b8;
        
    }
    .pTech {
        font-family: Source Code Pro;
        padding: 6px 10px 6px 10px;
        color: #ffffff;
        border-radius: 5px;
        background-color: rgba(255,255,255,0.3);
        margin-right: 10px;
        font-size: 14px;
        font-weight: bold;
	
    }

    /* NYELVEK */

    .pTech#Java {
        
        color: #ffe499;
        background-color: rgba(255, 209, 84, 0.22);
        
    }

    .pTech#React {
        
        color: #dcdbff;
        background-color: rgba(74, 71, 255, 0.22);
        
    }

    .pTech#Nodejs {
        
        color: #dbffdb;
        background-color: rgba(94, 255, 94, 0.22);
        
    }

    .pTech#Python {
        
        color: #fdffc9;
        background-color: rgba(250, 255, 107, 0.22);
        
    }

    .pTech#JavaScript {
        
        color: #feffd6;
        background-color: rgba(249, 255, 71, 0.22);
        
    }

    .pTech#PHP {
        
        color: #e8d9ff;
        background-color: rgba(154, 87, 255, 0.22);
        
    }

    .pTech#Csharp {
        
        color: #babac2;
        background-color: rgba(89, 85, 163, 0.22);
        
    }

    .pTech#MySQL {
        
        color: #babac2;
        background-color: rgba(89, 85, 163, 0.22);
        
    }

    .pTech#HTML {
        
        color: #ffe4d1;
        background-color: rgba(255, 126, 33, 0.22);
        
    }

    .pTech#VueJS {

        color: #e6ffe4;
        background-color: rgba(41, 138, 54, 0.22);

    }


</style>
<template>

    <div class="aboutme" id="aboutme" :class="{mobile: mobileView}">

        <div class="content" id="content" :class="{mobile: mobileView}">

            <div class="meImg" id="meImg" :class="{mobile: mobileView}"><div class="imgFade"></div></div>
            <span class="titleText" id="titleText" :class="{mobile: mobileView}">About <span style="color: #ffa930">Myself</span></span><br>
            
            <div class="card" id="card" v-motion-pop-visible :class="{mobile: mobileView}">
                <div class="cardContainer">
                    <div class="cardTop">
                        <div class="imageCircle">
                            <img src="@/assets/images/questionmark.svg" />
                        </div>
                    </div>
                    <span class="cardTitle">Who am I?</span>
                    <br />
                    <div class="cardText">
                        A 19 years old coder from Hungary with the goal of finding his own place in the development industry.
                    </div>
                </div>
            </div>

            <div class="card" id="card" v-motion-pop-visible :class="{mobile: mobileView}">
                <div class="cardContainer">
                    <div class="cardTop">
                        <div class="imageCircle">
                            <img src="@/assets/images/graduate.svg" />
                        </div>
                    </div>
                    <span class="cardTitle">Studies</span>
                    <br />
                    <div class="cardText">
                        Graduated in an IT school where we learned about Java and more. From 2023 September my Technician IT training starts. Besides that, I’m studying Spring Boot from a course.
                    </div>
                </div>
            </div>

            <div class="card" id="card" v-motion-pop-visible :class="{mobile: mobileView}">
                <div class="cardContainer">
                    <div class="cardTop">
                        <div class="imageCircle">
                            <img src="@/assets/images/checkcircle.svg" />
                        </div>
                    </div>
                    <span class="cardTitle">Experiences</span>
                    <br />
                    <div class="cardText">
                        Currently I only have experiences from casual work for a private individual. I have the most experience with Java, and web development.
                    </div>
                </div>
            </div>

        </div>

    </div>

</template>

<script>

    export default {
        name: "AboutMe",
        mobileView: false,
        methods: {
            handleView() {
                this.mobileView = window.innerWidth <= 990
            }
        },
        created() {
            this.handleView()
            window.addEventListener("resize", this.handleView)
        }
    }

</script>

<style scoped>

    .aboutme {
        height: 100%;
        width: 100%;
        background-image: url("@/assets/images/waves.svg");
        background-size: cover;
        position: relative;
    }

    #aboutme.mobile {
        height: auto;
    }

    .content {
        position: absolute;
        height: auto;
        width: 100%;
        left: 50%;
        transform: translateX(-50%);
        /*margin-left: 3rem;
        margin-right: 3rem;*/
        margin-top: 5rem;
        text-align: center;
    }

    #content.mobile {
        position: relative;
    }

    .meImg {
        height: 22rem;
        width: 22rem;
        background-image: url("@/assets/images/me.jpg");
        background-size: cover;
        background-position: top center;
        background-repeat: no-repeat;
        border-radius: 11rem;
        margin-left: 50%;
        transform: translateX(-50%);
        overflow: hidden;
    }

    #meImg.mobile {
        height: 18rem;
        width: 18rem;
        border-radius: 9rem;
    }

    .imgFade {
        width: 100%;
        height: 100%;
        background: rgb(32,33,36);
        background: linear-gradient(0deg, rgba(32,33,36,1) 13%, rgba(0,0,0,0) 64%);
    }

    .titleText {
        
        font-family: Inter;
        font-size: 5rem;
        position: fixed;
        transform: translateY(-5rem) translateX(-50%);


    }

    #titleText.mobile {
        font-size: 3.4rem;
    }

    .card {
        background-color: #202124;
        width: 23rem;
        height: 27rem;
        border-radius: 1rem;
        text-align: center;
        position: relative;
        margin-top: 3rem;
        margin-left: 0.8rem;
        margin-right: 0.8rem;
        box-shadow: rgba(0,0,0,0.3) 4px 4px 10px;
        display: inline-block;
    }

    #card.mobile {
        display: block;
        position: relative;
        width: auto;
        margin: 1 auto;
    }

    .cardContainer {
        margin-top: 1rem;
        margin-bottom: 1rem;
        margin-left: 2rem;
        margin-right: 2rem;
        height: 100%;
        width: auto;
    }

    .cardTop {

        width: 100%;
        height: 10rem;
        position: relative;

    }

    .imageCircle {
        position: absolute;
        width: 6rem;
        height: 6rem;
        border-radius: 3rem;
        background-color: #27262D;
        left: 50%;
        top: 2rem;
        transform: translateX(-50%);
    }

    .imageCircle img {

        max-height: 40%;
        margin-top: 50%;
        transform: translateY(-50%);

    }

    .cardTitle {
        color: #dadada;
        font-size: 1.5rem;
        font-family: Montserrat;
        margin-bottom: 2rem;
    }

    .cardText {

        margin-top: 1.5rem;
        font-family: Source Code Pro;
        color: #d4d4d4;
        font-size: 1.1rem;
        text-align: left;
        height: 40%;
        overflow: hidden;

    }

</style>
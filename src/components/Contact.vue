<template>

    <div class="contact" id="contact" :class="{mobile: mobileView}">

        <div :class="{mobile: mobileView}" class="title" id="title">
            <span :class="{mobile: mobileView}" id="titleText" v-motion-pop-visible>Let's<br><span style="color: #ffa930">Chat</span>!</span>
            <div class="label" v-motion-slide-visible-left>
                Got an offer?
            </div>
        </div>

        <div class="contactForm" id="contactForm" :class="{mobile: mobileView}">

            <div class="content" v-motion-slide-visible-left>
                <form>
                <p>Hi, I’m <input v-on:change="check()" type="text" name="name" placeholder="Your Name" size="13rem"/>
                from <input type="text" name="company" placeholder="Company" size="13rem"/>.</p>
                <p>Your work got us interested in you.</p>
                <p>You can reach out to me at <input type="email" name="email" placeholder="example@email.com" size="18rem"/> to get things started!</p>
                <input type="submit" value="Send!" id="sendBtn" :class="{mobile: mobileView}"/>
                </form>
            </div>

        </div>

    </div>

</template>

<script>

    export default {
        name: "Contact",
        mobileView: false,
        methods: {
            check() {
                console.log("ASD")
            },
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

div.contact {

    height: 100%;
    width: 100%;
    position: relative;
    background-image: url("@/assets/images/waves2.svg");
    background-size:contain;
    background-repeat: no-repeat;

}

#contact.mobile {
    margin-top: 6rem;
    background-size: auto;
    background-position: top center;
}

div.title {
    position: absolute;
    width: 50%;
    height: 50%;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
}

div#title.mobile {
    position: static;
    transform: translateY(0px);
    width: 100%;
    height: auto;
}

div#title.mobile #titleText {
    font-size: 5rem;
}
div#title.mobile div.label {
    font-size: 2rem;
    text-align: center;
}

div.title div.label {

    height: auto;
    text-align: right;
    font-style: italic;
    font-size: 75px;
    text-shadow: rgba(0,0,0,0.5) -3px 3px 5px;
    color: #8e8e8e;

}

div.title span#titleText {

    font-size: 170px;
    font-family: Inter;
    text-shadow: rgba(0,0,0,0.3) -10px 10px 0px;

}

div.contactForm {
    position: absolute;
    width: 50%;
    height: 50%;
    left: 50%;
    top: 50%;
    transform: translateY(-50%);
}

#contactForm.mobile {
    position: static;
    width: 100%;
    height: auto;
    transform: translateY(0px);
}

#contactForm.mobile div.content {
    margin: 1rem;
    font-size: 2rem;
}

#contactForm.mobile div.content input {
    font-size: 1rem;
}
#contactForm.mobile div.content p {
    text-indent: 0px;
}

div.contactForm div.content {
    margin: 2rem;
    color: #dadada;
    font-family: Montserrat;
    font-size: 64px;
}

input {

    background-color: rgba(0,0,0,0);
    border: none;
    border-bottom: solid 3px #dadada;
    height: 100%;
    color: #dadada;
    font-family: Montserrat;
    font-size: 2.5rem;
    transition: 0.3s;
    border-radius: 0px;
    outline: none;
}

input:hover, input:focus {
    
    border-bottom: solid 3px #ffa930;
}

p {
    margin: 0px;
    text-indent: 3.4rem;
    font-style: italic;
}

input#sendBtn {
    float: right;
    margin-right: 2rem;
    font-size: 30px;
    cursor: pointer;
}

input#sendBtn.mobile {
    float:left;
    margin-top: 2rem;
    margin-left: 50%;
    transform: translateX(-50%);
}


</style>
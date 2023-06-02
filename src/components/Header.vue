<template>

    <div class="header">
        <div v-bind:class="{ centerHeader: mobileView, left: !mobileView }">

            <div class="headerBox">
				
                <div v-bind:class="{centerContainer: mobileView, container: !mobileView}">
                
                    <img width="100px" src="https://svgsilh.com/svg/26432.svg" class="decal" id="titleDecal" v-if="!mobileView" />
                
                    <span :class="{smallTitle: !mobileView, mSmallTitle: mobileView}">Hello, my name is-</span><br />
                    <span :class="{title: !mobileView, mTitle: mobileView}">Róbert Lócskai.</span><br />
                    <div v-if="mobileView" style="text-align: justify;">
                    <span :class="{headerText: !mobileView, mHeaderText: mobileView}">
                    
                        Web/software developer<span style="color: #adadad;"> from Hungary, mainly focusing on full stack development.
                         I'm interested in making websites, softwares and games. Currently looking forward to gain more experience and adventures in my profession 
                        of making</span> <span style="color: #ffa930; font-weight: bold;">something great</span>.<br>
                    
                    </span>
                    </div>
                    <div v-if="!mobileView" style="text-align: left;">
                    <span :class="{headerText: !mobileView, mHeaderText: mobileView}">
                    
                        Web/software developer<span style="color: #adadad;"> from Hungary, mainly focusing on full stack development.
                         I'm interested in making websites, softwares and games. Currently looking forward to gain more experience and adventures in my profession 
                        of making</span> <span style="color: #ffa930; font-weight: bold;">something great</span>.<br>
                    
                    </span>
                    </div>
                    <div :class="{mobileSocial: mobileView}">
                    <a target="_blank" href="https://github.com/robertlocskai" class="social"><svg id="social" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg></a>
                    
                    <a target="_blank" href="https://www.linkedin.com/in/robertlocskai/" class="social"><svg id="social" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg></a>
                    <br v-if="mobileView">
                    <div id="cv"><a target="_blank" href="/assets/robert_locskai_cv_eng_public.pdf" class="cvDownload" download>
                    
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-down btnSVG" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1h-2z"/>
                          <path fill-rule="evenodd" d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"/>
                        </svg>
                    
                         Download CV
                    
                    </a></div>
                    </div>
                    
                </div>
                
            </div>

            <svg v-if="!mobileView" width="706" height="393" viewBox="0 0 706 393" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-11.5 0L705.136 393H-728.136L-11.5 0Z" fill="url(#paint0_linear_10_2)"/>
                <defs>
                    <linearGradient id="paint0_linear_10_2" x1="-11.5" y1="0" x2="-11.5" y2="524" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#D1D1D1" stop-opacity="0.2"/>
                        <stop offset="0.734375" stop-color="#D9D9D9" stop-opacity="0"/>
                    </linearGradient>
                </defs>
            </svg>


        </div>
        <div class="right" v-if="!mobileView">
        
            <img src="@/assets/images/laptop.svg" />
        
        </div>
    </div>

</template>

<script>
import { booleanLiteral } from '@babel/types';

export default {
    name: "Header",
    data: () => {
        return {
            mobileView: false
        }
    },
    methods: {
        handleView(){
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

div.header {
    height: 100%;
    width: 100%;
}

div.left {
    width: 50%;
    height: 100%;
    display: inline-block;
    position: absolute;
}

div.right {
    width: 50%;
    height: 100%;
	left: 50%;
    display: inline-block;
    position:absolute;
}
div.headerBox {
	
	position: relative;
	height: 50%;
	width: 100%;
	top: 50%;
	transform: translateY(-50%);
	
}

div.headerBox .container {
	
	margin-top: 7rem;
	margin-left: 10rem;
	
}

span.smallTitle {
	
	position: absolute;
	font-family: Roboto;
	font-size: 24px;
	color: #ffa930;
	font-weight: bold;
	transform: translateX(-30px) translateY(-10px);
	font-style: italic;
	
}

span.title {
	
	font-family: Inter;
	font-size: 600%;
	margin-top: 50%;
    line-height: 6rem;
	
}

span.headerText {
	
	font-size: 20px;
	font-family: Source Code Pro;
	font-weight: bold;
	
}

.decal#titleDecal {
	
	transform: translateX(-7.5rem) translateY(-40px);
    height: 30%;
    width: 30%;
	
}

svg#social {
	
	margin-right: 20px;
	margin-top: 30px;
	transition: 0.2s;
	
}


a.social:hover {
	
	color: #ffe1b8;
	
}

a, svg {
    display: inline-block;
}

.cvDownload {
	
	padding: 10px;
	font-family: Source Code Pro;
	background-color: rgba(181, 144, 65, 0.4);
	border-radius: 4px;
	color: #ffe1b8;
	transition: 0.3s;
    text-decoration: none;
	
}

.btnSVG {

    transform: translateY(4px);

}

.cvDownload:hover {
	
	background-color: rgba(204, 173, 105, 0.7);
	color: #ffe1b8;
	
}

div#cv {
	
	/*transform: translateY(-35px) translateX(+125px);
	*/
    position: absolute;
    display: inline-block;
	margin-right: 20px;
	margin-top: 30px;
}

/*------------MOBILE VIEW-------------*/

.centerHeader {
    position: absolute;
    width: 100%;
    height: 100%;
} 

.centerContainer {
    position: absolute;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    text-align: center;
}
.mSmallTitle {

    transform: translateX(0px);
    font-family: Roboto;
	font-size: 24px;
	color: #ffa930;
	font-weight: bold;
    font-style: italic;

}

.mTitle {

    font-family: Inter;
	font-size: 250%;
	margin-top: 50%;

}

.mHeaderText {
    font-size: 0.8rem;
	font-family: Source Code Pro;
	font-weight: bold;
}

.mobileSocial {

    text-align: center;
    margin-top: 1.3rem;
}

.mobileSocial div {

    font-size: 70%;
    transform: translate(0px, 0px);

}

.mobileSocial svg#social {

    
	margin-right: 0.5rem;
	margin-left: 0.5rem;
	margin-top: 0px;
	transition: 0.2s;

}

.mobileSocial div#cv {
	
	transform: translateX(-50%);
    position: absolute;
    display: inline-block;
	margin-right: 0px;
	margin-top: 1.5rem;
}

</style>
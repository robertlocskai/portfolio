<template>

<div class="skills" id="skills">

    <div class="skillinfo" :class="{mSkillinfo : mobileView}">
			<img src="https://svgsilh.com/svg/26432.svg" class="decal" id="techDecal" v-if="!mobileView" />
			<span class="tech" :class="{mTech: mobileView}">Tech<span style="color: #ffa930;"> stack</span></span>
				
		<div class="techtext" :class="{mTechtext: mobileView}">
				
			The <span style="color: white;">consistently expanding</span> list of languages and technologies I've learned through the years of my coding journey. 
			I am always interested and open to learn new programming languages and to use them either in my own, 
			or someone else's projects.
				
		</div>
				
	</div>
	
			<div class="container" :class="{mContainer: mobileView}">
				<!--skillcontainer-->
				<!--SKILL BOXES-->
				<SkillBox v-motion-pop-visible SkillName="HTML5" SkillID="html" SkillSRC="html" />
				<SkillBox v-motion-pop-visible SkillName="CSS3" SkillID="css" SkillSRC="css"/>
				<SkillBox v-motion-pop-visible SkillName="JavaScript" SkillID="javascript" SkillSRC="js"/>
				<SkillBox v-motion-pop-visible SkillName="Bootstrap" SkillID="bootstrap" SkillSRC="bootstrap"/>
				<SkillBox v-motion-pop-visible SkillName="ReactJS" SkillID="reactjs" SkillSRC="react"/>
				<SkillBox v-motion-pop-visible SkillName="Vue.js" SkillID="vuejs" SkillSRC="vuejs"/>
				<SkillBox v-motion-pop-visible SkillName="Laravel" SkillID="laravel" SkillSRC="laravel"/>
				<SkillBox v-motion-pop-visible SkillName="MySQL" SkillID="sql" SkillSRC="sql"/>
				<SkillBox v-motion-pop-visible SkillName="Spring Boot" SkillID="springboot" SkillSRC="springboot"/>
				<SkillBox v-motion-pop-visible SkillName="PHP" SkillID="php" SkillSRC="php"/>
				<SkillBox v-motion-pop-visible SkillName="Java" SkillID="java" SkillSRC="java"/>
				<SkillBox v-motion-pop-visible SkillName="C#" SkillID="csharp" SkillSRC="csharp"/>
				
			</div>

</div>

</template>

<script>

	import SkillBox from './SkillBox.vue';

    export default {

        name: "Skills",
		components: {
			SkillBox
		},
		data: () => {

			return {
			mobileView: false    
			}
		},
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

div.skills {

    position: relative;
    width: 100%;
    height: 100%;
}
.skillinfo {
	
	width: 50%;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
}
.techtext {
	
	font-family: Source Code Pro;
	font-size: 20px;
	color: #adadad;
	margin-right: 20px;
	margin-left: 165px;
}
span.tech {
	
	font-family: Inter;
	font-size: 70px;
	margin-top: 7rem;
	margin-left: 110px;
	
}
.skills .container {
	
	width: 31.25rem;
	position: absolute;
	top: 50%;
	left: 75%;
	transform: translateX(-50%) translateY(-50%);
	text-align: center;
	
}

.decal#techDecal {
	
	transform: translateX(+5rem) translateY(-2rem);
	width: 20%;
	
}

/* ----------------MOBIL------------- */

.mSkillinfo {
	width: 100%;
	text-align: center;
	position: static !important;
	transform: translate(0) !important;

}

.mTechtext {

	margin-left: 2rem;
	margin-right: 2rem;
	width: auto !important;
	text-align: justify;
	font-size: 100%;

}

.mTech {
	margin-left: 0px !important;
	font-size: 3rem !important;
}

.mContainer {
	display: block !important;
	width: auto !important;
	position:static !important;
	height: 30%;
	margin-right: 2rem;
	margin-left: 2rem;
	transform: translate(0px) !important;
	left: 0 !important;
	top: 0 !important;
}

</style>
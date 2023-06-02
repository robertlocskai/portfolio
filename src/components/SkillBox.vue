<template>

    <div class="skillcontainer" :class="{mSkillcontainer: mobileView}"><span class="tooltiptext">{{SkillName}}</span><div class="skillbox" :id=this.SkillID :class="{mSkillbox: mobileView}"><img :src=getImgUrl() /></div></div>
</template>

<script>

export default {

    name: "SkillBox",
    props: {
        SkillName: String,
        SkillID: String,
        SkillSRC: String
    },
		data: () => {

			return {
			mobileView: false    
			}
		},
    methods: {
        getImgUrl() {
            return require("@/assets/images/skills/" + this.SkillSRC + ".svg")
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

.skillcontainer .tooltiptext {
	
	position: absolute;
	display: none;
	padding: 10px;
	border-radius: 3px;
	z-index: 1;
	background-color: #545454;
	font-family: Source Code Pro;
	transform: translateX(-50%) translateY(-150%);
	transition: 0.2s;
	animation: fadeIn 0.3s;
	
}

.skillcontainer:hover .tooltiptext {
	
	display: inline-block;
	
}


.skillbox {
	
	position: absolute;
	background-color: #454545;
	border-radius: 5px;
	width: 100px;
	height: 100px;
	box-shadow: rgba(0,0,0,0.2) 2px 2px 5px;
	text-align: center;
	transition: 0.2s;
	
}

.skillcontainer {
	
	width: 100px;
	height: 100px;
	display: inline-block;
	margin-left: 10px;
	margin-right: 10px;
	margin-left: 10px;
	margin-top: 10px;
	
}

.skillbox:hover {
	
	width: 110px;
	height: 110px;
	transform: translateX(-5px) translateY(-5px);
	
}

.skillbox:hover img {
	
	width: 70px;
	height: 70px;
	
}

.skillbox img {
	
	width: 60px;
	height: 60;
	margin-top: 50%;
	transform: translateY(-50%);
	transition: 0.2s;
	
}

/* -----mobil------*/

.mSkillbox {
    width: 70px;
    height: 70px;
}

.mSkillbox img {
    width: 40px;
}

.mSkillbox:hover {
    width: 80px;
    height: 80px;
    transform: translate(-5px, -5px);
}

.mSkillbox:hover img {
    width: 50px;
    height: 50px;
}

.mSkillcontainer {
    width: 70px;
    height: 70px;
}

</style>
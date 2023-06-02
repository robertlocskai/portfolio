<template>

    <div class="projects" id="projects">
        <div class="content" id="content" :class="{mobile: mobileView}">

            <div class="projectLabel" id="projectLabel" v-motion-slide-visible-left :class="{mobile: mobileView}">
				<span :class="{mobileTitle: mobileView, projectTitleLabel: !mobileView}">Some of my <span style="color: #ffa930;">projects</span></span><br>
				<span class="projectTextLabel">
                    Working on projects is a part of the obsession with coding and that's exactly what I do. 
                    In the following section you can see some of my projects, or projects that I worked on.
                </span>
            </div>
            
            <div class="projectContainer">
                <Project v-for="p in projectList" :pId=p v-motion-slide-visible-right />
            </div>

        </div>
    </div>

</template>

<script>

    import Project from "./Project.vue";

    export default {
        name: "Projects",
        components: {
            Project
        },
        data() {
            return {
                projectList: [0, 1, 2, 3, 4],
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

.projects {

    margin-top: -10%;
    height: auto;
    width: 100%;
    padding-top: 2rem;
    position: relative;
    overflow-x: hidden;

}

.content {
    
    position: relative;
    margin-top: 10rem;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;

}

.projectLabel {

    width: 50%;
    margin-left: 50%;
    transform: translateX(-50%);

}
div.mobile {
    margin-left: 0%;
    width: 100%;
    text-align: justify;
}

.mobileTitle {
    font-size: 3rem;
	font-family: Inter;
}

#content.mobile {
    width: auto;
    margin: 0 auto;
}

div#projectLabel.mobile {
    width: auto;
    margin: 2rem;
}

.projectLabel .projectTitleLabel {

    
	font-size: 70px;
	font-family: Inter;

}

.projectLabel .projectTextLabel {

	font-family: Source Code Pro;
	color: #adadad;

}

.projectContainer {
    text-align: center;
    margin-top: 2rem;
}

</style>
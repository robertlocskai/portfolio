
<template>
  <Navbar v-if="!mobileView"/>
  <NavbarMobile v-if="mobileView"/>
  <Header />
  
  <!--<router-view/>-->
  <Skills />
  <Projects />
  <AboutMe />
  <Contact />

</template>

<script>
import Navbar from "./components/Navbar.vue"
import NavbarMobile from "./components/NavbarMobile.vue";
import Header from "./components/Header.vue";
import Skills from "./components/Skills.vue";
import SkillBox from "./components/SkillBox.vue";
import Projects from './components/Projects.vue';
import AboutMe from './components/AboutMe.vue';
import Contact from './components/Contact.vue';

export default {
  name: "App",
  components: {
    Navbar,
    NavbarMobile,
    Header,
    Skills,
    SkillBox,
    Projects,
    AboutMe,
    Contact
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

<style>
#app {
  
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  color: #ffffff;
  height: 100%;
}

</style>

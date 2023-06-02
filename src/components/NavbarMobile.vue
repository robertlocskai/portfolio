<template>

    <div class="navbar">
        <span class="logo" style="float: left"><span style="color: #ffa930;">&#60;</span> Róbert Lócskai <span style="color: #ffa930;">/&#62;</span></span>

        <svg @click="toggle()" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>

        <ul v-if="toggled">
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#aboutme">About Me</a></li>
        <li><a href="#contact" id="focus">Get in touch</a></li>
        </ul>			
    </div>
        
    </template>
    
    <script>
    
    export default {
        name: "Navbar",
        data: () => {
            return {
                toggled: false
            }
        },
        methods: {
            toggle(){
                this.toggled = !this.toggled;
            }
        }
    }
    
    </script>
    
    <style scoped>
    
    div.navbar a {
        font-family: Roboto;
        margin-left: 40px;
        color: white;
        text-decoration: none;
        font-size: 20px;
        margin-right: 2rem;
        
    }
    
    div.navbar a#focus {
        
        color: #ffa930;
        font-weight: bold;
        
    }
    
    li {
        
        margin-top: 1rem;
        margin-right: 2rem;
        height: 3.5rem;
        line-height: 3.5rem;
        list-style: none;

    }

    ul {
        float: right;
        text-align: right;
        width: 100%;
        border-bottom: rgba(255, 255, 255, 0.1) solid 1px;
        position: fixed;
        background-color: #202124;
        margin-top: 3.5rem;

    }

    .logo {
        
        font-size: 150%;
        font-family: Inter;
        margin-left: 30px;
        float: left;
        z-index: 2;
        
    }
    
    
    .navbar {
        position: fixed;
        color: white;
        height: 3.5rem;
        line-height: 3.5rem;
        z-index: 2;
        width: 100%;
        background-color: #202124;
    }
    
    svg {

        float: right;
        margin-right: 1rem;
        cursor: pointer;
        margin-top: 1.75rem;
        transform: translateY(-50%);

    }

    </style>
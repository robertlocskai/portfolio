<template>

<div class="navbar">
    <span class="logo" style="float: left"><span style="color: #ffa930;">&#60;</span> Róbert Lócskai <span style="color: #ffa930;">/&#62;</span></span>
    <ul>
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

}

</script>

<style scoped>

div.navbar a {
	font-family: Roboto;
	margin-left: 40px;
	color: white;
	text-decoration: none;
	font-size: 20px;
	
}

div.navbar a#focus {
	
	color: #ffa930;
	margin-right: 40px;
	font-weight: bold;
	
}

.logo {
	
	font-size: 27px;
	font-family: Inter;
    margin-left: 30px;
    float: left;
	z-index: 2;
	
}

ul {

float: right;
	margin: 0px;

}

li {

display: inline;


}
.navbar {
    position: fixed;
	color: white;
    height: 6rem;
    line-height: 6rem;
	z-index: 2;
	width: 100%;
	background: linear-gradient(to top, transparent 0%, #0f0f0f 100%);
}

</style>
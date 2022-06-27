<script lang="ts">
	import '../app.css';
	import MenuOutline from 'virtual:icons/eva/menu-outline';
	import SmallLogo from '$lib/assets/rplusq-small-logo.svg';
	import GitHubIcon from 'virtual:icons/ant-design/github-filled';
	import TwitterIcon from 'virtual:icons/ant-design/twitter-outlined';
	import LinkedInIcon from 'virtual:icons/ant-design/linkedin-filled';
	import SunIcon from 'virtual:icons/bi/sun-fill';
</script>

<nav class="w-100 flex items-center justify-between bg-orange-light px-9 py-7 sm:px-24">
	<img class="sm:mr-12" src={SmallLogo} alt="rplusq small logo" />
	<div class="mr-7 hidden flex-grow justify-between sm:flex">
		<a class="font-semibold uppercase" href="/digital-garden">Digital Garden</a>
		<a class="font-semibold uppercase" href="/about">About</a>
		<a class="font-semibold uppercase" href="/contact">Contact</a>
	</div>
	<SunIcon class="hidden text-2xl text-[#FCA56B] sm:block" />
	<MenuOutline class="hidden text-3xl text-pink-base" />
</nav>

<main>
	<slot />
</main>

<div class="flex flex-col items-center justify-around bg-orange-light py-16">
	<div class="mb-10 flex justify-center">
		<img src={SmallLogo} alt="rplusq small logo" />
	</div>
	<div class="text-gray-opaque mb-10 text-center text-2xl font-medium">Stay connected</div>
	<div class="mb-12 flex">
		<GitHubIcon class="mr-5 text-4xl text-[#F5C0AB]" />
		<TwitterIcon class="mr-5 text-4xl text-[#F5C0AB]" />
		<LinkedInIcon class="text-4xl text-[#F5C0AB]" />
	</div>
	<div class="text-xl">
		© Rafael Quintero {new Date().getFullYear()}
	</div>
</div>

<script lang="ts">
	import '../app.css';
	import MenuOutline from 'virtual:icons/eva/menu-outline';
	import ShortLogo from '$lib/assets/rplusq-short-logo.svg';
	import LongLogo from '$lib/assets/rplusq-long-logo.svg';
	import SunIcon from 'virtual:icons/bi/sun-fill';
	import Socials from '$lib/components/Socials.svelte';
</script>

<nav class="w-100 flex items-center justify-between bg-orange-light px-9 py-7 sm:px-24">
	<img class="sm:mr-12 md:hidden" src={ShortLogo} alt="rplusq short logo" />
	<img class="mr-12 hidden md:block" src={LongLogo} alt="rplusq long logo" />
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
		<img src={ShortLogo} alt="rplusq short logo" />
	</div>
	<div class="text-gray-opaque mb-10 text-center text-2xl font-medium">Stay connected</div>
	<div class="mb-12">
		<Socials />
	</div>
	<div class="text-xl">
		© Rafael Quintero {new Date().getFullYear()}
	</div>
</div>

<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import MediumCornerPinkBlobSrc from '$lib/assets/medium-corner-pink-blob.svg';
	import SmallCornerPinkBlobSrc from '$lib/assets/small-corner-pink-blob.png';
	import PinkSquaresSrc from '$lib/assets/pink-squares.svg';
	import OrangeSquaresSrc from '$lib/assets/orange-squares.svg';
	import WaveSrc from '$lib/assets/wave.svg';
	import Socials from '$lib/components/Socials.svelte';
	import SayHi from '$lib/components/SayHi.svelte';
</script>

<svelte:head>
	<title>Rafael Quintero</title>
</svelte:head>

<section class="bg-pink-light bg-opacity-50 sm:bg-blue-light md:pb-36">
	<div class="p-7 pb-0 sm:px-24 sm:pt-14 md:px-36 md:pt-32 md:pr-12">
		<p class="mb-4 text-3xl font-bold text-gray-dark sm:text-5xl md:mb-6">Hello,</p>
		<p class="mb-4 text-3xl font-bold text-gray-dark sm:mb-6 sm:text-5xl md:mb-10">
			my name is Rafael
		</p>
		<div class="flex content-between">
			<div class="sm:w-2/3 md:w-1/2">
				<p class="mb-4 text-xl font-medium sm:text-2xl">Welcome to my corner of the Internet.</p>
				<p class="mb-4 w-full text-lg sm:mb-7 sm:text-xl">
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
					invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
					<br />
					<br />
					At vero eos et accusam et justo duo dolores et ea rebum!
				</p>
				<a
					href="/contact"
					class="mb-4 hidden rounded-full bg-pink-base px-6 py-3 text-xl font-semibold text-white shadow-md sm:inline-block sm:text-2xl md:mb-8 md:text-xl"
				>
					Send me a message
				</a>
				<div class="hidden w-2/5 justify-between md:flex">
					<Socials />
				</div>
			</div>
			<div class="relative hidden flex-grow justify-end md:flex">
				<SayHi />
				<img
					src={PinkSquaresSrc}
					class="absolute -bottom-8 left-0 z-10 hidden sm:block"
					alt="pink squares"
				/>
				<img
					src={OrangeSquaresSrc}
					class="absolute right-20 -top-56 z-10 hidden sm:block"
					alt="orange squares"
				/>
			</div>
		</div>
	</div>
	<div class="flex h-1/2 justify-center sm:pb-56 md:hidden">
		<div class="relative flex w-4/5 justify-center">
			<div class="md:absolute">
				<SayHi />
			</div>
			<img
				src={PinkSquaresSrc}
				class="absolute left-0 -bottom-96 z-10 hidden sm:block"
				alt="pink squares"
			/>
			<img
				src={OrangeSquaresSrc}
				class="absolute right-0 -top-24 z-10 hidden sm:block"
				alt="orange squares"
			/>
		</div>
	</div>
</section>
<img class="-z-10 mb-16 hidden -scale-y-100 -scale-x-100 sm:block" src={WaveSrc} alt="wave shape" />

<section class="p-7 sm:mb-20 sm:pl-24 sm:pr-20">
	<h1 class="mb-4 text-3xl font-bold text-gray-dark sm:mb-10 sm:text-5xl">The Digital Garden</h1>
	<p class="text-lg sm:text-xl">
		If you are planning to dive into my site, I am happy to recommend my favorite sections of my
		garden
	</p>
</section>
<section class="mb-14 px-5 sm:px-24">
	<div class="mb-6 flex items-center justify-between sm:mb-12">
		<h2 class="pl-2 text-xl font-bold sm:pl-0 sm:text-3xl">Featured blog posts</h2>
		<a
			href="/garden"
			class="hidden rounded-full bg-pink-base px-6 py-3 text-xl font-bold text-white shadow-md sm:inline-block"
		>
			View all Content
		</a>
	</div>
	<Card
		date={new Date()}
		title="Lorem ipsum dolor sit amet conseteur"
		slug="slug"
		excerpt="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt…"
		thumbnailUrl="https://via.placeholder.com/445x180"
		thumbnailAlt="thumbnailAlt"
		plantLevel="budding"
	/>
</section>
<div class="w-100 flex justify-center sm:hidden">
	<a
		href="/garden"
		class="mb-14 rounded-full bg-pink-base px-6 py-3 text-xl font-bold text-white shadow-md"
	>
		View all Content
	</a>
</div>
<section class="mb-8 sm:px-24">
	<div class="relative bg-pink-light py-10 px-7 sm:rounded-xl sm:px-14">
		<h1 class="mb-4 text-center text-3xl font-bold text-gray-dark sm:text-left sm:text-4xl">
			Let’s work together!
		</h1>
		<div class="md: w-3/5">
			<p class="mb-4 text-lg">
				Start with a great idea, add some blockchain, sprinkle in some JavaScript and you have a
				perfect recipe to get me interested.
			</p>
			<p class="mb-8 text-lg">
				If what I just described sounds like your project, let's connect to align on the details!
			</p>
			<div class="flex justify-center md:justify-start">
				<a
					href="/contact"
					class="rounded-full bg-pink-base px-6 py-3 text-xl font-bold text-white shadow-md"
				>
					Contact me now
				</a>
			</div>
			<img
				src={SmallCornerPinkBlobSrc}
				alt="pink blob"
				class="absolute bottom-0 right-0 hidden rounded-br-xl sm:block md:hidden"
			/>
			<img
				src={MediumCornerPinkBlobSrc}
				alt="pink blob"
				class="absolute bottom-0 right-0 hidden rounded-br-xl sm:hidden md:block"
			/>
			<div class="absolute bottom-0 right-0">
				<SayHi isBlobShowing={false} />
			</div>
		</div>
	</div>
</section>

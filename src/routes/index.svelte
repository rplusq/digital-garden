<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import SayHiSrc from '$lib/assets/say-hi-pink.png';
	import PinkBlobSrc from '$lib/assets/pink-blob.png';
	import PinkSquaresSrc from '$lib/assets/pink-squares.svg';
	import OrangeSquaresSrc from '$lib/assets/orange-squares.svg';
	import WaveSrc from '$lib/assets/wave.svg';
</script>

<svelte:head>
	<title>Rafael Quintero</title>
</svelte:head>

<section class="bg-pink-light bg-opacity-50 sm:bg-blue-light">
	<div class="p-7 pb-0 sm:px-24 sm:pt-14">
		<p class="mb-4 text-3xl font-bold text-gray-dark sm:text-5xl">Hello,</p>
		<p class="mb-4 text-3xl font-bold text-gray-dark sm:mb-6 sm:text-5xl">my name is Rafael</p>
		<div class="sm:w-2/3">
			<p class="mb-4 text-xl font-medium sm:text-2xl">Welcome to my corner of the Internet.</p>
			<p class="mb-4 text-lg sm:mb-7 sm:text-xl">
				“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
				ut labore et dolore"
			</p>
			<a
				href="/contact"
				class="mb-4 hidden rounded-full bg-pink-base px-6 py-3 text-xl font-semibold text-white shadow-md sm:inline-block sm:text-2xl"
			>
				Send me a message
			</a>
		</div>
	</div>
	<div class="flex h-1/2 justify-center sm:pb-56">
		<div class="relative flex w-4/5 justify-center">
			<img class="z-10 sm:absolute" src={SayHiSrc} alt="person waving hello" />
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
<img class="mb-16 hidden -scale-y-100 -scale-x-100 sm:block" src={WaveSrc} alt="wave shape" />

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
		title="How I moved to Lisbon"
		slug="slug"
		excerpt="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt…"
		thumbnailUrl="https://via.placeholder.com/275x180"
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
		<p class="mb-4 text-lg">
			Start with a great idea, add some blockchain, sprinkle in some JavaScript and you have a
			perfect recipe to get me interested.
		</p>
		<p class="mb-8 text-lg">
			If what I just described sounds like your project, let's connect to align on the details!
		</p>
		<img
			src={PinkBlobSrc}
			alt="pink blob"
			class="absolute bottom-0 right-0 hidden rounded-br-xl sm:block"
		/>
		<div class="flex justify-center">
			<a
				href="/contact"
				class="rounded-full bg-pink-base px-6 py-3 text-xl font-bold text-white shadow-md"
			>
				Contact me now
			</a>
		</div>
	</div>
</section>

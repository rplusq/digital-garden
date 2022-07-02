<script lang="ts">
	export let isBlobShowing = true;
	import SayHiSrc from '$lib/assets/say-hi.png';
</script>

<div class="relative z-10 md:-mt-4">
	<img class="relative z-10" src={SayHiSrc} alt="person waving hello" />
	{#if isBlobShowing}
		<svg
			viewBox="0 0 399.599 377.658"
			xmlns="http://www.w3.org/2000/svg"
			class="absolute bottom-0 left-1/2 w-[120%] -translate-x-1/2 fill-[#F29F9B] sm:w-[28rem] sm:fill-[#9DDAEB] md:bottom-16 md:left-32"
			><path
				d="m233 43.331c21.7 23.288 36.175 48.079 43.214 74 7.039 25.73 6.648 52.774 2.738 83.011-4.106 30.049-11.732 63.479-33.242 86.016-21.509 22.725-56.9 34.744-91.317 33.43-34.219-1.315-67.657-16.151-95.423-36.81-27.962-20.659-50.449-47.327-56.9-76.625s2.93-61.043 17.987-86.773c14.861-25.73 35.588-45.262 58.662-68.174 23.269-22.912 48.881-49.017 76.26-51.271 27.376-2.066 56.315 19.907 78.021 43.196z"
				transform="matrix(.35836795 .93358043 -.93358043 .35836795 298.634 0)"
			/></svg
		>
	{/if}
</div>

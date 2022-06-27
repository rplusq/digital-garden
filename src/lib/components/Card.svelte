<script lang="ts">
	import format from 'date-fns/format/index.js';
	type PlantLevel = 'seeding' | 'budding' | 'evergreen';
	export let date: Date;
	export let title: string;
	export let slug: string;
	export let excerpt: string;
	export let thumbnailUrl: string;
	export let thumbnailAlt: string;
	export let plantLevel: PlantLevel;

	function getPlantLevelEmoji(plantLevel: PlantLevel): string {
		switch (plantLevel) {
			case 'seeding':
				return '🌱';
			case 'budding':
				return '🌿';
			case 'evergreen':
				return '🪴';
		}
	}

	const formattedDate = format(date, 'MMMM d, yyyy');
	const plantLevelEmoji = getPlantLevelEmoji(plantLevel);
</script>

<div class="rounded-md bg-[#FFEFE6] pl-3 pr-7 pt-7 pb-9">
	<div class="flex">
		<div class="mr-4 h-fit rounded-full bg-white p-1">
			{plantLevelEmoji}
		</div>
		<div>
			<div class="mb-2 text-sm text-[#707070]">{formattedDate}</div>
			<a class="text-gray-opaque mb-2 text-xl font-bold" href={`/garden/${slug}`}>
				{title}
			</a>
			<p class="mb-2 text-lg">{excerpt}</p>
			<img alt={thumbnailAlt} src={thumbnailUrl} />
		</div>
	</div>
</div>

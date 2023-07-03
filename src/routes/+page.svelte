<script lang="ts">
	import LetterLink from '$lib/LetterLink.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>Cartas a una Isbella</title>
</svelte:head>

<div class="w-full flex flex-col items-center gap-2 md:gap-4">
	{#each data.letters as letter}
		<LetterLink title={letter.title} date={letter.date} id={letter.id} />
	{/each}
</div>

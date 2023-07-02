<script lang="ts">
	import LetterLink from '$lib/LetterLink.svelte';
	import Letter from '../lib/Letter.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>Cartas a una Isbella</title>
</svelte:head>

<div class="w-full flex flex-col items-center">
	{#each data.letters as letter}
		<a href={`/letter/${letter.id}`}>
			<LetterLink title={letter.title} date={letter.date} />
		</a>
	{/each}
</div>

<script lang="ts">
	import Card from '$lib/Card.svelte';
	import { formatDate } from '$lib/dates';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.page.title}</title>
</svelte:head>

<Card class="m-auto mt-8">
	<h2>{data.page.title}</h2>
	<side class="text-end mb-2 md:mb-4">{formatDate(data.page.date)}</side>
	{#each data.page.blocks as block}
		{#if block.type === 'paragraph' && block.content}
			<p class="mb-4">{block.content}</p>
		{/if}
	{/each}
	<p class="mx-3 mb-4">- Juan</p>
</Card>

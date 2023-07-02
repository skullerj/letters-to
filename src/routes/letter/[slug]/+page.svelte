<script lang="ts">
	import Card from '$lib/Card.svelte';
	import { formatDate } from '$lib/dates';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Card class="m-auto">
	{#if data?.page}
		<h2>{data.page.title}</h2>
		<side class="text-end mb-2 md:mb-4">{formatDate(data.page.date)}</side>
		{#each data.page.blocks as block}
			{#if block.type === 'paragraph' && block.content}
				<p>{block.content}</p>
			{/if}
		{/each}
	{/if}
	<p class="mx-3">- Juan</p>
</Card>

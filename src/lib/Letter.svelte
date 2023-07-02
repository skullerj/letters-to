<script lang="ts">
	import Card from './Card.svelte';
	import { formatDate } from './dates';
	export let title: string;
	export let date: Date;
</script>

<Card>
	<h2>{title}</h2>
	<h3 class="self-end">{formatDate(date)}</h3>
	<slot />
	<p class="mt-3">Con amor, <br /> Juan</p>
</Card>

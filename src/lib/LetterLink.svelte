<script lang="ts">
	import Card from './Card.svelte';
	import stamp1 from './assets/stamps/stamp1.png';
	import stamp2 from './assets/stamps/stamp2.png';
	import stamp3 from './assets/stamps/stamp3.png';
	import { formatDate } from './dates';

	export let date: Date;
	export let title: string;
	export let id: string;
	let stamp = [stamp1, stamp2, stamp3].at(date.getTime() % 3);
</script>

<Card class="max-w-xl w-full hover:shadow-lg">
	<a href={`/letter/${id}`}>
		<p>{formatDate(date)}</p>
		<div class="flex">
			<h2 class="flex-1 mr-2 md:mr-4">
				{title}
			</h2>
			<img src={stamp} class="w-20 h-20 object-contain object-right-top" alt="Post stamp" />
		</div>
		<p class="text-end">De: Juan <br /> Para: Isbella</p>
	</a>
</Card>

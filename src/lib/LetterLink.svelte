<script lang="ts">
	import Card from './Card.svelte';
	import stamp1 from './assets/stamps/stamp1.png';
	import stamp2 from './assets/stamps/stamp2.png';
	import stamp3 from './assets/stamps/stamp3.png';
	import { formatDate } from './dates';

	export let date: Date;
	export let title: string;
	export let id: string;
	let stamp = [stamp1, stamp2, stamp3].at(date.getDate() % 3);
</script>

<Card class="max-w-xl w-full hover:shadow-lg">
	<a href={`/letter/${id}`}>
		<div class="flex min-h-[140px]">
			<div class="flex flex-col flex-1 mr-2 md:mr-4">
				<side>{formatDate(date)}</side>
				<h2 class="flex-1">
					{title}
				</h2>
				<p>De: Juan <br /> Para: Isbella</p>
			</div>
			<img src={stamp} class="w-20 h-20 object-contain object-right-top" alt="Post stamp" />
		</div>
	</a>
</Card>

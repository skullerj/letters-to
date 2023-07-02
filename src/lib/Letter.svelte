<script lang="ts">
	export let title: string;
	export let date: Date;
	function formatDate(date: Date) {
		return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
	}
</script>

<div class="flex flex-col p-2 md:p-4 max-w-prose gap-2 border-black border-2 bg-white/30">
	<h2>{title}</h2>
	<h3 class="self-end">{formatDate(date)}</h3>
	<slot />
	<p class="mt-3">Con amor, <br /> Juan</p>
</div>

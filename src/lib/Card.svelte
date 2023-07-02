<script lang="ts">
	let className: string = '';
	export { className as class };
</script>

<div
	class={`flex flex-col p-2 md:p-4 max-w-prose gap-2 border-black border-2 bg-white/30 shadow-md ${className}`}
>
	<slot />
</div>

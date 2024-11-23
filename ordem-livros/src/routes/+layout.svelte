<script lang="ts">
	import "../app.css";
	import Pagina from "../Components/Template/pagina.svelte";
	let { children } = $props();
</script>

<Pagina>
	{@render children()}
</Pagina>

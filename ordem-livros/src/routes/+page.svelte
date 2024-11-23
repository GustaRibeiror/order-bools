<script>
    import ItemSerie from "../Components/serie/ItemSerie.svelte";
    import series from "../constants/series";
</script>

{#each series as serie}
    <ItemSerie {serie} />
{/each}

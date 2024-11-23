<script>
    import {page} from "$app/stores";
    import ConteudoSerie from "../../../Components/serie/ConteudoSerie.svelte";
    
</script>

<ConteudoSerie serie={$page.data.serie} />

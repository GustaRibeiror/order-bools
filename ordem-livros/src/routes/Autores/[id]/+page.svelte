<script>
    import {page} from "$app/stores";
    import ConteudoAutor from "../../../Components/autor/ConteudoAutor.svelte";
</script>

<ConteudoAutor autor = {$page.data.autor} />

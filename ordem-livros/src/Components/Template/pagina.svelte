<script>
    import AreaLateral from "./area-lateral.svelte";
    import Cabecalho from "./cabecalho.svelte";
    import Rodape from "./rodape.svelte";
</script>

<div class="flex flex-col min-h-screen bg-black text-white">
    <Cabecalho />
    <div class="flex-1 flex max-w-5xl mx-auto w-full p-5 gap-5">
        <main class="flex-1">
            <slot></slot>
        </main>
        <AreaLateral />
    </div>
    <Rodape />
</div>

<script lang="ts">
    export let autor: any = null;
</script>

{#if autor}
    <a
        href="/Autores/{autor.id}"
        class="flex flex-col rounded-md relative overflow-hidden border border-zinc-800"
    >
        <img src={autor.imagem} alt="Foto do Autor" class="h-85 object-cover" />
        <div class="absolute bottom-0 flex  justify-endpx-6 py-4 bg-black/50 w-full ">
            <span class="text-2xl font-black">{autor.nome}</span>
        </div>
    </a>
{/if}

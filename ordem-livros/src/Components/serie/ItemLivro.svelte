<script lang="ts">
    export let livro: any = null;
</script>

{#if livro}
    <a
        href={livro.link}
        target="_blank"
        class="flex flex-col rounded-md overflow-hidden bg-zinc-800 transform transition-transform duration-300 hover:scale-110"
    >
        <img src={livro.imagem} alt="Imagem do Livro" class="h-72" />
        <div class="flex-1 flex flex-col p-5 gap-2">
            <span class="flex flex-1 font-bold text-center">{livro.titulo}</span
            >
            <button class="button blue">Link do Livro</button>
        </div>
    </a>
{/if}

<script lang="ts">
    export let serie: any = null;
</script>

{#if serie}
    <a
        href="/Series/{serie.id}"
        class="flex flex-col rounded-md overflow-hidden"
    >
        <img
            src={serie.imagem}
            alt="Imagem da Serie"
            class="h-96 object-cover"
        />
        <div class="flex flex-col gap-2 p-5 border border-zinc-800">
            <span class="text-2xl font-black">{serie.titulo}</span>
            <span class="text-sm text-zinc-400 text-justify"
                >{serie.descricao}</span
            >
            <button class="button button blue">Leia Mais</button>
        </div>
    </a>
{/if}

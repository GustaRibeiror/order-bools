<script>
    import Menu from "./menu.svelte";
    import Menuitem from "./menuitem.svelte";
</script>

<aside
    class=" flex flex-col self-start w-72 gap-10 border border-zinc-800 p-5 rounded-md size"
>
    <Menu titulo="Navegação">
        <Menuitem texto="Ínicio" href="/" />
        <Menuitem texto="Personagens" href="/" />
        <Menuitem texto="Autores" href="/Autores" />
        <Menuitem texto="Séries" href="/" />
    </Menu>

    <Menu titulo="Principais Autores">
        <Menuitem texto="J.K. Rowling" href="/Autores/j-k-rowling" />
        <Menuitem texto="J.R.R. Tolkien" href="/Autores/j-r-r-tolkien" />
        <Menuitem texto="George R.R. Martin" href="/Autores/george-r-r-martin" />
    </Menu>
    

</aside>


<!--
    <Menu titulo="Outras Categorias">
        <Menuitem texto="Últimas Notícias" href="/" />
        <Menuitem texto="Sérires Populares" href="/" />
        <Menuitem texto="Facebook" href="/" />
        <Menuitem texto="Instagram" href="/" />
        <Menuitem texto="Youtube" href="/" />
    </Menu>
-->
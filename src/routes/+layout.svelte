<script>
    import "../app.css";
</script>

<nav
    class="text-white mix-blend-difference block md:fixed -mb-10 top-0 w-full bg-transparent"
>
    <ul class="md:p-4 pt-2 pl-2">
        <a href="/">bsstats</a>
    </ul>
</nav>

<svelte:head>
    <title>bsstats</title>
</svelte:head>

<div>
    <slot />
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;600&display=swap");

    a {
        transition: background-color 1s ease;
    }

    :global(body) {
        transition: background-color 1s ease;
        font-size: 16px;
        background-color: #000212;
        font-family: "Rubik", sans-serif;
        color: white;
    }
</style>

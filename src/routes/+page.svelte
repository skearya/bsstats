<script>
    import { fly } from "svelte/transition";
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";

    let ready = false;
    let ssid = "";

    const isValidUrl = (urlString) => {
        try {
            return Boolean(new URL(urlString));
        } catch (e) {
            return false;
        }
    };

    function redirect() {
        if (ssid != "") {
            if (isValidUrl(ssid)) {
                ssid = ssid.slice(-17);
            }
            goto(`/${ssid}&0&0`);
        }
    }

    onMount(async () => {
        ready = true;
    });
</script>

{#if ready}
    <main
        in:fly={{ duration: 400, y: 50, opacity: 0.3 }}
        class="flex min-h-screen justify-center items-center text-black text-2xl"
    >
        <form
            on:submit|preventDefault={redirect()}
            class="flex sm:flex-row flex-col bg-gray-300 p-4 rounded-lg"
        >
            <input
                bind:value={ssid}
                class="bg-gray-200 rounded-t-md sm:rounded-md p-4 mr-0 sm:mr-4 min-w-min"
                type="text"
                placeholder="scoresaber profile id/link"
            />
            <button
                class="bg-gray-200 p-4 rounded-b-md sm:rounded-md"
                on:click={() => redirect()}>go</button
            >
        </form>
    </main>
{/if}

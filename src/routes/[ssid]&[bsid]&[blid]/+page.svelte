<script>
  import { fly } from "svelte/transition";
  import { onMount } from "svelte";
  export let data;

  let ready = false;

  onMount(async () => {
    ready = true;
    document.body.style.backgroundColor = data.scoresaber.backgroundColor;
  });
</script>

{#if ready}
  <main
    transition:fly={{ duration: 800, y: 300, opacity: 0.0 }}
    class="mx-auto min-h-screen max-w-[38rem] bg-gray-300 pb-8 mt-12 rounded-t-lg text-center text-3xl text-black"
  >
    <div class="flex flex-row items-center justify-evenly gap-2 py-8">
      <div
        class="flex h-min flex-col w-1/2 break-words text-left justify-center gap-2 p-3"
      >
        <h1 class="text-5xl font-semibold">{data.scoresaber.name}</h1>
        <img
          class="h-10 w-10"
          src={data.scoresaber.countryImage}
          alt="Country"
        />
      </div>

      <img
        class="h-40 w-40 rounded-full"
        src={data.scoresaber.pfp}
        alt="Scoresaber Avatar"
      />
    </div>
    <div transition:fly={{ duration: 1000, y: 600 }} class="mx-6">
      <div class="scoresaber rounded-md bg-gray-200 text-gray-900">
        <h1 class="pl-8 pt-6 text-left text-4xl font-semibold">ScoreSaber</h1>
        <div class="mx-8 h-[4px] mt-6 bg-black" />
        <h1 class="pl-8 pt-6 text-left text-3xl font-semibold">Stats</h1>
        <div
          class="mx-8 my-8 flex justify-between items-center text-left text-2xl font-thin"
        >
          <div>
            <h2>{data.scoresaber.pp}pp</h2>
            <h2>Plays: {data.scoresaber.totalPlayCount}</h2>
            <h2>Ranked Plays: {data.scoresaber.rankedPlayCount}</h2>
          </div>
          <div class="text-right">
            <h2 class="text-4xl font-medium">Rank #{data.scoresaber.rank}</h2>
            <h2>
              (Top {Math.round(
                (data.scoresaber.rank / data.scoresaber.activePlayers) *
                  100 *
                  100
              ) / 100}%)
            </h2>
          </div>
        </div>
        <div class="mx-8 h-[4px] bg-black" />
        <div class="px-8 pt-6 pb-8">
          <h2 class="mb-6 text-left text-3xl font-semibold">First Score</h2>
          <div
            class="flex flex-col sm:flex-row items-center justify-between font-extralight text-2xl"
          >
            <img
              src={data.scoresaber.firstScore.cover}
              alt="Cover Art"
              class="w-24 mb-2 rounded-lg sm:w-24 sm:mb-0"
            />
            <div>
              <h4>{data.scoresaber.firstScore.artist}</h4>
              <h4>{data.scoresaber.firstScore.song}</h4>
            </div>
            <h5>Set on {data.scoresaber.firstScore.dateSet.slice(0, -14)}</h5>
          </div>
        </div>
      </div>

      <div
        class="animate-pulse scoresaber text-left mt-12 pb-8 rounded-md bg-gray-200 text-gray-900"
      >
        <h1 class="pl-8 pt-6 text-4xl font-semibold">BeatSaver</h1>
        <div class="mx-8 h-[4px] mt-6 bg-black" />
        <div class="ml-8 mt-8">
          <h1 class="italic text-red-400">Soon...</h1>
        </div>
      </div>

      <div
        class="animate-pulse scoresaber text-left mt-12 pb-8 rounded-md bg-gray-200 text-gray-900"
      >
        <h1 class="pl-8 pt-6 text-4xl font-semibold">BeatLeader</h1>
        <div class="mx-8 h-[4px] mt-6 bg-black" />
        <div class="ml-8 mt-8">
          <h1 class="italic text-red-400">Soon...</h1>
        </div>
      </div>
    </div>
  </main>
{/if}

<style>
  main {
    box-shadow: rgba(255, 255, 255, 0.3) 0px 7px 29px 0px;
  }
</style>

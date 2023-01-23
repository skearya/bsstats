/** @type {import('./$types').PageServerLoad} */
import { getAverageColor } from 'fast-average-color-node';

export async function load({ params }) {
    return {
        scoresaber: scoresaberData(params.ssid)
    }
};

async function scoresaberData(id) {
    const response = await fetch(`https://scoresaber.com/api/player/${id}/full`);
    const json = await response.json();

    const response2 = await fetch(`https://scoresaber.com/api/player/${id}/scores?limit=1&sort=recent&page=${json.scoreStats.totalPlayCount}&withMetadata=true`);
    const json2 = await response2.json();

    // const response3 = await fetch(`https://scoresaber.com/api/players/count`);
    // const activePlayers = await response3.text();
    const activePlayers = 103737

    const toTwemojiFlag = (input) =>
        `https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/${input
            .toLowerCase()
            .match(/[a-z]/g)
            .map((i) => (i.codePointAt(0) + 127365).toString(16))
            .join('-')}.png`;

    let color = await getAverageColor(json.profilePicture);

    return {
        name: json.name,
        pfp: json.profilePicture,
        backgroundColor: color.hex,
        country: json.country,
        countryImage: toTwemojiFlag(json.country),
        rank: json.rank,
        pp: json.pp,
        totalPlayCount: json.scoreStats.totalPlayCount,
        rankedPlayCount: json.scoreStats.rankedPlayCount,
        firstScore: {
            song: json2.playerScores[0].leaderboard.songName,
            artist: json2.playerScores[0].leaderboard.songAuthorName,
            cover: json2.playerScores[0].leaderboard.coverImage,
            dateSet: json2.playerScores[0].score.timeSet
        },
        activePlayers: activePlayers
    }
}
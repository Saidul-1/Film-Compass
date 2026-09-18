export default async function (query) {
    const link = `https://api.tvmaze.com/search/shows?q=${query}`;

    try {
        const response = await fetch(link);
        const res_json = await response.json();

        if(!res_json) throw new Error("Error fetching movie");
        console.log(res_json);
        return res_json.map(x => ({
                id: x.show?.id,
                name: x.show?.name,
                image: x.show?.image?.medium,
                rating: x.show?.rating.average,
                premiered: x.show?.premiered?.slice(0, 4),
                language: x.show?.language,
                genres: x.show?.genres.join(', '),
                summary: x.show?.summary
        }));
    }
    catch(e) {
        console.log("Something wrong", e);
        return [];
    }
}
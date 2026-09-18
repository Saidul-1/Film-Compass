export default async function () {
    const link = "https://api.tvmaze.com/shows";

    try {
        const response = await fetch(link);
        const res_json = await response.json();

        if(!res_json) throw new Error("Error fetching movie");
        console.log(res_json);
        return res_json.map(x => ({
                name: x.name,
                image: x.image?.medium,
                rating: x.rating.average,
                premiered: x.premiered?.slice(0, 4),
                language: x.language,
                genres: x.genres.join(', '),
                summary: x.summary
        }));
    }
    catch(e) {
        console.log("Something wrong", e);
        return [];
    }
}
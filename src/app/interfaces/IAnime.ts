export interface IAnime{
    mal_id: number,
    title: string,
    images: {
        webp: {
            image_url: string,
            large_image_url: string
        }
    },
    score: number,
    url: string,
    synopsis: string
}
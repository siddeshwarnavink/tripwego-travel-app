import { ICategory } from "./ICategory";

export interface IPlace {
    id: number;
    title: string;
    short_description: string;
    description: string;
    address: string,
    thumbnail: string,
    cover_picture: string,
    facilities: string,
    price: number,
    youtubeId: string,
    locations: string,
    pictures: string,
    roadmap: string;
    categories: ICategory;
}
import { Source } from "../Entities/source";

export interface IPost {
    title: string | undefined;
    description: string | undefined;
    content: string | undefined;
    url: string | undefined;
    image: string | undefined;
    publishedAt: Date | undefined;
    source: Source | undefined;
}
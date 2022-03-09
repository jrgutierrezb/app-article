import { IPost } from "../interfaces/ipost";
import { Source } from "./source";

export class Post implements IPost {
    constructor() {
        
    }
    title: string | undefined;
    description: string | undefined;
    content: string | undefined;
    url: string | undefined;
    image: string | undefined;
    publishedAt: Date | undefined;
    source: Source | undefined;
}
import { IArticle } from "../interfaces/iarticle";
import { Post } from "./post";

export class Article implements IArticle {
    totalArticles: number | undefined;
    articles: Post[] | undefined;
    
}
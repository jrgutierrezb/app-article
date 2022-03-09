import { Post } from "../Entities/post";

export interface IArticle {
    totalArticles: number | undefined;
    articles: Post[] | undefined;
}
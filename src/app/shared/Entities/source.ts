import { ISource } from "../interfaces/isource";

export class Source implements ISource {
    name: string | undefined;
    url: string | undefined;
}
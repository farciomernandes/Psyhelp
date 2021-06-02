import { uuid } from "uuidv4";

interface IPost {
    idAuthor: string;
    id: string;
    title: string;
    text: string;
    category: string;
    crp?: string;
}

export default class Post {
    idAuthor: string;
    id: string;
    title: string;
    text: string;
    category: string;
    crp?: string;

    constructor({idAuthor, text, title, category, crp}: Omit<IPost, "id">){
        this.id = uuid();
        this.idAuthor = idAuthor;
        this.text = text;
        this.title = title;
        this.category = category;
        if(this.crp){
            this.crp = crp;
        }
    }
}
import { uuid } from "uuidv4";

interface IPost {
    idAuthor: string;
    id: string;
    title: string;
    text: string;
    category: string;
    crp?: string;
    approved: boolean;
}

export default class Post {
    idAuthor: string;
    id: string;
    title: string;
    text: string;
    category: string;
    crp?: string;
    approved: boolean;


    constructor({idAuthor, text, title, category, crp, approved}: Omit<IPost, "id">){
        this.id = uuid();
        this.idAuthor = idAuthor;
        this.text = text;
        this.title = title;
        this.category = category;
        this.approved = false;
        if(this.crp){
            this.crp = crp;
        }
    }
}
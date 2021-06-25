import { uuid } from "uuidv4";

interface IComment {
    idUser: string;
    idPost: string;
    id: string;
    text: string;
}

export default class Comment {
    idUser: string;
    idPost: string;
    id: string;
    text: string;


    constructor({text, idPost, idUser}: Omit<IComment, "id">){
        this.id = uuid();
        this.idPost = idPost;
        this.idUser = idUser;
        this.text = text;
    }
}
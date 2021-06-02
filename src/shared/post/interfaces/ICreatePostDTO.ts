export default interface ICreatePostDTO {
    idAuthor: string;
    title: string;
    text: string;
    category: string;
    crp?: string;
}
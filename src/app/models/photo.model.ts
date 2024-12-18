export class Photo {
    id!: number;
    title!: string;
    creationDate!: Date;
    description!: string;
    source!: string;
    idAlbum!: number;

    constructor(id: number, title: string, creationDate: Date, description: string, source: string, idAlbum: number) {
        this.id = id;
        this.title = title;
        this.creationDate = creationDate;
        this.description = description;
        this.source = source;
        this.idAlbum = idAlbum;

    }
}
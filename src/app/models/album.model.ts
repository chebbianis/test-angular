export class Album {
    id?: number;
    title!: string;
    creationDate!: Date;
    archived!: number;
    coverPicture!: string;

    constructor(id?: number, title?: string, creationDate?: Date, archived?: number, coverPicture?: string) {
        this.id = id || undefined;
        this.title = title || '';
        this.creationDate = creationDate || new Date();
        this.archived = archived || 0;
        this.coverPicture = coverPicture || '';
    }
}

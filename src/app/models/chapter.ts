import { tome } from "./tome";

export class chapter {
    id: number;
    chapter_number: string;
    title: string;
    description: string;
    tome: tome;
  
    constructor(id: number, chapter_number: string, title: string, description: string, tome: tome){
        this.id = id;
        this.chapter_number = chapter_number;
        this.title = title;
        this.description = description;
        this.tome = tome;;
    }
  }
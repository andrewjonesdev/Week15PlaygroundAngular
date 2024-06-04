export class tome {
    id: number;
    tome_number: string;
    title: string;
    tome_japan_date_publish: string;
    tome_french_date_publish: string;
  
    constructor(id: number, tome_number: string, title: string, tome_japan_date_publish: string, tome_french_date_publish: string){
        this.id = id;
        this.tome_number = tome_number;
        this.title = title;
        this.tome_japan_date_publish = tome_japan_date_publish;
        this.tome_french_date_publish = tome_french_date_publish;
    }
  }
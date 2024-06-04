export class devilFruit {
    id: number;
    name: string;
    roman_name: string;
    type: string;
    description: string;
    filename: string;
    technicalFile: string;
  
    constructor(id: number, name: string, roman_name: string, type: string, description: string, filename: string, technicalFile: string){
        this.id = id;
        this.name = name;
        this.roman_name = roman_name;
        this.type = type;
        this.description = description;
        this.filename = filename;
        this.technicalFile = technicalFile;
    }
  }
export class saga {
    id: number;
    title: string;
    saga_number: string;
    saga_chapitre: string;
    saga_volume: string;
    saga_episode: string;
  
    constructor(id: number, title: string, saga_number: string, saga_chapitre: string, saga_volume: string, saga_episode: string){
        this.id = id;
        this.title = title;
        this.saga_number = saga_number;
        this.saga_chapitre = saga_chapitre;
        this.saga_volume = saga_volume;
        this.saga_episode = saga_episode;
    }
  }
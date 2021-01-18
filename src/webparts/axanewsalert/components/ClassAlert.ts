import { IAlert } from "./IAlert";
export class ClassAlert{
    public Title:string;
    public Date:string;
    public News:string;
    public Url:string;
  
  
    
    constructor(item: IAlert){
        this.Title = item.Title;
        this.Date = item.Date;
        this.News = item.News;
        this.Url = item.Url;
      
       
    }
}
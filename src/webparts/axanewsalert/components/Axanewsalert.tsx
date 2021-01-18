import * as React from 'react';
import styles from './Axanewsalert.module.scss';
import { IAxanewsalertProps } from './IAxanewsalertProps';
import { escape } from '@microsoft/sp-lodash-subset';
//import { sp, Web } from '@pnp/sp/presets/all';
import "@pnp/sp/webs";
//import { sp, Web } from'@pnp/sp';
import { sp, Lists, IWeb, ILists, List, IList, Web } from "@pnp/sp/presets/all";
import { ClassAlert } from './ClassAlert';
import { IAlert } from './IAlert';


export default class Axanewsalert extends React.Component<IAxanewsalertProps, any> {
  public constructor(props: IAxanewsalertProps, any) {
    super(props);
    this.state = {
      items: []
    };
  }


  public render(){
    return (
      <>
      {
      this.state.items.map(function(item:IAlert){
      return(
          <>
          
          <div  className={styles.alertNews}>
          <a href={item.Url}>
          <h6><b>{item.Title}</b></h6>
              </a>
              <p>{item.News}</p>
              <small>{item.Date}</small>
          </div>
          
      </>
              );
      })

  }
  </>

    );
  }

  public componentDidMount()
{
    // debugger;
    this._AlertList();
}
private _AlertList():void
{
    sp.web.lists.getByTitle(`Importantnotice`).items.get().then
    ((response)=>{
        let AlertCollection=response.map(item=> new ClassAlert(item)).reverse();
        let AlertCard = AlertCollection.slice(0, 3);
        this.setState({items:AlertCard});
    }

    );
}


}

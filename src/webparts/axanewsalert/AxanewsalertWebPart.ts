import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { sp, Lists, IWeb, ILists, List, IList, Web } from "@pnp/sp/presets/all";
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'AxanewsalertWebPartStrings';
import Axanewsalert from './components/Axanewsalert';
import { IAxanewsalertProps } from './components/IAxanewsalertProps';

export interface IAxanewsalertWebPartProps {
  description: string;
}

export default class AxanewsalertWebPart extends BaseClientSideWebPart<IAxanewsalertWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IAxanewsalertProps> = React.createElement(
      Axanewsalert,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }


  public onInit(): Promise<void> {
    return super.onInit().then(_ => {
    sp.setup({
    spfxContext: this.context
    });
    });
    }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}

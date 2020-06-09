import { UserData } from '../user/user.interface';
import { MenuEntity } from './menu.entity';

interface MenuEntry {
  body: string;
}

export interface MenuData {

    appid: string,
    caption: string,
    sortid: string,
    active?: boolean;
    createddate?: Date;
    createdby?: number;
    updateddate?: Date;
    updatedby?: number;

  }
  
  export interface MenuRO {
    menu: MenuData;
  }

  export interface MenuEntryRO {
    menuentries: MenuEntry;
  }

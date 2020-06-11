import { UserData } from '../user/user.interface';
import { MenuAppEntity } from './menuapp.entity';
import { MenuEntryEntity } from './menuentry.entity';

interface MenuAppEntry {
  body: string;
}

export interface MenuAppData {

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
    menu: MenuAppData;
  }

  export interface MenuEntryRO {
    menuentries: MenuEntryEntity;
  }

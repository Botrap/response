import { UserData } from '../user/user.interface';
import { ListEntity } from './list.entity';
interface ListEntry {
  body: string;
}


export interface ListData {

    name: string;
    description: string;
    active?: boolean;
    createdat?: Date;
    createdby?: number;
    updatedat?: Date;
    updatedby?: number;

  }
  
  export interface ListRO {
    list: ListData;
  }

  export interface ListEntryRO {
    listentries: ListEntry[];
  }





  export interface ListEntriesRO {
    listentries: ListEntry[];
  }

  
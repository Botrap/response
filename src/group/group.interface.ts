export interface GroupData {

    name: string;
    description: string;
    active?: boolean;
    createdat?: Date;
    createdby?: number;
    updatedat?: Date;
    updatedby?: number;

  }
  
  export interface GroupRO {
    corporation: GroupData;
  }
}

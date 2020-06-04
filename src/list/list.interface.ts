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
    corporation: ListData;
  }


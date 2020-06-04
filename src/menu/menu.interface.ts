export interface CorporationData {

    appid: number,
    caption: string,
    sortid: string,
    active?: boolean;
    action: string,
    createdat?: Date;
    createdby?: number;
    updatedat?: Date;
    updatedby?: number;

  }
  
  export interface CorporationRO {
    corporation: CorporationData;
  }

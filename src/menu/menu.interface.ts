export interface MenuData {

    appid: string,
    caption: string,
    sortid: string,
    active?: boolean;
    createdat?: Date;
    createdby?: number;
    updatedat?: Date;
    updatedby?: number;

  }
  
  export interface MenuRO {
    menu: MenuData;
  }

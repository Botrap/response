export interface ErrorLogData {

    siteid: number;
    description: string;
    errorcode: string;
    errorcodehtml: string;
    createdat?: Date;
    createdby?: number;
    updatedat?: Date;
    updatedby?: number;

  }
  
  export interface ErrorLogRO {
    errorlog: ErrorLogData;
  }



export interface RoleData {

    name: string;
    description: string;
    active?: boolean;
    createdat?: Date;
    createdby?: number;
    updatedat?: Date;
    updatedby?: number;

  }
  
  export interface RoleRO {
    role: RolenData;
  }


export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  gender: string;
  birthDate: string;
  addresses?: Address[];
}

export interface Address {
  id?: number;
  addressText: string;
  addressType: string;
}
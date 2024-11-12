import { DocumentData } from "firebase/firestore";

export interface UserDetails {
  uid: string;
  email: string;
  name: string;
  IasCadastradas: DocumentData[]
}

  
import { ReactNode } from "react";

export type TMenubar = {
    key : string;
    label : ReactNode;
    children? : TMenubar[];
}

export type TUsersPath = {
    name: string,
    path?: string,
    element?: ReactNode,
    children? : TUsersPath[];
}

export type TRoute = {
    path: string;
    element: ReactNode;
  };
  
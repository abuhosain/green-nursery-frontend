// headerItemsGenerator.ts
import { NavLink } from "react-router-dom";
import { TUsersPath, TMenubar } from "../types";

export const headerItemsGenerator = (items: TUsersPath[]): TMenubar[] => {
  return items.map((item: TUsersPath) => ({
    key: item.name,
    label: <NavLink to={item.path || '#'}>{item.name}</NavLink>,
    children: item.children ? item.children.map((child: TUsersPath) => ({
      key: child.name,
      label: <NavLink to={child.path || '#'}>{child.name}</NavLink>,
    })) : undefined,
  }));
};

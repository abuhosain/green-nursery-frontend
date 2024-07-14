// utils/breadcrumbsGenerator.ts

import { useLocation, matchRoutes, RouteObject } from "react-router-dom";
import { TUsersPath } from "../types";

interface Breadcrumb {
  path: string;
  name: string;
}

export const useBreadcrumbs = (routes: RouteObject[]): Breadcrumb[] => {
  const location = useLocation();
  const matches = matchRoutes(routes, location);

  if (!matches) return [];

  return matches.map((match) => {
    const route = match.route as TUsersPath;
    return {
      path: match.pathname,
      name: route.name,
    };
  });
};

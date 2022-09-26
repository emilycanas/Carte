import { lazy } from "react";
const Locations = lazy(() => import("../pages/location/RenderLocations"));
 
const locationRoutes = [
  {
    path: "/locations",
    name: "Locations",
    exact: true,
    element: Locations,
    roles: [],
    isAnonymous: true,
  },
];

const allRoutes = [
  ...locationRoutes,
];

export default allRoutes;

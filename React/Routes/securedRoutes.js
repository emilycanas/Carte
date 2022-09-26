import { lazy } from "react";

//location
const LocationForm = lazy(() => import("../pages/location/LocationFormContainer"));
const UserLocations = lazy(() => import("../pages/location/UserLocations"));


const locationRoutes = [
  {
    path: "/location/edit/:id",
    name: "LocationUpdate",
    exact: true,
    element: LocationForm,
    roles: ["users"],
    isAnonymous: false,
  },
  {
    path: "/location/add",
    name: "LocationForm",
    exact: true,
    element: LocationForm,
    roles: ["users"],
    isAnonymous: true,
  },
  {
    path: "/userlocations",
    name: "UserLocations",
    exact: true,
    element: UserLocations,
    roles: ["users"],
    isAnonymous: true,
  },
];
const allRoutes = [
  ...locationRoutes,
];

export default allRoutes;

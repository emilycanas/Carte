import { lazy } from "react";
const AnalyticsDashboards = lazy(() => import("../pages/dashboard/Analytics"));
const NewsletterSubscriptionsAdmin = lazy(() =>
  import("../components/NewsLetter/NewsletterSubscriptionAdmin")
);
const PageNotFound = lazy(() => import("../pages/error/PageNotFound"));
const MenuItemAddForm = lazy(() =>
  import("../pages/menuitems/MenuItemAddForm")
);
const MenuItemTable = lazy(() => import("../pages/menuitems/MenuItems"));

// employees
const Employees = lazy(() => import("../components/employee/Employees"));
const AddEmployee = lazy(() => import("../components/employee/AddEmployee"));
const OrgWizard = lazy(() => import("../pages/wizard/OrgWizard"));
const LicenseUserPage = lazy(() =>
  import("../components/licenses/LicenseUserPage")
);

//userProfiles
const UserProfileForm = lazy(() =>
  import("../components/userprofile/UserProfileForm")
);
const UserProfile = lazy(() =>
  import("../components/userprofile/UserProfileList")
);
const UserProfileView = lazy(() =>
  import("../components/userprofile/SingleUserProfile")
);
//ingredients
const Ingredients = lazy(() => import("../components/ingredients/Ingredients"));
const IngredientAdd = lazy(() =>
  import("../components/ingredients/IngredientAdd")
);

//location
const LocationForm = lazy(() =>
  import("../pages/location/LocationFormContainer")
);
const UserLocations = lazy(() => import("../pages/location/UserLocations"));

//dashboard
const LicensesAdminPage = lazy(() =>
  import("../components/licenses/LicensesAdminPage")
);
const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboards",
    icon: "uil-home-alt",
    header: "Navigation",
    children: [
      {
        path: "/dashboard/analytics",
        name: "Analytics",
        element: AnalyticsDashboards,
        roles: ["Admin"],
        exact: true,
        isAnonymous: false,
      },
    ],
  },
];
const menuItemsRoutes = [
  {
    path: "/menuitem",
    name: "MenuItemById",
    element: MenuItemTable,
    roles: ["MenuEditor", "OrgAdmin"],
    exact: true,
    isAnonymous: false,
  },
  {
    path: "/menuitem/add",
    name: "menuItemForm",
    element: MenuItemAddForm,
    roles: ["OrgAdmin", "MenuEditor"],
    exact: true,
    isAnonymous: false,
  },
  {
    path: "/menuitem/edit/:id",
    name: "MenuItemAddForm",
    element: MenuItemAddForm,
    roles: ["MenuEditor", "OrgAdmin"],
    exact: true,
    isAnonymous: false,
  },
];
const employeeRoutes = [
  {
    path: "/addemployee",
    name: "AddEmployee",
    exact: true,
    element: AddEmployee,
    roles: [],
    isAnonymous: false,
  },
  {
    path: "/employees",
    name: "Employees",
    exact: true,
    element: Employees,
    roles: [],
    isAnonymous: false,
  },
  {
    path: "/addemployee/:id",
    name: "Edit Employees",
    exact: true,
    element: AddEmployee,
    roles: [],
    isAnonymous: false,
  },
];

const NewsletterAdmin = [
  {
    path: "/newslettersubscription/admin",
    name: "NewsletterSubscriptionAdmin",
    element: NewsletterSubscriptionsAdmin,
    roles: ["Admin"],
    exact: true,
    isAnonymous: false,
    isSimple: false,
  },
];

const test = [
  {
    path: "/test",
    name: "Test",
    exact: true,
    element: AnalyticsDashboards,
    roles: ["Fail"],
    isAnonymous: false,
    isSimple: false,
  },
  {
    path: "/secured",
    name: "A Secured Route",
    exact: true,
    element: AnalyticsDashboards,
    roles: ["Fail"],
    isAnonymous: false,
    isSimple: false,
  },
  {
    path: "/secured2",
    name: "A Secured Route",
    exact: true,
    element: AnalyticsDashboards,
    roles: ["Admin"],
    isAnonymous: false,
  },
];

const orgRoutes = [
  {
    path: "/organizations",
    name: "OrgWizard",
    element: OrgWizard,
    roles: ["OrgAdmin", "Admin"],
    exact: true,
    isAnonymous: false,
  },
  {
    path: "/licenses",
    name: "AddUserLicense",
    exact: true,
    element: LicenseUserPage,
    roles: ["user"],
    isAnonymous: false,
    isSimple: false,
  },
  {
    path: "/licensesAdmin",
    name: "LicenseAdmin",
    exact: true,
    element: LicensesAdminPage,
    roles: ["Admin"],
    isAnonymous: false,
    isSimple: false,
  },
];

const errorRoutes = [
  {
    path: "*",
    name: "Error - 404",
    element: PageNotFound,
    roles: [],
    exact: true,
    isAnonymous: false,
    isSimple: false,
  },
];
const ingredients = [
  {
    path: "/ingredients",
    name: "Ingredients",
    exact: true,
    element: Ingredients,
    roles: ["OrgAdmin", "MenuEditor", "Admin"],
    isAnonymous: false,
  },
  {
    path: "/ingredientadd",
    name: "Create Ingredients",
    exact: true,
    element: IngredientAdd,
    roles: ["OrgAdmin", "MenuEditor", "Admin", "Developer"],
    isAnonymous: false,
  },
  {
    path: "/ingredientadd/:id",
    name: "Ingredient Add",
    exact: true,
    element: IngredientAdd,
    roles: ["OrgAdmin", "MenuEditor", "Admin", "Developer"],
    isAnonymous: false,
  },
];

const profileRoutes = [
  {
    path: "/users/profiles",
    name: "UserProfile",
    exact: true,
    element: UserProfile,
    roles: [],
    isAnonymous: false,
    isSimple: false,
  },
  {
    path: "/users/profiles/add",
    name: "UserProfileForm",
    exact: true,
    element: UserProfileForm,
    roles: [],
    isAnonymous: false,
    isSimple: false,
  },
  {
    path: "/users/profiles/edit/:id",
    name: "UserProfileForm",
    exact: true,
    element: UserProfileForm,
    roles: [],
    isAnonymous: false,
    isSimple: false,
  },
  {
    path: "/userprofiles/view/:id",
    name: "UserProfileView",
    exact: true,
    element: UserProfileView,
    roles: [],
    isAnonymous: false,
    isSimple: false,
  },
];
const locationRoutes = [
  {
    path: "/location/edit/:id",
    name: "LocationUpdate",
    exact: true,
    element: LocationForm,
    roles: [],
    isAnonymous: false,
  },
  {
    path: "/location/add",
    name: "LocationForm",
    exact: true,
    element: LocationForm,
    roles: [],
    isAnonymous: true,
  },
  {
    path: "/userlocations",
    name: "UserLocations",
    exact: true,
    element: UserLocations,
    roles: [],
    isAnonymous: true,
  },
];
const allRoutes = [
  ...dashboardRoutes,
  ...test,
  ...menuItemsRoutes,
  ...profileRoutes,
  ...NewsletterAdmin,
  ...errorRoutes,
  ...employeeRoutes,
  ...orgRoutes,
  ...ingredients,
  ...locationRoutes,
];

export default allRoutes;

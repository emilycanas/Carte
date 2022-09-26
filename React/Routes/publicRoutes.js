import { lazy } from "react";
const Landing = lazy(() => import("../pages/landing/Landing"));
const NewsletterSubscriptions = lazy(() =>
  import("../components/NewsLetter/NewsletterSubscriptions")
);
const NewsLetterUnsubscribe = lazy(() =>
  import("../components/NewsLetter/NewsLetterUnsubscribe")
);

const PageNotFound = lazy(() => import("../pages/error/PageNotFound"));
const ServerError = lazy(() => import("../pages/error/ServerError"));
const Blogs = lazy(() => import("../components/blogs/Blogs"));
const ViewMore = lazy(() => import("../components/blogs/ViewMore"));
const Menus = lazy(() => import("../pages/menus/Menus"));
const Locations = lazy(() => import("../pages/location/RenderLocations"));

const ContactUs = lazy(() => import("../pages/landing/ContactUs"));

const PrivacyPolicy = lazy(() => import("../components/PrivacyPolicy"));
const CookiePolicy = lazy(() => import("../components/cookies/CookiePolicy"));
const BlogsForm = lazy(() => import("../components/blogs/BlogsForm"));
const Timeline = lazy(() => import("../pages/landing/Timeline"));
const DragDrop = lazy(() => import("../pages/landing/DragDrop"));

//users
const Register = lazy(() => import("../components/user/Register"));
const Login = lazy(() => import("../components/user/Login"));
const Confirm = lazy(() => import("../components/user/Confirm"));
const ForgotPassword = lazy(() => import("../components/user/ForgotPassword"));
const Faq = lazy(() => import("../pages/landing/FAQ"));
const ShareStoryPublic = lazy(() =>
  import("../components/stories/ShareStoryPublic")
);
const ShareStories = lazy(() => import("../components/stories/ShareStory"));
const Checkout = lazy(() => import("../checkout/SubscriptionCheckout"));
const CheckoutSuccess = lazy(() => import("../checkout/CheckoutSuccessPage"));

const routes = [
  {
    path: "/faq",
    name: "Faq",
    exact: true,
    element: Faq,
    roles: ["OrgAdmin", "Customer"],
    isAnonymous: true,
    isSimple: false,
  },
  {
    path: "/privacy",
    name: "PrivacyPolicy",
    exact: true,
    element: PrivacyPolicy,
    roles: [],
    isAnonymous: true,
    isSimple: false,
  },
  {
    path: "/cookies",
    name: "CookiePolicy",
    exact: true,
    element: CookiePolicy,
    roles: [],
    isAnonymous: true,
    isSimple: false,
  },
  {
    path: "/",
    name: "Landing",
    exact: true,
    element: Landing,
    roles: [],
    isAnonymous: true,
    isSimple: true,
  },
  {
    path: "/newslettersubscriptions",
    name: "NewsletterSubscriptions",
    exact: true,
    element: NewsletterSubscriptions,
    roles: [],
    isAnonymous: true,
  },
  {
    path: "/newslettersubscriptions/unsubscribe",
    name: "NewsLetterUnsubscribe",
    element: NewsLetterUnsubscribe,
    roles: [],
    exact: true,
    isAnonymous: true,
  },
  {
    path: "/dragdrop",
    name: "DragDrop",
    exact: true,
    element: DragDrop,
    roles: [],
    isAnonymous: true,
    isSimple: false,
  },
  {
    path: "/sharestorypublic",
    name: "ShareStoryPublic",
    exact: true,
    element: ShareStoryPublic,
    rolse: [],
    isAnonymous: true,
    isSimple: false,
  },
  {
    path: "/sharestories",
    name: "ShareStories",
    exact: true,
    element: ShareStories,
    roles: [],
    isAnonymous: true,
    isSimple: false,
  },
];

const users = [
  {
    path: "/register",
    name: "Register",
    exact: true,
    element: Register,
    roles: [],
    isAnonymous: true,
    isSimple: true,
  },
  {
    path: "/login",
    name: "Login",
    exact: true,
    element: Login,
    roles: [],
    isAnonymous: true,
    isSimple: true,
  },
  {
    path: "/account/forgot-password",
    name: "Forgot Password",
    exact: true,
    element: ForgotPassword,
    roles: [],
    isAnonymous: true,
    isSimple: true,
  },
  {
    path: "/confirm",
    name: "Confirm Account",
    exact: true,
    element: Confirm,
    roles: [],
    isAnonymous: true,
    isSimple: true,
  },
  {
    path: "/subscriptionscheckout",
    name: "Checkout",
    exact: true,
    element: Checkout,
    roles: [],
    isAnonymous: true,
  },
  {
    path: "/checkout",
    name: "CheckoutSuccessPage",
    exact: true,
    element: CheckoutSuccess,
    roles: [],
    isAnonymous: true,
  },
  {
    path: "/menus",
    name: "Menus",
    exact: true,
    element: Menus,
    roles: [],
    isAnonymous: true,
    isSimple: false,
  },

  {
    path: "/subscriptionscheckout",
    name: "Checkout",
    exact: true,
    element: Checkout,
    roles: [],
    isAnonymous: true,
  },
  {
    path: "/checkout",
    name: "CheckoutSuccessPage",
    exact: true,
    element: CheckoutSuccess,
    roles: [],
    isAnonymous: true,
  },
];

const timelineRoutes = [
  {
    path: "/timeline",
    name: "Timeline",
    exact: true,
    element: Timeline,
    roles: [],
    isAnonymous: true,
    isSimple: false,
  },
];

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

const contactUsRoutes = [
  {
    path: "/contactus",
    name: "ContactUs",
    exact: true,
    element: ContactUs,
    roles: [],
    isAnonymous: true,
    isSimple: false,
  },
];

const blogsRoutes = [
  {
    path: "/blogs",
    name: "Blogs",
    exact: true,
    element: Blogs,
    roles: [],
    isAnonymous: true,
  },
  {
    path: "/blogs/:id",
    name: "ViewMore",
    exact: true,
    element: ViewMore,
    roles: [],
    isAnonymous: true,
  },
];

const blogsForm = [
  {
    path: "/blogsadmin",
    name: "blogsadmin",
    exact: true,
    element: BlogsForm,
    roles: [],
    isAnonymous: true,
  },
];
const errorRoutes = [
  {
    path: "/error-500",
    name: "Error - 500",
    element: ServerError,
    roles: [],
    exact: true,
    isAnonymous: true,
    isSimple: true,
  },
  {
    path: "*",
    name: "Error - 404",
    element: PageNotFound,
    roles: [],
    exact: true,
    isAnonymous: true,
    isSimple: true,
  },
];
const allRoutes = [
  ...routes,
  ...errorRoutes,
  ...timelineRoutes,
  ...users,
  ...blogsRoutes,
  ...blogsForm,
  ...locationRoutes,
  ...contactUsRoutes,
];

export default allRoutes;

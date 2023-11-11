import About from "../About/About";
import BlogCreate from "../Blog-create-from/BlogCreate";
import Blog from "../Blog/Blog";
import SinglePageBlog from "../Blog/SinglePageBlog";
import Home from "../Home/Home";
import EditeProfile from "../Profile/EditeProfile";
import Profile from "../Profile/Profile";
import Contact from "../contact/Contact";
import Login from "../login/Login";

const isUser = false;

const Roules = {
  public: "public",
  private: "private",
};

const RoutePath = {
  home: "/",
  profile: "profile",
  blog: "/blog",
  login: "/login",
  contact: "/contact",
  about: "/about",
  createBlog: "create-blog",
  profileEdit: "profile-edite",
};

const pages = [
  { title: "Home", link: RoutePath.home, icon: "", roule: Roules.public },
  { title: "Blog", link: RoutePath.blog, icon: "", roule: Roules.public },
  { title: "Contact", link: RoutePath.contact, icon: "", roule: Roules.public },
  { title: "About", link: RoutePath.about, icon: "", roule: Roules.public },
  {
    title: "Create Blog",
    link: RoutePath.createBlog,
    icon: "",
    roule: Roules.private,
  },
];
const settings = [
  { title: "Profile", link: RoutePath.profile, icon: "" },
  { title: "Edit Profile", link: RoutePath.profileEdit, icon: "" },
  { title: "Logout", link: "/logout", icon: "" },
];

const routersComponentants = [
  //! Public routes
  { path: RoutePath.home, element: <Home />, roule: Roules.public },
  { path: RoutePath.blog, element: <Blog />, roule: Roules.public },
  { path: RoutePath.contact, element: <Contact />, roule: Roules.public },
  { path: RoutePath.about, element: <About />, roule: Roules.public },
  { path: RoutePath.login, element: <Login />, roule: Roules.public },
  {
    path: `${RoutePath.blog}/:id`,
    element: <SinglePageBlog />,
    roule: Roules.public,
  },

  //! Private routes
  { path: RoutePath.profile, element: <Profile />, roule: Roules.private },
  {
    path: RoutePath.profileEdit,
    element: <EditeProfile />,
    roule: Roules.private,
  },
  {
    path: RoutePath.createBlog,
    element: <BlogCreate />,
    roule: Roules.private,
  },
];

export { pages, settings, routersComponentants, RoutePath, Roules, isUser };

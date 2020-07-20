import Home from "./components/Home.vue";
import EditProducts from "./components/EditProducts.vue";
import ViewProducts from "./components/ViewProducts.vue";
import AddProducts from "./components/AddProducts.vue";
import Register from "./components/Register.vue";
import Login from "./components/Login.vue";
import Contact from "./components/Contact.vue";
import About from "./components/About.vue";

export const routes = [
  {
    path: "/",
    name: "home",
    components: {
      default: Home,
      a: Contact
    }
  },
  {
    path: "/editProducts",
    name: "EditProducts",
    component: EditProducts
  },
  {
    path: "/viewProducts",
    name: "ViewProducts",
    component: ViewProducts
  },
  {
    path: "/addProducts",
    name: "AddProducts",
    component: AddProducts
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/about",
    name: "About",
    component: About
  }
];

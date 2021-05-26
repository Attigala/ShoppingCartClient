import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path : "/",
        alias : "/products",
        name: "products",
        component : () => import("./components/ProductList")
    },
    {
        path : "/calculate",
        alias : "/calculate",
        name: "calculate",
        component : () => import("./components/Calculate")
    }

  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
export default router;
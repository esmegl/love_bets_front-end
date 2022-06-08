const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "/how_does_it_work", component: () => import("pages/HowItWorks.vue") },
      { path: "/highscores", component: () => import("pages/Highscores.vue") },
      { path: "/contact", component: () => import("pages/Contact.vue") },
      { path: "/donate", component: () => import("pages/Donate.vue") }
    ]
  },
  {
    path: "/account/:accountName",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Account.vue") }]
  },
  {
    path: "/transfer",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Transfer.vue") }]
  },{
    path: "/streaming",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Streaming.vue") }]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;

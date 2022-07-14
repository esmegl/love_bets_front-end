const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "/test", component: () => import("pages/Test.vue") },
      { path: "/how_to_use", component: () => import("pages/HowToUse.vue") },
      { path: "/bettor", component: () => import("pages/Bettor.vue") },
      { path: "/witness", component: () => import("pages/Witness.vue") },
      { path: "/choose_role", component: () => import("pages/ChooseRole.vue") },
      { path: "/start_wedding", component: () => import("pages/StartWedding.vue") },
      { path: "/highscores", component: () => import("pages/Highscores.vue") },
      { path: "/contact", component: () => import("pages/Contact.vue") },
      { path: "/support_me", component: () => import("pages/SupportMe.vue") }
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

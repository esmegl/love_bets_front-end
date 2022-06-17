<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-primary">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        
        <q-toolbar-title style="padding-left: 10px">
          Welcome!
        </q-toolbar-title>

        <login-button></login-button>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="350"
      :breakpoint="400"
      color="primary"
    >

      <q-btn class="float-right" icon="arrow_forward"/>

      <q-scroll-area style="height: calc(100% - 150px); margin-top: 50px; border-right: 1px solid #ddd">

        <q-list padding>

          <q-item to="/" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>

            <q-item-section>
              Home
            </q-item-section>
          </q-item>

          <q-item to="/how_does_it_work" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="info" />
            </q-item-section>

            <q-item-section>
              How does Lovebets work?
            </q-item-section>
          </q-item>

          <q-item to="/test_form" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="bug_report" />
            </q-item-section>

            <q-item-section>
              Test form
            </q-item-section>
          </q-item>

          <q-item to="/highscores" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="leaderboard" />
            </q-item-section>

            <q-item-section>
              Highscores
            </q-item-section>
          </q-item>

          <q-item to="/contact" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="mail"/>
            </q-item-section>

            <q-item-section>
              Contact
            </q-item-section>
          </q-item>

          <q-item to="/donate" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="favorite" />
            </q-item-section>

            <q-item-section>
              Donate
            </q-item-section>
          </q-item>

          <q-item exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="language" />
            </q-item-section>

            <q-item-section>
              Language
            </q-item-section>
          </q-item>

          <q-item exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="dark_mode" />
            </q-item-section>

            <q-item-section>
              Theme
            </q-item-section>
          </q-item>

          <!-- <q-btn-dropdown color="primary" label="Language" dropdown-icon="language">
            <q-list>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>English</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Español</q-item-label>
                </q-item-section>
              </q-item>

            </q-list>
          </q-btn-dropdown> -->

          <!-- Dark mode -->
          <!-- <q-btn clickable @click="onItemClick">
            <q-item-section >
              <q-icon name="dark_mode" size="md"/>
            </q-item-section>
          </q-btn> -->

          <!-- <q-item-label header class="text-grey-8">
            Example pages
          </q-item-label>
          <ExamplePage
            v-for="link in examplePages"
            :key="link.title"
            v-bind="link"
          />
          <q-item-label header class="text-grey-8">
            Essential Links
          </q-item-label>
          <EssentialLink
            v-for="link in essentialLinks"
            :key="link.title"
            v-bind="link"
          /> -->


        </q-list>
      </q-scroll-area> 

    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
// import EssentialLink from "components/EssentialLink.vue";
// import ExamplePage from "components/ExamplePage.vue";
import LoginButton from "components/LoginButton.vue";

const pagesData = [
  {
    title: "Account",
    caption: "Account profile and Hyperion history query example",
    icon: "face",
    path: "/account/exampleuser1"
  },
  {
    title: "Transfer",
    caption: "Transfer example, sending/signing actions",
    icon: "send",
    path: "/transfer"
  },
  {
    title: "Streaming",
    caption: "Hyperion event streaming example",
    icon: "filter_alt",
    path: "/streaming"
  }
];

const linksData = [
  {
    title: "Use this template!",
    caption: "github.com/telosnetwork/ui-template",
    icon: "fas fa-rocket",
    link: "https://github.com/telosnetwork/ui-template"
  },{
    title: "Telos Github",
    caption: "github.com/telosnetwork",
    icon: "fab fa-github",
    link: "https://github.com/telosnetwork"
  },
  {
    title: "Telos Docs",
    caption: "docs.telos.net",
    icon: "menu_book",
    link: "https://docs.telos.net"
  },
  {
    title: "Telos Dev Telegram",
    caption: "t.me/dappstelos",
    icon: "code",
    link: "https://t.me/dappstelos"
  },
  {
    title: "Telos Testnet Faucet",
    caption: "app.telos.net/testnet/developers",
    icon: "opacity",
    link: "https://app.telos.net/testnet/developers"
  },
  {
    title: "Quasar Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev"
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev"
  }
];

export default {
  name: "MainLayout",
  // components: { EssentialLink, ExamplePage, LoginButton },
  components: { LoginButton },
  data() {
    return {
      leftDrawerOpen: false
      // essentialLinks: linksData,
      // examplePages: pagesData
    };
  }
};
</script>

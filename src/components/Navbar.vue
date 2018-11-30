<template>
  <nav>
    <v-toolbar app>
      <v-toolbar-side-icon class="grey--text" v-on:click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="grey--text text-uppercase">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <v-btn slot="activator" fab small flat color="grey">
          <v-icon>logout</v-icon>
        </v-btn>
        <span>Sign Out</span>
      </v-tooltip>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app class="primary">
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{link.text}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default{
  data(){
    return{
      drawer: false,
      links: [
        {icon: 'dashboard', text: 'Dashboard', route:'/'},
        {icon: 'folder', text: 'My Projects', route:'/projects'},
        {icon: 'person', text: 'Team', route:'/team'}
      ]
    }
  }
}
</script>
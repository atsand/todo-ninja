<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 flat v-for="person in team" :key="person.name">
          <v-card class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar"/>
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{person.name}}</div>
              <div class="grey--text">{{person.role}}</div>
              <v-card-actions>
                <v-btn flat color="grey">
                  <v-icon small left>message</v-icon>
                  <span>Message</span>
                </v-btn>
              </v-card-actions>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    components: {
    },
    data() {
      return {
        team: [
        { name: 'Aaron', role: 'Web Developer', avatar: '/avatar-1.png'},
        { name: 'Bob', role: 'Graphic Designer', avatar: '/avatar-2.png'},
        { name: 'Teddy', role: 'Web Developer', avatar: '/avatar-3.png'},
        { name: 'Shelly', role: 'Social Media Maverick', avatar: '/avatar-4.png'},
        { name: 'Jimbo', role: 'Sales Guru', avatar: '/avatar-5.png'}
        ]
      }
    }
  }
</script>

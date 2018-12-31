<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container class="my-5">

      <v-layout row class="mb-3">
        <v-tooltip top>
          <v-btn small flat color="grey" slot="activator" @click="sortBy('title')">
            <v-icon left small>folder</v-icon>
            <span class="caption text-capitalize">By Project Name</span>
          </v-btn>
          <span>Sort By Project Name</span>
        </v-tooltip>
        <v-tooltip top>
          <v-btn small flat color="grey" slot="activator" @click="sortBy('dueDate')">
            <v-icon left small>alarm</v-icon>
            <span class="caption text-capitalize">By Due Date</span>
          </v-btn>
          <span>Sorty By Due Date</span>
        </v-tooltip>
        <v-tooltip top>
          <v-btn small flat color="grey" slot="activator" @click="sortBy('person')">
            <v-icon left small>person</v-icon>
            <span class="caption text-capitalize">By Person</span>
          </v-btn>
          <span>Sorty By Person</span>
        </v-tooltip>
      </v-layout>

      <v-card v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project Title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{ project.dueDate }}</div>
          </v-flex>
          <v-flex xs12 sm4 md2>
            <div class="right">
              <v-chip small :class="`${project.status} white--text caption my-2`">
                {{project.status}}
              </v-chip>
            </div>
          </v-flex>
        </v-layout>
      <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import db from '@/firebase.js'

  export default {
    data(){
      return {
        projects:[],
        sortedBy:''
      }
    },
    methods:{
      sortBy(prop){
        if(this.sortedBy == prop){
          this.sortedBy = '';
          this.projects.sort((a,b) => a[prop] > b[prop] ? -1: 1);
        }
        else{
          this.sortedBy = prop;
          this.projects.sort((a,b) => a[prop] < b[prop] ? -1: 1);
        }
      }
      //For conditional styling using a method
      // setClass(status){
      //   if(status == 'complete'){
      //     return 'light-green darken-2 white--text';
      //   }
      //   else if(status == 'overdue'){
      //     return 'red darken-2 white--text';
      //   }
      //   return 'light-blue darken-2 white--text';
      // }
    },
    created(){
      db.collection('projects').onSnapshot(response => {
        const changes = response.docChanges();

        changes.forEach(change => {
          if(change.type === 'added'){
            this.projects.push({
              ...change.doc.data(),
              id: change.doc.id
            })
          }
        })
      })
    }
  }
</script>

<style scoped>
.project.complete{
  border-left: 8px solid #3cd1c2;
}
.project.ongoing{
  border-left: 8px solid orange;
}
.project.overdue{
  border-left: 8px solid tomato;
}
.v-chip.complete{
  background: #3cd1c2;
}
.v-chip.ongoing{
  background: orange;
}
.v-chip.overdue{
  background: tomato;
}
</style>


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
          <v-flex xs2 sm4 md2>
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

  export default {
    components: {
    },
    data(){
      return {
        projects:[
          {title: 'Project1', person: 'Aaron', dueDate: '1/05/19', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis dolore totam nemo aliquid sit dolores cupiditate? Porro, facilis. Quia saepe illo quisquam consequatur aperiam expedita placeat earum nisi aliquam doloribus.'},
          {title: 'Project2', person: 'Austin', dueDate: '3/13/19', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis dolore totam nemo aliquid sit dolores cupiditate? Porro, facilis. Quia saepe illo quisquam consequatur aperiam expedita placeat earum nisi aliquam doloribus.'},
          {title: 'Project3', person: 'Anna', dueDate: '12/20/18', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis dolore totam nemo aliquid sit dolores cupiditate? Porro, facilis. Quia saepe illo quisquam consequatur aperiam expedita placeat earum nisi aliquam doloribus.'},
          {title: 'Project4', person: 'Allison', dueDate: '3/09/19', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis dolore totam nemo aliquid sit dolores cupiditate? Porro, facilis. Quia saepe illo quisquam consequatur aperiam expedita placeat earum nisi aliquam doloribus.'},
          {title: 'Project5', person: 'Thomas', dueDate: '12/08/18', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis dolore totam nemo aliquid sit dolores cupiditate? Porro, facilis. Quia saepe illo quisquam consequatur aperiam expedita placeat earum nisi aliquam doloribus.'}
        ]
      }
    },
    methods:{
      sortBy(prop){
        this.projects.sort((a,b) => a[prop] <b[prop] ? -1: 1);
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


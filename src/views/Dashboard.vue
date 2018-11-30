<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container class="my-5">
      <v-card :class="setClass(project.status)" v-for="(project,index) in projects" :key="index" class="pa-3 my-3">
        <v-layout wrap>
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
            <div class="caption grey--text">Status</div>
            <div>{{ project.status }}</div>
          </v-flex>
          
        </v-layout>
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
          {title: 'Project1', person: 'Aaron', dueDate: '1/05/19', status: 'ongoing'},
          {title: 'Project2', person: 'Austin', dueDate: '3/13/19', status: 'ongoing'},
          {title: 'Project3', person: 'Anna', dueDate: '12/20/18', status: 'complete'},
          {title: 'Project4', person: 'Allison', dueDate: '3/09/19', status: 'complete'},
          {title: 'Project5', person: 'Mom', dueDate: '12/08/18', status: 'ongoing'}
        ]
      }
    },
    methods:{
      setClass(status){
        if(status == 'complete'){
          return 'light-green darken-2 white--text';
        }
        return 'light-blue darken-2 white--text'
      }
    }
  }
</script>

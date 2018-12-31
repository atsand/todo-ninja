<template>
  <div class="projects">
    <h1 class="subheading grey--text">Projects</h1>
    <v-container class="my-5">
        <v-expansion-panel>
          <v-expansion-panel-content v-for="project in myProjects" :key="project.title">
            <div slot="header">
              {{project.title}}
            </div>
            <v-card>
              <v-card-text class="px-4 grey--text">
                <div class="font-weight-bold">Due by: {{project.dueDate}}</div>
                <div>{{project.content}}</div>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
    </v-container>
  </div>
</template>

<script>
import db from '@/firebase.js'

  export default {
    components: {
    },
    data(){
      return{
        projects:[]
      }
    },
    computed:{
      myProjects(){
        return this.projects.filter(project => {
          return project.person === 'The Net Ninja'
        })
      }
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

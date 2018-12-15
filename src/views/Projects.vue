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
                <div class="font-weight-bold">due by {{project.due}}</div>
                <div>{{project.content}}</div>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
    </v-container>
  </div>
</template>

<script>

  export default {
    components: {
    },
    data(){
      return{
        projects:[
          {title: 'Project1', person: 'Aaron', dueDate: '1/05/19', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis dolore totam nemo aliquid sit dolores cupiditate? Porro, facilis. Quia saepe illo quisquam consequatur aperiam expedita placeat earum nisi aliquam doloribus.'},
          {title: 'Project1adsfadf', person: 'Aaron', dueDate: '1/05/19', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis dolore totam nemo aliquid sit dolores cupiditate? Porro, facilis. Quia saepe illo quisquam consequatur aperiam expedita placeat earum nisi aliquam doloribus.'},
          {title: 'Project2', person: 'Bob', dueDate: '3/13/19', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis dolore totam nemo aliquid sit dolores cupiditate? Porro, facilis. Quia saepe illo quisquam consequatur aperiam expedita placeat earum nisi aliquam doloribus.'},
          {title: 'Project3', person: 'Teddy', dueDate: '12/20/18', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis dolore totam nemo aliquid sit dolores cupiditate? Porro, facilis. Quia saepe illo quisquam consequatur aperiam expedita placeat earum nisi aliquam doloribus.'},
          {title: 'Project4', person: 'Shelly', dueDate: '3/09/19', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis dolore totam nemo aliquid sit dolores cupiditate? Porro, facilis. Quia saepe illo quisquam consequatur aperiam expedita placeat earum nisi aliquam doloribus.'},
          {title: 'Project5', person: 'Jimbo', dueDate: '12/08/18', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis dolore totam nemo aliquid sit dolores cupiditate? Porro, facilis. Quia saepe illo quisquam consequatur aperiam expedita placeat earum nisi aliquam doloribus.'}
        ]
      }
    },
    computed:{
      myProjects(){
        return this.projects.filter(project => {
          return project.person === 'Aaron'
        }

        )
        }
    }
  }
</script>

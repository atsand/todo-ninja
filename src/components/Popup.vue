<template>
    <v-dialog max-width="600px">
        <v-btn slot="activator" flat class="success">Add New Project</v-btn>
        <v-card>
            <v-card-title>
                <h2>Add a New Project</h2>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3">
                    <v-text-field label="Title" v-model="title" prepend-icon="folder"></v-text-field>
                    <v-textarea label="Information" v-model="content" prepend-icon="edit"></v-textarea>
                    <v-menu>
                        <v-text-field slot="activator" label="Due Date" prepend-icon="date_range" :value="formattedDate"></v-text-field>
                        <v-date-picker v-model="due"></v-date-picker>
                    </v-menu>
                    <v-spacer></v-spacer>
                    <v-btn flat class="success mx-0 mt-3" @click="submit">Add Project</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import moment from 'moment'
export default {
    data(){
        return{
            title:'',
            content:'',
            due:null
        }
    },
    methods: {
        submit() {
            alert(this.title + this.content)
        }
    },
    computed:{
        formattedDate(){
            return this.due ? moment(this.due).format('Do MMM YYYY'): '';
        }
    }
}
</script>
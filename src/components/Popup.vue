<template>
    <v-dialog max-width="600px">
        <v-btn slot="activator" flat class="success" @click="resetModal">Add New Project</v-btn>
        <v-card>
            <v-card-title>
                <h2>Add a New Project</h2>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3" ref="form">
                    <v-text-field
                        label="Title" v-model="title"
                        prepend-icon="folder"
                        :rules="[rules.required, rules.length]"
                    >
                    </v-text-field>
                    <v-textarea
                        label="Information"
                        v-model="content"
                        prepend-icon="edit"
                        :rules="[rules.required, rules.length]"
                    >
                    </v-textarea>
                    <v-menu>
                        <v-text-field
                            slot="activator"
                            label="Due Date"
                            prepend-icon="date_range"
                            :value="formattedDate"
                            :rules="[rules.required]"
                        >
                        </v-text-field>
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
            due:null,
            rules:{
                required: value => !!value || 'Required',
                length: value => value.length >= 3 || 'Minimum length is 3 Characters'
            }
        }
    },
    methods: {
        resetModal(){
            this.title = '';
            this.content = '';
            this.due = null;
            this.$refs.form.resetValidation();
        },
        submit() {
            if(this.$refs.form.validate()){
                console.log(this.title, this.content, this.formattedDate)
            }
        }
    },
    computed:{
        formattedDate(){
            return this.due ? moment(this.due).format('Do MMM YYYY'): '';
        }
    }
}
</script>
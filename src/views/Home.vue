<template>
  <div class="home">
    <h1>Home Page</h1>
    <v-btn class="pink white--text">Click Me</v-btn>
    <v-btn depressed dark color="pink">Click Me</v-btn>
    <v-btn flat color="pink">Click Me</v-btn>

    <v-btn depressed class="pink white--text">
      <v-icon left>email</v-icon>
      <span>Email Me</span>
    </v-btn>

    <v-btn depressed small class="pink white--text">
      <v-icon small left>email</v-icon>
      <span>Email Me</span>
    </v-btn>

    <v-btn depressed large class="pink white--text">
      <span>Email Me</span>
      <v-icon large right>email</v-icon>
    </v-btn>

    <v-btn fab depressed small dark color="purple">
      <v-icon>favorite</v-icon>
    </v-btn>
  </div>
</template>

<script>

  export default {
    components: {
    }
  }
</script>

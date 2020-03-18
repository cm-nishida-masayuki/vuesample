<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <Forms :form-data="formData" @submit="submit" />
      <Board :boards="boards" />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Board, { BoardItem } from "@/components/Board.vue";
import Forms, { FormData } from "@/components/Forms.vue";

type Data = {
  currentId: number;
  boards: BoardItem[];
  formData: FormData;
};

export default Vue.extend({
  name: "App",

  components: {
    Forms,
    Board
  },

  data: (): Data => ({
    currentId: 2,
    boards: [
      {
        id: "1",
        title: "タイトル",
        body: "本文"
      },
      {
        id: "2",
        title: "タイトル2",
        body: "本文2"
      }
    ],
    formData: {
      title: "",
      body: ""
    }
  }),

  methods: {
    nextId(): string {
      return (this.currentId++).toString();
    },

    submit() {
      const board = {
        id: this.nextId(),
        title: this.formData.title,
        body: this.formData.body
      };

      this.boards.push(board);
    }
  }
});
</script>

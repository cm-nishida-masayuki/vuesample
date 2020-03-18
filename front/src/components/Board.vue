<template>
  <v-container>
    <v-card>
      <v-list-item v-for="item in boards" :key="item.id">
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.body }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

export type BoardItem = {
  id: string;
  title: string;
  body: string;
};

export default Vue.extend({
  name: "Board",
  props: {
    boards: Array as PropType<BoardItem[]>
  }
});
</script>

<style scoped></style>

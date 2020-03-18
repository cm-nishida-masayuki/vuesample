<template>
  <v-form v-model="valid">
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="タイトル"
            v-model="formData.title"
            :rules="titleRules"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="3">
          <v-textarea
            label="本文"
            v-model="formData.body"
            :rules="bodyRules"
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-btn :disabled="!valid" @click="$emit('submit')">登録</v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

export type FormData = {
  title: string;
  body: string;
};

export default Vue.extend({
  name: "Forms",
  props: {
    formData: Object as PropType<FormData>
  },
  data: () => ({
    valid: false,
    titleRules: [(v: string) => !!v || "タイトルは必須です"],
    bodyRules: [(v: string) => !!v || "本文は必須です"]
  })
});
</script>

<style scoped></style>

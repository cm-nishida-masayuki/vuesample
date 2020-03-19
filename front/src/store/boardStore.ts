import Vue from "vue";
import {
  Module,
  Mutation,
  Action,
  VuexModule,
  getModule
} from "vuex-module-decorators";

import store from "@/store";
import { BoardItem } from "@/components/Board.vue";

@Module({ dynamic: true, name: "board", store })
class BoardStore extends VuexModule {
  boards: Array<BoardItem> = [];

  @Mutation
  setBoards(boards: Array<BoardItem>) {
    this.boards = boards;
  }

  @Action
  public async fetchBoards() {
    const res = await Vue.prototype.$http.get("/");
    this.setBoards(res.data);
  }

  @Action
  public async saveBoards(board: any) {
    const res = await Vue.prototype.$http.post("boards", board);
    this.setBoards(res.data);
  }
}

export default getModule(BoardStore);

import _Vue from "vue";
import axios from "axios"

export default {
  install(Vue: typeof _Vue): void {
    Vue.prototype.$http = axios.create({
      baseURL: "http://localhost:18889"
    });
  }
}

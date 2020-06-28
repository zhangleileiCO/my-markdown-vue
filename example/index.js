import Vue from 'vue'
import APP from "./APP";
import MyEditor from "../lib/markdown-vue";

Vue.use(MyEditor)
let vue = new Vue({
    el: "#app",
    render: h => h(APP)
})
console.log(vue)

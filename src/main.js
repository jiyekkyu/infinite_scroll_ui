import { createApp } from "vue";
import axios from 'axios';
import App from "@/App.vue";
import router from "@/router";
import infiScroll from "@/components/infinity-scroll";
import "@/css/scroll.css";

const app = createApp(App).use(router);

app.config.globalProperties.$axios = axios.create({
	baseURL: 'http://127.0.0.1:3000',
});

app.component('infinity-scroll', infiScroll);
app.mount("#app");

import vue3GoogleLogin from 'vue3-google-login'
import { createApp } from "vue";
import App from "./components/App.vue";

import router from './router';

const app = createApp(App)

app.use(router)
app.use(vue3GoogleLogin, {
    clientId: '447316949035-0dh81r3mcdd0hr0pe67du3g7omrak7h8.apps.googleusercontent.com'
})
app.mount("#app")


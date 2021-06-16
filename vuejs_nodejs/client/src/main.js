import { createApp } from 'vue';
import vuetify from '@/plugins/vuetify'; // path to vuetify export
import App from './App.vue';
import router from './router';

createApp(App)
  .use(router, vuetify)
  .mount('#app');

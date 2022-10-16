import { createApp } from 'vue'
import { createPinia } from 'pinia'

import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import AutoComplete from './components/common/Autocomplete.vue';


import App from './App.vue'
import router from './router'

import './assets/main.css'
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);

app.component('InputText', InputText);
app.component('Button', Button);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('AutoComplete', AutoComplete);

app.mount('#app')

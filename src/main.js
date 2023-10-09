import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas, far);
createApp(App)
  .component("FIcon", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");

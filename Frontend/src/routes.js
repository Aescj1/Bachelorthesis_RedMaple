import Table from './components/Table.vue'
import Login from './components/Login.vue'
import Workflow from './components/Workflow.vue'
import Geplant from './components/Geplant.vue'
import NgsFormular from './components/NgsFormular.vue'



export const routes = [
 { path: '/', component: Login},
 { path: '/table', component: Table},
 { path: '/workflow', component: Workflow},
 { path: '/geplant', component: Geplant},
 { path: '/formular', component: NgsFormular}

];
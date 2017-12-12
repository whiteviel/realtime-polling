import Vue from 'vue';
import Router from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vote from '@/components/Vote';
import AddPoll from '@/components/AddPoll';
import CreatePoll from '@/components/CreatePoll';
import ManagePoll from '@/components/ManagePoll';

Vue.use(Router);
Vue.use(ElementUI);

export default new Router({
  routes: [
    {
      path: '/vote/:id',
      name: 'Vote',
      component: Vote,
    }, {
      path: '/add',
      name: 'AddPoll',
      component: AddPoll,
    }, {
      path: '/create',
      name: 'CreatePoll',
      component: CreatePoll,
    }, {
      path: '/polls/:id',
      name: 'ManagePoll',
      component: ManagePoll,
    },
  ],
});

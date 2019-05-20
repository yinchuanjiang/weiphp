/**
 * Created by yinchuanjiang on 2019/5/20.
 */
import VueRouter from 'vue-router';

let routes = [
    {
        path :'/',
        componet : required('./componets/Home')
    }
];

export default new VueRouter({
   routes
});
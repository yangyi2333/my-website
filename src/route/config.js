import index from '@/pages/home/components/content'
import vlog from '@/pages/vlog'
import blog from '@/pages/blog'

const route = [{
    path:'/',
    name:'index',
    icon:'index',
    component:index,
},{
    path:'/vlog',
    name:'vlog',
    icon:'vlog',
    component:vlog,
},{
    path:'/blog',
    name:'blog',
    icon:'blog',
    component:blog,
}];
export default route
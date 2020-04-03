import index from '@/pages/home/components/content'
import vlog from '@/pages/vlog'
import VlogDetail from '@/pages/vlog/vlogDetail'
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
    path:'/vlog/detail',
    name:'vlog详情',
    icon:'vlog',
    component:VlogDetail,
},{
    path:'/blog',
    name:'blog',
    icon:'blog',
    component:blog,
}];
export default route
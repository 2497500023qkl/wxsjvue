<template>
    <div class="maillist1">
                    <div class="page">
                    <maillist1 v-bind:dd="aa" v-bind:page="false"/>
                       <div class="blankline2"></div>
                    </div>

<World v-bind:p='3'/>
<top v-bind:n="text"/>
    </div>
</template>
<script>
        import World from '@/components/World.vue'
                import top from '@/components/top.vue'
                import maillist1 from '@/components/maillist.vue'
    export default {
        name:"maillist",
        components: {
            World,
            top,
            maillist1
        },
        props: {
        },
        methods: {
        },

        data() {
            return {
                text:"发现",
                aa:[
                    {'class1':'朋友圈','class2':false,'class3':'0','img':'./img/head3.jpeg'},
                     {'class1':'扫一扫','class2':true,'class3':'','img':'./img/head3.jpeg'},
                    {'class1':'摇一摇','class2':false,'class3':'0','img':'./img/head3.jpeg'},
                     {'class1':'看一看','class2':true,'class3':'','img':'./img/head3.jpeg'},
                      {'class1':'搜一艘','class2':true,'class3':'','img':'./img/head3.jpeg'},
                        {'class1':'附近的人','class2':true,'class3':'','img':'./img/head3.jpeg'},
                        {'class1':'购物','class2':true,'class3':'','img':'./img/head3.jpeg'},
                        {'class1':'游戏','class2':false,'class3':'','img':'./img/head3.jpeg'},
                        {'class1':'小程序','class2':true,'class3':'','img':'./img/head3.jpeg'},
                    ]
                }
            },
    }
</script>
<style lang="scss" scoped>
body{
    background:#e5e5e5;
}
</style>   
<style lang="scss" >
$bottom-color:#ececec;

.page{
    width: 100%;
float: left;
margin-top: 37.5px;
font-size: 15px;
background:#ededed;
}

.navigation2{
    position: fixed;
    width: 4.5px;
    top:50%;
    margin-top: -200px;
    height: 400px;
    font-size: 9px;
    right: 18px;
    div{
        margin:2px;
        height: 12px;
    }
}
*{
    margin:0 auto;
    padding:0 auto;
}
.blankline2{
    height: 45px;
    width: 100%;
    float:left;
        background:#f7f7f7;
}
</style>
<template>
    <div class="maillist1">
                    <div class="page">
                    <maillist1 v-bind:dd="aa" v-bind:page="true"/>

                    </div>

                <div class="navigation2">
                    <div>A</div>
                    <div>B</div>
                    <div>C</div>
                    <div>D</div>
                    <div>E</div>
                    <div>F</div>
                    <div>G</div>
                    <div>H</div>
                    <div>I</div>
                    <div>J</div>
                    <div>K</div>
                    <div>L</div>
                    <div>M</div>
                    <div>N</div>
                    <div>O</div>
                    <div>P</div>
                    <div>Q</div>
                    <div>R</div>
                    <div>S</div>
                    <div>T</div>
                    <div>U</div>
                    <div>V</div>
                    <div>W</div>
                    <div>X</div>
                    <div>Y</div>
                    <div>Z</div>
                    <div>#</div>
                </div>
<World v-bind:p='2'/>
<top v-bind:n="text"/>
    </div>
</template>
<script>
        import World from '@/components/World.vue'
                import top from '@/components/top.vue'
                 import axios from 'axios'
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
          mounted() {
            this.friend(localStorage.getItem("token"));
        },
        methods: {
friend(t){
                        axios({
                            method:'post',
                            url:'http://127.0.0.1:8084/select/friendMapper',
                            params: {
                                token:t,
                            },
                            responseType: "json",
                    transformResponse:  (data) =>{
                            this.aa.push(data.object);
                    },
                        })
},
        },

        data() {
            return {
                text:"通讯录",
                aa:[
                    {'nickname':'群聊','avatar':'./img/head3.jpeg'},
                     {'nickname':'标签','avatar':'./img/head3.jpeg'},
                    {'nickname':'公众号','avatar':'./img/head3.jpeg'},
                    ]
                }
            },
    }
</script>
<style lang="scss" > 
$bottom-color:#ececec;
.blankline2{
    height: 45px;
    width: 100%;
    float:left;
        background:#f7f7f7;
}
.page{
    width: 100%;
float: left;
margin-top: 37.5px;
font-size: 15px;
background: #fff;
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

</style>
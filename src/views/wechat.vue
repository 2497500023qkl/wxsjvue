<template>
    <div class="ltem1">
                    <div class="page">
<chatcontent v-bind:qq="dataa"/>
                       <div class="blankline"></div>
                    </div>
<World v-bind:p='1'/>
<top v-bind:n="text"/>
    </div>
</template>
<script>
    import $ from 'jquery'
    import chatcontent from '@/components/chatcontent.vue'
        import World from '@/components/World.vue'
                import top from '@/components/top.vue'
                 import axios from 'axios'
    export default {
        name:"wechat",
        components: {
            chatcontent,
            World,
            top
        },
        props: {
        },
  mounted() {
                this.chat(localStorage.getItem("token"));
        },
methods: {
chat(t){
                        axios({
                            method:'post',
                            url:'http://127.0.0.1:8084/select/nchat',
                            params: {
                                token:t,
                            },
                            responseType: "json",
                    transformResponse:  (data) =>{
                            console.log(data)
                            this.dataa=data.object;
                    },
                        })
},
        },
        data() {
            return {
                    dataa:[],
                        text:"微信"
                }
            },
    }
</script>
<style scoped>
body{
    background:#fff;
}
</style>   
<style lang="scss" >

$bottom-color:#ececec;
  .ltem{

    margin: 0 auto;
}
.page{
    width: 100%;
float: left;
margin-top: 37.5px;
}
.blankline{
    height: 45px;
    width: 100%;
    float:left;
        background:#fff;
}
*{
    margin:0 auto;
    padding:0 auto;
}

</style>
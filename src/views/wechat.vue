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
    export default {
        name:"wechat",
        components: {
            chatcontent,
            World,
            top
        },
        props: {
        },
        methods: {
        },

        data() {
            return {
                    dataa:[
                        {"name":'大神','text':'网吧去吗',"date":'4:12','img':'./img/head5.jpg'},
                        {"name":'Y-mz','text':'土星？',"date":'5:12','img':'./img/head3.jpeg'},
                        {"name":'太阳神','text':'我玩压缩',"date":'9:12','img':'./img/head2.jpeg'},
                        ],
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
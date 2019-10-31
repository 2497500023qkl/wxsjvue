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
                text:"通讯录",
                aa:[
                    {'class1':'群聊','class2':false,'class3':'0','img':'./img/head3.jpeg'},
                     {'class1':'标签','class2':false,'class3':'0','img':'./img/head3.jpeg'},
                    {'class1':'公众号','class2':false,'class3':'0','img':'./img/head3.jpeg'},
                     {'class1':'安','class2':true,'class3':'A','img':'./img/head3.jpeg'},
                      {'class1':'杨','class2':true,'class3':'Y','img':'./img/head3.jpeg'},
                        {'class1':'杨1','class2':false,'class3':'Y','img':'./img/head3.jpeg'},
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
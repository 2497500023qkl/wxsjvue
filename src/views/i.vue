<template>
    <div class="maillist1">
    <div class="camera"><img src="../assets/camear.png" alt=""></div>
        <div class="top">
        <div class="logo">
            <img src="../assets/head13.jpeg" alt="">
        </div>
        <div class="content">
            <div class="contenttop"><b>。。。。</b></div>
            <div class="contentbottom">
                <div class="contentbottomleft">微信号：XXXXXXXXXX
                        <img src="../assets/arrow.png" alt="">
                        <img src="../assets/qrcode.png" alt="">
                </div>
            </div>
        </div>
    </div>
                    <div class="page1">
                    <maillist1 v-bind:dd="aa"/>
                       <div class="blankline2"></div>
                    </div>

<World v-bind:p='4'/>
    </div>
</template>
<script>
        import World from '@/components/World.vue'
                import maillist1 from '@/components/maillist.vue'
    export default {
        name:"maillist",
        components: {
            World,
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
                     {'class1':'支付','class2':true,'class3':'','img':'./img/head3.jpeg'},
                    {'class1':'收藏','class2':false,'class3':'0','img':'./img/head3.jpeg'},
                     {'class1':'相册','class2':false,'class3':'','img':'./img/head3.jpeg'},
                      {'class1':'卡包','class2':false,'class3':'','img':'./img/head3.jpeg'},
                        {'class1':'表情','class2':false,'class3':'','img':'./img/head3.jpeg'},
                        {'class1':'设置','class2':true,'class3':'','img':'./img/head3.jpeg'},
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
.camera{
    position: absolute;
    top: 10px;
    right: 0;
    img{
        width: 20px;
        margin-right: 20px;
    }
}
.page1{

}
.grouping{
     font-size: 15px;
     padding-bottom: 2px;
    padding-top: 2px;
     span{
         margin-left: 2px;
     }
}
*{
    margin:0 auto;
    padding:0 auto;
}
.top{

    height: 100px;
    width: 100%;
    display: flex;
    background-color: #fff;
    .logo{
        float: left;
        width: 75px;
        img{
            width: 60px;
            height: 60px;
            margin:25px 7.5px 15px 7.5px;
        }
    }
    .content{
        float: left;
        flex-grow:1;
        .contenttop{
            margin-top: 27px;
            font-size: 18px;
            width: 100%;
        }
        .contentbottom{
            width: 100%;
            .contentbottomleft{
                padding-top: 13.5px;
                width: 100%;
                float: left;
                font-size: 13.5px;
                img{
                    float: right;
                    width: 15px;
                    height: 15px;
                    margin-right:7.5px;
            }
            }
        }
    }
}
.blankline2{
    height: 45px;
    width: 100%;
    float:left;
        background:#f7f7f7;
}
</style>
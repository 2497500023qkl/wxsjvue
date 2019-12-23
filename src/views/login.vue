<template>
    <div class="maillist1">
            <input type="text" v-model:value="username">
             <input type="text" v-model:value="password">
             <div @click="on">确定</div>
    </div>
</template>
<script>
         import axios from 'axios'
    export default {
        name:"maillist",
        components: {

        },
        props: {
        },
    mounted() {

},
        methods: {
            on(){
                this.$router.push({path:'/i',query:{username:this.username,password:this.password}})
            }
        },
        data() {
            return {
                username:'',
                password:'',
            }
            },
    }
</script>
<style lang="scss" >
</style>
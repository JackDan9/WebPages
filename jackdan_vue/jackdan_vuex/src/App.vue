<template>
    <div class="container">
        <!-- <div class="left"></div>
        <div class="middle">{{text}}</div>
        <div class="right"></div> -->

        <!-- v-for会比v-if优先执行 -->

        <ul v-for="(item, index) in dataList" v-bind:key="index" v-show="flag">
            <li>{{ item }}</li>
        </ul>
        
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            dataList: ['jackdan', 'jack', 'dan'],
            flag: false,
            text: 'jackdan'
        }
    },
    mounted() {
        // debugger;
    }
}
</script>

<style scoped>
/* .container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}

.left {
    width: 200px;
    height: 100%;
}

.middle {
    flex: 1;
} */

/* .right {
    width: 200px;
    height: 100%;
} */
</style>

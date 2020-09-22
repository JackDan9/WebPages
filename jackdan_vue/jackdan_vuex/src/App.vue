<template>
    <div class="container">
        <!-- <div class="left"></div>
        <div class="middle">{{text}}</div>
        <div class="right"></div> -->

        <!-- v-for会比v-if优先执行 -->

        <!-- <ul v-for="(item, index) in dataList" v-bind:key="index" v-show="flag">
            <li>{{ item }}</li>
        </ul> -->
        <span>{{count}}</span>
        <br />
        <input type="number" v-model="count" @input="setCount(count)" />

        <v-father></v-father>
    </div>
    
</template>

<script>
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';
import { mapActions } from 'vuex';
import Father from './components/Father/Father.vue';
export default {
    data() {
        return {
            dataList: ['jackdan', 'jack', 'dan'],
            flag: false,
            text: 'jackdan',
        }
    },
    methods: {
        // setCount() {
        //     this.setCount(1);
        // },
        // ...mapMutations(
        //     {
        //         setCount: 'SET_COUNT',
        //     }
        // ),
        setCount: function(count) {
            this.setCount({
                count: count
            })
        },
        ...mapActions([
            'setCount'
        ])
    },
    mounted() {
        // debugger;
    },
    computed: {
        ...mapGetters([
            'count'
        ])
    },
    components: {
        'v-father': Father,
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

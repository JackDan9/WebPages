<template>
    <div>
        <nav class="nav">

        </nav>
        <div class="hotNews">
            <div class="content" v-if="home.news">
                <div class="city">{{home.news.type}}</div>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapModules, mapRules } from 'vuet'

    export default {
        mixins: [
            mapModules({ home: 'view-home' }),
            mapRules({ route: 'view-home' })
        ],
        computed: {
            data () {
                return this.home.data
            }
        },
    }
</script>
<style>
.hotNews{ overflow:hidden; background:#ffffff;}
.hotNews .content{ padding:0.1rem; overflow:hidden;}
.hotNews .content .city{ float:left; width:0.35rem; height:0.35rem;border-radius:0.35rem; overflow:hidden; line-height:0.34rem;text-align:center;background:#fa500f; color:#ffffff; font-size:0.12rem; }
</style>
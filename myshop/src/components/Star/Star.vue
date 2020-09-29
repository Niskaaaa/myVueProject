<template>
<div>
    <div class="star" :class="'star-'+size">
        <span class="star-item" v-for="(sc, index) in starClasses" :class="sc" :key="index"></span>
    </div>
</div>
</template>

<script>
const CLASS_ON = 'on'
const CLASS_HALF = 'half'
const CLASS_OFF = 'off'
export default {
    props: {
        score: Number,
        size: Number,

    },
    data() {
        return {}
    },
    created() {},
    computed: {
        starClasses() {
            const {
                score
            } = this
            const scs = []
            const scoreInteger = Math.floor(score)
            for (let i = 0; i < scoreInteger; i++)
                scs.push(CLASS_ON)

            if (score * 10 - scoreInteger * 10 >= 5)
                scs.push(CLASS_HALF)

            while (scs.length < 5) {
                scs.push(CLASS_OFF)
            }

            return scs

        }
    },
    methods: {},
}
</script>

<style lang="stylus" scoped>
@import '../../assets/mixins.styl';
@import './Star.styl';
</style>

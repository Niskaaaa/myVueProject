!<template>
<div>
    <div class="star star-24">
        <span class="star-item on"></span>
        <span class="star-item on"></span>
        <span class="star-item on"></span>
        <span class="star-item half"></span>
        <span class="star-item off"></span>
    </div>
</div>
</template>

<script>
export default {
    props: {
        score: Number,
        size: Number,

    },
    data() {
        return {}
    },
    created() {},
    computed: {},
    methods: {},
}
</script>

<style lang="stylus" scoped>
@import '../../assets/mixins.styl';
@import './Star.styl';
</style>

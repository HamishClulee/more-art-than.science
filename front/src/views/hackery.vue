<template>
    <section class="hackery-container">
        <animateword></animateword>
    </section>
</template>

<script>
import animateword from '../components/animateword'
export default {
    name: 'heckery',
    components: {
        animateword,
    }
}
</script>

<style lang="sass" scoped>
.hackery-container
    display: flex
    align-items: center
    justify-content: center
    width: 95%
    min-width: 350px
    max-width: 1400px
    min-height: 98vh
</style>
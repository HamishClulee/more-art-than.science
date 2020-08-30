<template>
    <div class="foot-con">
        <div class="header-icons-home">
            <a
                href="https://github.com/HamishClulee"
                target="_blank"
                class="icon-container-item">
                <img
                    src="https://more-art-than.science/images/github.svg"
                    height="30"
                />
            </a>
            <a
                href="https://www.linkedin.com/in/hamish-clulee/"
                target="_blank"
                class="icon-container-item">
                <img
                    src="https://more-art-than.science/images/linkedin.svg"
                    height="30"
                />
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'navfoot',
        methods: {
            checkvis (name) {
                return this.$route.name !== name
            }
        }
    }
</script>
<style lang="sass" scoped>
.foot-con
    width: 100%
    height: 15vh
    display: flex
    flex-direction: row
    cursor: pointer
    align-items: center
    justify-content: center
    transition: all 0.6s ease
    opacity: 0.95
.header-icons
  margin: 10px
.header-icons-home
    margin-top: 30px
    text-align: center
    text-align: left
    margin-bottom: 10px
    img
        height: 50px
        @media (min-width: 0px) and (max-width: 620px)
            height: 30px
    @media (min-width: 0px) and (max-width: 520px)
        margin-top: 15px
        margin-bottom: 25px
.icon-container-item
  margin: 20px
</style>

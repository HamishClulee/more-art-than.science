<template>
    <div class="home-con">
        <h1>Hamish Clulee</h1>
        <h2>Full Stack Web Developer</h2>
        <h3>Specialising in VueJs</h3>
        <p>Born in New Zealand, currently living in Asia. It's more than likely you will find me working on the frontend. I'm passionate about user interfaces and frontend ops.</p>
        <div class="header-icons-home">
            <a href="https://github.com/HamishClulee" target="_blank" class="icon-container-item">
                <img src="https://more-art-than.science/images/github.svg" height="30"/>
            </a>
            <a href="https://www.linkedin.com/in/hamish-clulee-163b1950/" target="_blank" class="icon-container-item">
                <img src="https://more-art-than.science/images/linkedin.svg" height="30" />
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'home',
    data () {
        return {
        }
    },
    mounted () {

    },
    methods: {
    },
    computed: {
    }
}
</script>

<style lang="sass" scoped>
.home-con
    padding: 10px
    height: 90vh
    width: 90%
    margin-left: auto
    margin-right: auto
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    text-align: center
    overflow: auto
h1, h2, h3
    margin-top: 5px
h1
    font-size: 5em
    margin-bottom: 20px
h2
    font-size: 3em
    color: $secondary
    margin-bottom: 5px
h3
    font-size: 2em
    color: lighten($font, 20)
    margin-bottom: 10px
p
    width: 60%
    margin-left: auto
    margin-right: auto
.header-icons
  margin: 30px
.header-icons-home
    margin-top: 30px
    text-align: center
    text-align: left
    margin-bottom: 10px
    img
        height: 50px
    @media (min-width: 0px) and (max-width: 520px)
        margin-top: 15px
        margin-bottom: 25px
.icon-container-item
  margin: 20px
</style>

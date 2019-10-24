<template>
    <div class="home-con">
        <h1 class="top">
            <span class="word">More</span>
            <span class="word">Art</span>
            <span class="word">Than</span>
            <span class="word">Science</span>
        </h1>
        <div class="bottom">
            <div class="intro">
                <h4>Welcome to M~A~T~S</h4>
                <h5>Home of Hamish Clulee</h5>
                <p>I'm a Web Developer from New Zealand, currently living in Asia. It's more than likely you will find me working on the front end. I'm especially passionate about building intelligent and performant user interfaces.</p>
                <div class="header-icons-home">
                    <a href="https://github.com/HamishClulee" target="_blank" class="icon-container-item">
                        <img src="https://more-art-than.science/images/github.svg" height="30"/>
                    </a>
                    <a href="https://www.linkedin.com/in/hamish-clulee-163b1950/" target="_blank" class="icon-container-item">
                        <img src="https://more-art-than.science/images/linkedin.svg" height="30" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import anime from 'animejs'
    export default {
        name: 'home',
        data () {
            return {
            }
        },
        mounted () {
            anime({
                targets: '.top .word',
                scale: [14, 1],
                opacity: [0, 1],
                easing: "easeOutCirc",
                duration: 1000,
                delay: function (el, i) {
                    return 1000 * i;
                }
            })
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
    display: flex
    flex-direction: column
    align-items: flex-start
    justify-content: flex-start
    p
        font-size: 1.3em
    h1
        margin-bottom: 15px
        margin-top: 10px
        letter-spacing: 4px
        font-size: 5em
        @media (min-width: 520px) and (max-width: 1080px)
            font-size: 3em
        @media (min-width: 0px) and (max-width: 520px)
            font-size: 2em
.header-icons
  margin: 30px
.header-icons-home
    margin-top: 30px
    text-align: center
    text-align: left
    margin-left: -20px
    margin-bottom: 10px
    @media (min-width: 0px) and (max-width: 520px)
        margin-top: 15px
        margin-bottom: 25px 
.text-container
    position: absolute
    top: 55vh
    right: -140px
    transform: translate(-50%, -50%)
    text-align: right
    color: $font-light
    width: 320px
.icon-container-item
  margin: 20px
.top
  height: 65vh
  width: 100vw
  display: flex
  flex-direction: column
  overflow-x: hidden !important
.bottom
  height: 13vh
  width: 100%
  display: flex
  flex-direction: column
  justify-content: flex-end
  align-items: flex-end
.intro
    width: 40vw
    @media (min-width: 520px) and (max-width: 1080px)
        width: 60vw
    @media (min-width: 0px) and (max-width: 520px)
        width: 94vw
    h5, p
        color: lighten($font, 30)
        @media (min-width: 520px) and (max-width: 1080px)
            font-size: 1.2em
        @media (min-width: 0px) and (max-width: 520px)
            font-size: 1em
    h5
        @media (min-width: 520px) and (max-width: 1080px)
            font-size: 1.6em
        @media (min-width: 0px) and (max-width: 520px)
            font-size: 1.4em
</style>

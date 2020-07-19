<template>
    <div class="home-con">
        <img src="/images/0.jpeg" class="avatar"/>
        <h1>Hamish Clulee</h1>
        <h2>Technical Lead</h2>
        <h3>
            Specialising in VueJs, JavaScript and all things 
            Frontend
        </h3>
        <p>
            I'm passionate about complex UI/UX builds
            and optimising Frontend Ops. 
            I'm well read and versed in Software Engineering as a discipline.
            I stay focused on the basics and doing the simple stuff well.
            Complexity is unavoidable, the goal is to avoid adding to it when 
            solving the problem.
        </p>
        <p>
            I'm a big believer that attitude is the main ingredient in creating good 
            devs and great teams, that attitude can be fostered and that results 
            will follow naturally.
        </p>
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
.avatar
    border: 2px solid $font
    border-radius: 50%
    width: 175px
.home-con
    padding: 10px
    width: 90%
    margin-left: auto
    margin-right: auto
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    text-align: center
    overflow-y: hidden
    margin-top: 100px
h1, h2, h3
    margin-top: 5px
h1
    font-size: 5em
    margin-bottom: 20px
    @media (min-width: 0px) and (max-width: 620px)
        font-size: 3em
h2
    font-size: 3em
    color: $secondary
    margin-bottom: 5px
    @media (min-width: 0px) and (max-width: 620px)
        font-size: 2em
h3
    font-size: 2em
    color: lighten($font, 20)
    margin-bottom: 10px
    @media (min-width: 0px) and (max-width: 620px)
        font-size: 1.5em
p
    width: 60%
    margin-left: auto
    margin-right: auto
    @media (min-width: 0px) and (max-width: 620px)
        width: 80%
.header-icons
  margin: 30px
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

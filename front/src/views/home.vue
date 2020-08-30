<template>
    <div class="home-con">
        <div class="avatar-container">
            <animateavatar></animateavatar>
            <div class="avatar-text-container">
                <h1>Hamish Clulee</h1>
                <h2>Technical Lead</h2>
            </div>
        </div>
        <h3>
            Specialising in VueJs, JavaScript and all things 
            Frontend
        </h3>
        <p>
            Passionate about complex UI/UX builds
            and optimising Frontend Ops. 
            I'm well read and versed in Software Engineering as a discipline.
            I've learned that the simple things are the most important, focusing on 
            the basics and building solid foundations is the key.
            Complexity is unavoidable, the goal is to solve the problem without 
            making it worse. 
        </p>
        <p>
            I'm a big believer that attitude is the main ingredient in creating good 
            devs and great teams, that attitude can be fostered and that teaching is the 
            most effective way to continue learning.
        </p>
        <div class="header-icons-home">
            <a href="https://github.com/HamishClulee" target="_blank" class="icon-container-item">
                <img src="https://more-art-than.science/images/github.svg" height="30"/>
            </a>
            <a href="https://www.linkedin.com/in/hamish-clulee/" target="_blank" class="icon-container-item">
                <img src="https://more-art-than.science/images/linkedin.svg" height="30" />
            </a>
        </div>
    </div>
</template>

<script>
import animateavatar from '../components/animateavatar'
export default {
    name: 'home',
    components: {
        animateavatar,
    },
}
</script>

<style lang="sass" scoped>
.home-con
    padding: 10px
    height: 97vh
    width: 90%
    margin-left: auto
    margin-right: auto
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    text-align: center
    overflow-y: hidden
.avatar-container
    display: flex
    flex-direction: row
    align-items: center
    @media (min-width: 0px) and (max-width: 840px)
        flex-direction: column
.avatar-text-container
    display: flex
    flex-direction: column
    justify-content: center
    align-self: center
h2
    margin-top: 5px
h3
    margin-top: 25px
    font-style: italic
h1, h2
    font-family: $alt-heading-font
h1
    font-size: 3.7em
    margin-bottom: 10px
    margin-top: 20px
    letter-spacing: 0.2px
    color: $tertiary-dark
    width: 30vw
    @media (min-width: 0px) and (max-width: 620px)
        font-size: 3em
    @media (min-width: 0px) and (max-width: 840px)
        width: 100%
h2
    font-size: 2.4em
    color: $secondary
    margin-bottom: 8px
    @media (min-width: 0px) and (max-width: 620px)
        font-size: 2em
h3
    font-size: 1.8em
    color: lighten($font, 20)
    margin-bottom: 10px
    @media (min-width: 0px) and (max-width: 620px)
        font-size: 1.5em
p
    width: 60%
    margin-left: auto
    margin-right: auto
    margin-bottom: 10px
    @media (min-width: 0px) and (max-width: 620px)
        width: 80%
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

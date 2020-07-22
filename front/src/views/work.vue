<template>
    <div class="work-con">

        <h1>Current Projects</h1>

        <section class="cards-container">

            <featurecard
                title="Hue" sub="OSS"
                :image="hue_img" :text="hue_txt"
                aref="https://github.com/HamishClulee"
            ></featurecard>

            <featurecard
                title="Welcome QR" sub="Web App" 
                :image="qr_img" :text="qr_txt"
                aref="https://welcomeqr.codes"
            ></featurecard>

            <featurecard
                title="Create MEVN App" sub="OSS"
                :image="mevn_img" :text="mevn_txt"
                aref="https://github.com/HamishClulee/create-mevn-app"
            ></featurecard>

        </section>

        <h1>Older Projects</h1>

        <section class="cards-container">

            <featurecard
                title="Dashboard Builder" sub="Web App"
                :image="dbbimg" :text="dbb_txt"
            ></featurecard>

            <featurecard
                title="Netograph" sub="Web App" 
                :image="netimg" :text="neto_txt"
                aref="https://netograph.io"
            ></featurecard>

            <featurecard
                title="Baby Aid NZ" sub="Web App"
                :image="babimg" :text="babyaid_txt"
                :aref="null"
            ></featurecard>

            <featurecard
                title="@RONIN" sub="Website"
                :image="roninimg" :text="ronin_txt"
                aref="https://atronin.space"
            ></featurecard>

        </section>

        <section class="cards-container">

            <p><em>
                The sections above are just a sample of things that I've built. 
                Checkout my 
                <a href="https://github.com/hamishclulee" target="_blank">
                    GitHub
                </a> 
                to see more.
            </em></p>

        </section>

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
import featurecard from '../components/featurecard'
export default {
    name: 'work',
    components: { featurecard },
    data () {
        return {
            hue_txt: [
                `Hue is Vue component system currently not fully complied into one cohesive repository. 
                Some examples are available on my GitHub, many more are currently being used and 
                improved on in other projects.`,
                `In time, all the recent work I've done on Welcome QR will be merged with Create MEVN, 
                and will become an application framework; Hue.`,
            ],
            qr_txt: [
                `Originally this was repo was intended as a product to be used in the tourism 
                industry. With the advent of Covid, and it's subsequent devastation of said industry, 
                it has become a place to validate new dev ideas for usage in other current projects; 
                Create-MEVN and Hue.`,
                `Very much still in development, but the GitHub repo is a good example of recent 
                code I've written.`,
            ],
            mevn_txt: [
                `Over the last two years, when starting new projects, or trying out new ideas, 
                I've started to compile all my best practices into a template repository to 
                speed things up when starting up.`,
                `The plan is to merge all of the work done on Welcome QR into this repo, and 
                then to use it as a base for building out Hue.`,
            ],
            ronin_txt: [
                `Static website built in October 2019 with a booking app currently in developement. 
                The clients are a growing accomodation business in Bali. Their primary focus is providing 
                Co-Live-Co-Work spaces for Digital Nomads.`,
                `The booking application that will allow customers and guests to check availability of rooms, book rooms 
                and co-working desks, make payments and include customisable packages which will increase 
                or decrease costs. `],
            neto_txt: [
                `I built the frontend of the web app currently  
                hosted at <a href="https://netograph.io" target="_blank">netograph.io</a>.`,
                `The amount of data in Netograph's DB is staggering, primarily indexed by domain and IP address, 
                each item has a huge amount of detail associated with it, and each index having a vast length, 
                think millions of items, in some cases that number runs well into the billions.`,
                `The primary frontend challenges revolved around around creating user interfaces that 
                displayed that level of detail without overwhelming the user.`
                ],
            babyaid_txt: [
                `Static website and booking app written for a now defunct medical start up in New Zealand.`,
                `I built a calendar app using a forked Vue calendar found on GitHub. A checkout and payment system
                built using a hashed URL stored in the DB so that bookings would persist over time and could be 
                returned to at any time.`
                ],
            dbb_txt: [
                `Built while working at Fusion Sport Australia.`,
                `Shortly after my start date I was transfered 
                into the frontend team tasked with improving processes, finding ways to free up developer time
                and to help clear the backlog of custom dashboards. As it stood, custom
                dashboards required a lot of back and forth to build a solid specification, and then a 
                reasonably long lead time to complete development.`,
            ],
            babimg: "https://more-art-than.science/images/bab1-lowqual.jpg",
            hue_img: "/images/hueletters.png",
            qr_img: "/images/welcomeqr.png",
            mevn_img: "/images/createmevn.png",
            netimg: "https://more-art-than.science/images/neto1-lowqual.jpg",
            dbbimg: "https://more-art-than.science/images/dbb1-lowqual.jpg",
            roninimg: "https://more-art-than.science/images/ronin1-lowqual.jpg",
            act_array: null,
            showmodal: false,
        }
    },
}
</script>

<style lang="sass" scoped>
h1
    width: 98%
    margin-left: auto
    margin-right: auto
em
    font-style: italic
.work-con
    width: 98%
    margin-left: auto
    margin-right: auto
    margin-bottom: 50px
    margin-top: 90px
.cards-container
    display: flex
    flex-direction: row
    flex-wrap: wrap
    width: 100%
    margin: 0 auto
    justify-content: center
    margin-bottom: 2em
.header-icons
    margin: 30px
.header-icons-home
    display: flex
    width: 100%
    align-items: center
    justify-content: center
    margin-top: 30px
    text-align: center
    text-align: left
    img
        height: 50px
        @media (min-width: 0px) and (max-width: 620px)
            height: 30px
    @media (min-width: 0px) and (max-width: 520px)
        margin-top: 15px
.icon-container-item
    margin: 20px
</style>

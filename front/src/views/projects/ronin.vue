<template>
    <div class="temp-con">
        <div class="tech-con">
            <h3>Stack</h3>
            <div class="tech-itm">
                <div class="itm-name">Frontend:</div>
                <div class="itm-val">{{ tech.front }}</div>
            </div>
            <div class="tech-itm">
                <div class="itm-name">Tooling</div>
                <div class="itm-val">{{ tech.tooling }}</div>
            </div>
            <div class="tech-itm">
                <div class="itm-name">DevOps:</div>
                <div class="itm-val">{{ tech.devops }}</div>
            </div>
            <div class="tech-itm">
                <div class="itm-name">Deploys:</div>
                <div class="itm-val">{{ tech.deploys }}</div>
            </div>
            <div class="tech-itm">
                <div class="itm-name">Backend:</div>
                <div class="itm-val">{{ tech.backend }}</div>
            </div>
            <div class="tech-itm">
                <div class="itm-name">Database:</div>
                <div class="itm-val">{{ tech.db }}</div>
            </div>
        </div>
        <p>
            Static website built in October 2019 with a booking app currently in developement. 
            The clients are a growing accomodation business in Bali. Their primary focus is providing 
            Co-Live-Co-Work spaces for Digital Nomads. The boking application that is currently in 
            developement will allow customers and guests to check availability of rooms, book rooms 
            and co-working desks, make payments and include customisable packages which will increase 
            or decrease costs. Estimated time of completion is early in 2020. This is a scratch build 
            using my boilerplate and a custom deploy pipe.
        </p>
    </div>
</template>
<script>
export default {
    name: 'ronin',
    data () {
        return {
            tech: {
                front: "Vue, Sass",
                tooling: "VueCli",
                devops: "Ubuntu 16.04 on DigitalOcean",
                deploys: "Shell script",
                backend: "NodeJS",
                db: "Mongo",
            },
        }
    }
}
</script>
<style lang="sass" scoped>

</style>
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
            Static website and booking app written for a now defunct medical start up in 
            New Zealand. I built a calendar app using a forked Vue calendar found on GitHub. 
            A checkout and payment system built using a hashed URL stored in the DB so that 
            bookings would persist over time and could be returned to at any time, and a round 
            trip to the server every time a change was made by the user to ensure correctness 
            of information displayed on the page. Payments were made using Stripe. The app 
            included an admin area, secured by a session token, for staff to manage courses 
            and allocate trainers at various times and dates. SEO was taken care of by a 
            small meta tagging library which I wrote myself. This was an enjoyable project, 
            and I was happy with the result.
        </p>
    </div>
</template>
<script>
export default {
    name: 'babyaid',
    data () {
        return {
            tech: {
                front: "Vue, Bulma Scss",
                tooling: "Webpack",
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
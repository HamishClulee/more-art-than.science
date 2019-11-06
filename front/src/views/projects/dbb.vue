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
            Built while working at Fusion Sport Australia. I was the project lead. This app allows 
            customers to build their own dashboards to display data visually. When I moved from 
            the backend to the frontend team, all dashboards were being built by hand, it was 
            time consuming and expensive for customers. By the time I left, the Dashboard 
            Builder allowed customers to build very detailed dashboards without tying up our 
            frontend developers. A very cool piece of Javascript!
        </p>
    </div>
</template>
<script>
export default {
    name: 'dbb',
    data () {
        return {
            tech: {
                front: "Vue, Bulma Scss, D3.js, C3.js",
                tooling: "Custom Webpack Config",
                devops: "CentOS, Amazon CDN",
                deploys: "Shell scripts",
                backend: "Java",
                db: "PSQL",
            },
        }
    }
}
</script>
<style lang="sass" scoped>
</style>
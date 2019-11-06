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
            I was almost solely responsible for building the frontend of the current 
            version hosted at <a href="https://netograph.io" target="_blank">netograph.io</a>. 
            Netograph has an incredible amount of data, presenting it in an easily readable 
            and user friendly manner was an enjoyable challenge. More details can be 
            found on my <router-link :to="{ path: '/cv'}">C.V</router-link> 
        </p>
    </div>
</template>
<script>
export default {
    name: 'neto',
    data () {
        return {
            tech: {
                front: "Vue, Vue-Class-Component, Typescript, Sass, D3.js",
                tooling: "Custom Webpack Config",
                devops: "Google App Engine, Docker, Kubernetes",
                deploys: "Modd",
                backend: "GoLang",
                db: "Google Big Table",
            },
        }
    }
}
</script>
<style lang="sass" scoped>

</style>
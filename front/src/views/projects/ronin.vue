<template>
    <div class="temp-con">

        <h1>Responsive Testing</h1>

        <div class="response-con">
            <vueimage
                placeholder="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgaWQ9InN2ZzgiCiAgIHZlcnNpb249IjEuMSIKICAgdmlld0JveD0iMCAwIDM0Ljk2Mjc5OSAzNS42NjIwNTIiCiAgIGhlaWdodD0iMzUuNjYyMDUybW0iCiAgIHdpZHRoPSIzNC45NjI3OTltbSI+CiAgPGRlZnMKICAgICBpZD0iZGVmczIiIC8+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNSI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODAuODg2OTA5LC0xMTIuNTQ3NjIpIgogICAgIGlkPSJsYXllcjEiPgogICAgPHJlY3QKICAgICAgIHk9IjExMi41NDc2MiIKICAgICAgIHg9IjgwLjg4NjkwOSIKICAgICAgIGhlaWdodD0iMzUuNjYyMDUyIgogICAgICAgd2lkdGg9IjM0Ljk2Mjc5OSIKICAgICAgIGlkPSJyZWN0ODE1IgogICAgICAgc3R5bGU9Im9wYWNpdHk6MC43NjU5OTk5NTtmaWxsOiNkNmU3ZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuNjE1MTI0OTQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiAvPgogIDwvZz4KPC9zdmc+Cg=="
                imgsrc="https://more-art-than.science/images/test-small.png"
                :srcmap="{
                    'small': 'https://more-art-than.science/images/test-small.png',
                    'medium': 'https://more-art-than.science/images/test-medium.png',
                    'large': 'https://more-art-than.science/images/test-large.png',
                }"
                :breaksizes="{ 'small': 480, 'medium': 980, 'large': 1480 }"
                alttag="Placeholder image with text inside">
            </vueimage>
        </div>

        <h1>Grid Testing</h1>
        <div class="image-con">
            <vueimage
                placeholder="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgaWQ9InN2ZzgiCiAgIHZlcnNpb249IjEuMSIKICAgdmlld0JveD0iMCAwIDM0Ljk2Mjc5OSAzNS42NjIwNTIiCiAgIGhlaWdodD0iMzUuNjYyMDUybW0iCiAgIHdpZHRoPSIzNC45NjI3OTltbSI+CiAgPGRlZnMKICAgICBpZD0iZGVmczIiIC8+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNSI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODAuODg2OTA5LC0xMTIuNTQ3NjIpIgogICAgIGlkPSJsYXllcjEiPgogICAgPHJlY3QKICAgICAgIHk9IjExMi41NDc2MiIKICAgICAgIHg9IjgwLjg4NjkwOSIKICAgICAgIGhlaWdodD0iMzUuNjYyMDUyIgogICAgICAgd2lkdGg9IjM0Ljk2Mjc5OSIKICAgICAgIGlkPSJyZWN0ODE1IgogICAgICAgc3R5bGU9Im9wYWNpdHk6MC43NjU5OTk5NTtmaWxsOiNkNmU3ZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuNjE1MTI0OTQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiAvPgogIDwvZz4KPC9zdmc+Cg=="
                class="vueimg" v-for="(v, i) in test"
                :key="i"
                :imgsrc="`https://more-art-than.science/images/${v}`"
                :alttag="`Just another faker lat tag displaying things ${i * Math.random()} times`">
            </vueimage>
        </div>
    </div>
</template>
<script>
import vueimage from '../../components/vueimage.vue'
import { images } from './assets/test.js'
export default {
    name: 'ronin',
    components: {
        vueimage
    },
    data () {
        return {
            test: images,
            testsingle: {
                srcmap:
                {
                    'small': 'https://more-art-than.science/images/test-small.png',
                    'medium': 'https://more-art-than.science/images/test-medium.png',
                    'large': 'https://more-art-than.science/images/test-large.png',
                },
                bgcolor: '#f3f8ff',
            },
            testers: [
                {
                    oneshot: 'https://more-art-than.science/images/dbb1.png',
                    srcmap:
                    {
                        '480': '',
                        '1280': '',
                        '1680': '',
                    },
                    bgcolor: '#f3f8ff',

                },
                {
                    oneshot: 'https://more-art-than.science/images/dbb1.png',
                    srcmap:
                    {
                        '480': '',
                        '1280': '',
                        '1680': '',
                    },
                    bgcolor: '#deecff',
                },
                {
                    oneshot: 'https://more-art-than.science/images/dbb1.png',
                    srcmap:
                    {
                        '480': '',
                        '1280': '',
                        '1680': '',
                    },
                    bgcolor: '#c6cfff',

                },
                {
                    oneshot: 'https://more-art-than.science/images/dbb1.png',
                    srcmap:
                    {
                        '480': '',
                        '1280': '',
                        '1680': '',
                    },
                    bgcolor: '#e8d3ff',

                },
            ]
        }
    },
}
</script>
<style lang="sass" scoped>
.temp-con
    display: flex
    flex-direction: column
    margin-bottom: 200px
    margin-top: 100px
    width: 100%
    align-items: center
    justify-content: center
.image-con
    width: 80%
    margin-left: auto
    margin-right: auto
    display: flex
    flex-direction: row
    flex-wrap: wrap 
    .vueimg
        width: 49%
        margin: 2px
        min-height: 100%

.response-con
    width: 50%
    margin-left: auto
    margin-right: auto
h1
    margin-top: 1em
    margin-bottom: 1em
</style>
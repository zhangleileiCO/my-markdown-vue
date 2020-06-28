<template>
<div class="container">
    <textarea class="left-el" :value="input" @input="update"/>
    <div class="right-el" v-html="compiledMarkdown"></div>
</div>
</template>

<script>
    import marked from 'marked'
    export default {
        name: "Editor",
        data: function(){
            return {
                input: "# h1"
            }
        },
        computed: {
            compiledMarkdown: function() {
                return marked(this.input, { sanitize: true });
            }
        },
        methods: {
            update: function (e){
                setTimeout(() => {
                    this.input = e.target.value;
                }, 300)
            }
        }
    }
</script>

<style scoped>
    .container {
        margin: 0;
        height: 100%;
        font-family: "Helvetica Neue", Arial, sans-serif;
        color: #333;
    }
    .left-el, .right-el {
        display: inline-block;
        width: 49%;
        height: 100%;
        vertical-align: top;
        box-sizing: border-box;
        padding: 0 20px;
    }
    textarea {
        border: none;
        border-right: 1px solid #ccc;
        resize: none;
        outline: none;
        background-color: #f6f6f6;
        font-size: 14px;
        font-family: "Monaco", courier, monospace;
        padding: 20px;
    }
</style>

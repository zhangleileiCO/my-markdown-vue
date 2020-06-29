<template>
<div class="container">
    <textarea class="left-el" :value="input" @input="update"/>
    <div class="right-el" v-html="compiledMarkdown"></div>
</div>
</template>

<script>
    import marked from 'marked';
    import hljs from 'highlight.js';
    import 'highlight.js/styles/github.css';
    export default {
        name: "Editor",
        data: function(){
            return {
                input: "# h1"
            }
        },
        computed: {
            compiledMarkdown: function() {
                let markdown = marked(this.input, { sanitize: true })
                setTimeout(()=>{
                    this.highlightCode()
                }, 0)
                return markdown
            }
        },
        methods: {
            update: function (e){
                setTimeout(() => {
                    this.input = e.target.value;
                }, 300)
            },
            highlightCode: function () {
                let pres = document.querySelectorAll("pre>code");
                pres.forEach((block) => {
                    hljs.highlightBlock(block);
                });
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
    /*
    不生效
    html是动态赋值的，没有attribute
    */
    .right-el pre {
        background-color: #2B2B2B;
        padding: 10px;
        color: white;
    }
</style>


<!--# (GitHub-Flavored) Markdown Editor-->

<!--This Editor contributed by jbt on GitHub: <https://github.com/jbt/markdown-editor>-->

<!--Basic useful feature list:-->

<!--* Ctrl+S / Cmd+S to save the file-->
<!--* Ctrl+Shift+S / Cmd+Shift+S to choose to save as Markdown or HTML-->
<!--* Drag and drop a file into here to load it-->
<!--* File contents are saved in the URL so you can share files-->


<!--I'm no good at writing sample / filler text, so go write something yourself.-->

<!--Look, a list!-->

<!--* foo-->
<!--* bar-->
<!--* baz-->

<!--And here's some code! :+1:-->

<!--```javascript-->
<!--$(function(){-->
<!--$('div').html('I am a div.');-->
<!--});-->
<!--```-->

<!--This is [on GitHub](https://github.com/jbt/markdown-editor) so let me know if I've borked it somewhere.-->


<!--Props to Mr. Doob and his [code editor](http://mrdoob.com/projects/code-editor/), from which-->
<!--the inspiration to this, and some handy implementation hints, came.-->

<!--### Stuff used to make this:-->

<!--* [markdown-it](https://github.com/markdown-it/markdown-it) for Markdown parsing-->
<!--* [CodeMirror](http://codemirror.net/) for the awesome syntax-highlighted editor-->
<!--* [highlight.js](http://softwaremaniacs.org/soft/highlight/en/) for syntax highlighting in output code blocks-->
<!--* [js-deflate](https://github.com/dankogai/js-deflate) for gzipping of data to make it fit in URLs-->

<!--### Links-->

<!--[markdown-plus](https://github.com/tylingsoft/markdown-plus) is a versatile markdown editor.-->

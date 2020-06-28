import {install} from './install'

export default class MyEditor {}
MyEditor.install = install
MyEditor.version = '__VERSION__'
const inBrowser = typeof window !== 'undefined'
if (inBrowser && window.Vue) {
    window.Vue.use(MyEditor)
}

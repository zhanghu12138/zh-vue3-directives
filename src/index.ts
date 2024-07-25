import type { App, Directive } from 'vue'
import focus from './directive/v-focus'

export {
  focus as vFocus,
}

interface DirectiveCollection {
  [key: string]: Directive
}

const directives: DirectiveCollection = {
  focus,
}

export default {
  install(app: App):void {
    Object.keys(directives).forEach((key) => {
      app.directive(key, directives[key])
    })
  },
}
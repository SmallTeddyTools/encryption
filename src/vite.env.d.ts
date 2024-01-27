declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const vueComponent: DefineComponent<object, NonNullable<unknown>, any>

  export default vueComponent

}

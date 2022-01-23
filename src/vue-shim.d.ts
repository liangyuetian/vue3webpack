// declare module "*.vue" {
//     // @ts-ignore
//     import Vue from 'vue'
//     export default Vue
// }
declare module '*.vue' {
    import { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}
// declare module 'vue' {
//     import { CompatVue } from '@vue/runtime-dom'
//     const Vue: CompatVue
//     export default Vue
//     export * from '@vue/runtime-dom'
// }

// declare module '@vue/runtime-core' {
//     export * from '@vue/runtime-core'
// }
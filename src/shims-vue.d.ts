// Vue 컴포넌트 정보를 타입스크립트에 제공하는 파일

/* eslint-disable */
// declare module '*.vue' {
//    import Vue from 'vue';
//    export default Vue;
// }

declare module '*.vue' {
   import type { DefineComponent } from 'vue';
   const component: DefineComponent<{}, {}, any>;
   export default component;
}

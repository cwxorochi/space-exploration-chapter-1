
import Vue from 'vue'
import CircleLoader from '@/components/base/CircleLoader.vue'
import BaseButton from '@/components/base/BaseButton.vue'
    
const components = { CircleLoader, BaseButton }
   
Object.entries(components).forEach(([name, component]) => {
    Vue.component(name, component)
})
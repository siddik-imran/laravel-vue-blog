// vue support
import Vue from 'vue'
//moment js support
import moment from 'moment'

Vue.filter('timeFormat', (arg)=>{
    return moment(arg).format("MMM Do YY");
})

Vue.filter('sortLength', (text, length, suffix)=>{
    return text.substring(0, length)+suffix ;
})

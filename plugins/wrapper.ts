import url from '../core/url'
import Menus from '../core/menus';

export default defineNuxtPlugin(()=>{
    return {
        provide: {
            url : url,
            menus : Menus
        }
    }
});

// const { $url, $menu } = useNuxtApp();
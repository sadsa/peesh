import styles from './styles/main.scss';
import promise from '../node_modules/core-js/fn/promise';

/* Dynamic import */
window.components = window.components || {};

for(let component in window.components) {
    import(`./js/components/${component}`)
        .then(component => {
            // console.log(window.components[component]);
            let c = new component.default();
            c.init();
        });
}

/* eslint-disable no-console */

console.log('index');

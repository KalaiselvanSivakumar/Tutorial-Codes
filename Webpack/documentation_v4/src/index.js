import _ from 'lodash';
import './css/index.css';

// Note: Importing log file in this file will only replace the path of set using src attribute.
// This import is not necessary to replace it in the CSS file url function.
import Logo from './images/logo.png';

function createComponent() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
    // Classes are not imported. You don't have to import css file to use the classes defined in it.
    // Including CSS file will make the webpack to include it as dependency,
    // so that css file will be loaded by the browser when this module loads.
    element.classList.add('hello');

    // FIle loader
    const image = new Image();
    image.src = Logo;
    element.appendChild(image);

    return element;
}

document.body.appendChild(createComponent());

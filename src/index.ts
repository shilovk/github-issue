// import * as _ from 'lodash';
import { Spinner } from './spinner';
import './style.less';

import SpinnerImage from './assets/spinner.gif';
const spinner = new Spinner(SpinnerImage);

const container = document.querySelector('.content-container');

spinner.render(container);

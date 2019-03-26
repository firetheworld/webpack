
import { render } from 'react-dom';
import Loadable from 'react-loadable';
import React from 'react';
import { ConfigsParse } from 'ldpro-parser/h5';
import { loadConfigs } from 'ldpro-parser/h5/loadable';

const CompomentA = loadConfigs(() => import('./compomentA'));

import AppRouter from './route'

const moduleA = require('./moduleA');
// require('./main.css');
// require('./div.less');

console.log('learn webpack' + moduleA.default + 1);
class A {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    fn = () => {
        const result = this.a + this.b;
        console.log(`箭头函数${result}`);
    };
};

const a = new A(2, 5);
a.fn();

const domContainer = document.getElementById('root');

// const LoadableComp = Loadable({
//     loader: () => import('./compomentA'),
//     loading: <div>loading</div>
// })

const LoadableComp = Loadable({
    loader: () => import('./compomentA'),
    loading: <div>loading</div>
})

render(<AppRouter />, domContainer);

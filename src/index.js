import React from "react";
import ReactDOM from "react-dom";
import 'regenerator-runtime/runtime';
import View from './Components/View.js'
import Footer from './Components/Footer.js'
import './index.css'
import {RecoilRoot} from 'recoil';

function Index(){
  return(
          <RecoilRoot>
          <main>
            <View />
            <Footer />
          </main>
          </RecoilRoot>
  )
};

ReactDOM.render(<Index />,document.querySelector('#root'))
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios'
axios.get('/api/wap/coupon/center').then((res) => {
  console.log(4)
})

axios.get(`/free/member/sendForgetCode?mobilePhone=18600206984&openId=%20abcddkdkd&_=1541126434373`).then( res => {
  console.log(5)
})

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

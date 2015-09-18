var React = require('react');
var ProductData = require('./ProductData');
var CartAPI = require('./utils/CartAPI');
var FluxCartApp = require('./components/FluxCartApp.react');

//加载 Mock Product Data 到 localStorage
ProductData.init();

//加载 Mock API Call
CartAPI.getProductData();

//渲染 FluxCartApp Ctrl 视图
React.render(
  <FluxCartApp />,
  document.getElementById('flux-cart')
)
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(27)},22:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=a(12),m=a.n(n),l=(a(22),a(14)),c=a(5),s=a(6),u=a(8),o=a(7),p=a(9),d=a(29),h=a(30),T=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).onClick=function(e){a.setState(function(e){return{handleTemperature:!e.handleTemperature}})},a.state={handleTemperature:!1},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t=this.props.convertUnixToTime,a=this.props.getWeek;return e=this.state.handleTemperature?r.a.createElement("div",{className:"today_info"},r.a.createElement("p",null,"Date: ",a(this.props.imperialDate)),r.a.createElement("p",null,"Temperature: ",this.props.imperialTemperature," F"),r.a.createElement("p",null,"Humidity: ",this.props.imperialHumidity),r.a.createElement("p",null,"Wind Speed: ",this.props.imperialWindSpeed," mph"),r.a.createElement("p",null,"Sunrise: ",t(this.props.imperialSunrise)),r.a.createElement("p",null,"Sunset: ",t(this.props.imperialSunset))):r.a.createElement("div",{className:"today_info"},r.a.createElement("p",null,"Date: ",a(this.props.metricDate)),r.a.createElement("p",null,"Temperature: ",this.props.metricTemperature," C"),r.a.createElement("p",null,"Humidity: ",this.props.metricHumidity),r.a.createElement("p",null,"Wind Speed: ",this.props.metricWindSpeed," m/s"),r.a.createElement("p",null,"Sunrise: ",t(this.props.metricSunrise)),r.a.createElement("p",null,"Sunset: ",t(this.props.metricSunset))),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.onClick,className:"button"},"Change temperature unit to",this.state.handleTemperature?" Celsius":" Fahrenheit"),e)}}]),t}(i.Component),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).onClick=function(e){a.setState(function(e){return{handleTemperature:!e.handleTemperature}})},a.state={handleTemperature:!1},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t=this.props.convertUnixToTime;return e=this.state.handleTemperature?r.a.createElement("div",null,this.props.imperialHour.map(function(e){return r.a.createElement("div",{className:"hour_grid"},r.a.createElement("p",{className:"hour_item"},"Time ",t(e.time)," Temperature: ",e.apparentTemperature,"F Humidity: ",e.humidity," Wind Speed: ",e.windSpeed," mph"))})):r.a.createElement("div",null,this.props.metricHour.map(function(e){return r.a.createElement("div",{className:"hour_grid"},r.a.createElement("p",{className:"hour_item"},"Time: ",t(e.time)," Temperature: ",e.apparentTemperature,"C Humidity: ",e.humidity," Wind Speed: ",e.windSpeed," m/s"))})),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.onClick,className:"button"},"Change temperature unit to",this.state.handleTemperature?" Celsius":" Fahrenheit"),e)}}]),t}(i.Component),k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).onClick=function(e){a.setState(function(e){return{handleTemperature:!e.handleTemperature}})},a.state={handleTemperature:!1},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t=this.props.convertUnixToTime,a=this.props.getWeek;return e=this.state.handleTemperature?r.a.createElement("div",{className:"week_grid"},this.props.imperialWeek.map(function(e){return r.a.createElement("ul",null,r.a.createElement("li",{className:"week_item"},"Date: ",a(e.time)),r.a.createElement("li",{className:"week_item"},"Highest Temperature: ",e.apparentTemperatureHigh," F At Time: ",t(e.apparentTemperatureHighTime)),r.a.createElement("li",{className:"week_item"},"Lowest Temperature: ",e.apparentTemperatureLow," F At Time: ",t(e.apparentTemperatureLowTime)),r.a.createElement("li",{className:"week_item"},"Humidity: ",e.humidity),r.a.createElement("li",{className:"week_item"},"Wind Speed: ",e.windSpeed," mph"),r.a.createElement("li",{className:"week_item"},"Sunrise: ",t(e.sunriseTime)),r.a.createElement("li",{className:"week_item"},"Sunset: ",t(e.sunsetTime)))})):r.a.createElement("div",{className:"week_grid"},this.props.metricWeek.map(function(e){return r.a.createElement("div",{className:"weekday"},r.a.createElement("ul",null,r.a.createElement("li",{className:"week_item"},"Date: ",a(e.time)),r.a.createElement("li",{className:"week_item"},"Highest Temperature: ",e.apparentTemperatureHigh," C At Time: ",t(e.apparentTemperatureHighTime)),r.a.createElement("li",{className:"week_item"},"Lowest Temperature: ",e.apparentTemperatureLow," C At Time: ",t(e.apparentTemperatureLowTime)),r.a.createElement("li",{className:"week_item"},"Humidity: ",e.humidity),r.a.createElement("li",{className:"week_item"},"Wind Speed: ",e.windSpeed," m/s"),r.a.createElement("li",{className:"week_item"},"Sunrise: ",t(e.sunriseTime)),r.a.createElement("li",{className:"week_item"},"Sunset: ",t(e.sunsetTime))))})),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.onClick,className:"button"},"Change temperature unit to",this.state.handleTemperature?" Celsius":" Fahrenheit"),e)}}]),t}(i.Component),E=a(28);function v(){return r.a.createElement("header",{className:"header"},r.a.createElement("h1",null,"IN Weather"),r.a.createElement(E.a,{className:"nav_link",to:"/"},"Home"),r.a.createElement(E.a,{className:"nav_link",to:"/hourly"},"Hourly Prognosis"),r.a.createElement(E.a,{className:"nav_link",to:"/weekly"},"Weekly Prognosis"))}a(25);var S="b443f236d24543bcc8da066a299a2d99",f=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).convertUnixToTime=function(e){var t=new Date(1e3*e);return t.getHours()+":"+("0"+t.getMinutes()).substr(-2)},a.getWeek=function(e){var t=new Date(1e3*e),a=t.getMonth()+1;return t.getDate()+"/"+a},a.state={position:{latitude:59.414141,longitude:18.020202},imperialToday:{imperialDate:void 0,imperialTemperature:void 0,imperialHumidity:void 0,imperialWindSpeed:void 0,imperialSunrise:void 0,imperialSunset:void 0},imperialWeek:[],imperialHour:[],metricToday:{metricDate:void 0,metricTemperature:void 0,metricHumidity:void 0,metricWindSpeed:void 0,metricSunrise:void 0,metricSunset:void 0},metricWeek:[],metricHour:[]},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.state);navigator.geolocation.getCurrentPosition(function(t){var a=t.coords;e.setState(Object(l.a)({},e.state,{position:{latitude:a.latitude,longitude:a.longitude}}))},function(e){console.warn("ERROR(".concat(e.code,"): ").concat(e.message))},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0}),fetch("https://hendrik-cors-proxy.herokuapp.com/https://api.darksky.net/forecast/".concat(S,"/").concat(this.state.position.latitude,",").concat(this.state.position.longitude)).then(function(e){return e.json()}).then(function(t){e.setState({imperialToday:{imperialDate:t.daily.data[0].time,imperialTemperature:t.currently.temperature,imperialHumidity:t.currently.humidity,imperialWindSpeed:t.currently.windSpeed,imperialSunrise:t.daily.data[0].sunriseTime,imperialSunset:t.daily.data[0].sunsetTime},imperialWeek:t.daily.data,imperialHour:t.hourly.data})}),fetch("https://hendrik-cors-proxy.herokuapp.com/https://api.darksky.net/forecast/".concat(S,"/").concat(this.state.position.latitude,",").concat(this.state.position.longitude,"?units=si")).then(function(e){return e.json()}).then(function(t){e.setState({metricToday:{metricDate:t.daily.data[0].time,metricTemperature:t.currently.temperature,metricHumidity:t.currently.humidity,metricWindSpeed:t.currently.windSpeed,metricSunrise:t.daily.data[0].sunriseTime,metricSunset:t.daily.data[0].sunsetTime},metricWeek:t.daily.data,metricHour:t.hourly.data})})}},{key:"render",value:function(){var e=this;return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(v,null),r.a.createElement(h.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{convertUnixToTime:e.convertUnixToTime,getWeek:e.getWeek,imperialDate:e.state.imperialToday.imperialDate,imperialTemperature:e.state.imperialToday.imperialTemperature,imperialHumidity:e.state.imperialToday.imperialHumidity,imperialWindSpeed:e.state.imperialToday.imperialWindSpeed,imperialSunrise:e.state.imperialToday.imperialSunrise,imperialSunset:e.state.imperialToday.imperialSunset,metricDate:e.state.metricToday.metricDate,metricTemperature:e.state.metricToday.metricTemperature,metricHumidity:e.state.metricToday.metricHumidity,metricWindSpeed:e.state.metricToday.metricWindSpeed,metricSunrise:e.state.metricToday.metricSunrise,metricSunset:e.state.metricToday.metricSunset}))}}),r.a.createElement(h.a,{exact:!0,path:"/hourly",render:function(t){return r.a.createElement(y,{imperialHour:e.state.imperialHour,metricHour:e.state.metricHour,convertUnixToTime:e.convertUnixToTime})}}),r.a.createElement(h.a,{exact:!0,path:"/weekly",render:function(t){return r.a.createElement(k,{imperialWeek:e.state.imperialWeek,metricWeek:e.state.metricWeek,convertUnixToTime:e.convertUnixToTime,getWeek:e.getWeek})}})))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.1bf2c9f4.chunk.js.map
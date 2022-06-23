!function(){
    const e=document.querySelector("[container-form]"),
    t=document.querySelector("[new-entry]"),
    n=document.querySelector("[switch]"),
    r=document.querySelector("[location-button]");
    let o,a="Delhi";
    async function c(e){
        !function(e){
            o=isNaN(e)&&function(e){
                return/\d/.test(e)
            }
            (e)?e:function(e){
                return!/\D/.test(e)
            }
            (e)&&e.length<=5?`zip=${e}`:`q=${e}`
        }(e);
        try{
            const e=await fetch(`https://api.openweathermap.org/data/2.5/weather?${o}&appid=db8308098d0b922fd89868491e77869a&units=standard`,{mode:"cors"});
            !function(e){
                switch(e.weather[0].main){
                    case"Clear":document.body.style.backgroundImage='url("clear.jpg")';
                    break;
                    case"Clouds":document.body.style.backgroundImage='url("cloudy.jpg")';
                    break;
                    case"Overcast Clouds":document.body.style.backgroundImage='url("overcast cloud.jpg")';
                    break;
                    case"Rain":case"Drizzle":document.body.style.backgroundImage='url("rain.jpg")';
                    break;
                    case"Thunderstorm":document.body.style.backgroundImage='url("thunderstorm.jpg")';
                    break;
                    case"Smoke":document.body.style.backgroundImage='url("smoke.jpg")';
                    break;
                    case"Mist":document.body.style.backgroundImage='url("mist.jpg")';
                    break;
                    case"Haze":document.body.style.backgroundImage='url("haze.jpg")';
                    break;
                    case"Fog":document.body.style.backgroundImage='url("fog.jpg")';
                    break;
                    case"Snow":document.body.style.backgroundImage='url("snow1.jpg")'
                }
                const t=document.querySelector("[cityName]"),
                r=document.querySelector("[cityTemperature]"),
                o=document.querySelector("[cityWeather]"),
                a=document.querySelector("[tempFeeling]"),
                c=document.querySelector("[humidity]"),
                s=document.querySelector("[wind]"),
                m=document.getElementById("image"),
                g=document.querySelector("[date-time]"),
                y=e.timezone,
                p=e.weather[0].description;
                let h=e.main.temp,
                f=e.main.feels_like;
                t.innerHTML=`${e.name}, ${e.sys.country}`,
                g.innerHTML=function(e){
                    let t=new Date,
                    n=t.getTime(),
                    r=6e4*t.getTimezoneOffset();
                    return new Date(n+r+1e3*e).toLocaleString()
                }
                (y),
                n.checked?(h=u(h),
                f=u(f),
                r.innerHTML=h+"&degF"):(h=i(h),
                f=i(f),r.innerHTML=h+"&degC"),
                m.src=`http://openweathermap.org/img/wn/${e.weather[0].icon}.png`,
                o.innerHTML=p.charAt(0).toUpperCase()+p.slice(1),
                a.innerHTML="Feels like: "+f+"&deg",
                c.innerHTML="Humidity levels: "+e.main.humidity+"%",
                s.innerHTML="Wind: "+e.wind.speed+"k/m",
                n.addEventListener("change",(()=>{
                    n.checked?setTimeout((()=>{h=d(h),
                        f=d(f),
                        r.innerHTML=h+"&degF",
                        a.innerHTML="Feels like: "+f+"&deg"
                    }),150):setTimeout((()=>{
                        h=l(h),
                        f=l(f),
                        r.innerHTML=h+"&degC",
                        a.innerHTML="Feels like: "+f+"&deg"
                    }),150)}))}
                    (await e.json())}
                    catch(e){alert(e)}}
                    function i(e){
                        return e=parseFloat(e),
                        Math.round(e-=273.15)
                    }
                    function u(e){
                        return e=parseFloat(e),
                        Math.round(9*(e-=273.15)/5+32)
                    }
                    function d(e){
                        return e=parseFloat(e),
                        Math.round(e=1.8*e+32)
                    }
                    function l(e){
                        return e=parseFloat(e),
                        Math.round(e=5/9*(e-32))
                    }
                    r.addEventListener("click",(e=>{
                        e.preventDefault(),
                        navigator.geolocation.getCurrentPosition((e=>{
                            c("lat="+e.coords.latitude+"&lon="+e.coords.longitude)}),
                            (e=>{alert(e)}))})),
                            e.addEventListener("submit",(e=>{
                                e.preventDefault(),a=t.value,c(a),t.value=""})),
                                c(a)}();

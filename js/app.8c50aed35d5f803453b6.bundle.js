(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,a)=>{const s=a(377),{lightningChart:n,Themes:r,AxisTickStrategies:o}=s,i=Math.ceil(5e3),l=n({resourcesBaseUrl:new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"resources/"}).ChartXY({theme:r[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0}).setTitle("Sweeping Real-Time Chart").setCursor((e=>e.setTickMarkerXVisible(!1)));l.getDefaultAxisX().setDefaultInterval({start:0,end:5e3}).setTickStrategy(o.Empty);const c=l.addPointLineAreaSeries({dataPattern:"ProgressiveX"}).setMaxSampleCount(i);let h=-1,m=performance.now(),u=0,d=100;const f=()=>{const e=performance.now();let t=1e3*Math.min(e-m,2e3)/1e3+u;u=t%1,t=Math.floor(t),m=e;const a=new Array(t);for(let e=0;e<t;e+=1){const t=d+(2*Math.random()-1);d=t,a[e]=t}(e=>{const t=e.length,a=i-(h+1),s=Math.min(a,t);if(c.alterSamples(h+1,{yValues:e,count:s}),h+=s,s<a){const e=Math.min(Math.round(.05*i),i-(h+1));c.alterSamples(h+1,{yValues:new Array(e).fill(Number.NaN)})}const n=t-s;n>0&&(c.alterSamples(0,{yValues:e,offset:s}),h=n-1)})(a),requestAnimationFrame(f)};f()}},e=>{e.O(0,[502],(()=>e(e.s=44))),e.O()}]);
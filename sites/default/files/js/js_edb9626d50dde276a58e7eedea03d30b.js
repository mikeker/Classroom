// $Id: jquery.js,v 1.12.2.3 2008/06/25 09:38:39 goba Exp $ 

/*
 * jQuery 1.2.6 - New Wave Javascript
 *
 * Copyright (c) 2008 John Resig (jquery.com)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * Date: 2008-05-24 14:22:17 -0400 (Sat, 24 May 2008)
 * Rev: 5685
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(H(){J w=1b.4M,3m$=1b.$;J D=1b.4M=1b.$=H(a,b){I 2B D.17.5j(a,b)};J u=/^[^<]*(<(.|\\s)+>)[^>]*$|^#(\\w+)$/,62=/^.[^:#\\[\\.]*$/,12;D.17=D.44={5j:H(d,b){d=d||S;G(d.16){7[0]=d;7.K=1;I 7}G(1j d=="23"){J c=u.2D(d);G(c&&(c[1]||!b)){G(c[1])d=D.4h([c[1]],b);N{J a=S.61(c[3]);G(a){G(a.2v!=c[3])I D().2q(d);I D(a)}d=[]}}N I D(b).2q(d)}N G(D.1D(d))I D(S)[D.17.27?"27":"43"](d);I 7.6Y(D.2d(d))},5w:"1.2.6",8G:H(){I 7.K},K:0,3p:H(a){I a==12?D.2d(7):7[a]},2I:H(b){J a=D(b);a.5n=7;I a},6Y:H(a){7.K=0;2p.44.1p.1w(7,a);I 7},P:H(a,b){I D.P(7,a,b)},5i:H(b){J a=-1;I D.2L(b&&b.5w?b[0]:b,7)},1K:H(c,a,b){J d=c;G(c.1q==56)G(a===12)I 7[0]&&D[b||"1K"](7[0],c);N{d={};d[c]=a}I 7.P(H(i){R(c 1n d)D.1K(b?7.V:7,c,D.1i(7,d[c],b,i,c))})},1g:H(b,a){G((b==\'2h\'||b==\'1Z\')&&3d(a)<0)a=12;I 7.1K(b,a,"2a")},1r:H(b){G(1j b!="49"&&b!=U)I 7.4E().3v((7[0]&&7[0].2z||S).5F(b));J a="";D.P(b||7,H(){D.P(7.3t,H(){G(7.16!=8)a+=7.16!=1?7.76:D.17.1r([7])})});I a},5z:H(b){G(7[0])D(b,7[0].2z).5y().39(7[0]).2l(H(){J a=7;1B(a.1x)a=a.1x;I a}).3v(7);I 7},8Y:H(a){I 7.P(H(){D(7).6Q().5z(a)})},8R:H(a){I 7.P(H(){D(7).5z(a)})},3v:H(){I 7.3W(19,M,Q,H(a){G(7.16==1)7.3U(a)})},6F:H(){I 7.3W(19,M,M,H(a){G(7.16==1)7.39(a,7.1x)})},6E:H(){I 7.3W(19,Q,Q,H(a){7.1d.39(a,7)})},5q:H(){I 7.3W(19,Q,M,H(a){7.1d.39(a,7.2H)})},3l:H(){I 7.5n||D([])},2q:H(b){J c=D.2l(7,H(a){I D.2q(b,a)});I 7.2I(/[^+>] [^+>]/.11(b)||b.1h("..")>-1?D.4r(c):c)},5y:H(e){J f=7.2l(H(){G(D.14.1f&&!D.4n(7)){J a=7.6o(M),5h=S.3h("1v");5h.3U(a);I D.4h([5h.4H])[0]}N I 7.6o(M)});J d=f.2q("*").5c().P(H(){G(7[E]!=12)7[E]=U});G(e===M)7.2q("*").5c().P(H(i){G(7.16==3)I;J c=D.L(7,"3w");R(J a 1n c)R(J b 1n c[a])D.W.1e(d[i],a,c[a][b],c[a][b].L)});I f},1E:H(b){I 7.2I(D.1D(b)&&D.3C(7,H(a,i){I b.1k(a,i)})||D.3g(b,7))},4Y:H(b){G(b.1q==56)G(62.11(b))I 7.2I(D.3g(b,7,M));N b=D.3g(b,7);J a=b.K&&b[b.K-1]!==12&&!b.16;I 7.1E(H(){I a?D.2L(7,b)<0:7!=b})},1e:H(a){I 7.2I(D.4r(D.2R(7.3p(),1j a==\'23\'?D(a):D.2d(a))))},3F:H(a){I!!a&&D.3g(a,7).K>0},7T:H(a){I 7.3F("."+a)},6e:H(b){G(b==12){G(7.K){J c=7[0];G(D.Y(c,"2A")){J e=c.64,63=[],15=c.15,2V=c.O=="2A-2V";G(e<0)I U;R(J i=2V?e:0,2f=2V?e+1:15.K;i<2f;i++){J d=15[i];G(d.2W){b=D.14.1f&&!d.at.2x.an?d.1r:d.2x;G(2V)I b;63.1p(b)}}I 63}N I(7[0].2x||"").1o(/\\r/g,"")}I 12}G(b.1q==4L)b+=\'\';I 7.P(H(){G(7.16!=1)I;G(b.1q==2p&&/5O|5L/.11(7.O))7.4J=(D.2L(7.2x,b)>=0||D.2L(7.34,b)>=0);N G(D.Y(7,"2A")){J a=D.2d(b);D("9R",7).P(H(){7.2W=(D.2L(7.2x,a)>=0||D.2L(7.1r,a)>=0)});G(!a.K)7.64=-1}N 7.2x=b})},2K:H(a){I a==12?(7[0]?7[0].4H:U):7.4E().3v(a)},7b:H(a){I 7.5q(a).21()},79:H(i){I 7.3s(i,i+1)},3s:H(){I 7.2I(2p.44.3s.1w(7,19))},2l:H(b){I 7.2I(D.2l(7,H(a,i){I b.1k(a,i,a)}))},5c:H(){I 7.1e(7.5n)},L:H(d,b){J a=d.1R(".");a[1]=a[1]?"."+a[1]:"";G(b===12){J c=7.5C("9z"+a[1]+"!",[a[0]]);G(c===12&&7.K)c=D.L(7[0],d);I c===12&&a[1]?7.L(a[0]):c}N I 7.1P("9u"+a[1]+"!",[a[0],b]).P(H(){D.L(7,d,b)})},3b:H(a){I 7.P(H(){D.3b(7,a)})},3W:H(g,f,h,d){J e=7.K>1,3x;I 7.P(H(){G(!3x){3x=D.4h(g,7.2z);G(h)3x.9o()}J b=7;G(f&&D.Y(7,"1T")&&D.Y(3x[0],"4F"))b=7.3H("22")[0]||7.3U(7.2z.3h("22"));J c=D([]);D.P(3x,H(){J a=e?D(7).5y(M)[0]:7;G(D.Y(a,"1m"))c=c.1e(a);N{G(a.16==1)c=c.1e(D("1m",a).21());d.1k(b,a)}});c.P(6T)})}};D.17.5j.44=D.17;H 6T(i,a){G(a.4d)D.3Y({1a:a.4d,31:Q,1O:"1m"});N D.5u(a.1r||a.6O||a.4H||"");G(a.1d)a.1d.37(a)}H 1z(){I+2B 8J}D.1l=D.17.1l=H(){J b=19[0]||{},i=1,K=19.K,4x=Q,15;G(b.1q==8I){4x=b;b=19[1]||{};i=2}G(1j b!="49"&&1j b!="H")b={};G(K==i){b=7;--i}R(;i<K;i++)G((15=19[i])!=U)R(J c 1n 15){J a=b[c],2w=15[c];G(b===2w)6M;G(4x&&2w&&1j 2w=="49"&&!2w.16)b[c]=D.1l(4x,a||(2w.K!=U?[]:{}),2w);N G(2w!==12)b[c]=2w}I b};J E="4M"+1z(),6K=0,5r={},6G=/z-?5i|8B-?8A|1y|6B|8v-?1Z/i,3P=S.3P||{};D.1l({8u:H(a){1b.$=3m$;G(a)1b.4M=w;I D},1D:H(a){I!!a&&1j a!="23"&&!a.Y&&a.1q!=2p&&/^[\\s[]?H/.11(a+"")},4n:H(a){I a.1C&&!a.1c||a.2j&&a.2z&&!a.2z.1c},5u:H(a){a=D.3k(a);G(a){J b=S.3H("6w")[0]||S.1C,1m=S.3h("1m");1m.O="1r/4t";G(D.14.1f)1m.1r=a;N 1m.3U(S.5F(a));b.39(1m,b.1x);b.37(1m)}},Y:H(b,a){I b.Y&&b.Y.2r()==a.2r()},1Y:{},L:H(c,d,b){c=c==1b?5r:c;J a=c[E];G(!a)a=c[E]=++6K;G(d&&!D.1Y[a])D.1Y[a]={};G(b!==12)D.1Y[a][d]=b;I d?D.1Y[a][d]:a},3b:H(c,b){c=c==1b?5r:c;J a=c[E];G(b){G(D.1Y[a]){2U D.1Y[a][b];b="";R(b 1n D.1Y[a])1X;G(!b)D.3b(c)}}N{1U{2U c[E]}1V(e){G(c.5l)c.5l(E)}2U D.1Y[a]}},P:H(d,a,c){J e,i=0,K=d.K;G(c){G(K==12){R(e 1n d)G(a.1w(d[e],c)===Q)1X}N R(;i<K;)G(a.1w(d[i++],c)===Q)1X}N{G(K==12){R(e 1n d)G(a.1k(d[e],e,d[e])===Q)1X}N R(J b=d[0];i<K&&a.1k(b,i,b)!==Q;b=d[++i]){}}I d},1i:H(b,a,c,i,d){G(D.1D(a))a=a.1k(b,i);I a&&a.1q==4L&&c=="2a"&&!6G.11(d)?a+"2X":a},1F:{1e:H(c,b){D.P((b||"").1R(/\\s+/),H(i,a){G(c.16==1&&!D.1F.3T(c.1F,a))c.1F+=(c.1F?" ":"")+a})},21:H(c,b){G(c.16==1)c.1F=b!=12?D.3C(c.1F.1R(/\\s+/),H(a){I!D.1F.3T(b,a)}).6s(" "):""},3T:H(b,a){I D.2L(a,(b.1F||b).6r().1R(/\\s+/))>-1}},6q:H(b,c,a){J e={};R(J d 1n c){e[d]=b.V[d];b.V[d]=c[d]}a.1k(b);R(J d 1n c)b.V[d]=e[d]},1g:H(d,e,c){G(e=="2h"||e=="1Z"){J b,3X={30:"5x",5g:"1G",18:"3I"},35=e=="2h"?["5e","6k"]:["5G","6i"];H 5b(){b=e=="2h"?d.8f:d.8c;J a=0,2C=0;D.P(35,H(){a+=3d(D.2a(d,"57"+7,M))||0;2C+=3d(D.2a(d,"2C"+7+"4b",M))||0});b-=29.83(a+2C)}G(D(d).3F(":4j"))5b();N D.6q(d,3X,5b);I 29.2f(0,b)}I D.2a(d,e,c)},2a:H(f,l,k){J e,V=f.V;H 3E(b){G(!D.14.2k)I Q;J a=3P.54(b,U);I!a||a.52("3E")==""}G(l=="1y"&&D.14.1f){e=D.1K(V,"1y");I e==""?"1":e}G(D.14.2G&&l=="18"){J d=V.50;V.50="0 7Y 7W";V.50=d}G(l.1I(/4i/i))l=y;G(!k&&V&&V[l])e=V[l];N G(3P.54){G(l.1I(/4i/i))l="4i";l=l.1o(/([A-Z])/g,"-$1").3y();J c=3P.54(f,U);G(c&&!3E(f))e=c.52(l);N{J g=[],2E=[],a=f,i=0;R(;a&&3E(a);a=a.1d)2E.6h(a);R(;i<2E.K;i++)G(3E(2E[i])){g[i]=2E[i].V.18;2E[i].V.18="3I"}e=l=="18"&&g[2E.K-1]!=U?"2F":(c&&c.52(l))||"";R(i=0;i<g.K;i++)G(g[i]!=U)2E[i].V.18=g[i]}G(l=="1y"&&e=="")e="1"}N G(f.4g){J h=l.1o(/\\-(\\w)/g,H(a,b){I b.2r()});e=f.4g[l]||f.4g[h];G(!/^\\d+(2X)?$/i.11(e)&&/^\\d/.11(e)){J j=V.1A,66=f.65.1A;f.65.1A=f.4g.1A;V.1A=e||0;e=V.aM+"2X";V.1A=j;f.65.1A=66}}I e},4h:H(l,h){J k=[];h=h||S;G(1j h.3h==\'12\')h=h.2z||h[0]&&h[0].2z||S;D.P(l,H(i,d){G(!d)I;G(d.1q==4L)d+=\'\';G(1j d=="23"){d=d.1o(/(<(\\w+)[^>]*?)\\/>/g,H(b,a,c){I c.1I(/^(aK|4f|7E|aG|4T|7A|aB|3n|az|ay|av)$/i)?b:a+"></"+c+">"});J f=D.3k(d).3y(),1v=h.3h("1v");J e=!f.1h("<au")&&[1,"<2A 7w=\'7w\'>","</2A>"]||!f.1h("<ar")&&[1,"<7v>","</7v>"]||f.1I(/^<(aq|22|am|ak|ai)/)&&[1,"<1T>","</1T>"]||!f.1h("<4F")&&[2,"<1T><22>","</22></1T>"]||(!f.1h("<af")||!f.1h("<ad"))&&[3,"<1T><22><4F>","</4F></22></1T>"]||!f.1h("<7E")&&[2,"<1T><22></22><7q>","</7q></1T>"]||D.14.1f&&[1,"1v<1v>","</1v>"]||[0,"",""];1v.4H=e[1]+d+e[2];1B(e[0]--)1v=1v.5T;G(D.14.1f){J g=!f.1h("<1T")&&f.1h("<22")<0?1v.1x&&1v.1x.3t:e[1]=="<1T>"&&f.1h("<22")<0?1v.3t:[];R(J j=g.K-1;j>=0;--j)G(D.Y(g[j],"22")&&!g[j].3t.K)g[j].1d.37(g[j]);G(/^\\s/.11(d))1v.39(h.5F(d.1I(/^\\s*/)[0]),1v.1x)}d=D.2d(1v.3t)}G(d.K===0&&(!D.Y(d,"3V")&&!D.Y(d,"2A")))I;G(d[0]==12||D.Y(d,"3V")||d.15)k.1p(d);N k=D.2R(k,d)});I k},1K:H(d,f,c){G(!d||d.16==3||d.16==8)I 12;J e=!D.4n(d),40=c!==12,1f=D.14.1f;f=e&&D.3X[f]||f;G(d.2j){J g=/5Q|4d|V/.11(f);G(f=="2W"&&D.14.2k)d.1d.64;G(f 1n d&&e&&!g){G(40){G(f=="O"&&D.Y(d,"4T")&&d.1d)7p"O a3 a1\'t 9V 9U";d[f]=c}G(D.Y(d,"3V")&&d.7i(f))I d.7i(f).76;I d[f]}G(1f&&e&&f=="V")I D.1K(d.V,"9T",c);G(40)d.9Q(f,""+c);J h=1f&&e&&g?d.4G(f,2):d.4G(f);I h===U?12:h}G(1f&&f=="1y"){G(40){d.6B=1;d.1E=(d.1E||"").1o(/7f\\([^)]*\\)/,"")+(3r(c)+\'\'=="9L"?"":"7f(1y="+c*7a+")")}I d.1E&&d.1E.1h("1y=")>=0?(3d(d.1E.1I(/1y=([^)]*)/)[1])/7a)+\'\':""}f=f.1o(/-([a-z])/9H,H(a,b){I b.2r()});G(40)d[f]=c;I d[f]},3k:H(a){I(a||"").1o(/^\\s+|\\s+$/g,"")},2d:H(b){J a=[];G(b!=U){J i=b.K;G(i==U||b.1R||b.4I||b.1k)a[0]=b;N 1B(i)a[--i]=b[i]}I a},2L:H(b,a){R(J i=0,K=a.K;i<K;i++)G(a[i]===b)I i;I-1},2R:H(a,b){J i=0,T,2S=a.K;G(D.14.1f){1B(T=b[i++])G(T.16!=8)a[2S++]=T}N 1B(T=b[i++])a[2S++]=T;I a},4r:H(a){J c=[],2o={};1U{R(J i=0,K=a.K;i<K;i++){J b=D.L(a[i]);G(!2o[b]){2o[b]=M;c.1p(a[i])}}}1V(e){c=a}I c},3C:H(c,a,d){J b=[];R(J i=0,K=c.K;i<K;i++)G(!d!=!a(c[i],i))b.1p(c[i]);I b},2l:H(d,a){J c=[];R(J i=0,K=d.K;i<K;i++){J b=a(d[i],i);G(b!=U)c[c.K]=b}I c.7d.1w([],c)}});J v=9B.9A.3y();D.14={5B:(v.1I(/.+(?:9y|9x|9w|9v)[\\/: ]([\\d.]+)/)||[])[1],2k:/75/.11(v),2G:/2G/.11(v),1f:/1f/.11(v)&&!/2G/.11(v),42:/42/.11(v)&&!/(9s|75)/.11(v)};J y=D.14.1f?"7o":"72";D.1l({71:!D.14.1f||S.70=="6Z",3X:{"R":"9n","9k":"1F","4i":y,72:y,7o:y,9h:"9f",9e:"9d",9b:"99"}});D.P({6W:H(a){I a.1d},97:H(a){I D.4S(a,"1d")},95:H(a){I D.3a(a,2,"2H")},91:H(a){I D.3a(a,2,"4l")},8Z:H(a){I D.4S(a,"2H")},8X:H(a){I D.4S(a,"4l")},8W:H(a){I D.5v(a.1d.1x,a)},8V:H(a){I D.5v(a.1x)},6Q:H(a){I D.Y(a,"8U")?a.8T||a.8S.S:D.2d(a.3t)}},H(c,d){D.17[c]=H(b){J a=D.2l(7,d);G(b&&1j b=="23")a=D.3g(b,a);I 7.2I(D.4r(a))}});D.P({6P:"3v",8Q:"6F",39:"6E",8P:"5q",8O:"7b"},H(c,b){D.17[c]=H(){J a=19;I 7.P(H(){R(J i=0,K=a.K;i<K;i++)D(a[i])[b](7)})}});D.P({8N:H(a){D.1K(7,a,"");G(7.16==1)7.5l(a)},8M:H(a){D.1F.1e(7,a)},8L:H(a){D.1F.21(7,a)},8K:H(a){D.1F[D.1F.3T(7,a)?"21":"1e"](7,a)},21:H(a){G(!a||D.1E(a,[7]).r.K){D("*",7).1e(7).P(H(){D.W.21(7);D.3b(7)});G(7.1d)7.1d.37(7)}},4E:H(){D(">*",7).21();1B(7.1x)7.37(7.1x)}},H(a,b){D.17[a]=H(){I 7.P(b,19)}});D.P(["6N","4b"],H(i,c){J b=c.3y();D.17[b]=H(a){I 7[0]==1b?D.14.2G&&S.1c["5t"+c]||D.14.2k&&1b["5s"+c]||S.70=="6Z"&&S.1C["5t"+c]||S.1c["5t"+c]:7[0]==S?29.2f(29.2f(S.1c["4y"+c],S.1C["4y"+c]),29.2f(S.1c["2i"+c],S.1C["2i"+c])):a==12?(7.K?D.1g(7[0],b):U):7.1g(b,a.1q==56?a:a+"2X")}});H 25(a,b){I a[0]&&3r(D.2a(a[0],b,M),10)||0}J C=D.14.2k&&3r(D.14.5B)<8H?"(?:[\\\\w*3m-]|\\\\\\\\.)":"(?:[\\\\w\\8F-\\8E*3m-]|\\\\\\\\.)",6L=2B 4v("^>\\\\s*("+C+"+)"),6J=2B 4v("^("+C+"+)(#)("+C+"+)"),6I=2B 4v("^([#.]?)("+C+"*)");D.1l({6H:{"":H(a,i,m){I m[2]=="*"||D.Y(a,m[2])},"#":H(a,i,m){I a.4G("2v")==m[2]},":":{8D:H(a,i,m){I i<m[3]-0},8C:H(a,i,m){I i>m[3]-0},3a:H(a,i,m){I m[3]-0==i},79:H(a,i,m){I m[3]-0==i},3o:H(a,i){I i==0},3S:H(a,i,m,r){I i==r.K-1},6D:H(a,i){I i%2==0},6C:H(a,i){I i%2},"3o-4u":H(a){I a.1d.3H("*")[0]==a},"3S-4u":H(a){I D.3a(a.1d.5T,1,"4l")==a},"8z-4u":H(a){I!D.3a(a.1d.5T,2,"4l")},6W:H(a){I a.1x},4E:H(a){I!a.1x},8y:H(a,i,m){I(a.6O||a.8x||D(a).1r()||"").1h(m[3])>=0},4j:H(a){I"1G"!=a.O&&D.1g(a,"18")!="2F"&&D.1g(a,"5g")!="1G"},1G:H(a){I"1G"==a.O||D.1g(a,"18")=="2F"||D.1g(a,"5g")=="1G"},8w:H(a){I!a.3R},3R:H(a){I a.3R},4J:H(a){I a.4J},2W:H(a){I a.2W||D.1K(a,"2W")},1r:H(a){I"1r"==a.O},5O:H(a){I"5O"==a.O},5L:H(a){I"5L"==a.O},5p:H(a){I"5p"==a.O},3Q:H(a){I"3Q"==a.O},5o:H(a){I"5o"==a.O},6A:H(a){I"6A"==a.O},6z:H(a){I"6z"==a.O},2s:H(a){I"2s"==a.O||D.Y(a,"2s")},4T:H(a){I/4T|2A|6y|2s/i.11(a.Y)},3T:H(a,i,m){I D.2q(m[3],a).K},8t:H(a){I/h\\d/i.11(a.Y)},8s:H(a){I D.3C(D.3O,H(b){I a==b.T}).K}}},6x:[/^(\\[) *@?([\\w-]+) *([!*$^~=]*) *(\'?"?)(.*?)\\4 *\\]/,/^(:)([\\w-]+)\\("?\'?(.*?(\\(.*?\\))?[^(]*?)"?\'?\\)/,2B 4v("^([:.#]*)("+C+"+)")],3g:H(a,c,b){J d,1t=[];1B(a&&a!=d){d=a;J f=D.1E(a,c,b);a=f.t.1o(/^\\s*,\\s*/,"");1t=b?c=f.r:D.2R(1t,f.r)}I 1t},2q:H(t,o){G(1j t!="23")I[t];G(o&&o.16!=1&&o.16!=9)I[];o=o||S;J d=[o],2o=[],3S,Y;1B(t&&3S!=t){J r=[];3S=t;t=D.3k(t);J l=Q,3j=6L,m=3j.2D(t);G(m){Y=m[1].2r();R(J i=0;d[i];i++)R(J c=d[i].1x;c;c=c.2H)G(c.16==1&&(Y=="*"||c.Y.2r()==Y))r.1p(c);d=r;t=t.1o(3j,"");G(t.1h(" ")==0)6M;l=M}N{3j=/^([>+~])\\s*(\\w*)/i;G((m=3j.2D(t))!=U){r=[];J k={};Y=m[2].2r();m=m[1];R(J j=0,3i=d.K;j<3i;j++){J n=m=="~"||m=="+"?d[j].2H:d[j].1x;R(;n;n=n.2H)G(n.16==1){J g=D.L(n);G(m=="~"&&k[g])1X;G(!Y||n.Y.2r()==Y){G(m=="~")k[g]=M;r.1p(n)}G(m=="+")1X}}d=r;t=D.3k(t.1o(3j,""));l=M}}G(t&&!l){G(!t.1h(",")){G(o==d[0])d.4s();2o=D.2R(2o,d);r=d=[o];t=" "+t.6v(1,t.K)}N{J h=6J;J m=h.2D(t);G(m){m=[0,m[2],m[3],m[1]]}N{h=6I;m=h.2D(t)}m[2]=m[2].1o(/\\\\/g,"");J f=d[d.K-1];G(m[1]=="#"&&f&&f.61&&!D.4n(f)){J p=f.61(m[2]);G((D.14.1f||D.14.2G)&&p&&1j p.2v=="23"&&p.2v!=m[2])p=D(\'[@2v="\'+m[2]+\'"]\',f)[0];d=r=p&&(!m[3]||D.Y(p,m[3]))?[p]:[]}N{R(J i=0;d[i];i++){J a=m[1]=="#"&&m[3]?m[3]:m[1]!=""||m[0]==""?"*":m[2];G(a=="*"&&d[i].Y.3y()=="49")a="3n";r=D.2R(r,d[i].3H(a))}G(m[1]==".")r=D.5m(r,m[2]);G(m[1]=="#"){J e=[];R(J i=0;r[i];i++)G(r[i].4G("2v")==m[2]){e=[r[i]];1X}r=e}d=r}t=t.1o(h,"")}}G(t){J b=D.1E(t,r);d=r=b.r;t=D.3k(b.t)}}G(t)d=[];G(d&&o==d[0])d.4s();2o=D.2R(2o,d);I 2o},5m:H(r,m,a){m=" "+m+" ";J c=[];R(J i=0;r[i];i++){J b=(" "+r[i].1F+" ").1h(m)>=0;G(!a&&b||a&&!b)c.1p(r[i])}I c},1E:H(t,r,h){J d;1B(t&&t!=d){d=t;J p=D.6x,m;R(J i=0;p[i];i++){m=p[i].2D(t);G(m){t=t.8r(m[0].K);m[2]=m[2].1o(/\\\\/g,"");1X}}G(!m)1X;G(m[1]==":"&&m[2]=="4Y")r=62.11(m[3])?D.1E(m[3],r,M).r:D(r).4Y(m[3]);N G(m[1]==".")r=D.5m(r,m[2],h);N G(m[1]=="["){J g=[],O=m[3];R(J i=0,3i=r.K;i<3i;i++){J a=r[i],z=a[D.3X[m[2]]||m[2]];G(z==U||/5Q|4d|2W/.11(m[2]))z=D.1K(a,m[2])||\'\';G((O==""&&!!z||O=="="&&z==m[5]||O=="!="&&z!=m[5]||O=="^="&&z&&!z.1h(m[5])||O=="$="&&z.6v(z.K-m[5].K)==m[5]||(O=="*="||O=="~=")&&z.1h(m[5])>=0)^h)g.1p(a)}r=g}N G(m[1]==":"&&m[2]=="3a-4u"){J e={},g=[],11=/(-?)(\\d*)n((?:\\+|-)?\\d*)/.2D(m[3]=="6D"&&"2n"||m[3]=="6C"&&"2n+1"||!/\\D/.11(m[3])&&"8q+"+m[3]||m[3]),3o=(11[1]+(11[2]||1))-0,d=11[3]-0;R(J i=0,3i=r.K;i<3i;i++){J j=r[i],1d=j.1d,2v=D.L(1d);G(!e[2v]){J c=1;R(J n=1d.1x;n;n=n.2H)G(n.16==1)n.4q=c++;e[2v]=M}J b=Q;G(3o==0){G(j.4q==d)b=M}N G((j.4q-d)%3o==0&&(j.4q-d)/3o>=0)b=M;G(b^h)g.1p(j)}r=g}N{J f=D.6H[m[1]];G(1j f=="49")f=f[m[2]];G(1j f=="23")f=6u("Q||H(a,i){I "+f+";}");r=D.3C(r,H(a,i){I f(a,i,m,r)},h)}}I{r:r,t:t}},4S:H(b,c){J a=[],1t=b[c];1B(1t&&1t!=S){G(1t.16==1)a.1p(1t);1t=1t[c]}I a},3a:H(a,e,c,b){e=e||1;J d=0;R(;a;a=a[c])G(a.16==1&&++d==e)1X;I a},5v:H(n,a){J r=[];R(;n;n=n.2H){G(n.16==1&&n!=a)r.1p(n)}I r}});D.W={1e:H(f,i,g,e){G(f.16==3||f.16==8)I;G(D.14.1f&&f.4I)f=1b;G(!g.24)g.24=7.24++;G(e!=12){J h=g;g=7.3M(h,H(){I h.1w(7,19)});g.L=e}J j=D.L(f,"3w")||D.L(f,"3w",{}),1H=D.L(f,"1H")||D.L(f,"1H",H(){G(1j D!="12"&&!D.W.5k)I D.W.1H.1w(19.3L.T,19)});1H.T=f;D.P(i.1R(/\\s+/),H(c,b){J a=b.1R(".");b=a[0];g.O=a[1];J d=j[b];G(!d){d=j[b]={};G(!D.W.2t[b]||D.W.2t[b].4p.1k(f)===Q){G(f.3K)f.3K(b,1H,Q);N G(f.6t)f.6t("4o"+b,1H)}}d[g.24]=g;D.W.26[b]=M});f=U},24:1,26:{},21:H(e,h,f){G(e.16==3||e.16==8)I;J i=D.L(e,"3w"),1L,5i;G(i){G(h==12||(1j h=="23"&&h.8p(0)=="."))R(J g 1n i)7.21(e,g+(h||""));N{G(h.O){f=h.2y;h=h.O}D.P(h.1R(/\\s+/),H(b,a){J c=a.1R(".");a=c[0];G(i[a]){G(f)2U i[a][f.24];N R(f 1n i[a])G(!c[1]||i[a][f].O==c[1])2U i[a][f];R(1L 1n i[a])1X;G(!1L){G(!D.W.2t[a]||D.W.2t[a].4A.1k(e)===Q){G(e.6p)e.6p(a,D.L(e,"1H"),Q);N G(e.6n)e.6n("4o"+a,D.L(e,"1H"))}1L=U;2U i[a]}}})}R(1L 1n i)1X;G(!1L){J d=D.L(e,"1H");G(d)d.T=U;D.3b(e,"3w");D.3b(e,"1H")}}},1P:H(h,c,f,g,i){c=D.2d(c);G(h.1h("!")>=0){h=h.3s(0,-1);J a=M}G(!f){G(7.26[h])D("*").1e([1b,S]).1P(h,c)}N{G(f.16==3||f.16==8)I 12;J b,1L,17=D.1D(f[h]||U),W=!c[0]||!c[0].32;G(W){c.6h({O:h,2J:f,32:H(){},3J:H(){},4C:1z()});c[0][E]=M}c[0].O=h;G(a)c[0].6m=M;J d=D.L(f,"1H");G(d)b=d.1w(f,c);G((!17||(D.Y(f,\'a\')&&h=="4V"))&&f["4o"+h]&&f["4o"+h].1w(f,c)===Q)b=Q;G(W)c.4s();G(i&&D.1D(i)){1L=i.1w(f,b==U?c:c.7d(b));G(1L!==12)b=1L}G(17&&g!==Q&&b!==Q&&!(D.Y(f,\'a\')&&h=="4V")){7.5k=M;1U{f[h]()}1V(e){}}7.5k=Q}I b},1H:H(b){J a,1L,38,5f,4m;b=19[0]=D.W.6l(b||1b.W);38=b.O.1R(".");b.O=38[0];38=38[1];5f=!38&&!b.6m;4m=(D.L(7,"3w")||{})[b.O];R(J j 1n 4m){J c=4m[j];G(5f||c.O==38){b.2y=c;b.L=c.L;1L=c.1w(7,19);G(a!==Q)a=1L;G(1L===Q){b.32();b.3J()}}}I a},6l:H(b){G(b[E]==M)I b;J d=b;b={8o:d};J c="8n 8m 8l 8k 2s 8j 47 5d 6j 5E 8i L 8h 8g 4K 2y 5a 59 8e 8b 58 6f 8a 88 4k 87 86 84 6d 2J 4C 6c O 82 81 35".1R(" ");R(J i=c.K;i;i--)b[c[i]]=d[c[i]];b[E]=M;b.32=H(){G(d.32)d.32();d.80=Q};b.3J=H(){G(d.3J)d.3J();d.7Z=M};b.4C=b.4C||1z();G(!b.2J)b.2J=b.6d||S;G(b.2J.16==3)b.2J=b.2J.1d;G(!b.4k&&b.4K)b.4k=b.4K==b.2J?b.6c:b.4K;G(b.58==U&&b.5d!=U){J a=S.1C,1c=S.1c;b.58=b.5d+(a&&a.2e||1c&&1c.2e||0)-(a.6b||0);b.6f=b.6j+(a&&a.2c||1c&&1c.2c||0)-(a.6a||0)}G(!b.35&&((b.47||b.47===0)?b.47:b.5a))b.35=b.47||b.5a;G(!b.59&&b.5E)b.59=b.5E;G(!b.35&&b.2s)b.35=(b.2s&1?1:(b.2s&2?3:(b.2s&4?2:0)));I b},3M:H(a,b){b.24=a.24=a.24||b.24||7.24++;I b},2t:{27:{4p:H(){55();I},4A:H(){I}},3D:{4p:H(){G(D.14.1f)I Q;D(7).2O("53",D.W.2t.3D.2y);I M},4A:H(){G(D.14.1f)I Q;D(7).4e("53",D.W.2t.3D.2y);I M},2y:H(a){G(F(a,7))I M;a.O="3D";I D.W.1H.1w(7,19)}},3N:{4p:H(){G(D.14.1f)I Q;D(7).2O("51",D.W.2t.3N.2y);I M},4A:H(){G(D.14.1f)I Q;D(7).4e("51",D.W.2t.3N.2y);I M},2y:H(a){G(F(a,7))I M;a.O="3N";I D.W.1H.1w(7,19)}}}};D.17.1l({2O:H(c,a,b){I c=="4X"?7.2V(c,a,b):7.P(H(){D.W.1e(7,c,b||a,b&&a)})},2V:H(d,b,c){J e=D.W.3M(c||b,H(a){D(7).4e(a,e);I(c||b).1w(7,19)});I 7.P(H(){D.W.1e(7,d,e,c&&b)})},4e:H(a,b){I 7.P(H(){D.W.21(7,a,b)})},1P:H(c,a,b){I 7.P(H(){D.W.1P(c,a,7,M,b)})},5C:H(c,a,b){I 7[0]&&D.W.1P(c,a,7[0],Q,b)},2m:H(b){J c=19,i=1;1B(i<c.K)D.W.3M(b,c[i++]);I 7.4V(D.W.3M(b,H(a){7.4Z=(7.4Z||0)%i;a.32();I c[7.4Z++].1w(7,19)||Q}))},7X:H(a,b){I 7.2O(\'3D\',a).2O(\'3N\',b)},27:H(a){55();G(D.2Q)a.1k(S,D);N D.3A.1p(H(){I a.1k(7,D)});I 7}});D.1l({2Q:Q,3A:[],27:H(){G(!D.2Q){D.2Q=M;G(D.3A){D.P(D.3A,H(){7.1k(S)});D.3A=U}D(S).5C("27")}}});J x=Q;H 55(){G(x)I;x=M;G(S.3K&&!D.14.2G)S.3K("69",D.27,Q);G(D.14.1f&&1b==1S)(H(){G(D.2Q)I;1U{S.1C.7V("1A")}1V(3e){3B(19.3L,0);I}D.27()})();G(D.14.2G)S.3K("69",H(){G(D.2Q)I;R(J i=0;i<S.4W.K;i++)G(S.4W[i].3R){3B(19.3L,0);I}D.27()},Q);G(D.14.2k){J a;(H(){G(D.2Q)I;G(S.3f!="68"&&S.3f!="1J"){3B(19.3L,0);I}G(a===12)a=D("V, 7A[7U=7S]").K;G(S.4W.K!=a){3B(19.3L,0);I}D.27()})()}D.W.1e(1b,"43",D.27)}D.P(("7R,7Q,43,85,4y,4X,4V,7P,"+"7O,7N,89,53,51,7M,2A,"+"5o,7L,7K,8d,3e").1R(","),H(i,b){D.17[b]=H(a){I a?7.2O(b,a):7.1P(b)}});J F=H(a,c){J b=a.4k;1B(b&&b!=c)1U{b=b.1d}1V(3e){b=c}I b==c};D(1b).2O("4X",H(){D("*").1e(S).4e()});D.17.1l({67:D.17.43,43:H(g,d,c){G(1j g!=\'23\')I 7.67(g);J e=g.1h(" ");G(e>=0){J i=g.3s(e,g.K);g=g.3s(0,e)}c=c||H(){};J f="2P";G(d)G(D.1D(d)){c=d;d=U}N{d=D.3n(d);f="6g"}J h=7;D.3Y({1a:g,O:f,1O:"2K",L:d,1J:H(a,b){G(b=="1W"||b=="7J")h.2K(i?D("<1v/>").3v(a.4U.1o(/<1m(.|\\s)*?\\/1m>/g,"")).2q(i):a.4U);h.P(c,[a.4U,b,a])}});I 7},aL:H(){I D.3n(7.7I())},7I:H(){I 7.2l(H(){I D.Y(7,"3V")?D.2d(7.aH):7}).1E(H(){I 7.34&&!7.3R&&(7.4J||/2A|6y/i.11(7.Y)||/1r|1G|3Q/i.11(7.O))}).2l(H(i,c){J b=D(7).6e();I b==U?U:b.1q==2p?D.2l(b,H(a,i){I{34:c.34,2x:a}}):{34:c.34,2x:b}}).3p()}});D.P("7H,7G,7F,7D,7C,7B".1R(","),H(i,o){D.17[o]=H(f){I 7.2O(o,f)}});J B=1z();D.1l({3p:H(d,b,a,c){G(D.1D(b)){a=b;b=U}I D.3Y({O:"2P",1a:d,L:b,1W:a,1O:c})},aE:H(b,a){I D.3p(b,U,a,"1m")},aD:H(c,b,a){I D.3p(c,b,a,"3z")},aC:H(d,b,a,c){G(D.1D(b)){a=b;b={}}I D.3Y({O:"6g",1a:d,L:b,1W:a,1O:c})},aA:H(a){D.1l(D.60,a)},60:{1a:5Z.5Q,26:M,O:"2P",2T:0,7z:"4R/x-ax-3V-aw",7x:M,31:M,L:U,5Y:U,3Q:U,4Q:{2N:"4R/2N, 1r/2N",2K:"1r/2K",1m:"1r/4t, 4R/4t",3z:"4R/3z, 1r/4t",1r:"1r/as",4w:"*/*"}},4z:{},3Y:H(s){s=D.1l(M,s,D.1l(M,{},D.60,s));J g,2Z=/=\\?(&|$)/g,1u,L,O=s.O.2r();G(s.L&&s.7x&&1j s.L!="23")s.L=D.3n(s.L);G(s.1O=="4P"){G(O=="2P"){G(!s.1a.1I(2Z))s.1a+=(s.1a.1I(/\\?/)?"&":"?")+(s.4P||"7u")+"=?"}N G(!s.L||!s.L.1I(2Z))s.L=(s.L?s.L+"&":"")+(s.4P||"7u")+"=?";s.1O="3z"}G(s.1O=="3z"&&(s.L&&s.L.1I(2Z)||s.1a.1I(2Z))){g="4P"+B++;G(s.L)s.L=(s.L+"").1o(2Z,"="+g+"$1");s.1a=s.1a.1o(2Z,"="+g+"$1");s.1O="1m";1b[g]=H(a){L=a;1W();1J();1b[g]=12;1U{2U 1b[g]}1V(e){}G(i)i.37(h)}}G(s.1O=="1m"&&s.1Y==U)s.1Y=Q;G(s.1Y===Q&&O=="2P"){J j=1z();J k=s.1a.1o(/(\\?|&)3m=.*?(&|$)/,"$ap="+j+"$2");s.1a=k+((k==s.1a)?(s.1a.1I(/\\?/)?"&":"?")+"3m="+j:"")}G(s.L&&O=="2P"){s.1a+=(s.1a.1I(/\\?/)?"&":"?")+s.L;s.L=U}G(s.26&&!D.4O++)D.W.1P("7H");J n=/^(?:\\w+:)?\\/\\/([^\\/?#]+)/;G(s.1O=="1m"&&O=="2P"&&n.11(s.1a)&&n.2D(s.1a)[1]!=5Z.al){J i=S.3H("6w")[0];J h=S.3h("1m");h.4d=s.1a;G(s.7t)h.aj=s.7t;G(!g){J l=Q;h.ah=h.ag=H(){G(!l&&(!7.3f||7.3f=="68"||7.3f=="1J")){l=M;1W();1J();i.37(h)}}}i.3U(h);I 12}J m=Q;J c=1b.7s?2B 7s("ae.ac"):2B 7r();G(s.5Y)c.6R(O,s.1a,s.31,s.5Y,s.3Q);N c.6R(O,s.1a,s.31);1U{G(s.L)c.4B("ab-aa",s.7z);G(s.5S)c.4B("a9-5R-a8",D.4z[s.1a]||"a7, a6 a5 a4 5N:5N:5N a2");c.4B("X-9Z-9Y","7r");c.4B("9W",s.1O&&s.4Q[s.1O]?s.4Q[s.1O]+", */*":s.4Q.4w)}1V(e){}G(s.7m&&s.7m(c,s)===Q){s.26&&D.4O--;c.7l();I Q}G(s.26)D.W.1P("7B",[c,s]);J d=H(a){G(!m&&c&&(c.3f==4||a=="2T")){m=M;G(f){7k(f);f=U}1u=a=="2T"&&"2T"||!D.7j(c)&&"3e"||s.5S&&D.7h(c,s.1a)&&"7J"||"1W";G(1u=="1W"){1U{L=D.6X(c,s.1O,s.9S)}1V(e){1u="5J"}}G(1u=="1W"){J b;1U{b=c.5I("7g-5R")}1V(e){}G(s.5S&&b)D.4z[s.1a]=b;G(!g)1W()}N D.5H(s,c,1u);1J();G(s.31)c=U}};G(s.31){J f=4I(d,13);G(s.2T>0)3B(H(){G(c){c.7l();G(!m)d("2T")}},s.2T)}1U{c.9P(s.L)}1V(e){D.5H(s,c,U,e)}G(!s.31)d();H 1W(){G(s.1W)s.1W(L,1u);G(s.26)D.W.1P("7C",[c,s])}H 1J(){G(s.1J)s.1J(c,1u);G(s.26)D.W.1P("7F",[c,s]);G(s.26&&!--D.4O)D.W.1P("7G")}I c},5H:H(s,a,b,e){G(s.3e)s.3e(a,b,e);G(s.26)D.W.1P("7D",[a,s,e])},4O:0,7j:H(a){1U{I!a.1u&&5Z.9O=="5p:"||(a.1u>=7e&&a.1u<9N)||a.1u==7c||a.1u==9K||D.14.2k&&a.1u==12}1V(e){}I Q},7h:H(a,c){1U{J b=a.5I("7g-5R");I a.1u==7c||b==D.4z[c]||D.14.2k&&a.1u==12}1V(e){}I Q},6X:H(a,c,b){J d=a.5I("9J-O"),2N=c=="2N"||!c&&d&&d.1h("2N")>=0,L=2N?a.9I:a.4U;G(2N&&L.1C.2j=="5J")7p"5J";G(b)L=b(L,c);G(c=="1m")D.5u(L);G(c=="3z")L=6u("("+L+")");I L},3n:H(a){J s=[];G(a.1q==2p||a.5w)D.P(a,H(){s.1p(3u(7.34)+"="+3u(7.2x))});N R(J j 1n a)G(a[j]&&a[j].1q==2p)D.P(a[j],H(){s.1p(3u(j)+"="+3u(7))});N s.1p(3u(j)+"="+3u(D.1D(a[j])?a[j]():a[j]));I s.6s("&").1o(/%20/g,"+")}});D.17.1l({1N:H(c,b){I c?7.2g({1Z:"1N",2h:"1N",1y:"1N"},c,b):7.1E(":1G").P(H(){7.V.18=7.5D||"";G(D.1g(7,"18")=="2F"){J a=D("<"+7.2j+" />").6P("1c");7.V.18=a.1g("18");G(7.V.18=="2F")7.V.18="3I";a.21()}}).3l()},1M:H(b,a){I b?7.2g({1Z:"1M",2h:"1M",1y:"1M"},b,a):7.1E(":4j").P(H(){7.5D=7.5D||D.1g(7,"18");7.V.18="2F"}).3l()},78:D.17.2m,2m:H(a,b){I D.1D(a)&&D.1D(b)?7.78.1w(7,19):a?7.2g({1Z:"2m",2h:"2m",1y:"2m"},a,b):7.P(H(){D(7)[D(7).3F(":1G")?"1N":"1M"]()})},9G:H(b,a){I 7.2g({1Z:"1N"},b,a)},9F:H(b,a){I 7.2g({1Z:"1M"},b,a)},9E:H(b,a){I 7.2g({1Z:"2m"},b,a)},9D:H(b,a){I 7.2g({1y:"1N"},b,a)},9M:H(b,a){I 7.2g({1y:"1M"},b,a)},9C:H(c,a,b){I 7.2g({1y:a},c,b)},2g:H(k,j,i,g){J h=D.77(j,i,g);I 7[h.36===Q?"P":"36"](H(){G(7.16!=1)I Q;J f=D.1l({},h),p,1G=D(7).3F(":1G"),46=7;R(p 1n k){G(k[p]=="1M"&&1G||k[p]=="1N"&&!1G)I f.1J.1k(7);G(p=="1Z"||p=="2h"){f.18=D.1g(7,"18");f.33=7.V.33}}G(f.33!=U)7.V.33="1G";f.45=D.1l({},k);D.P(k,H(c,a){J e=2B D.28(46,f,c);G(/2m|1N|1M/.11(a))e[a=="2m"?1G?"1N":"1M":a](k);N{J b=a.6r().1I(/^([+-]=)?([\\d+-.]+)(.*)$/),2b=e.1t(M)||0;G(b){J d=3d(b[2]),2M=b[3]||"2X";G(2M!="2X"){46.V[c]=(d||1)+2M;2b=((d||1)/e.1t(M))*2b;46.V[c]=2b+2M}G(b[1])d=((b[1]=="-="?-1:1)*d)+2b;e.3G(2b,d,2M)}N e.3G(2b,a,"")}});I M})},36:H(a,b){G(D.1D(a)||(a&&a.1q==2p)){b=a;a="28"}G(!a||(1j a=="23"&&!b))I A(7[0],a);I 7.P(H(){G(b.1q==2p)A(7,a,b);N{A(7,a).1p(b);G(A(7,a).K==1)b.1k(7)}})},9X:H(b,c){J a=D.3O;G(b)7.36([]);7.P(H(){R(J i=a.K-1;i>=0;i--)G(a[i].T==7){G(c)a[i](M);a.7n(i,1)}});G(!c)7.5A();I 7}});J A=H(b,c,a){G(b){c=c||"28";J q=D.L(b,c+"36");G(!q||a)q=D.L(b,c+"36",D.2d(a))}I q};D.17.5A=H(a){a=a||"28";I 7.P(H(){J q=A(7,a);q.4s();G(q.K)q[0].1k(7)})};D.1l({77:H(b,a,c){J d=b&&b.1q==a0?b:{1J:c||!c&&a||D.1D(b)&&b,2u:b,41:c&&a||a&&a.1q!=9t&&a};d.2u=(d.2u&&d.2u.1q==4L?d.2u:D.28.5K[d.2u])||D.28.5K.74;d.5M=d.1J;d.1J=H(){G(d.36!==Q)D(7).5A();G(D.1D(d.5M))d.5M.1k(7)};I d},41:{73:H(p,n,b,a){I b+a*p},5P:H(p,n,b,a){I((-29.9r(p*29.9q)/2)+0.5)*a+b}},3O:[],48:U,28:H(b,c,a){7.15=c;7.T=b;7.1i=a;G(!c.3Z)c.3Z={}}});D.28.44={4D:H(){G(7.15.2Y)7.15.2Y.1k(7.T,7.1z,7);(D.28.2Y[7.1i]||D.28.2Y.4w)(7);G(7.1i=="1Z"||7.1i=="2h")7.T.V.18="3I"},1t:H(a){G(7.T[7.1i]!=U&&7.T.V[7.1i]==U)I 7.T[7.1i];J r=3d(D.1g(7.T,7.1i,a));I r&&r>-9p?r:3d(D.2a(7.T,7.1i))||0},3G:H(c,b,d){7.5V=1z();7.2b=c;7.3l=b;7.2M=d||7.2M||"2X";7.1z=7.2b;7.2S=7.4N=0;7.4D();J e=7;H t(a){I e.2Y(a)}t.T=7.T;D.3O.1p(t);G(D.48==U){D.48=4I(H(){J a=D.3O;R(J i=0;i<a.K;i++)G(!a[i]())a.7n(i--,1);G(!a.K){7k(D.48);D.48=U}},13)}},1N:H(){7.15.3Z[7.1i]=D.1K(7.T.V,7.1i);7.15.1N=M;7.3G(0,7.1t());G(7.1i=="2h"||7.1i=="1Z")7.T.V[7.1i]="9m";D(7.T).1N()},1M:H(){7.15.3Z[7.1i]=D.1K(7.T.V,7.1i);7.15.1M=M;7.3G(7.1t(),0)},2Y:H(a){J t=1z();G(a||t>7.15.2u+7.5V){7.1z=7.3l;7.2S=7.4N=1;7.4D();7.15.45[7.1i]=M;J b=M;R(J i 1n 7.15.45)G(7.15.45[i]!==M)b=Q;G(b){G(7.15.18!=U){7.T.V.33=7.15.33;7.T.V.18=7.15.18;G(D.1g(7.T,"18")=="2F")7.T.V.18="3I"}G(7.15.1M)7.T.V.18="2F";G(7.15.1M||7.15.1N)R(J p 1n 7.15.45)D.1K(7.T.V,p,7.15.3Z[p])}G(b)7.15.1J.1k(7.T);I Q}N{J n=t-7.5V;7.4N=n/7.15.2u;7.2S=D.41[7.15.41||(D.41.5P?"5P":"73")](7.4N,n,0,1,7.15.2u);7.1z=7.2b+((7.3l-7.2b)*7.2S);7.4D()}I M}};D.1l(D.28,{5K:{9l:9j,9i:7e,74:9g},2Y:{2e:H(a){a.T.2e=a.1z},2c:H(a){a.T.2c=a.1z},1y:H(a){D.1K(a.T.V,"1y",a.1z)},4w:H(a){a.T.V[a.1i]=a.1z+a.2M}}});D.17.2i=H(){J b=0,1S=0,T=7[0],3q;G(T)ao(D.14){J d=T.1d,4a=T,1s=T.1s,1Q=T.2z,5U=2k&&3r(5B)<9c&&!/9a/i.11(v),1g=D.2a,3c=1g(T,"30")=="3c";G(T.7y){J c=T.7y();1e(c.1A+29.2f(1Q.1C.2e,1Q.1c.2e),c.1S+29.2f(1Q.1C.2c,1Q.1c.2c));1e(-1Q.1C.6b,-1Q.1C.6a)}N{1e(T.5X,T.5W);1B(1s){1e(1s.5X,1s.5W);G(42&&!/^t(98|d|h)$/i.11(1s.2j)||2k&&!5U)2C(1s);G(!3c&&1g(1s,"30")=="3c")3c=M;4a=/^1c$/i.11(1s.2j)?4a:1s;1s=1s.1s}1B(d&&d.2j&&!/^1c|2K$/i.11(d.2j)){G(!/^96|1T.*$/i.11(1g(d,"18")))1e(-d.2e,-d.2c);G(42&&1g(d,"33")!="4j")2C(d);d=d.1d}G((5U&&(3c||1g(4a,"30")=="5x"))||(42&&1g(4a,"30")!="5x"))1e(-1Q.1c.5X,-1Q.1c.5W);G(3c)1e(29.2f(1Q.1C.2e,1Q.1c.2e),29.2f(1Q.1C.2c,1Q.1c.2c))}3q={1S:1S,1A:b}}H 2C(a){1e(D.2a(a,"6V",M),D.2a(a,"6U",M))}H 1e(l,t){b+=3r(l,10)||0;1S+=3r(t,10)||0}I 3q};D.17.1l({30:H(){J a=0,1S=0,3q;G(7[0]){J b=7.1s(),2i=7.2i(),4c=/^1c|2K$/i.11(b[0].2j)?{1S:0,1A:0}:b.2i();2i.1S-=25(7,\'94\');2i.1A-=25(7,\'aF\');4c.1S+=25(b,\'6U\');4c.1A+=25(b,\'6V\');3q={1S:2i.1S-4c.1S,1A:2i.1A-4c.1A}}I 3q},1s:H(){J a=7[0].1s;1B(a&&(!/^1c|2K$/i.11(a.2j)&&D.1g(a,\'30\')==\'93\'))a=a.1s;I D(a)}});D.P([\'5e\',\'5G\'],H(i,b){J c=\'4y\'+b;D.17[c]=H(a){G(!7[0])I;I a!=12?7.P(H(){7==1b||7==S?1b.92(!i?a:D(1b).2e(),i?a:D(1b).2c()):7[c]=a}):7[0]==1b||7[0]==S?46[i?\'aI\':\'aJ\']||D.71&&S.1C[c]||S.1c[c]:7[0][c]}});D.P(["6N","4b"],H(i,b){J c=i?"5e":"5G",4f=i?"6k":"6i";D.17["5s"+b]=H(){I 7[b.3y()]()+25(7,"57"+c)+25(7,"57"+4f)};D.17["90"+b]=H(a){I 7["5s"+b]()+25(7,"2C"+c+"4b")+25(7,"2C"+4f+"4b")+(a?25(7,"6S"+c)+25(7,"6S"+4f):0)}})})();',62,669,'|||||||this|||||||||||||||||||||||||||||||||||if|function|return|var|length|data|true|else|type|each|false|for|document|elem|null|style|event||nodeName|||test|undefined||browser|options|nodeType|fn|display|arguments|url|window|body|parentNode|add|msie|css|indexOf|prop|typeof|call|extend|script|in|replace|push|constructor|text|offsetParent|cur|status|div|apply|firstChild|opacity|now|left|while|documentElement|isFunction|filter|className|hidden|handle|match|complete|attr|ret|hide|show|dataType|trigger|doc|split|top|table|try|catch|success|break|cache|height||remove|tbody|string|guid|num|global|ready|fx|Math|curCSS|start|scrollTop|makeArray|scrollLeft|max|animate|width|offset|tagName|safari|map|toggle||done|Array|find|toUpperCase|button|special|duration|id|copy|value|handler|ownerDocument|select|new|border|exec|stack|none|opera|nextSibling|pushStack|target|html|inArray|unit|xml|bind|GET|isReady|merge|pos|timeout|delete|one|selected|px|step|jsre|position|async|preventDefault|overflow|name|which|queue|removeChild|namespace|insertBefore|nth|removeData|fixed|parseFloat|error|readyState|multiFilter|createElement|rl|re|trim|end|_|param|first|get|results|parseInt|slice|childNodes|encodeURIComponent|append|events|elems|toLowerCase|json|readyList|setTimeout|grep|mouseenter|color|is|custom|getElementsByTagName|block|stopPropagation|addEventListener|callee|proxy|mouseleave|timers|defaultView|password|disabled|last|has|appendChild|form|domManip|props|ajax|orig|set|easing|mozilla|load|prototype|curAnim|self|charCode|timerId|object|offsetChild|Width|parentOffset|src|unbind|br|currentStyle|clean|float|visible|relatedTarget|previousSibling|handlers|isXMLDoc|on|setup|nodeIndex|unique|shift|javascript|child|RegExp|_default|deep|scroll|lastModified|teardown|setRequestHeader|timeStamp|update|empty|tr|getAttribute|innerHTML|setInterval|checked|fromElement|Number|jQuery|state|active|jsonp|accepts|application|dir|input|responseText|click|styleSheets|unload|not|lastToggle|outline|mouseout|getPropertyValue|mouseover|getComputedStyle|bindReady|String|padding|pageX|metaKey|keyCode|getWH|andSelf|clientX|Left|all|visibility|container|index|init|triggered|removeAttribute|classFilter|prevObject|submit|file|after|windowData|inner|client|globalEval|sibling|jquery|absolute|clone|wrapAll|dequeue|version|triggerHandler|oldblock|ctrlKey|createTextNode|Top|handleError|getResponseHeader|parsererror|speeds|checkbox|old|00|radio|swing|href|Modified|ifModified|lastChild|safari2|startTime|offsetTop|offsetLeft|username|location|ajaxSettings|getElementById|isSimple|values|selectedIndex|runtimeStyle|rsLeft|_load|loaded|DOMContentLoaded|clientTop|clientLeft|toElement|srcElement|val|pageY|POST|unshift|Bottom|clientY|Right|fix|exclusive|detachEvent|cloneNode|removeEventListener|swap|toString|join|attachEvent|eval|substr|head|parse|textarea|reset|image|zoom|odd|even|before|prepend|exclude|expr|quickClass|quickID|uuid|quickChild|continue|Height|textContent|appendTo|contents|open|margin|evalScript|borderTopWidth|borderLeftWidth|parent|httpData|setArray|CSS1Compat|compatMode|boxModel|cssFloat|linear|def|webkit|nodeValue|speed|_toggle|eq|100|replaceWith|304|concat|200|alpha|Last|httpNotModified|getAttributeNode|httpSuccess|clearInterval|abort|beforeSend|splice|styleFloat|throw|colgroup|XMLHttpRequest|ActiveXObject|scriptCharset|callback|fieldset|multiple|processData|getBoundingClientRect|contentType|link|ajaxSend|ajaxSuccess|ajaxError|col|ajaxComplete|ajaxStop|ajaxStart|serializeArray|notmodified|keypress|keydown|change|mouseup|mousedown|dblclick|focus|blur|stylesheet|hasClass|rel|doScroll|black|hover|solid|cancelBubble|returnValue|wheelDelta|view|round|shiftKey|resize|screenY|screenX|relatedNode|mousemove|prevValue|originalTarget|offsetHeight|keyup|newValue|offsetWidth|eventPhase|detail|currentTarget|cancelable|bubbles|attrName|attrChange|altKey|originalEvent|charAt|0n|substring|animated|header|noConflict|line|enabled|innerText|contains|only|weight|font|gt|lt|uFFFF|u0128|size|417|Boolean|Date|toggleClass|removeClass|addClass|removeAttr|replaceAll|insertAfter|prependTo|wrap|contentWindow|contentDocument|iframe|children|siblings|prevAll|wrapInner|nextAll|outer|prev|scrollTo|static|marginTop|next|inline|parents|able|cellSpacing|adobeair|cellspacing|522|maxLength|maxlength|readOnly|400|readonly|fast|600|class|slow|1px|htmlFor|reverse|10000|PI|cos|compatible|Function|setData|ie|ra|it|rv|getData|userAgent|navigator|fadeTo|fadeIn|slideToggle|slideUp|slideDown|ig|responseXML|content|1223|NaN|fadeOut|300|protocol|send|setAttribute|option|dataFilter|cssText|changed|be|Accept|stop|With|Requested|Object|can|GMT|property|1970|Jan|01|Thu|Since|If|Type|Content|XMLHTTP|th|Microsoft|td|onreadystatechange|onload|cap|charset|colg|host|tfoot|specified|with|1_|thead|leg|plain|attributes|opt|embed|urlencoded|www|area|hr|ajaxSetup|meta|post|getJSON|getScript|marginLeft|img|elements|pageYOffset|pageXOffset|abbr|serialize|pixelLeft'.split('|'),0,{}));
// $Id: drupal.js,v 1.41.2.4 2009/07/21 08:59:10 goba Exp $

var Drupal = Drupal || { 'settings': {}, 'behaviors': {}, 'themes': {}, 'locale': {} };

/**
 * Set the variable that indicates if JavaScript behaviors should be applied
 */
Drupal.jsEnabled = document.getElementsByTagName && document.createElement && document.createTextNode && document.documentElement && document.getElementById;

/**
 * Attach all registered behaviors to a page element.
 *
 * Behaviors are event-triggered actions that attach to page elements, enhancing
 * default non-Javascript UIs. Behaviors are registered in the Drupal.behaviors
 * object as follows:
 * @code
 *    Drupal.behaviors.behaviorName = function () {
 *      ...
 *    };
 * @endcode
 *
 * Drupal.attachBehaviors is added below to the jQuery ready event and so
 * runs on initial page load. Developers implementing AHAH/AJAX in their
 * solutions should also call this function after new page content has been
 * loaded, feeding in an element to be processed, in order to attach all
 * behaviors to the new content.
 *
 * Behaviors should use a class in the form behaviorName-processed to ensure
 * the behavior is attached only once to a given element. (Doing so enables
 * the reprocessing of given elements, which may be needed on occasion despite
 * the ability to limit behavior attachment to a particular element.)
 *
 * @param context
 *   An element to attach behaviors to. If none is given, the document element
 *   is used.
 */
Drupal.attachBehaviors = function(context) {
  context = context || document;
  if (Drupal.jsEnabled) {
    // Execute all of them.
    jQuery.each(Drupal.behaviors, function() {
      this(context);
    });
  }
};

/**
 * Encode special characters in a plain-text string for display as HTML.
 */
Drupal.checkPlain = function(str) {
  str = String(str);
  var replace = { '&': '&amp;', '"': '&quot;', '<': '&lt;', '>': '&gt;' };
  for (var character in replace) {
    var regex = new RegExp(character, 'g');
    str = str.replace(regex, replace[character]);
  }
  return str;
};

/**
 * Translate strings to the page language or a given language.
 *
 * See the documentation of the server-side t() function for further details.
 *
 * @param str
 *   A string containing the English string to translate.
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   Based on the first character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 * @return
 *   The translated string.
 */
Drupal.t = function(str, args) {
  // Fetch the localized version of the string.
  if (Drupal.locale.strings && Drupal.locale.strings[str]) {
    str = Drupal.locale.strings[str];
  }

  if (args) {
    // Transform arguments before inserting them
    for (var key in args) {
      switch (key.charAt(0)) {
        // Escaped only
        case '@':
          args[key] = Drupal.checkPlain(args[key]);
        break;
        // Pass-through
        case '!':
          break;
        // Escaped and placeholder
        case '%':
        default:
          args[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
      str = str.replace(key, args[key]);
    }
  }
  return str;
};

/**
 * Format a string containing a count of items.
 *
 * This function ensures that the string is pluralized correctly. Since Drupal.t() is
 * called by this function, make sure not to pass already-localized strings to it.
 *
 * See the documentation of the server-side format_plural() function for further details.
 *
 * @param count
 *   The item count to display.
 * @param singular
 *   The string for the singular case. Please make sure it is clear this is
 *   singular, to ease translation (e.g. use "1 new comment" instead of "1 new").
 *   Do not use @count in the singular string.
 * @param plural
 *   The string for the plural case. Please make sure it is clear this is plural,
 *   to ease translation. Use @count in place of the item count, as in "@count
 *   new comments".
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   Based on the first character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 *   Note that you do not need to include @count in this array.
 *   This replacement is done automatically for the plural case.
 * @return
 *   A translated string.
 */
Drupal.formatPlural = function(count, singular, plural, args) {
  var args = args || {};
  args['@count'] = count;
  // Determine the index of the plural form.
  var index = Drupal.locale.pluralFormula ? Drupal.locale.pluralFormula(args['@count']) : ((args['@count'] == 1) ? 0 : 1);

  if (index == 0) {
    return Drupal.t(singular, args);
  }
  else if (index == 1) {
    return Drupal.t(plural, args);
  }
  else {
    args['@count['+ index +']'] = args['@count'];
    delete args['@count'];
    return Drupal.t(plural.replace('@count', '@count['+ index +']'));
  }
};

/**
 * Generate the themed representation of a Drupal object.
 *
 * All requests for themed output must go through this function. It examines
 * the request and routes it to the appropriate theme function. If the current
 * theme does not provide an override function, the generic theme function is
 * called.
 *
 * For example, to retrieve the HTML that is output by theme_placeholder(text),
 * call Drupal.theme('placeholder', text).
 *
 * @param func
 *   The name of the theme function to call.
 * @param ...
 *   Additional arguments to pass along to the theme function.
 * @return
 *   Any data the theme function returns. This could be a plain HTML string,
 *   but also a complex object.
 */
Drupal.theme = function(func) {
  for (var i = 1, args = []; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  return (Drupal.theme[func] || Drupal.theme.prototype[func]).apply(this, args);
};

/**
 * Parse a JSON response.
 *
 * The result is either the JSON object, or an object with 'status' 0 and 'data' an error message.
 */
Drupal.parseJson = function (data) {
  if ((data.substring(0, 1) != '{') && (data.substring(0, 1) != '[')) {
    return { status: 0, data: data.length ? data : Drupal.t('Unspecified error') };
  }
  return eval('(' + data + ');');
};

/**
 * Freeze the current body height (as minimum height). Used to prevent
 * unnecessary upwards scrolling when doing DOM manipulations.
 */
Drupal.freezeHeight = function () {
  Drupal.unfreezeHeight();
  var div = document.createElement('div');
  $(div).css({
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '1px',
    height: $('body').css('height')
  }).attr('id', 'freeze-height');
  $('body').append(div);
};

/**
 * Unfreeze the body height
 */
Drupal.unfreezeHeight = function () {
  $('#freeze-height').remove();
};

/**
 * Wrapper around encodeURIComponent() which avoids Apache quirks (equivalent of
 * drupal_urlencode() in PHP). This function should only be used on paths, not
 * on query string arguments.
 */
Drupal.encodeURIComponent = function (item, uri) {
  uri = uri || location.href;
  item = encodeURIComponent(item).replace(/%2F/g, '/');
  return (uri.indexOf('?q=') != -1) ? item : item.replace(/%26/g, '%2526').replace(/%23/g, '%2523').replace(/\/\//g, '/%252F');
};

/**
 * Get the text selection in a textarea.
 */
Drupal.getSelection = function (element) {
  if (typeof(element.selectionStart) != 'number' && document.selection) {
    // The current selection
    var range1 = document.selection.createRange();
    var range2 = range1.duplicate();
    // Select all text.
    range2.moveToElementText(element);
    // Now move 'dummy' end point to end point of original range.
    range2.setEndPoint('EndToEnd', range1);
    // Now we can calculate start and end points.
    var start = range2.text.length - range1.text.length;
    var end = start + range1.text.length;
    return { 'start': start, 'end': end };
  }
  return { 'start': element.selectionStart, 'end': element.selectionEnd };
};

/**
 * Build an error message from ahah response.
 */
Drupal.ahahError = function(xmlhttp, uri) {
  if (xmlhttp.status == 200) {
    if (jQuery.trim($(xmlhttp.responseText).text())) {
      var message = Drupal.t("An error occurred. \n@uri\n@text", {'@uri': uri, '@text': xmlhttp.responseText });
    }
    else {
      var message = Drupal.t("An error occurred. \n@uri\n(no information available).", {'@uri': uri, '@text': xmlhttp.responseText });
    }
  }
  else {
    var message = Drupal.t("An HTTP error @status occurred. \n@uri", {'@uri': uri, '@status': xmlhttp.status });
  }
  return message;
}

// Global Killswitch on the <html> element
if (Drupal.jsEnabled) {
  // Global Killswitch on the <html> element
  $(document.documentElement).addClass('js');
  // 'js enabled' cookie
  document.cookie = 'has_js=1; path=/';
  // Attach all behaviors.
  $(document).ready(function() {
    Drupal.attachBehaviors(this);
  });
}

/**
 * The default themes.
 */
Drupal.theme.prototype = {

  /**
   * Formats text for emphasized display in a placeholder inside a sentence.
   *
   * @param str
   *   The text to format (plain-text).
   * @return
   *   The formatted text (html).
   */
  placeholder: function(str) {
    return '<em>' + Drupal.checkPlain(str) + '</em>';
  }
};
;
/* $Id: admin_menu.js,v 1.7.2.9 2010/02/20 23:53:18 sun Exp $ */

$(document).ready(function() {
  if (!$('#admin-menu').length) {
    return;
  }

  // Apply margin-top if enabled; directly applying marginTop doesn't work in IE.
  if (Drupal && Drupal.settings && Drupal.settings.admin_menu) {
    if (Drupal.settings.admin_menu.margin_top) {
      $('body').addClass('admin-menu');
    }
    if (Drupal.settings.admin_menu.position_fixed) {
      $('#admin-menu').css('position', 'fixed');
    }
    // Move page tabs into administration menu.
    if (Drupal.settings.admin_menu.tweak_tabs) {
      $('ul.tabs.primary li').each(function() {
        $(this).addClass('admin-menu-tab').appendTo('#admin-menu > ul');
      });
      $('ul.tabs.secondary').appendTo('#admin-menu > ul > li.admin-menu-tab.active').removeClass('secondary');
    }
    // Collapse fieldsets on Modules page. For why multiple selectors see #111719.
    if (Drupal.settings.admin_menu.tweak_modules) {
      $('#system-modules fieldset:not(.collapsed), #system-modules-1 fieldset:not(.collapsed)').addClass('collapsed');
    }
  }

  // Hover emulation for IE 6.
  if ($.browser.msie && parseInt(jQuery.browser.version) == 6) {
    $('#admin-menu li').hover(function() {
      $(this).addClass('iehover');
    }, function() {
      $(this).removeClass('iehover');
    });
  }

  // Delayed mouseout.
  $('#admin-menu li').hover(function() {
    // Stop the timer.
    clearTimeout(this.sfTimer);
    // Display child lists.
    $('> ul', this).css({left: 'auto', display: 'block'})
      // Immediately hide nephew lists.
      .parent().siblings('li').children('ul').css({left: '-999em', display: 'none'});
  }, function() {
    // Start the timer.
    var uls = $('> ul', this);
    this.sfTimer = setTimeout(function() {
      uls.css({left: '-999em', display: 'none'});
    }, 400);
  });
});
;
// $Id: og.js,v 1.9.2.3 2010/01/24 14:44:56 amitaibu Exp $

// Content type form
Drupal.behaviors.og_content_type = function() {
  // Disable the group limit textarea if the content type is not a standard group post
  $('input[name="og_content_type_usage"]').click(function(){
    if (!$('#edit-og-content-type-usage-group-post-standard').attr('checked')) {
      $('#edit-og-max-groups').attr('disabled','disabled');
    } else {
      $('#edit-og-max-groups').removeAttr('disabled');
    }
  });
  
  // Initial check to see if content type is standard group post
  if (!$('#edit-og-content-type-usage-group-post-standard').attr('checked')) {
    $('#edit-og-max-groups').attr('disabled','disabled');
  };
}


Drupal.verticalTabs = Drupal.verticalTabs || {};

Drupal.verticalTabs.og_nodeapi = function() {
  var values = [];
  $('.vertical-tabs-og_nodeapi #edit-og-groups :selected')
    .each(function (i, selected) {
      values[i] = $(selected).text();
    });

  return values.join(', ');
}

Drupal.verticalTabs.og = function() {
  var type = $('.vertical-tabs-og input[type=radio]:checked').val();
  
  switch (type) {
    case 'group':
      return Drupal.t('Group node');
      break;
      
    case 'omitted':
      return Drupal.t('May not be posted into a group.');
      break;
      
    case 'group_post_standard':
      return Drupal.t('Standard group post');
      break;
      
    case 'group_post_wiki':
      return Drupal.t('Wiki group post');
      break;
  }
}
;
// $Id: panels.js,v 1.2.4.1 2009/10/05 22:40:35 merlinofchaos Exp $

(function ($) {
  Drupal.Panels = {};

  Drupal.Panels.autoAttach = function() {
    if ($.browser.msie) {
      // If IE, attach a hover event so we can see our admin links.
      $("div.panel-pane").hover(
        function() {
          $('div.panel-hide', this).addClass("panel-hide-hover"); return true;
        },
        function() {
          $('div.panel-hide', this).removeClass("panel-hide-hover"); return true;
        }
      );
      $("div.admin-links").hover(
        function() {
          $(this).addClass("admin-links-hover"); return true;
        },
        function(){
          $(this).removeClass("admin-links-hover"); return true;
        }
      );
    }
  };

  $(Drupal.Panels.autoAttach);
})(jQuery);
;
/*
 * Shadowbox.js, version 3.0.3
 * http://shadowbox-js.com/
 *
 * Copyright 2007-2010, Michael J. I. Jackson
 * Date: 2010-10-21 04:59:13 +0000
 */
(function(window,undefined){var S={version:"3.0.3"};var ua=navigator.userAgent.toLowerCase();if(ua.indexOf("windows")>-1||ua.indexOf("win32")>-1){S.isWindows=true}else{if(ua.indexOf("macintosh")>-1||ua.indexOf("mac os x")>-1){S.isMac=true}else{if(ua.indexOf("linux")>-1){S.isLinux=true}}}S.isIE=ua.indexOf("msie")>-1;S.isIE6=ua.indexOf("msie 6")>-1;S.isIE7=ua.indexOf("msie 7")>-1;S.isGecko=ua.indexOf("gecko")>-1&&ua.indexOf("safari")==-1;S.isWebKit=ua.indexOf("applewebkit/")>-1;var inlineId=/#(.+)$/,galleryName=/^(light|shadow)box\[(.*?)\]/i,inlineParam=/\s*([a-z_]*?)\s*=\s*(.+)\s*/,fileExtension=/[0-9a-z]+$/i,scriptPath=/(.+\/)shadowbox\.js/i;var open=false,initialized=false,lastOptions={},slideDelay=0,slideStart,slideTimer;S.current=-1;S.dimensions=null;S.ease=function(state){return 1+Math.pow(state-1,3)};S.errorInfo={fla:{name:"Flash",url:"http://www.adobe.com/products/flashplayer/"},qt:{name:"QuickTime",url:"http://www.apple.com/quicktime/download/"},wmp:{name:"Windows Media Player",url:"http://www.microsoft.com/windows/windowsmedia/"},f4m:{name:"Flip4Mac",url:"http://www.flip4mac.com/wmv_download.htm"}};S.gallery=[];S.onReady=noop;S.path=null;S.player=null;S.playerId="sb-player";S.options={animate:true,animateFade:true,autoplayMovies:true,continuous:false,enableKeys:true,flashParams:{bgcolor:"#000000",allowfullscreen:true},flashVars:{},flashVersion:"9.0.115",handleOversize:"resize",handleUnsupported:"link",onChange:noop,onClose:noop,onFinish:noop,onOpen:noop,showMovieControls:true,skipSetup:false,slideshowDelay:0,viewportPadding:20};S.getCurrent=function(){return S.current>-1?S.gallery[S.current]:null};S.hasNext=function(){return S.gallery.length>1&&(S.current!=S.gallery.length-1||S.options.continuous)};S.isOpen=function(){return open};S.isPaused=function(){return slideTimer=="pause"};S.applyOptions=function(options){lastOptions=apply({},S.options);apply(S.options,options)};S.revertOptions=function(){apply(S.options,lastOptions)};S.init=function(options,callback){if(initialized){return}initialized=true;if(S.skin.options){apply(S.options,S.skin.options)}if(options){apply(S.options,options)}if(!S.path){var path,scripts=document.getElementsByTagName("script");for(var i=0,len=scripts.length;i<len;++i){path=scriptPath.exec(scripts[i].src);if(path){S.path=path[1];break}}}if(callback){S.onReady=callback}bindLoad()};S.open=function(obj){if(open){return}var gc=S.makeGallery(obj);S.gallery=gc[0];S.current=gc[1];obj=S.getCurrent();if(obj==null){return}S.applyOptions(obj.options||{});filterGallery();if(S.gallery.length){obj=S.getCurrent();if(S.options.onOpen(obj)===false){return}open=true;S.skin.onOpen(obj,load)}};S.close=function(){if(!open){return}open=false;if(S.player){S.player.remove();S.player=null}if(typeof slideTimer=="number"){clearTimeout(slideTimer);slideTimer=null}slideDelay=0;listenKeys(false);S.options.onClose(S.getCurrent());S.skin.onClose();S.revertOptions()};S.play=function(){if(!S.hasNext()){return}if(!slideDelay){slideDelay=S.options.slideshowDelay*1000}if(slideDelay){slideStart=now();slideTimer=setTimeout(function(){slideDelay=slideStart=0;S.next()},slideDelay);if(S.skin.onPlay){S.skin.onPlay()}}};S.pause=function(){if(typeof slideTimer!="number"){return}slideDelay=Math.max(0,slideDelay-(now()-slideStart));if(slideDelay){clearTimeout(slideTimer);slideTimer="pause";if(S.skin.onPause){S.skin.onPause()}}};S.change=function(index){if(!(index in S.gallery)){if(S.options.continuous){index=(index<0?S.gallery.length+index:0);if(!(index in S.gallery)){return}}else{return}}S.current=index;if(typeof slideTimer=="number"){clearTimeout(slideTimer);slideTimer=null;slideDelay=slideStart=0}S.options.onChange(S.getCurrent());load(true)};S.next=function(){S.change(S.current+1)};S.previous=function(){S.change(S.current-1)};S.setDimensions=function(height,width,maxHeight,maxWidth,topBottom,leftRight,padding,preserveAspect){var originalHeight=height,originalWidth=width;var extraHeight=2*padding+topBottom;if(height+extraHeight>maxHeight){height=maxHeight-extraHeight}var extraWidth=2*padding+leftRight;if(width+extraWidth>maxWidth){width=maxWidth-extraWidth}var changeHeight=(originalHeight-height)/originalHeight,changeWidth=(originalWidth-width)/originalWidth,oversized=(changeHeight>0||changeWidth>0);if(preserveAspect&&oversized){if(changeHeight>changeWidth){width=Math.round((originalWidth/originalHeight)*height)}else{if(changeWidth>changeHeight){height=Math.round((originalHeight/originalWidth)*width)}}}S.dimensions={height:height+topBottom,width:width+leftRight,innerHeight:height,innerWidth:width,top:Math.floor((maxHeight-(height+extraHeight))/2+padding),left:Math.floor((maxWidth-(width+extraWidth))/2+padding),oversized:oversized};return S.dimensions};S.makeGallery=function(obj){var gallery=[],current=-1;if(typeof obj=="string"){obj=[obj]}if(typeof obj.length=="number"){each(obj,function(i,o){if(o.content){gallery[i]=o}else{gallery[i]={content:o}}});current=0}else{if(obj.tagName){var cacheObj=S.getCache(obj);obj=cacheObj?cacheObj:S.makeObject(obj)}if(obj.gallery){gallery=[];var o;for(var key in S.cache){o=S.cache[key];if(o.gallery&&o.gallery==obj.gallery){if(current==-1&&o.content==obj.content){current=gallery.length}gallery.push(o)}}if(current==-1){gallery.unshift(obj);current=0}}else{gallery=[obj];current=0}}each(gallery,function(i,o){gallery[i]=apply({},o)});return[gallery,current]};S.makeObject=function(link,options){var obj={content:link.href,title:link.getAttribute("title")||"",link:link};if(options){options=apply({},options);each(["player","title","height","width","gallery"],function(i,o){if(typeof options[o]!="undefined"){obj[o]=options[o];delete options[o]}});obj.options=options}else{obj.options={}}if(!obj.player){obj.player=S.getPlayer(obj.content)}var rel=link.getAttribute("rel");if(rel){var match=rel.match(galleryName);if(match){obj.gallery=escape(match[2])}each(rel.split(";"),function(i,p){match=p.match(inlineParam);if(match){obj[match[1]]=match[2]}})}return obj};S.getPlayer=function(content){if(content.indexOf("#")>-1&&content.indexOf(document.location.href)==0){return"inline"}var q=content.indexOf("?");if(q>-1){content=content.substring(0,q)}var ext,m=content.match(fileExtension);if(m){ext=m[0].toLowerCase()}if(ext){if(S.img&&S.img.ext.indexOf(ext)>-1){return"img"}if(S.swf&&S.swf.ext.indexOf(ext)>-1){return"swf"}if(S.flv&&S.flv.ext.indexOf(ext)>-1){return"flv"}if(S.qt&&S.qt.ext.indexOf(ext)>-1){if(S.wmp&&S.wmp.ext.indexOf(ext)>-1){return"qtwmp"}else{return"qt"}}if(S.wmp&&S.wmp.ext.indexOf(ext)>-1){return"wmp"}}return"iframe"};function filterGallery(){var err=S.errorInfo,plugins=S.plugins,obj,remove,needed,m,format,replace,inlineEl,flashVersion;for(var i=0;i<S.gallery.length;++i){obj=S.gallery[i];remove=false;needed=null;switch(obj.player){case"flv":case"swf":if(!plugins.fla){needed="fla"}break;case"qt":if(!plugins.qt){needed="qt"}break;case"wmp":if(S.isMac){if(plugins.qt&&plugins.f4m){obj.player="qt"}else{needed="qtf4m"}}else{if(!plugins.wmp){needed="wmp"}}break;case"qtwmp":if(plugins.qt){obj.player="qt"}else{if(plugins.wmp){obj.player="wmp"}else{needed="qtwmp"}}break}if(needed){if(S.options.handleUnsupported=="link"){switch(needed){case"qtf4m":format="shared";replace=[err.qt.url,err.qt.name,err.f4m.url,err.f4m.name];break;case"qtwmp":format="either";replace=[err.qt.url,err.qt.name,err.wmp.url,err.wmp.name];break;default:format="single";replace=[err[needed].url,err[needed].name]}obj.player="html";obj.content='<div class="sb-message">'+sprintf(S.lang.errors[format],replace)+"</div>"}else{remove=true}}else{if(obj.player=="inline"){m=inlineId.exec(obj.content);if(m){inlineEl=get(m[1]);if(inlineEl){obj.content=inlineEl.innerHTML}else{remove=true}}else{remove=true}}else{if(obj.player=="swf"||obj.player=="flv"){flashVersion=(obj.options&&obj.options.flashVersion)||S.options.flashVersion;if(S.flash&&!S.flash.hasFlashPlayerVersion(flashVersion)){obj.width=310;obj.height=177}}}}if(remove){S.gallery.splice(i,1);if(i<S.current){--S.current}else{if(i==S.current){S.current=i>0?i-1:i}}--i}}}function listenKeys(on){if(!S.options.enableKeys){return}(on?addEvent:removeEvent)(document,"keydown",handleKey)}function handleKey(e){if(e.metaKey||e.shiftKey||e.altKey||e.ctrlKey){return}var code=keyCode(e),handler;switch(code){case 81:case 88:case 27:handler=S.close;break;case 37:handler=S.previous;break;case 39:handler=S.next;break;case 32:handler=typeof slideTimer=="number"?S.pause:S.play;break}if(handler){preventDefault(e);handler()}}function load(changing){listenKeys(false);var obj=S.getCurrent();var player=(obj.player=="inline"?"html":obj.player);if(typeof S[player]!="function"){throw"unknown player "+player}if(changing){S.player.remove();S.revertOptions();S.applyOptions(obj.options||{})}S.player=new S[player](obj,S.playerId);if(S.gallery.length>1){var next=S.gallery[S.current+1]||S.gallery[0];if(next.player=="img"){var a=new Image();a.src=next.content}var prev=S.gallery[S.current-1]||S.gallery[S.gallery.length-1];if(prev.player=="img"){var b=new Image();b.src=prev.content}}S.skin.onLoad(changing,waitReady)}function waitReady(){if(!open){return}if(typeof S.player.ready!="undefined"){var timer=setInterval(function(){if(open){if(S.player.ready){clearInterval(timer);timer=null;S.skin.onReady(show)}}else{clearInterval(timer);timer=null}},10)}else{S.skin.onReady(show)}}function show(){if(!open){return}S.player.append(S.skin.body,S.dimensions);S.skin.onShow(finish)}function finish(){if(!open){return}if(S.player.onLoad){S.player.onLoad()}S.options.onFinish(S.getCurrent());if(!S.isPaused()){S.play()}listenKeys(true)}if(!Array.prototype.indexOf){Array.prototype.indexOf=function(obj,from){var len=this.length>>>0;from=from||0;if(from<0){from+=len}for(;from<len;++from){if(from in this&&this[from]===obj){return from}}return -1}}function now(){return(new Date).getTime()}function apply(original,extension){for(var property in extension){original[property]=extension[property]}return original}function each(obj,callback){var i=0,len=obj.length;for(var value=obj[0];i<len&&callback.call(value,i,value)!==false;value=obj[++i]){}}function sprintf(str,replace){return str.replace(/\{(\w+?)\}/g,function(match,i){return replace[i]})}function noop(){}function get(id){return document.getElementById(id)}function remove(el){el.parentNode.removeChild(el)}var supportsOpacity=true,supportsFixed=true;function checkSupport(){var body=document.body,div=document.createElement("div");supportsOpacity=typeof div.style.opacity==="string";div.style.position="fixed";div.style.margin=0;div.style.top="20px";body.appendChild(div,body.firstChild);supportsFixed=div.offsetTop==20;body.removeChild(div)}S.getStyle=(function(){var opacity=/opacity=([^)]*)/,getComputedStyle=document.defaultView&&document.defaultView.getComputedStyle;return function(el,style){var ret;if(!supportsOpacity&&style=="opacity"&&el.currentStyle){ret=opacity.test(el.currentStyle.filter||"")?(parseFloat(RegExp.$1)/100)+"":"";return ret===""?"1":ret}if(getComputedStyle){var computedStyle=getComputedStyle(el,null);if(computedStyle){ret=computedStyle[style]}if(style=="opacity"&&ret==""){ret="1"}}else{ret=el.currentStyle[style]}return ret}})();S.appendHTML=function(el,html){if(el.insertAdjacentHTML){el.insertAdjacentHTML("BeforeEnd",html)}else{if(el.lastChild){var range=el.ownerDocument.createRange();range.setStartAfter(el.lastChild);var frag=range.createContextualFragment(html);el.appendChild(frag)}else{el.innerHTML=html}}};S.getWindowSize=function(dimension){if(document.compatMode==="CSS1Compat"){return document.documentElement["client"+dimension]}return document.body["client"+dimension]};S.setOpacity=function(el,opacity){var style=el.style;if(supportsOpacity){style.opacity=(opacity==1?"":opacity)}else{style.zoom=1;if(opacity==1){if(typeof style.filter=="string"&&(/alpha/i).test(style.filter)){style.filter=style.filter.replace(/\s*[\w\.]*alpha\([^\)]*\);?/gi,"")}}else{style.filter=(style.filter||"").replace(/\s*[\w\.]*alpha\([^\)]*\)/gi,"")+" alpha(opacity="+(opacity*100)+")"}}};S.clearOpacity=function(el){S.setOpacity(el,1)};function getTarget(e){return e.target}function getPageXY(e){return[e.pageX,e.pageY]}function preventDefault(e){e.preventDefault()}function keyCode(e){return e.keyCode}function addEvent(el,type,handler){jQuery(el).bind(type,handler)}function removeEvent(el,type,handler){jQuery(el).unbind(type,handler)}jQuery.fn.shadowbox=function(options){return this.each(function(){var el=jQuery(this);var opts=jQuery.extend({},options||{},jQuery.metadata?el.metadata():jQuery.meta?el.data():{});var cls=this.className||"";opts.width=parseInt((cls.match(/w:(\d+)/)||[])[1])||opts.width;opts.height=parseInt((cls.match(/h:(\d+)/)||[])[1])||opts.height;Shadowbox.setup(el,opts)})};var loaded=false,DOMContentLoaded;if(document.addEventListener){DOMContentLoaded=function(){document.removeEventListener("DOMContentLoaded",DOMContentLoaded,false);S.load()}}else{if(document.attachEvent){DOMContentLoaded=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",DOMContentLoaded);S.load()}}}}function doScrollCheck(){if(loaded){return}try{document.documentElement.doScroll("left")}catch(e){setTimeout(doScrollCheck,1);return}S.load()}function bindLoad(){if(document.readyState==="complete"){return S.load()}if(document.addEventListener){document.addEventListener("DOMContentLoaded",DOMContentLoaded,false);window.addEventListener("load",S.load,false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",DOMContentLoaded);window.attachEvent("onload",S.load);var topLevel=false;try{topLevel=window.frameElement===null}catch(e){}if(document.documentElement.doScroll&&topLevel){doScrollCheck()}}}}S.load=function(){if(loaded){return}if(!document.body){return setTimeout(S.load,13)}loaded=true;checkSupport();S.onReady();if(!S.options.skipSetup){S.setup()}S.skin.init()};S.plugins={};if(navigator.plugins&&navigator.plugins.length){var names=[];each(navigator.plugins,function(i,p){names.push(p.name)});names=names.join(",");var f4m=names.indexOf("Flip4Mac")>-1;S.plugins={fla:names.indexOf("Shockwave Flash")>-1,qt:names.indexOf("QuickTime")>-1,wmp:!f4m&&names.indexOf("Windows Media")>-1,f4m:f4m}}else{var detectPlugin=function(name){var axo;try{axo=new ActiveXObject(name)}catch(e){}return !!axo};S.plugins={fla:detectPlugin("ShockwaveFlash.ShockwaveFlash"),qt:detectPlugin("QuickTime.QuickTime"),wmp:detectPlugin("wmplayer.ocx"),f4m:false}}var relAttr=/^(light|shadow)box/i,expando="shadowboxCacheKey",cacheKey=1;S.cache={};S.select=function(selector){var links=[];if(!selector){var rel;each(document.getElementsByTagName("a"),function(i,el){rel=el.getAttribute("rel");if(rel&&relAttr.test(rel)){links.push(el)}})}else{var length=selector.length;if(length){if(typeof selector=="string"){if(S.find){links=S.find(selector)}}else{if(length==2&&typeof selector[0]=="string"&&selector[1].nodeType){if(S.find){links=S.find(selector[0],selector[1])}}else{for(var i=0;i<length;++i){links[i]=selector[i]}}}}else{links.push(selector)}}return links};S.setup=function(selector,options){each(S.select(selector),function(i,link){S.addCache(link,options)})};S.teardown=function(selector){each(S.select(selector),function(i,link){S.removeCache(link)})};S.addCache=function(link,options){var key=link[expando];if(key==undefined){key=cacheKey++;link[expando]=key;addEvent(link,"click",handleClick)}S.cache[key]=S.makeObject(link,options)};S.removeCache=function(link){removeEvent(link,"click",handleClick);delete S.cache[link[expando]];link[expando]=null};S.getCache=function(link){var key=link[expando];return(key in S.cache&&S.cache[key])};S.clearCache=function(){for(var key in S.cache){S.removeCache(S.cache[key].link)}S.cache={}};function handleClick(e){S.open(this);if(S.gallery.length){preventDefault(e)}}
/*
 * Sizzle CSS Selector Engine - v1.0
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 *
 * Modified for inclusion in Shadowbox.js
 */
S.find=(function(){var chunker=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,done=0,toString=Object.prototype.toString,hasDuplicate=false,baseHasDuplicate=true;[0,0].sort(function(){baseHasDuplicate=false;return 0});var Sizzle=function(selector,context,results,seed){results=results||[];var origContext=context=context||document;if(context.nodeType!==1&&context.nodeType!==9){return[]}if(!selector||typeof selector!=="string"){return results}var parts=[],m,set,checkSet,extra,prune=true,contextXML=isXML(context),soFar=selector;while((chunker.exec(""),m=chunker.exec(soFar))!==null){soFar=m[3];parts.push(m[1]);if(m[2]){extra=m[3];break}}if(parts.length>1&&origPOS.exec(selector)){if(parts.length===2&&Expr.relative[parts[0]]){set=posProcess(parts[0]+parts[1],context)}else{set=Expr.relative[parts[0]]?[context]:Sizzle(parts.shift(),context);while(parts.length){selector=parts.shift();if(Expr.relative[selector]){selector+=parts.shift()}set=posProcess(selector,set)}}}else{if(!seed&&parts.length>1&&context.nodeType===9&&!contextXML&&Expr.match.ID.test(parts[0])&&!Expr.match.ID.test(parts[parts.length-1])){var ret=Sizzle.find(parts.shift(),context,contextXML);context=ret.expr?Sizzle.filter(ret.expr,ret.set)[0]:ret.set[0]}if(context){var ret=seed?{expr:parts.pop(),set:makeArray(seed)}:Sizzle.find(parts.pop(),parts.length===1&&(parts[0]==="~"||parts[0]==="+")&&context.parentNode?context.parentNode:context,contextXML);set=ret.expr?Sizzle.filter(ret.expr,ret.set):ret.set;if(parts.length>0){checkSet=makeArray(set)}else{prune=false}while(parts.length){var cur=parts.pop(),pop=cur;if(!Expr.relative[cur]){cur=""}else{pop=parts.pop()}if(pop==null){pop=context}Expr.relative[cur](checkSet,pop,contextXML)}}else{checkSet=parts=[]}}if(!checkSet){checkSet=set}if(!checkSet){throw"Syntax error, unrecognized expression: "+(cur||selector)}if(toString.call(checkSet)==="[object Array]"){if(!prune){results.push.apply(results,checkSet)}else{if(context&&context.nodeType===1){for(var i=0;checkSet[i]!=null;i++){if(checkSet[i]&&(checkSet[i]===true||checkSet[i].nodeType===1&&contains(context,checkSet[i]))){results.push(set[i])}}}else{for(var i=0;checkSet[i]!=null;i++){if(checkSet[i]&&checkSet[i].nodeType===1){results.push(set[i])}}}}}else{makeArray(checkSet,results)}if(extra){Sizzle(extra,origContext,results,seed);Sizzle.uniqueSort(results)}return results};Sizzle.uniqueSort=function(results){if(sortOrder){hasDuplicate=baseHasDuplicate;results.sort(sortOrder);if(hasDuplicate){for(var i=1;i<results.length;i++){if(results[i]===results[i-1]){results.splice(i--,1)}}}}return results};Sizzle.matches=function(expr,set){return Sizzle(expr,null,null,set)};Sizzle.find=function(expr,context,isXML){var set,match;if(!expr){return[]}for(var i=0,l=Expr.order.length;i<l;i++){var type=Expr.order[i],match;if((match=Expr.leftMatch[type].exec(expr))){var left=match[1];match.splice(1,1);if(left.substr(left.length-1)!=="\\"){match[1]=(match[1]||"").replace(/\\/g,"");set=Expr.find[type](match,context,isXML);if(set!=null){expr=expr.replace(Expr.match[type],"");break}}}}if(!set){set=context.getElementsByTagName("*")}return{set:set,expr:expr}};Sizzle.filter=function(expr,set,inplace,not){var old=expr,result=[],curLoop=set,match,anyFound,isXMLFilter=set&&set[0]&&isXML(set[0]);while(expr&&set.length){for(var type in Expr.filter){if((match=Expr.match[type].exec(expr))!=null){var filter=Expr.filter[type],found,item;anyFound=false;if(curLoop===result){result=[]}if(Expr.preFilter[type]){match=Expr.preFilter[type](match,curLoop,inplace,result,not,isXMLFilter);if(!match){anyFound=found=true}else{if(match===true){continue}}}if(match){for(var i=0;(item=curLoop[i])!=null;i++){if(item){found=filter(item,match,i,curLoop);var pass=not^!!found;if(inplace&&found!=null){if(pass){anyFound=true}else{curLoop[i]=false}}else{if(pass){result.push(item);anyFound=true}}}}}if(found!==undefined){if(!inplace){curLoop=result}expr=expr.replace(Expr.match[type],"");if(!anyFound){return[]}break}}}if(expr===old){if(anyFound==null){throw"Syntax error, unrecognized expression: "+expr}else{break}}old=expr}return curLoop};var Expr=Sizzle.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(elem){return elem.getAttribute("href")}},relative:{"+":function(checkSet,part){var isPartStr=typeof part==="string",isTag=isPartStr&&!/\W/.test(part),isPartStrNotTag=isPartStr&&!isTag;if(isTag){part=part.toLowerCase()}for(var i=0,l=checkSet.length,elem;i<l;i++){if((elem=checkSet[i])){while((elem=elem.previousSibling)&&elem.nodeType!==1){}checkSet[i]=isPartStrNotTag||elem&&elem.nodeName.toLowerCase()===part?elem||false:elem===part}}if(isPartStrNotTag){Sizzle.filter(part,checkSet,true)}},">":function(checkSet,part){var isPartStr=typeof part==="string";if(isPartStr&&!/\W/.test(part)){part=part.toLowerCase();for(var i=0,l=checkSet.length;i<l;i++){var elem=checkSet[i];if(elem){var parent=elem.parentNode;checkSet[i]=parent.nodeName.toLowerCase()===part?parent:false}}}else{for(var i=0,l=checkSet.length;i<l;i++){var elem=checkSet[i];if(elem){checkSet[i]=isPartStr?elem.parentNode:elem.parentNode===part}}if(isPartStr){Sizzle.filter(part,checkSet,true)}}},"":function(checkSet,part,isXML){var doneName=done++,checkFn=dirCheck;if(typeof part==="string"&&!/\W/.test(part)){var nodeCheck=part=part.toLowerCase();checkFn=dirNodeCheck}checkFn("parentNode",part,doneName,checkSet,nodeCheck,isXML)},"~":function(checkSet,part,isXML){var doneName=done++,checkFn=dirCheck;if(typeof part==="string"&&!/\W/.test(part)){var nodeCheck=part=part.toLowerCase();checkFn=dirNodeCheck}checkFn("previousSibling",part,doneName,checkSet,nodeCheck,isXML)}},find:{ID:function(match,context,isXML){if(typeof context.getElementById!=="undefined"&&!isXML){var m=context.getElementById(match[1]);return m?[m]:[]}},NAME:function(match,context){if(typeof context.getElementsByName!=="undefined"){var ret=[],results=context.getElementsByName(match[1]);for(var i=0,l=results.length;i<l;i++){if(results[i].getAttribute("name")===match[1]){ret.push(results[i])}}return ret.length===0?null:ret}},TAG:function(match,context){return context.getElementsByTagName(match[1])}},preFilter:{CLASS:function(match,curLoop,inplace,result,not,isXML){match=" "+match[1].replace(/\\/g,"")+" ";if(isXML){return match}for(var i=0,elem;(elem=curLoop[i])!=null;i++){if(elem){if(not^(elem.className&&(" "+elem.className+" ").replace(/[\t\n]/g," ").indexOf(match)>=0)){if(!inplace){result.push(elem)}}else{if(inplace){curLoop[i]=false}}}}return false},ID:function(match){return match[1].replace(/\\/g,"")},TAG:function(match,curLoop){return match[1].toLowerCase()},CHILD:function(match){if(match[1]==="nth"){var test=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(match[2]==="even"&&"2n"||match[2]==="odd"&&"2n+1"||!/\D/.test(match[2])&&"0n+"+match[2]||match[2]);match[2]=(test[1]+(test[2]||1))-0;match[3]=test[3]-0}match[0]=done++;return match},ATTR:function(match,curLoop,inplace,result,not,isXML){var name=match[1].replace(/\\/g,"");if(!isXML&&Expr.attrMap[name]){match[1]=Expr.attrMap[name]}if(match[2]==="~="){match[4]=" "+match[4]+" "}return match},PSEUDO:function(match,curLoop,inplace,result,not){if(match[1]==="not"){if((chunker.exec(match[3])||"").length>1||/^\w/.test(match[3])){match[3]=Sizzle(match[3],null,null,curLoop)}else{var ret=Sizzle.filter(match[3],curLoop,inplace,true^not);if(!inplace){result.push.apply(result,ret)}return false}}else{if(Expr.match.POS.test(match[0])||Expr.match.CHILD.test(match[0])){return true}}return match},POS:function(match){match.unshift(true);return match}},filters:{enabled:function(elem){return elem.disabled===false&&elem.type!=="hidden"},disabled:function(elem){return elem.disabled===true},checked:function(elem){return elem.checked===true},selected:function(elem){elem.parentNode.selectedIndex;return elem.selected===true},parent:function(elem){return !!elem.firstChild},empty:function(elem){return !elem.firstChild},has:function(elem,i,match){return !!Sizzle(match[3],elem).length},header:function(elem){return/h\d/i.test(elem.nodeName)},text:function(elem){return"text"===elem.type},radio:function(elem){return"radio"===elem.type},checkbox:function(elem){return"checkbox"===elem.type},file:function(elem){return"file"===elem.type},password:function(elem){return"password"===elem.type},submit:function(elem){return"submit"===elem.type},image:function(elem){return"image"===elem.type},reset:function(elem){return"reset"===elem.type},button:function(elem){return"button"===elem.type||elem.nodeName.toLowerCase()==="button"},input:function(elem){return/input|select|textarea|button/i.test(elem.nodeName)}},setFilters:{first:function(elem,i){return i===0},last:function(elem,i,match,array){return i===array.length-1},even:function(elem,i){return i%2===0},odd:function(elem,i){return i%2===1},lt:function(elem,i,match){return i<match[3]-0},gt:function(elem,i,match){return i>match[3]-0},nth:function(elem,i,match){return match[3]-0===i},eq:function(elem,i,match){return match[3]-0===i}},filter:{PSEUDO:function(elem,match,i,array){var name=match[1],filter=Expr.filters[name];if(filter){return filter(elem,i,match,array)}else{if(name==="contains"){return(elem.textContent||elem.innerText||getText([elem])||"").indexOf(match[3])>=0}else{if(name==="not"){var not=match[3];for(var i=0,l=not.length;i<l;i++){if(not[i]===elem){return false}}return true}else{throw"Syntax error, unrecognized expression: "+name}}}},CHILD:function(elem,match){var type=match[1],node=elem;switch(type){case"only":case"first":while((node=node.previousSibling)){if(node.nodeType===1){return false}}if(type==="first"){return true}node=elem;case"last":while((node=node.nextSibling)){if(node.nodeType===1){return false}}return true;case"nth":var first=match[2],last=match[3];if(first===1&&last===0){return true}var doneName=match[0],parent=elem.parentNode;if(parent&&(parent.sizcache!==doneName||!elem.nodeIndex)){var count=0;for(node=parent.firstChild;node;node=node.nextSibling){if(node.nodeType===1){node.nodeIndex=++count}}parent.sizcache=doneName}var diff=elem.nodeIndex-last;if(first===0){return diff===0}else{return(diff%first===0&&diff/first>=0)}}},ID:function(elem,match){return elem.nodeType===1&&elem.getAttribute("id")===match},TAG:function(elem,match){return(match==="*"&&elem.nodeType===1)||elem.nodeName.toLowerCase()===match},CLASS:function(elem,match){return(" "+(elem.className||elem.getAttribute("class"))+" ").indexOf(match)>-1},ATTR:function(elem,match){var name=match[1],result=Expr.attrHandle[name]?Expr.attrHandle[name](elem):elem[name]!=null?elem[name]:elem.getAttribute(name),value=result+"",type=match[2],check=match[4];return result==null?type==="!=":type==="="?value===check:type==="*="?value.indexOf(check)>=0:type==="~="?(" "+value+" ").indexOf(check)>=0:!check?value&&result!==false:type==="!="?value!==check:type==="^="?value.indexOf(check)===0:type==="$="?value.substr(value.length-check.length)===check:type==="|="?value===check||value.substr(0,check.length+1)===check+"-":false},POS:function(elem,match,i,array){var name=match[2],filter=Expr.setFilters[name];if(filter){return filter(elem,i,match,array)}}}};var origPOS=Expr.match.POS;for(var type in Expr.match){Expr.match[type]=new RegExp(Expr.match[type].source+/(?![^\[]*\])(?![^\(]*\))/.source);Expr.leftMatch[type]=new RegExp(/(^(?:.|\r|\n)*?)/.source+Expr.match[type].source)}var makeArray=function(array,results){array=Array.prototype.slice.call(array,0);if(results){results.push.apply(results,array);return results}return array};try{Array.prototype.slice.call(document.documentElement.childNodes,0)}catch(e){makeArray=function(array,results){var ret=results||[];if(toString.call(array)==="[object Array]"){Array.prototype.push.apply(ret,array)}else{if(typeof array.length==="number"){for(var i=0,l=array.length;i<l;i++){ret.push(array[i])}}else{for(var i=0;array[i];i++){ret.push(array[i])}}}return ret}}var sortOrder;if(document.documentElement.compareDocumentPosition){sortOrder=function(a,b){if(!a.compareDocumentPosition||!b.compareDocumentPosition){if(a==b){hasDuplicate=true}return a.compareDocumentPosition?-1:1}var ret=a.compareDocumentPosition(b)&4?-1:a===b?0:1;if(ret===0){hasDuplicate=true}return ret}}else{if("sourceIndex" in document.documentElement){sortOrder=function(a,b){if(!a.sourceIndex||!b.sourceIndex){if(a==b){hasDuplicate=true}return a.sourceIndex?-1:1}var ret=a.sourceIndex-b.sourceIndex;if(ret===0){hasDuplicate=true}return ret}}else{if(document.createRange){sortOrder=function(a,b){if(!a.ownerDocument||!b.ownerDocument){if(a==b){hasDuplicate=true}return a.ownerDocument?-1:1}var aRange=a.ownerDocument.createRange(),bRange=b.ownerDocument.createRange();aRange.setStart(a,0);aRange.setEnd(a,0);bRange.setStart(b,0);bRange.setEnd(b,0);var ret=aRange.compareBoundaryPoints(Range.START_TO_END,bRange);if(ret===0){hasDuplicate=true}return ret}}}}function getText(elems){var ret="",elem;for(var i=0;elems[i];i++){elem=elems[i];if(elem.nodeType===3||elem.nodeType===4){ret+=elem.nodeValue}else{if(elem.nodeType!==8){ret+=getText(elem.childNodes)}}}return ret}(function(){var form=document.createElement("div"),id="script"+(new Date).getTime();form.innerHTML="<a name='"+id+"'/>";var root=document.documentElement;root.insertBefore(form,root.firstChild);if(document.getElementById(id)){Expr.find.ID=function(match,context,isXML){if(typeof context.getElementById!=="undefined"&&!isXML){var m=context.getElementById(match[1]);return m?m.id===match[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===match[1]?[m]:undefined:[]}};Expr.filter.ID=function(elem,match){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");return elem.nodeType===1&&node&&node.nodeValue===match}}root.removeChild(form);root=form=null})();(function(){var div=document.createElement("div");div.appendChild(document.createComment(""));if(div.getElementsByTagName("*").length>0){Expr.find.TAG=function(match,context){var results=context.getElementsByTagName(match[1]);if(match[1]==="*"){var tmp=[];for(var i=0;results[i];i++){if(results[i].nodeType===1){tmp.push(results[i])}}results=tmp}return results}}div.innerHTML="<a href='#'></a>";if(div.firstChild&&typeof div.firstChild.getAttribute!=="undefined"&&div.firstChild.getAttribute("href")!=="#"){Expr.attrHandle.href=function(elem){return elem.getAttribute("href",2)}}div=null})();if(document.querySelectorAll){(function(){var oldSizzle=Sizzle,div=document.createElement("div");div.innerHTML="<p class='TEST'></p>";if(div.querySelectorAll&&div.querySelectorAll(".TEST").length===0){return}Sizzle=function(query,context,extra,seed){context=context||document;if(!seed&&context.nodeType===9&&!isXML(context)){try{return makeArray(context.querySelectorAll(query),extra)}catch(e){}}return oldSizzle(query,context,extra,seed)};for(var prop in oldSizzle){Sizzle[prop]=oldSizzle[prop]}div=null})()}(function(){var div=document.createElement("div");div.innerHTML="<div class='test e'></div><div class='test'></div>";if(!div.getElementsByClassName||div.getElementsByClassName("e").length===0){return}div.lastChild.className="e";if(div.getElementsByClassName("e").length===1){return}Expr.order.splice(1,0,"CLASS");Expr.find.CLASS=function(match,context,isXML){if(typeof context.getElementsByClassName!=="undefined"&&!isXML){return context.getElementsByClassName(match[1])}};div=null})();function dirNodeCheck(dir,cur,doneName,checkSet,nodeCheck,isXML){for(var i=0,l=checkSet.length;i<l;i++){var elem=checkSet[i];if(elem){elem=elem[dir];var match=false;while(elem){if(elem.sizcache===doneName){match=checkSet[elem.sizset];break}if(elem.nodeType===1&&!isXML){elem.sizcache=doneName;elem.sizset=i}if(elem.nodeName.toLowerCase()===cur){match=elem;break}elem=elem[dir]}checkSet[i]=match}}}function dirCheck(dir,cur,doneName,checkSet,nodeCheck,isXML){for(var i=0,l=checkSet.length;i<l;i++){var elem=checkSet[i];if(elem){elem=elem[dir];var match=false;while(elem){if(elem.sizcache===doneName){match=checkSet[elem.sizset];break}if(elem.nodeType===1){if(!isXML){elem.sizcache=doneName;elem.sizset=i}if(typeof cur!=="string"){if(elem===cur){match=true;break}}else{if(Sizzle.filter(cur,[elem]).length>0){match=elem;break}}}elem=elem[dir]}checkSet[i]=match}}}var contains=document.compareDocumentPosition?function(a,b){return a.compareDocumentPosition(b)&16}:function(a,b){return a!==b&&(a.contains?a.contains(b):true)};var isXML=function(elem){var documentElement=(elem?elem.ownerDocument||elem:0).documentElement;return documentElement?documentElement.nodeName!=="HTML":false};var posProcess=function(selector,context){var tmpSet=[],later="",match,root=context.nodeType?[context]:context;while((match=Expr.match.PSEUDO.exec(selector))){later+=match[0];selector=selector.replace(Expr.match.PSEUDO,"")}selector=Expr.relative[selector]?selector+"*":selector;for(var i=0,l=root.length;i<l;i++){Sizzle(selector,root[i],tmpSet)}return Sizzle.filter(later,tmpSet)};return Sizzle})();
/*
 * SWFObject v2.1 <http://code.google.com/p/swfobject/>
 * Copyright (c) 2007-2008 Geoff Stearns, Michael Williams, and Bobby van der Sluis
 * This software is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
 *
 * Modified for inclusion in Shadowbox.js
 */
S.flash=(function(){var swfobject=function(){var UNDEF="undefined",OBJECT="object",SHOCKWAVE_FLASH="Shockwave Flash",SHOCKWAVE_FLASH_AX="ShockwaveFlash.ShockwaveFlash",FLASH_MIME_TYPE="application/x-shockwave-flash",EXPRESS_INSTALL_ID="SWFObjectExprInst",win=window,doc=document,nav=navigator,domLoadFnArr=[],regObjArr=[],objIdArr=[],listenersArr=[],script,timer=null,storedAltContent=null,storedAltContentId=null,isDomLoaded=false,isExpressInstallActive=false;var ua=function(){var w3cdom=typeof doc.getElementById!=UNDEF&&typeof doc.getElementsByTagName!=UNDEF&&typeof doc.createElement!=UNDEF,playerVersion=[0,0,0],d=null;if(typeof nav.plugins!=UNDEF&&typeof nav.plugins[SHOCKWAVE_FLASH]==OBJECT){d=nav.plugins[SHOCKWAVE_FLASH].description;if(d&&!(typeof nav.mimeTypes!=UNDEF&&nav.mimeTypes[FLASH_MIME_TYPE]&&!nav.mimeTypes[FLASH_MIME_TYPE].enabledPlugin)){d=d.replace(/^.*\s+(\S+\s+\S+$)/,"$1");playerVersion[0]=parseInt(d.replace(/^(.*)\..*$/,"$1"),10);playerVersion[1]=parseInt(d.replace(/^.*\.(.*)\s.*$/,"$1"),10);playerVersion[2]=/r/.test(d)?parseInt(d.replace(/^.*r(.*)$/,"$1"),10):0}}else{if(typeof win.ActiveXObject!=UNDEF){var a=null,fp6Crash=false;try{a=new ActiveXObject(SHOCKWAVE_FLASH_AX+".7")}catch(e){try{a=new ActiveXObject(SHOCKWAVE_FLASH_AX+".6");playerVersion=[6,0,21];a.AllowScriptAccess="always"}catch(e){if(playerVersion[0]==6){fp6Crash=true}}if(!fp6Crash){try{a=new ActiveXObject(SHOCKWAVE_FLASH_AX)}catch(e){}}}if(!fp6Crash&&a){try{d=a.GetVariable("$version");if(d){d=d.split(" ")[1].split(",");playerVersion=[parseInt(d[0],10),parseInt(d[1],10),parseInt(d[2],10)]}}catch(e){}}}}var u=nav.userAgent.toLowerCase(),p=nav.platform.toLowerCase(),webkit=/webkit/.test(u)?parseFloat(u.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,ie=false,windows=p?/win/.test(p):/win/.test(u),mac=p?/mac/.test(p):/mac/.test(u);
/*@cc_on
			ie = true;
			@if (@_win32)
				windows = true;
			@elif (@_mac)
				mac = true;
			@end
		@*/
return{w3cdom:w3cdom,pv:playerVersion,webkit:webkit,ie:ie,win:windows,mac:mac}}();var onDomLoad=function(){if(!ua.w3cdom){return}addDomLoadEvent(main);if(ua.ie&&ua.win){try{doc.write("<script id=__ie_ondomload defer=true src=//:><\/script>");script=getElementById("__ie_ondomload");if(script){addListener(script,"onreadystatechange",checkReadyState)}}catch(e){}}if(ua.webkit&&typeof doc.readyState!=UNDEF){timer=setInterval(function(){if(/loaded|complete/.test(doc.readyState)){callDomLoadFunctions()}},10)}if(typeof doc.addEventListener!=UNDEF){doc.addEventListener("DOMContentLoaded",callDomLoadFunctions,null)}addLoadEvent(callDomLoadFunctions)}();function checkReadyState(){if(script.readyState=="complete"){script.parentNode.removeChild(script);callDomLoadFunctions()}}function callDomLoadFunctions(){if(isDomLoaded){return}if(ua.ie&&ua.win){var s=createElement("span");try{var t=doc.getElementsByTagName("body")[0].appendChild(s);t.parentNode.removeChild(t)}catch(e){return}}isDomLoaded=true;if(timer){clearInterval(timer);timer=null}var dl=domLoadFnArr.length;for(var i=0;i<dl;i++){domLoadFnArr[i]()}}function addDomLoadEvent(fn){if(isDomLoaded){fn()}else{domLoadFnArr[domLoadFnArr.length]=fn}}function addLoadEvent(fn){if(typeof win.addEventListener!=UNDEF){win.addEventListener("load",fn,false)}else{if(typeof doc.addEventListener!=UNDEF){doc.addEventListener("load",fn,false)}else{if(typeof win.attachEvent!=UNDEF){addListener(win,"onload",fn)}else{if(typeof win.onload=="function"){var fnOld=win.onload;win.onload=function(){fnOld();fn()}}else{win.onload=fn}}}}}function main(){var rl=regObjArr.length;for(var i=0;i<rl;i++){var id=regObjArr[i].id;if(ua.pv[0]>0){var obj=getElementById(id);if(obj){regObjArr[i].width=obj.getAttribute("width")?obj.getAttribute("width"):"0";regObjArr[i].height=obj.getAttribute("height")?obj.getAttribute("height"):"0";if(hasPlayerVersion(regObjArr[i].swfVersion)){if(ua.webkit&&ua.webkit<312){fixParams(obj)}setVisibility(id,true)}else{if(regObjArr[i].expressInstall&&!isExpressInstallActive&&hasPlayerVersion("6.0.65")&&(ua.win||ua.mac)){showExpressInstall(regObjArr[i])}else{displayAltContent(obj)}}}}else{setVisibility(id,true)}}}function fixParams(obj){var nestedObj=obj.getElementsByTagName(OBJECT)[0];if(nestedObj){var e=createElement("embed"),a=nestedObj.attributes;if(a){var al=a.length;for(var i=0;i<al;i++){if(a[i].nodeName=="DATA"){e.setAttribute("src",a[i].nodeValue)}else{e.setAttribute(a[i].nodeName,a[i].nodeValue)}}}var c=nestedObj.childNodes;if(c){var cl=c.length;for(var j=0;j<cl;j++){if(c[j].nodeType==1&&c[j].nodeName=="PARAM"){e.setAttribute(c[j].getAttribute("name"),c[j].getAttribute("value"))}}}obj.parentNode.replaceChild(e,obj)}}function showExpressInstall(regObj){isExpressInstallActive=true;var obj=getElementById(regObj.id);if(obj){if(regObj.altContentId){var ac=getElementById(regObj.altContentId);if(ac){storedAltContent=ac;storedAltContentId=regObj.altContentId}}else{storedAltContent=abstractAltContent(obj)}if(!(/%$/.test(regObj.width))&&parseInt(regObj.width,10)<310){regObj.width="310"}if(!(/%$/.test(regObj.height))&&parseInt(regObj.height,10)<137){regObj.height="137"}doc.title=doc.title.slice(0,47)+" - Flash Player Installation";var pt=ua.ie&&ua.win?"ActiveX":"PlugIn",dt=doc.title,fv="MMredirectURL="+win.location+"&MMplayerType="+pt+"&MMdoctitle="+dt,replaceId=regObj.id;if(ua.ie&&ua.win&&obj.readyState!=4){var newObj=createElement("div");replaceId+="SWFObjectNew";newObj.setAttribute("id",replaceId);obj.parentNode.insertBefore(newObj,obj);obj.style.display="none";var fn=function(){obj.parentNode.removeChild(obj)};addListener(win,"onload",fn)}createSWF({data:regObj.expressInstall,id:EXPRESS_INSTALL_ID,width:regObj.width,height:regObj.height},{flashvars:fv},replaceId)}}function displayAltContent(obj){if(ua.ie&&ua.win&&obj.readyState!=4){var el=createElement("div");obj.parentNode.insertBefore(el,obj);el.parentNode.replaceChild(abstractAltContent(obj),el);obj.style.display="none";var fn=function(){obj.parentNode.removeChild(obj)};addListener(win,"onload",fn)}else{obj.parentNode.replaceChild(abstractAltContent(obj),obj)}}function abstractAltContent(obj){var ac=createElement("div");if(ua.win&&ua.ie){ac.innerHTML=obj.innerHTML}else{var nestedObj=obj.getElementsByTagName(OBJECT)[0];if(nestedObj){var c=nestedObj.childNodes;if(c){var cl=c.length;for(var i=0;i<cl;i++){if(!(c[i].nodeType==1&&c[i].nodeName=="PARAM")&&!(c[i].nodeType==8)){ac.appendChild(c[i].cloneNode(true))}}}}}return ac}function createSWF(attObj,parObj,id){var r,el=getElementById(id);if(el){if(typeof attObj.id==UNDEF){attObj.id=id}if(ua.ie&&ua.win){var att="";for(var i in attObj){if(attObj[i]!=Object.prototype[i]){if(i.toLowerCase()=="data"){parObj.movie=attObj[i]}else{if(i.toLowerCase()=="styleclass"){att+=' class="'+attObj[i]+'"'}else{if(i.toLowerCase()!="classid"){att+=" "+i+'="'+attObj[i]+'"'}}}}}var par="";for(var j in parObj){if(parObj[j]!=Object.prototype[j]){par+='<param name="'+j+'" value="'+parObj[j]+'" />'}}el.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+att+">"+par+"</object>";objIdArr[objIdArr.length]=attObj.id;r=getElementById(attObj.id)}else{if(ua.webkit&&ua.webkit<312){var e=createElement("embed");e.setAttribute("type",FLASH_MIME_TYPE);for(var k in attObj){if(attObj[k]!=Object.prototype[k]){if(k.toLowerCase()=="data"){e.setAttribute("src",attObj[k])}else{if(k.toLowerCase()=="styleclass"){e.setAttribute("class",attObj[k])}else{if(k.toLowerCase()!="classid"){e.setAttribute(k,attObj[k])}}}}}for(var l in parObj){if(parObj[l]!=Object.prototype[l]){if(l.toLowerCase()!="movie"){e.setAttribute(l,parObj[l])}}}el.parentNode.replaceChild(e,el);r=e}else{var o=createElement(OBJECT);o.setAttribute("type",FLASH_MIME_TYPE);for(var m in attObj){if(attObj[m]!=Object.prototype[m]){if(m.toLowerCase()=="styleclass"){o.setAttribute("class",attObj[m])}else{if(m.toLowerCase()!="classid"){o.setAttribute(m,attObj[m])}}}}for(var n in parObj){if(parObj[n]!=Object.prototype[n]&&n.toLowerCase()!="movie"){createObjParam(o,n,parObj[n])}}el.parentNode.replaceChild(o,el);r=o}}}return r}function createObjParam(el,pName,pValue){var p=createElement("param");p.setAttribute("name",pName);p.setAttribute("value",pValue);el.appendChild(p)}function removeSWF(id){var obj=getElementById(id);if(obj&&(obj.nodeName=="OBJECT"||obj.nodeName=="EMBED")){if(ua.ie&&ua.win){if(obj.readyState==4){removeObjectInIE(id)}else{win.attachEvent("onload",function(){removeObjectInIE(id)})}}else{obj.parentNode.removeChild(obj)}}}function removeObjectInIE(id){var obj=getElementById(id);if(obj){for(var i in obj){if(typeof obj[i]=="function"){obj[i]=null}}obj.parentNode.removeChild(obj)}}function getElementById(id){var el=null;try{el=doc.getElementById(id)}catch(e){}return el}function createElement(el){return doc.createElement(el)}function addListener(target,eventType,fn){target.attachEvent(eventType,fn);listenersArr[listenersArr.length]=[target,eventType,fn]}function hasPlayerVersion(rv){var pv=ua.pv,v=rv.split(".");v[0]=parseInt(v[0],10);v[1]=parseInt(v[1],10)||0;v[2]=parseInt(v[2],10)||0;return(pv[0]>v[0]||(pv[0]==v[0]&&pv[1]>v[1])||(pv[0]==v[0]&&pv[1]==v[1]&&pv[2]>=v[2]))?true:false}function createCSS(sel,decl){if(ua.ie&&ua.mac){return}var h=doc.getElementsByTagName("head")[0],s=createElement("style");s.setAttribute("type","text/css");s.setAttribute("media","screen");if(!(ua.ie&&ua.win)&&typeof doc.createTextNode!=UNDEF){s.appendChild(doc.createTextNode(sel+" {"+decl+"}"))}h.appendChild(s);if(ua.ie&&ua.win&&typeof doc.styleSheets!=UNDEF&&doc.styleSheets.length>0){var ls=doc.styleSheets[doc.styleSheets.length-1];if(typeof ls.addRule==OBJECT){ls.addRule(sel,decl)}}}function setVisibility(id,isVisible){var v=isVisible?"visible":"hidden";if(isDomLoaded&&getElementById(id)){getElementById(id).style.visibility=v}else{createCSS("#"+id,"visibility:"+v)}}function urlEncodeIfNecessary(s){var regex=/[\\\"<>\.;]/;var hasBadChars=regex.exec(s)!=null;return hasBadChars?encodeURIComponent(s):s}var cleanup=function(){if(ua.ie&&ua.win){window.attachEvent("onunload",function(){var ll=listenersArr.length;for(var i=0;i<ll;i++){listenersArr[i][0].detachEvent(listenersArr[i][1],listenersArr[i][2])}var il=objIdArr.length;for(var j=0;j<il;j++){removeSWF(objIdArr[j])}for(var k in ua){ua[k]=null}ua=null;for(var l in swfobject){swfobject[l]=null}swfobject=null})}}();return{registerObject:function(objectIdStr,swfVersionStr,xiSwfUrlStr){if(!ua.w3cdom||!objectIdStr||!swfVersionStr){return}var regObj={};regObj.id=objectIdStr;regObj.swfVersion=swfVersionStr;regObj.expressInstall=xiSwfUrlStr?xiSwfUrlStr:false;regObjArr[regObjArr.length]=regObj;setVisibility(objectIdStr,false)},getObjectById:function(objectIdStr){var r=null;if(ua.w3cdom){var o=getElementById(objectIdStr);if(o){var n=o.getElementsByTagName(OBJECT)[0];if(!n||(n&&typeof o.SetVariable!=UNDEF)){r=o}else{if(typeof n.SetVariable!=UNDEF){r=n}}}}return r},embedSWF:function(swfUrlStr,replaceElemIdStr,widthStr,heightStr,swfVersionStr,xiSwfUrlStr,flashvarsObj,parObj,attObj){if(!ua.w3cdom||!swfUrlStr||!replaceElemIdStr||!widthStr||!heightStr||!swfVersionStr){return}widthStr+="";heightStr+="";if(hasPlayerVersion(swfVersionStr)){setVisibility(replaceElemIdStr,false);var att={};if(attObj&&typeof attObj===OBJECT){for(var i in attObj){if(attObj[i]!=Object.prototype[i]){att[i]=attObj[i]}}}att.data=swfUrlStr;att.width=widthStr;att.height=heightStr;var par={};if(parObj&&typeof parObj===OBJECT){for(var j in parObj){if(parObj[j]!=Object.prototype[j]){par[j]=parObj[j]}}}if(flashvarsObj&&typeof flashvarsObj===OBJECT){for(var k in flashvarsObj){if(flashvarsObj[k]!=Object.prototype[k]){if(typeof par.flashvars!=UNDEF){par.flashvars+="&"+k+"="+flashvarsObj[k]}else{par.flashvars=k+"="+flashvarsObj[k]}}}}addDomLoadEvent(function(){createSWF(att,par,replaceElemIdStr);if(att.id==replaceElemIdStr){setVisibility(replaceElemIdStr,true)}})}else{if(xiSwfUrlStr&&!isExpressInstallActive&&hasPlayerVersion("6.0.65")&&(ua.win||ua.mac)){isExpressInstallActive=true;setVisibility(replaceElemIdStr,false);addDomLoadEvent(function(){var regObj={};regObj.id=regObj.altContentId=replaceElemIdStr;regObj.width=widthStr;regObj.height=heightStr;regObj.expressInstall=xiSwfUrlStr;showExpressInstall(regObj)})}}},getFlashPlayerVersion:function(){return{major:ua.pv[0],minor:ua.pv[1],release:ua.pv[2]}},hasFlashPlayerVersion:hasPlayerVersion,createSWF:function(attObj,parObj,replaceElemIdStr){if(ua.w3cdom){return createSWF(attObj,parObj,replaceElemIdStr)}else{return undefined}},removeSWF:function(objElemIdStr){if(ua.w3cdom){removeSWF(objElemIdStr)}},createCSS:function(sel,decl){if(ua.w3cdom){createCSS(sel,decl)}},addDomLoadEvent:addDomLoadEvent,addLoadEvent:addLoadEvent,getQueryParamValue:function(param){var q=doc.location.search||doc.location.hash;if(param==null){return urlEncodeIfNecessary(q)}if(q){var pairs=q.substring(1).split("&");for(var i=0;i<pairs.length;i++){if(pairs[i].substring(0,pairs[i].indexOf("="))==param){return urlEncodeIfNecessary(pairs[i].substring((pairs[i].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(isExpressInstallActive&&storedAltContent){var obj=getElementById(EXPRESS_INSTALL_ID);if(obj){obj.parentNode.replaceChild(storedAltContent,obj);if(storedAltContentId){setVisibility(storedAltContentId,true);if(ua.ie&&ua.win){storedAltContent.style.display="block"}}storedAltContent=null;storedAltContentId=null;isExpressInstallActive=false}}}}}();return swfobject})();S.lang={code:"en",of:"of",loading:"loading",cancel:"Cancel",next:"Next",previous:"Previous",play:"Play",pause:"Pause",close:"Close",errors:{single:'You must install the <a href="{0}">{1}</a> browser plugin to view this content.',shared:'You must install both the <a href="{0}">{1}</a> and <a href="{2}">{3}</a> browser plugins to view this content.',either:'You must install either the <a href="{0}">{1}</a> or the <a href="{2}">{3}</a> browser plugin to view this content.'}};var pre,proxyId="sb-drag-proxy",dragData,dragProxy,dragTarget;function resetDrag(){dragData={x:0,y:0,startX:null,startY:null}}function updateProxy(){var dims=S.dimensions;apply(dragProxy.style,{height:dims.innerHeight+"px",width:dims.innerWidth+"px"})}function enableDrag(){resetDrag();var style=["position:absolute","cursor:"+(S.isGecko?"-moz-grab":"move"),"background-color:"+(S.isIE?"#fff;filter:alpha(opacity=0)":"transparent")].join(";");S.appendHTML(S.skin.body,'<div id="'+proxyId+'" style="'+style+'"></div>');dragProxy=get(proxyId);updateProxy();addEvent(dragProxy,"mousedown",startDrag)}function disableDrag(){if(dragProxy){removeEvent(dragProxy,"mousedown",startDrag);remove(dragProxy);dragProxy=null}dragTarget=null}function startDrag(e){preventDefault(e);var xy=getPageXY(e);dragData.startX=xy[0];dragData.startY=xy[1];dragTarget=get(S.player.id);addEvent(document,"mousemove",positionDrag);addEvent(document,"mouseup",endDrag);if(S.isGecko){dragProxy.style.cursor="-moz-grabbing"}}function positionDrag(e){var player=S.player,dims=S.dimensions,xy=getPageXY(e);var moveX=xy[0]-dragData.startX;dragData.startX+=moveX;dragData.x=Math.max(Math.min(0,dragData.x+moveX),dims.innerWidth-player.width);var moveY=xy[1]-dragData.startY;dragData.startY+=moveY;dragData.y=Math.max(Math.min(0,dragData.y+moveY),dims.innerHeight-player.height);apply(dragTarget.style,{left:dragData.x+"px",top:dragData.y+"px"})}function endDrag(){removeEvent(document,"mousemove",positionDrag);removeEvent(document,"mouseup",endDrag);if(S.isGecko){dragProxy.style.cursor="-moz-grab"}}S.img=function(obj,id){this.obj=obj;this.id=id;this.ready=false;var self=this;pre=new Image();pre.onload=function(){self.height=obj.height?parseInt(obj.height,10):pre.height;self.width=obj.width?parseInt(obj.width,10):pre.width;self.ready=true;pre.onload=null;pre=null};pre.src=obj.content};S.img.ext=["bmp","gif","jpg","jpeg","png"];S.img.prototype={append:function(body,dims){var img=document.createElement("img");img.id=this.id;img.src=this.obj.content;img.style.position="absolute";var height,width;if(dims.oversized&&S.options.handleOversize=="resize"){height=dims.innerHeight;width=dims.innerWidth}else{height=this.height;width=this.width}img.setAttribute("height",height);img.setAttribute("width",width);body.appendChild(img)},remove:function(){var el=get(this.id);if(el){remove(el)}disableDrag();if(pre){pre.onload=null;pre=null}},onLoad:function(){var dims=S.dimensions;if(dims.oversized&&S.options.handleOversize=="drag"){enableDrag()}},onWindowResize:function(){var dims=S.dimensions;switch(S.options.handleOversize){case"resize":var el=get(this.id);el.height=dims.innerHeight;el.width=dims.innerWidth;break;case"drag":if(dragTarget){var top=parseInt(S.getStyle(dragTarget,"top")),left=parseInt(S.getStyle(dragTarget,"left"));if(top+this.height<dims.innerHeight){dragTarget.style.top=dims.innerHeight-this.height+"px"}if(left+this.width<dims.innerWidth){dragTarget.style.left=dims.innerWidth-this.width+"px"}updateProxy()}break}}};S.iframe=function(obj,id){this.obj=obj;this.id=id;var overlay=get("sb-overlay");this.height=obj.height?parseInt(obj.height,10):overlay.offsetHeight;this.width=obj.width?parseInt(obj.width,10):overlay.offsetWidth};S.iframe.prototype={append:function(body,dims){var html='<iframe id="'+this.id+'" name="'+this.id+'" height="100%" width="100%" frameborder="0" marginwidth="0" marginheight="0" style="visibility:hidden" onload="this.style.visibility=\'visible\'" scrolling="auto"';if(S.isIE){html+=' allowtransparency="true"';if(S.isIE6){html+=" src=\"javascript:false;document.write('');\""}}html+="></iframe>";body.innerHTML=html},remove:function(){var el=get(this.id);if(el){remove(el);if(S.isGecko){delete window.frames[this.id]}}},onLoad:function(){var win=S.isIE?get(this.id).contentWindow:window.frames[this.id];win.location.href=this.obj.content}};S.html=function(obj,id){this.obj=obj;this.id=id;this.height=obj.height?parseInt(obj.height,10):300;this.width=obj.width?parseInt(obj.width,10):500};S.html.prototype={append:function(body,dims){var div=document.createElement("div");div.id=this.id;div.className="html";div.innerHTML=this.obj.content;body.appendChild(div)},remove:function(){var el=get(this.id);if(el){remove(el)}}};S.swf=function(obj,id){this.obj=obj;this.id=id;this.height=obj.height?parseInt(obj.height,10):300;this.width=obj.width?parseInt(obj.width,10):300};S.swf.ext=["swf"];S.swf.prototype={append:function(body,dims){var tmp=document.createElement("div");tmp.id=this.id;body.appendChild(tmp);var height=dims.innerHeight,width=dims.innerWidth,swf=this.obj.content,version=S.options.flashVersion,express=S.path+"expressInstall.swf",flashvars=S.options.flashVars,params=S.options.flashParams;S.flash.embedSWF(swf,this.id,width,height,version,express,flashvars,params)},remove:function(){S.flash.expressInstallCallback();S.flash.removeSWF(this.id)},onWindowResize:function(){var dims=S.dimensions,el=get(this.id);el.height=dims.innerHeight;el.width=dims.innerWidth}};var jwControllerHeight=20;S.flv=function(obj,id){this.obj=obj;this.id=id;this.height=obj.height?parseInt(obj.height,10):300;if(S.options.showMovieControls){this.height+=jwControllerHeight}this.width=obj.width?parseInt(obj.width,10):300};S.flv.ext=["flv","m4v"];S.flv.prototype={append:function(body,dims){var tmp=document.createElement("div");tmp.id=this.id;body.appendChild(tmp);var height=dims.innerHeight,width=dims.innerWidth,swf=S.path+"player.swf",version=S.options.flashVersion,express=S.path+"expressInstall.swf",flashvars=apply({file:this.obj.content,height:height,width:width,autostart:(S.options.autoplayMovies?"true":"false"),controlbar:(S.options.showMovieControls?"bottom":"none"),backcolor:"0x000000",frontcolor:"0xCCCCCC",lightcolor:"0x557722"},S.options.flashVars),params=S.options.flashParams;S.flash.embedSWF(swf,this.id,width,height,version,express,flashvars,params)},remove:function(){S.flash.expressInstallCallback();S.flash.removeSWF(this.id)},onWindowResize:function(){var dims=S.dimensions,el=get(this.id);el.height=dims.innerHeight;el.width=dims.innerWidth}};var qtControllerHeight=16;S.qt=function(obj,id){this.obj=obj;this.id=id;this.height=obj.height?parseInt(obj.height,10):300;if(S.options.showMovieControls){this.height+=qtControllerHeight}this.width=obj.width?parseInt(obj.width,10):300};S.qt.ext=["dv","mov","moov","movie","mp4","avi","mpg","mpeg"];S.qt.prototype={append:function(body,dims){var opt=S.options,autoplay=String(opt.autoplayMovies),controls=String(opt.showMovieControls);var html="<object",movie={id:this.id,name:this.id,height:this.height,width:this.width,kioskmode:"true"};if(S.isIE){movie.classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B";movie.codebase="http://www.apple.com/qtactivex/qtplugin.cab#version=6,0,2,0"}else{movie.type="video/quicktime";movie.data=this.obj.content}for(var m in movie){html+=" "+m+'="'+movie[m]+'"'}html+=">";var params={src:this.obj.content,scale:"aspect",controller:controls,autoplay:autoplay};for(var p in params){html+='<param name="'+p+'" value="'+params[p]+'">'}html+="</object>";body.innerHTML=html},remove:function(){try{document[this.id].Stop()}catch(e){}var el=get(this.id);if(el){remove(el)}}};var wmpControllerHeight=(S.isIE?70:45);S.wmp=function(obj,id){this.obj=obj;this.id=id;this.height=obj.height?parseInt(obj.height,10):300;if(S.options.showMovieControls){this.height+=wmpControllerHeight}this.width=obj.width?parseInt(obj.width,10):300};S.wmp.ext=["asf","avi","mpg","mpeg","wm","wmv"];S.wmp.prototype={append:function(body,dims){var opt=S.options,autoplay=opt.autoplayMovies?1:0;var movie='<object id="'+this.id+'" name="'+this.id+'" height="'+this.height+'" width="'+this.width+'"',params={autostart:opt.autoplayMovies?1:0};if(S.isIE){movie+=' classid="clsid:6BF52A52-394A-11d3-B153-00C04F79FAA6"';params.url=this.obj.content;params.uimode=opt.showMovieControls?"full":"none"}else{movie+=' type="video/x-ms-wmv"';movie+=' data="'+this.obj.content+'"';params.showcontrols=opt.showMovieControls?1:0}movie+=">";for(var p in params){movie+='<param name="'+p+'" value="'+params[p]+'">'}movie+="</object>";body.innerHTML=movie},remove:function(){if(S.isIE){try{window[this.id].controls.stop();window[this.id].URL="movie"+now()+".wmv";window[this.id]=function(){}}catch(e){}}var el=get(this.id);if(el){setTimeout(function(){remove(el)},10)}}};var overlayOn=false,visibilityCache=[],pngIds=["sb-nav-close","sb-nav-next","sb-nav-play","sb-nav-pause","sb-nav-previous"],container,overlay,wrapper,doWindowResize=true;function animate(el,property,to,duration,callback){var isOpacity=(property=="opacity"),anim=isOpacity?S.setOpacity:function(el,value){el.style[property]=""+value+"px"};if(duration==0||(!isOpacity&&!S.options.animate)||(isOpacity&&!S.options.animateFade)){anim(el,to);if(callback){callback()}return}var from=parseFloat(S.getStyle(el,property))||0;var delta=to-from;if(delta==0){if(callback){callback()}return}duration*=1000;var begin=now(),ease=S.ease,end=begin+duration,time;var interval=setInterval(function(){time=now();if(time>=end){clearInterval(interval);interval=null;anim(el,to);if(callback){callback()}}else{anim(el,from+ease((time-begin)/duration)*delta)}},10)}function setSize(){container.style.height=S.getWindowSize("Height")+"px";container.style.width=S.getWindowSize("Width")+"px"}function setPosition(){container.style.top=document.documentElement.scrollTop+"px";container.style.left=document.documentElement.scrollLeft+"px"}function toggleTroubleElements(on){if(on){each(visibilityCache,function(i,el){el[0].style.visibility=el[1]||""})}else{visibilityCache=[];each(S.options.troubleElements,function(i,tag){each(document.getElementsByTagName(tag),function(j,el){visibilityCache.push([el,el.style.visibility]);el.style.visibility="hidden"})})}}function toggleNav(id,on){var el=get("sb-nav-"+id);if(el){el.style.display=on?"":"none"}}function toggleLoading(on,callback){var loading=get("sb-loading"),playerName=S.getCurrent().player,anim=(playerName=="img"||playerName=="html");if(on){S.setOpacity(loading,0);loading.style.display="block";var wrapped=function(){S.clearOpacity(loading);if(callback){callback()}};if(anim){animate(loading,"opacity",1,S.options.fadeDuration,wrapped)}else{wrapped()}}else{var wrapped=function(){loading.style.display="none";S.clearOpacity(loading);if(callback){callback()}};if(anim){animate(loading,"opacity",0,S.options.fadeDuration,wrapped)}else{wrapped()}}}function buildBars(callback){var obj=S.getCurrent();get("sb-title-inner").innerHTML=obj.title||"";var close,next,play,pause,previous;if(S.options.displayNav){close=true;var len=S.gallery.length;if(len>1){if(S.options.continuous){next=previous=true}else{next=(len-1)>S.current;previous=S.current>0}}if(S.options.slideshowDelay>0&&S.hasNext()){pause=!S.isPaused();play=!pause}}else{close=next=play=pause=previous=false}toggleNav("close",close);toggleNav("next",next);toggleNav("play",play);toggleNav("pause",pause);toggleNav("previous",previous);var counter="";if(S.options.displayCounter&&S.gallery.length>1){var len=S.gallery.length;if(S.options.counterType=="skip"){var i=0,end=len,limit=parseInt(S.options.counterLimit)||0;if(limit<len&&limit>2){var h=Math.floor(limit/2);i=S.current-h;if(i<0){i+=len}end=S.current+(limit-h);if(end>len){end-=len}}while(i!=end){if(i==len){i=0}counter+='<a onclick="Shadowbox.change('+i+');"';if(i==S.current){counter+=' class="sb-counter-current"'}counter+=">"+(++i)+"</a>"}}else{counter=[S.current+1,S.lang.of,len].join(" ")}}get("sb-counter").innerHTML=counter;callback()}function showBars(callback){var titleInner=get("sb-title-inner"),infoInner=get("sb-info-inner"),duration=0.35;titleInner.style.visibility=infoInner.style.visibility="";if(titleInner.innerHTML!=""){animate(titleInner,"marginTop",0,duration)}animate(infoInner,"marginTop",0,duration,callback)}function hideBars(anim,callback){var title=get("sb-title"),info=get("sb-info"),titleHeight=title.offsetHeight,infoHeight=info.offsetHeight,titleInner=get("sb-title-inner"),infoInner=get("sb-info-inner"),duration=(anim?0.35:0);animate(titleInner,"marginTop",titleHeight,duration);animate(infoInner,"marginTop",infoHeight*-1,duration,function(){titleInner.style.visibility=infoInner.style.visibility="hidden";callback()})}function adjustHeight(height,top,anim,callback){var wrapperInner=get("sb-wrapper-inner"),duration=(anim?S.options.resizeDuration:0);animate(wrapper,"top",top,duration);animate(wrapperInner,"height",height,duration,callback)}function adjustWidth(width,left,anim,callback){var duration=(anim?S.options.resizeDuration:0);animate(wrapper,"left",left,duration);animate(wrapper,"width",width,duration,callback)}function setDimensions(height,width){var bodyInner=get("sb-body-inner"),height=parseInt(height),width=parseInt(width),topBottom=wrapper.offsetHeight-bodyInner.offsetHeight,leftRight=wrapper.offsetWidth-bodyInner.offsetWidth,maxHeight=overlay.offsetHeight,maxWidth=overlay.offsetWidth,padding=parseInt(S.options.viewportPadding)||20,preserveAspect=(S.player&&S.options.handleOversize!="drag");return S.setDimensions(height,width,maxHeight,maxWidth,topBottom,leftRight,padding,preserveAspect)}var K={};K.markup='<div id="sb-container"><div id="sb-overlay"></div><div id="sb-wrapper"><div id="sb-title"><div id="sb-title-inner"></div></div><div id="sb-wrapper-inner"><div id="sb-body"><div id="sb-body-inner"></div><div id="sb-loading"><div id="sb-loading-inner"><span>{loading}</span></div></div></div></div><div id="sb-info"><div id="sb-info-inner"><div id="sb-counter"></div><div id="sb-nav"><a id="sb-nav-close" title="{close}" onclick="Shadowbox.close()"></a><a id="sb-nav-next" title="{next}" onclick="Shadowbox.next()"></a><a id="sb-nav-play" title="{play}" onclick="Shadowbox.play()"></a><a id="sb-nav-pause" title="{pause}" onclick="Shadowbox.pause()"></a><a id="sb-nav-previous" title="{previous}" onclick="Shadowbox.previous()"></a></div></div></div></div></div>';K.options={animSequence:"sync",counterLimit:10,counterType:"default",displayCounter:true,displayNav:true,fadeDuration:0.35,initialHeight:160,initialWidth:320,modal:false,overlayColor:"#000",overlayOpacity:0.5,resizeDuration:0.35,showOverlay:true,troubleElements:["select","object","embed","canvas"]};K.init=function(){S.appendHTML(document.body,sprintf(K.markup,S.lang));K.body=get("sb-body-inner");container=get("sb-container");overlay=get("sb-overlay");wrapper=get("sb-wrapper");if(!supportsFixed){container.style.position="absolute"}if(!supportsOpacity){var el,m,re=/url\("(.*\.png)"\)/;each(pngIds,function(i,id){el=get(id);if(el){m=S.getStyle(el,"backgroundImage").match(re);if(m){el.style.backgroundImage="none";el.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true,src="+m[1]+",sizingMethod=scale);"}}})}var timer;addEvent(window,"resize",function(){if(timer){clearTimeout(timer);timer=null}if(open){timer=setTimeout(K.onWindowResize,10)}})};K.onOpen=function(obj,callback){doWindowResize=false;container.style.display="block";setSize();var dims=setDimensions(S.options.initialHeight,S.options.initialWidth);adjustHeight(dims.innerHeight,dims.top);adjustWidth(dims.width,dims.left);if(S.options.showOverlay){overlay.style.backgroundColor=S.options.overlayColor;S.setOpacity(overlay,0);if(!S.options.modal){addEvent(overlay,"click",S.close)}overlayOn=true}if(!supportsFixed){setPosition();addEvent(window,"scroll",setPosition)}toggleTroubleElements();container.style.visibility="visible";if(overlayOn){animate(overlay,"opacity",S.options.overlayOpacity,S.options.fadeDuration,callback)}else{callback()}};K.onLoad=function(changing,callback){toggleLoading(true);while(K.body.firstChild){remove(K.body.firstChild)}hideBars(changing,function(){if(!open){return}if(!changing){wrapper.style.visibility="visible"}buildBars(callback)})};K.onReady=function(callback){if(!open){return}var player=S.player,dims=setDimensions(player.height,player.width);var wrapped=function(){showBars(callback)};switch(S.options.animSequence){case"hw":adjustHeight(dims.innerHeight,dims.top,true,function(){adjustWidth(dims.width,dims.left,true,wrapped)});break;case"wh":adjustWidth(dims.width,dims.left,true,function(){adjustHeight(dims.innerHeight,dims.top,true,wrapped)});break;default:adjustWidth(dims.width,dims.left,true);adjustHeight(dims.innerHeight,dims.top,true,wrapped)}};K.onShow=function(callback){toggleLoading(false,callback);doWindowResize=true};K.onClose=function(){if(!supportsFixed){removeEvent(window,"scroll",setPosition)}removeEvent(overlay,"click",S.close);wrapper.style.visibility="hidden";var callback=function(){container.style.visibility="hidden";container.style.display="none";toggleTroubleElements(true)};if(overlayOn){animate(overlay,"opacity",0,S.options.fadeDuration,callback)}else{callback()}};K.onPlay=function(){toggleNav("play",false);toggleNav("pause",true)};K.onPause=function(){toggleNav("pause",false);toggleNav("play",true)};K.onWindowResize=function(){if(!doWindowResize){return}setSize();var player=S.player,dims=setDimensions(player.height,player.width);adjustWidth(dims.width,dims.left);adjustHeight(dims.innerHeight,dims.top);if(player.onWindowResize){player.onWindowResize()}};S.skin=K;window.Shadowbox=S})(window);;
// $Id: shadowbox_auto.js,v 1.1.4.4.2.4.2.1 2010/04/03 05:53:55 nicholasalipaz Exp $

Drupal.behaviors.shadowbox = function (context) {
  var settings = Drupal.settings.shadowbox;
  if (settings.auto_enable_all_images == 1) {
    $("a[href$='jpg'], a[href$='png'], a[href$='gif'], a[href$='jpeg'], a[href$='bmp'], a[href$='JPG'], a[href$='PNG'], a[href$='GIF'], a[href$='JPEG'], a[href$='BMP']").each(function() {
      if (settings.auto_gallery == 1) {
        $(this).attr('rel', 'shadowbox[gallery]');
      }
      else {
        $(this).attr('rel', 'shadowbox');
      };
    });
  };
  Shadowbox.setup();
};
;
(function($){
	/* hoverIntent by Brian Cherne */
	$.fn.hoverIntent = function(f,g) {
		// default configuration options
		var cfg = {
			sensitivity: 7,
			interval: 100,
			timeout: 0
		};
		// override configuration options with user supplied object
		cfg = $.extend(cfg, g ? { over: f, out: g } : f );

		// instantiate variables
		// cX, cY = current X and Y position of mouse, updated by mousemove event
		// pX, pY = previous X and Y position of mouse, set by mouseover and polling interval
		var cX, cY, pX, pY;

		// A private function for getting mouse position
		var track = function(ev) {
			cX = ev.pageX;
			cY = ev.pageY;
		};

		// A private function for comparing current and previous mouse position
		var compare = function(ev,ob) {
			ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
			// compare mouse positions to see if they've crossed the threshold
			if ( ( Math.abs(pX-cX) + Math.abs(pY-cY) ) < cfg.sensitivity ) {
				$(ob).unbind("mousemove",track);
				// set hoverIntent state to true (so mouseOut can be called)
				ob.hoverIntent_s = 1;
				return cfg.over.apply(ob,[ev]);
			} else {
				// set previous coordinates for next time
				pX = cX; pY = cY;
				// use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
				ob.hoverIntent_t = setTimeout( function(){compare(ev, ob);} , cfg.interval );
			}
		};

		// A private function for delaying the mouseOut function
		var delay = function(ev,ob) {
			ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
			ob.hoverIntent_s = 0;
			return cfg.out.apply(ob,[ev]);
		};

		// A private function for handling mouse 'hovering'
		var handleHover = function(e) {
			// next three lines copied from jQuery.hover, ignore children onMouseOver/onMouseOut
			var p = (e.type == "mouseover" ? e.fromElement : e.toElement) || e.relatedTarget;
			while ( p && p != this ) { try { p = p.parentNode; } catch(e) { p = this; } }
			if ( p == this ) { return false; }

			// copy objects to be passed into t (required for event object to be passed in IE)
			var ev = jQuery.extend({},e);
			var ob = this;

			// cancel hoverIntent timer if it exists
			if (ob.hoverIntent_t) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); }

			// else e.type == "onmouseover"
			if (e.type == "mouseover") {
				// set "previous" X and Y position based on initial entry point
				pX = ev.pageX; pY = ev.pageY;
				// update "current" X and Y position based on mousemove
				$(ob).bind("mousemove",track);
				// start polling interval (self-calling timeout) to compare mouse coordinates over time
				if (ob.hoverIntent_s != 1) { ob.hoverIntent_t = setTimeout( function(){compare(ev,ob);} , cfg.interval );}

			// else e.type == "onmouseout"
			} else {
				// unbind expensive mousemove event
				$(ob).unbind("mousemove",track);
				// if hoverIntent state is true, then call the mouseOut function after the specified delay
				if (ob.hoverIntent_s == 1) { ob.hoverIntent_t = setTimeout( function(){delay(ev,ob);} , cfg.timeout );}
			}
		};

		// bind the function to the two event listeners
		return this.mouseover(handleHover).mouseout(handleHover);
	};
	
})(jQuery);;

/*
 * Superfish v1.4.8 - jQuery menu widget
 * Copyright (c) 2008 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 *
 * CHANGELOG: http://users.tpg.com.au/j_birch/plugins/superfish/changelog.txt
 */

;(function($){
	$.fn.superfish = function(op){

		var sf = $.fn.superfish,
			c = sf.c,
			$arrow = $([''].join('')),
			over = function(){
				var $$ = $(this), menu = getMenu($$);
				clearTimeout(menu.sfTimer);
				$$.showSuperfishUl().siblings().hideSuperfishUl();
			},
			out = function(){
				var $$ = $(this), menu = getMenu($$), o = sf.op;
				clearTimeout(menu.sfTimer);
				menu.sfTimer=setTimeout(function(){
					o.retainPath=($.inArray($$[0],o.$path)>-1);
					$$.hideSuperfishUl();
					if (o.$path.length && $$.parents(['li.',o.hoverClass].join('')).length<1){over.call(o.$path);}
				},o.delay);	
			},
			getMenu = function($menu){
				var menu = $menu.parents(['ul.',c.menuClass,':first'].join(''))[0];
				sf.op = sf.o[menu.serial];
				return menu;
			},
			addArrow = function($a){ $a.addClass(c.anchorClass).append($arrow.clone()); };
			
		return this.each(function() {
			var s = this.serial = sf.o.length;
			var o = $.extend({},sf.defaults,op);
			o.$path = $('li.'+o.pathClass,this).slice(0,o.pathLevels).each(function(){
				$(this).addClass([o.hoverClass,c.bcClass].join(' '))
					.filter('li:has(ul)').removeClass(o.pathClass);
			});
			sf.o[s] = sf.op = o;
			
			$('li:has(ul)',this)[($.fn.hoverIntent && !o.disableHI) ? 'hoverIntent' : 'hover'](over,out).each(function() {
				if (o.autoArrows) addArrow( $('>a:first-child',this) );
			})
			.not('.'+c.bcClass)
				.hideSuperfishUl();
			
			var $a = $('a',this);
			$a.each(function(i){
				var $li = $a.eq(i).parents('li');
				$a.eq(i).focus(function(){over.call($li);}).blur(function(){out.call($li);});
			});
			o.onInit.call(this);
			
		}).each(function() {
			menuClasses = [c.menuClass];
			if (sf.op.dropShadows  && !($.browser.msie && $.browser.version < 7)) menuClasses.push(c.shadowClass);
			$(this).addClass(menuClasses.join(' '));
		});
	};

	var sf = $.fn.superfish;
	sf.o = [];
	sf.op = {};
	sf.IE7fix = function(){
		var o = sf.op;
		if ($.browser.msie && $.browser.version > 6 && o.dropShadows && o.animation.opacity!=undefined)
			this.toggleClass(sf.c.shadowClass+'-off');
		};
	sf.c = {
		bcClass     : 'sf-breadcrumb',
		menuClass   : 'sf-js-enabled',
		anchorClass : 'sf-with-ul',
		arrowClass  : 'sf-sub-indicator',
		shadowClass : 'sf-shadow'
	};
	sf.defaults = {
		hoverClass	: 'sfHover',
		pathClass	: 'overideThisToUse',
		pathLevels	: 1,
		delay		: 800,
		animation	: {opacity:'show'},
		speed		: 'normal',
		autoArrows	: true,
		dropShadows : true,
		disableHI	: false,		// true disables hoverIntent detection
		onInit		: function(){}, // callback functions
		onBeforeShow: function(){},
		onShow		: function(){},
		onHide		: function(){}
	};
	$.fn.extend({
		hideSuperfishUl : function(){
			var o = sf.op,
				not = (o.retainPath===true) ? o.$path : '';
			o.retainPath = false;
			var $ul = $(['li.',o.hoverClass].join(''),this).add(this).not(not).removeClass(o.hoverClass)
					.find('>ul').hide().css('visibility','hidden');
			o.onHide.call($ul);
			return this;
		},
		showSuperfishUl : function(){
			var o = sf.op,
				sh = sf.c.shadowClass+'-off',
				$ul = this.addClass(o.hoverClass)
					.find('>ul:hidden').css('visibility','visible');
			sf.IE7fix.call($ul);
			o.onBeforeShow.call($ul);
			$ul.animate(o.animation,o.speed,function(){ sf.IE7fix.call($ul); o.onShow.call($ul); });
			return this;
		}
	});

})(jQuery);
;
// $Id

Drupal.behaviors.skyBehavior = function(context) {
  /**
   * Superfish Menus
   * http://users.tpg.com.au/j_birch/plugins/superfish/
   * @see js/superfish.js
   */
  jQuery('#navigation ul').superfish({
    animation: { opacity: 'show', height:'show' },
    easing: 'swing',
    speed: 250,
    autoArrows:  false,
    dropShadows: false /* Needed for IE */
  });

  /**
   * Forum Comment Link Dialog Box
   * When clicking the link icon in forum comments,
   * this code triggers a dialog box with a link
   * to the comment for easy access to copy it.
   */
  jQuery(".copy-comment").click(function() {
      prompt('Link to this comment:', this.href);
  });
};
;

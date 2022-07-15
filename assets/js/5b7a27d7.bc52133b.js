(self.webpackChunknexivil_doc=self.webpackChunknexivil_doc||[]).push([[343],{3905:function(t,n,e){"use strict";e.d(n,{Zo:function(){return d},kt:function(){return k}});var i=e(7294);function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(Object(e),!0).forEach((function(n){o(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function r(t,n){if(null==t)return{};var e,i,o=function(t,n){if(null==t)return{};var e,i,o={},a=Object.keys(t);for(i=0;i<a.length;i++)e=a[i],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)e=a[i],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var p=i.createContext({}),u=function(t){var n=i.useContext(p),e=n;return t&&(e="function"==typeof t?t(n):l(l({},n),t)),e},d=function(t){var n=u(t.components);return i.createElement(p.Provider,{value:n},t.children)},s={inlineCode:"code",wrapper:function(t){var n=t.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(t,n){var e=t.components,o=t.mdxType,a=t.originalType,p=t.parentName,d=r(t,["components","mdxType","originalType","parentName"]),m=u(e),k=o,c=m["".concat(p,".").concat(k)]||m[k]||s[k]||a;return e?i.createElement(c,l(l({ref:n},d),{},{components:e})):i.createElement(c,l({ref:n},d))}));function k(t,n){var e=arguments,o=n&&n.mdxType;if("string"==typeof t||o){var a=e.length,l=new Array(a);l[0]=m;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=t,r.mdxType="string"==typeof t?t:o,l[1]=r;for(var u=2;u<a;u++)l[u]=e[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,e)}m.displayName="MDXCreateElement"},165:function(t,n,e){"use strict";e.r(n),e.d(n,{frontMatter:function(){return l},metadata:function(){return r},toc:function(){return p},default:function(){return d}});var i=e(2122),o=e(9756),a=(e(7294),e(3905)),l={id:"Basic",title:"Basic"},r={unversionedId:"nexivil-package-modules/Basic",id:"nexivil-package-modules/Basic",isDocsHomePage:!1,title:"Basic",description:"---",source:"@site/docs/nexivil-package-modules/1. Basic.md",sourceDirName:"nexivil-package-modules",slug:"/nexivil-package-modules/Basic",permalink:"/nexivil-doc-deploy/docs/nexivil-package-modules/Basic",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/nexivil-package-modules/1. Basic.md",version:"current",sidebarPosition:1,frontMatter:{id:"Basic",title:"Basic"},sidebar:"tutorialSidebar",previous:{title:"8.\uad6c\uc870\uacc4\uc0b0\uc11c",permalink:"/nexivil-doc-deploy/docs/CPBGirderManual/8.\uad6c\uc870\uacc4\uc0b0\uc11c"},next:{title:"2D",permalink:"/nexivil-doc-deploy/docs/nexivil-package-modules/2D"}},p=[{value:"Class",id:"class",children:[{value:"Point",id:"point",children:[]},{value:"RefPoint",id:"refpoint",children:[]},{value:"Alignment",id:"alignment",children:[]},{value:"StPoint",id:"stpoint",children:[]},{value:"Spline",id:"spline",children:[]}]},{value:"Module",id:"module",children:[{value:"PointLengthXY",id:"pointlengthxy",children:[]},{value:"PointLength",id:"pointlength",children:[]},{value:"PointToLocal",id:"pointtolocal",children:[]},{value:"PointToGlobal",id:"pointtoglobal",children:[]},{value:"PointToSkewed",id:"pointtoskewed",children:[]},{value:"StPointToParallel",id:"stpointtoparallel",children:[]},{value:"AlignmentToOffsetSpline",id:"alignmenttooffsetspline",children:[]},{value:"MatchedPointOnAlignment",id:"matchedpointonalignment",children:[]},{value:"IntersectionPointOnSpline",id:"intersectionpointonspline",children:[]}]}],u={toc:p};function d(t){var n=t.components,e=(0,o.Z)(t,["components"]);return(0,a.kt)("wrapper",(0,i.Z)({},u,e,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"class"},"Class"),(0,a.kt)("h3",{id:"point"},"Point"),(0,a.kt)("p",null,"Coordinate with information on the local coordinate system from which this is derived."),(0,a.kt)("h4",{id:"constructor"},"Constructor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Point(x, y, z)\n")),(0,a.kt)("p",null,"\u2003"," x ",(0,a.kt)("inlineCode",{parentName:"p"},"Number")," : value of x-axis ","[mm]"),(0,a.kt)("p",null,"\u2003"," y ",(0,a.kt)("inlineCode",{parentName:"p"},"Number")," : value of y-axis ","[mm]"),(0,a.kt)("p",null,"\u2003"," z ",(0,a.kt)("inlineCode",{parentName:"p"},"Number")," : value of z-axis ","[mm]"),(0,a.kt)("h4",{id:"properties"},"Properties"),(0,a.kt)("p",null,"Containing the data of constructor input."),(0,a.kt)("h3",{id:"refpoint"},"RefPoint"),(0,a.kt)("p",null,"Coordinate with plane information."),(0,a.kt)("h4",{id:"constructor-1"},"Constructor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"RefPoint(originPoint = new Point(0,0,0), xAxis = new Point(1,0,0), xRotation = PI/2)\n")),(0,a.kt)("p",null,"\u2003"," originPoint ",(0,a.kt)("inlineCode",{parentName:"p"},"Point")," : Point() with coordinate values"),(0,a.kt)("p",null,"\u2003"," xAxis ",(0,a.kt)("inlineCode",{parentName:"p"},"Point")," : Point() with direction vectors of x-axis"),(0,a.kt)("p",null,"\u2003"," xRotation ",(0,a.kt)("inlineCode",{parentName:"p"},"Number")," : x-axis rotation angle to be equal to the global coordinate system ","[rad]"),(0,a.kt)("h4",{id:"properties-1"},"Properties"),(0,a.kt)("p",null,"See the base ",(0,a.kt)("inlineCode",{parentName:"p"},"Point")," class for inherited properties."),(0,a.kt)("p",null,"\u2003"," .xAxis ",(0,a.kt)("inlineCode",{parentName:"p"},"Point")," : Point() with x-axis direction vectors of UCS in global coordinate system"),(0,a.kt)("p",null,"\u2003"," .xRotation ",(0,a.kt)("inlineCode",{parentName:"p"},"Number")," : x-axis rotation angle to be equal to the global coordinate system ","[rad]"),(0,a.kt)("p",null,"\u2003"," .yRotation ",(0,a.kt)("inlineCode",{parentName:"p"},"Number")," : y-axis rotation angle to be equal to the global coordinate system ","[rad]"),(0,a.kt)("p",null,"\u2003"," .zRotation ",(0,a.kt)("inlineCode",{parentName:"p"},"Number")," : z-axis rotation angle to be equal to the global coordinate system ","[rad]"),(0,a.kt)("h3",{id:"alignment"},"Alignment"),(0,a.kt)("p",null,"Infromation of alignment with points."),(0,a.kt)("h4",{id:"constructor-2"},"Constructor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Alignment(horizonData, verticalData, superElevation, beginStation)\n")),(0,a.kt)("p",null,"\u2003"," horizonData ",(0,a.kt)("inlineCode",{parentName:"p"},"Double array")," : Basic input to create alignment ( ",(0,a.kt)("inlineCode",{parentName:"p"},"element")," : ","[ x, y, r, a1, a2 ]"," )"),(0,a.kt)("p",null,"\u2003"," ","\u2003"," x ",(0,a.kt)("inlineCode",{parentName:"p"},"Number")," : coordinate value of x-axis ","[mm]"),(0,a.kt)("p",null,"\u2003"," ","\u2003"," y ",(0,a.kt)("inlineCode",{parentName:"p"},"Number")," : coordinate value of y-axis ","[mm]"),(0,a.kt)("p",null,"\u2003"," ","\u2003"," r ",(0,a.kt)("inlineCode",{parentName:"p"},"Number")," : radius of clothois ","[mm]"),(0,a.kt)("p",null,"\u2003"," ","\u2003"," a1 ",(0,a.kt)("inlineCode",{parentName:"p"},"Number")," : constant for calculate starting clothoid"),(0,a.kt)("p",null,"\u2003"," ","\u2003"," a2 ",(0,a.kt)("inlineCode",{parentName:"p"},"Number")," : constant for calculate end clothoid"),(0,a.kt)("p",null,"\u2003"," verticalData ",(0,a.kt)("inlineCode",{parentName:"p"},"Array")," : Vertical information of alignment ( ",(0,a.kt)("inlineCode",{parentName:"p"},"Element"),": ","[ station, elevation, curveLength ]"," )"),(0,a.kt)("p",null,"\u2003"," ","\u2003"," station ",(0,a.kt)("inlineCode",{parentName:"p"},"Number")," : Distance from the begin station to a specific station ","[mm]"),(0,a.kt)("p",null,"\u2003"," ","\u2003"," elevation ",(0,a.kt)("inlineCode",{parentName:"p"},"Number")," : Height on the station position"),(0,a.kt)("p",null,"\u2003"," ","\u2003"," curveLength ",(0,a.kt)("inlineCode",{parentName:"p"},"Number")," : ..."),(0,a.kt)("p",null,"\u2003"," superElevation ",(0,a.kt)("inlineCode",{parentName:"p"},"Array"),": Elevation information of alignment ( ",(0,a.kt)("inlineCode",{parentName:"p"},"Element"),": ","[ station, left, right ]"," )"),(0,a.kt)("p",null,"\u2003"," ","\u2003"," station ",(0,a.kt)("inlineCode",{parentName:"p"},"Number")," : Distance from the begin station to a specific station ","[mm]"),(0,a.kt)("p",null,"\u2003"," ","\u2003"," left ",(0,a.kt)("inlineCode",{parentName:"p"},"Number")," : ..."),(0,a.kt)("p",null,"\u2003"," ","\u2003"," right ",(0,a.kt)("inlineCode",{parentName:"p"},"Number")," : ..."),(0,a.kt)("h4",{id:"properties-2"},"Properties"),(0,a.kt)("p",null,"\u2003"," .HorizonDataList ",(0,a.kt)("inlineCode",{parentName:"p"},"Array")," : horizonData of input"),(0,a.kt)("p",null,"\u2003"," .VerticalDataList ",(0,a.kt)("inlineCode",{parentName:"p"},"Array")," : verticalData of input"),(0,a.kt)("p",null,"\u2003"," .SuperElevation ",(0,a.kt)("inlineCode",{parentName:"p"},"Array")," : superElevation of input"),(0,a.kt)("p",null,"\u2003"," .beginStation ",(0,a.kt)("inlineCode",{parentName:"p"},"Number")," : beginStaion of input"),(0,a.kt)("p",null,"\u2003"," .vectors ",(0,a.kt)("inlineCode",{parentName:"p"},"Array")," : vector info created with coordinates of horizonData"),(0,a.kt)("p",null,"\u2003"," .curves ",(0,a.kt)("inlineCode",{parentName:"p"},"Array")," : clothoid info"),(0,a.kt)("p",null,"\u2003"," .segments ",(0,a.kt)("inlineCode",{parentName:"p"},"Array")," : Array with element contained start and end station of each segments for clothoid"),(0,a.kt)("p",null,"\u2003"," .startPoint ",(0,a.kt)("inlineCode",{parentName:"p"},"Array")," : ... (array \ud615\ud0dc? \ubb34\uc5c7\uc744 \uc758\ubbf8?)"),(0,a.kt)("p",null,"\u2003"," .tanget ",(0,a.kt)("inlineCode",{parentName:"p"},"Array")," : ... (array \ud615\ud0dc? \ubb34\uc5c7\uc744 \uc758\ubbf8?)"),(0,a.kt)("p",null,"\u2003"," .parabolaData ",(0,a.kt)("inlineCode",{parentName:"p"},"Array")," : ..."),(0,a.kt)("p",null,"\u2003"," .endStation ",(0,a.kt)("inlineCode",{parentName:"p"},"Number")," : Station value of end point"),(0,a.kt)("p",null,"\u2003"," .points ",(0,a.kt)("inlineCode",{parentName:"p"},"Array")," : Array with element contained super elevation, vertical info, normal vector, skew info"),(0,a.kt)("h3",{id:"stpoint"},"StPoint"),(0,a.kt)("p",null,"Coordinate with alignment information."),(0,a.kt)("h4",{id:"constructor-3"},"Constructor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"StPoint(station, line, skew = PI/2, offset = 0)\n")),(0,a.kt)("p",null,"\u2003"," station ",(0,a.kt)("inlineCode",{parentName:"p"},"Number")," : Distance from the starting point of the alignment to this point"),(0,a.kt)("p",null,"\u2003"," line ",(0,a.kt)("inlineCode",{parentName:"p"},"Alignment")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Spline")," : .."),(0,a.kt)("p",null,"\u2003"," skew ",(0,a.kt)("inlineCode",{parentName:"p"},"Number")," : Skew (default = PI/2) ","[rad]"),(0,a.kt)("p",null,"\u2003"," offset ",(0,a.kt)("inlineCode",{parentName:"p"},"Number")," : Distance in normal direction"),(0,a.kt)("h4",{id:"properties-3"},"Properties"),(0,a.kt)("p",null,"Contains the data of constructor input."),(0,a.kt)("p",null,"See the base ",(0,a.kt)("inlineCode",{parentName:"p"},"RefPoint")," class for inherited properties."),(0,a.kt)("p",null,"\u2003"," .station ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," : Distance from the begin station of the alignment to this point"),(0,a.kt)("p",null,"\u2003"," .mainStation ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," : Distance from the init point of the alignment to this point (station of inputs)"),(0,a.kt)("p",null,"\u2003"," .gradientX ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," : Longitutinal gradient (x-axis rotation angle) ","[rad]"),(0,a.kt)("p",null,"\u2003"," .gradientY ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," : Horizontal gradient (y-axis rotation angle) ","[rad]"),(0,a.kt)("p",null,"\u2003"," .leftGradient ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," : Superelevation to the left ","[rad]"),(0,a.kt)("p",null,"\u2003"," .rightGradient ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," : Superelevation to the right ","[rad]"),(0,a.kt)("h3",{id:"spline"},"Spline"),(0,a.kt)("p",null,"A 3D curve of array type with more than 2 points."),(0,a.kt)("h4",{id:"constructor-4"},"Constructor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Spline(refPoints, alignment = null)\n")),(0,a.kt)("p",null,"\u2003"," refPoints ",(0,a.kt)("inlineCode",{parentName:"p"},"Array")," : A Array with RefPoint() as an element"),(0,a.kt)("p",null,"\u2003"," alignment ",(0,a.kt)("inlineCode",{parentName:"p"},"Alignment")," : .."),(0,a.kt)("h4",{id:"properties-4"},"Properties"),(0,a.kt)("p",null,"\u2003"," .points ",(0,a.kt)("inlineCode",{parentName:"p"},"Array")," : RefPoints with station"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"module"},"Module"),(0,a.kt)("h3",{id:"pointlengthxy"},"PointLengthXY"),(0,a.kt)("p",null,"Calculate the length from the origin to this point projected on th xy plane."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"PointLengthXY(point)\n")),(0,a.kt)("h4",{id:"inputs"},"Inputs"),(0,a.kt)("p",null,"\u2003"," point ",(0,a.kt)("inlineCode",{parentName:"p"},"Point")),(0,a.kt)("h4",{id:"output"},"Output"),(0,a.kt)("p",null,"\u2003"," ",(0,a.kt)("inlineCode",{parentName:"p"},"Number")),(0,a.kt)("h3",{id:"pointlength"},"PointLength"),(0,a.kt)("p",null,"Calculate the length from the origin to this point."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"PointLength(point)\n")),(0,a.kt)("h4",{id:"inputs-1"},"Inputs"),(0,a.kt)("p",null,"\u2003"," point ",(0,a.kt)("inlineCode",{parentName:"p"},"Point")),(0,a.kt)("h4",{id:"output-1"},"Output"),(0,a.kt)("p",null,"\u2003"," ",(0,a.kt)("inlineCode",{parentName:"p"},"Number")),(0,a.kt)("h3",{id:"pointtolocal"},"PointToLocal"),(0,a.kt)("p",null,"Rotate the coordinate of point to refPoint with plane information and translate. (rotation order: Z -> Y -> X)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"PointToLocal(point, refPoint)\n")),(0,a.kt)("h4",{id:"inputs-2"},"Inputs"),(0,a.kt)("p",null,"\u2003"," point ",(0,a.kt)("inlineCode",{parentName:"p"},"Point")," or ","[",(0,a.kt)("inlineCode",{parentName:"p"},"Point"),"...]"),(0,a.kt)("p",null,"\u2003"," refPoint ",(0,a.kt)("inlineCode",{parentName:"p"},"RefPoint")),(0,a.kt)("h4",{id:"output-2"},"Output"),(0,a.kt)("p",null,"\u2003"," ",(0,a.kt)("inlineCode",{parentName:"p"},"Point")," or ","[",(0,a.kt)("inlineCode",{parentName:"p"},"Point"),"...]"),(0,a.kt)("h3",{id:"pointtoglobal"},"PointToGlobal"),(0,a.kt)("p",null,"Translate the coordinate of point to refPoint with plane information and rotate. (rotation order: -X -> -Y -> -Z)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"PointToGlobal(point, refPoint)\n")),(0,a.kt)("h4",{id:"inputs-3"},"Inputs"),(0,a.kt)("p",null,"\u2003"," point ",(0,a.kt)("inlineCode",{parentName:"p"},"Point")," or ","[",(0,a.kt)("inlineCode",{parentName:"p"},"Point"),"...]"),(0,a.kt)("p",null,"\u2003"," frePoint ",(0,a.kt)("inlineCode",{parentName:"p"},"RefPoint")),(0,a.kt)("h4",{id:"output-3"},"Output"),(0,a.kt)("p",null,"\u2003"," ",(0,a.kt)("inlineCode",{parentName:"p"},"Point")," or ","[",(0,a.kt)("inlineCode",{parentName:"p"},"Point"),"...]"),(0,a.kt)("h3",{id:"pointtoskewed"},"PointToSkewed"),(0,a.kt)("p",null,"After transfrom point as skew, translate and rotate the translated point to stPoint (xRotation contained in stPoint is always PI/2)\nresult = (transformed point - stPoint) ","*"," rotation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"PointToSkewed(point, stPoint)\n")),(0,a.kt)("h4",{id:"inputs-4"},"Inputs"),(0,a.kt)("p",null,"\u2003"," point ",(0,a.kt)("inlineCode",{parentName:"p"},"Point")," or ","[",(0,a.kt)("inlineCode",{parentName:"p"},"Point"),"...]"),(0,a.kt)("p",null,"\u2003"," stPoint ",(0,a.kt)("inlineCode",{parentName:"p"},"StPoint")),(0,a.kt)("h4",{id:"output-4"},"Output"),(0,a.kt)("p",null,"\u2003"," ",(0,a.kt)("inlineCode",{parentName:"p"},"Point")," or ","[",(0,a.kt)("inlineCode",{parentName:"p"},"Point"),"...]"),(0,a.kt)("h3",{id:"stpointtoparallel"},"StPointToParallel"),(0,a.kt)("p",null,"A point on the alignment that is away from stPoint by station value and has a normal vector equal to the normal vector of the stPoint plane."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"StPointToParallel(stPoint, offset, alignment)\n")),(0,a.kt)("h4",{id:"inputs-5"},"Inputs"),(0,a.kt)("p",null,"\u2003"," stPoint ",(0,a.kt)("inlineCode",{parentName:"p"},"StPoint")),(0,a.kt)("p",null,"\u2003"," offset ",(0,a.kt)("inlineCode",{parentName:"p"},"Number")," : Distance from the stPoint to a location to define on the alignment"),(0,a.kt)("p",null,"\u2003"," alignment ",(0,a.kt)("inlineCode",{parentName:"p"},"Alignment")),(0,a.kt)("h4",{id:"output-5"},"Output"),(0,a.kt)("p",null,"\u2003"," ",(0,a.kt)("inlineCode",{parentName:"p"},"StPoint")),(0,a.kt)("h3",{id:"alignmenttooffsetspline"},"AlignmentToOffsetSpline"),(0,a.kt)("p",null,"Translate alignment by offset in the normal direction of each alignment's point."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"AlignmentToOffsetSpline(alignment, offset, startPoint, endPoint)\n")),(0,a.kt)("h4",{id:"inputs-6"},"Inputs"),(0,a.kt)("p",null,"\u2003"," alignment ",(0,a.kt)("inlineCode",{parentName:"p"},"Alignment")),(0,a.kt)("p",null,"\u2003"," offset ",(0,a.kt)("inlineCode",{parentName:"p"},"Number")," : Distance from the each points on the alignment"),(0,a.kt)("p",null,"\u2003"," startPoint ",(0,a.kt)("inlineCode",{parentName:"p"},"StPoint")," : External alignment point corresponding to start position of spline (default = null)"),(0,a.kt)("p",null,"\u2003"," endPoint ",(0,a.kt)("inlineCode",{parentName:"p"},"StPoint")," : External alignment point corresponding to end position of spline (default = null)"),(0,a.kt)("h4",{id:"output-6"},"Output"),(0,a.kt)("p",null,"\u2003"," ",(0,a.kt)("inlineCode",{parentName:"p"},"Spline")),(0,a.kt)("h3",{id:"matchedpointonalignment"},"MatchedPointOnAlignment"),(0,a.kt)("p",null,"Find the intersection StPoint between the alignment and a plane contatined the point with normal vector parallelt to the x-axis."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"MatchedPointOnAlignment(alignment, point)\n")),(0,a.kt)("h4",{id:"inputs-7"},"Inputs"),(0,a.kt)("p",null,"\u2003"," alignment ",(0,a.kt)("inlineCode",{parentName:"p"},"Alignment")),(0,a.kt)("p",null,"\u2003"," point ",(0,a.kt)("inlineCode",{parentName:"p"},"Point")),(0,a.kt)("h4",{id:"output-7"},"Output"),(0,a.kt)("p",null,"\u2003"," ",(0,a.kt)("inlineCode",{parentName:"p"},"StPoint")),(0,a.kt)("h3",{id:"intersectionpointonspline"},"IntersectionPointOnSpline"),(0,a.kt)("p",null,"Find the intersection RefPoint between the spline and a plane contained the stPoint."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"IntersectionPointOnSpline(spline, stPoint, alignment)\n")),(0,a.kt)("h4",{id:"inputs-8"},"Inputs"),(0,a.kt)("p",null,"\u2003"," spline ",(0,a.kt)("inlineCode",{parentName:"p"},"Spline")),(0,a.kt)("p",null,"\u2003"," stPoint ",(0,a.kt)("inlineCode",{parentName:"p"},"StPoint")),(0,a.kt)("p",null,"\u2003"," alignment ",(0,a.kt)("inlineCode",{parentName:"p"},"Alignment")," : default = null"),(0,a.kt)("h4",{id:"output-8"},"Output"),(0,a.kt)("p",null,"\u2003"," ",(0,a.kt)("inlineCode",{parentName:"p"},"StPoint")))}d.isMDXComponent=!0}}]);
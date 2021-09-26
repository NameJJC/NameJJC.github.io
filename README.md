<!DOCTYPE html><html lang="en"><head>
<title> 运维相关</title>
  <meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="()">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/svg-with-js.css" crossorigin="anonymous">
<style type="text/css">
#nav{
  display: none;
}
.xsj_container_toc>#nav{
    display: block;
    background-color: #f9f9f9;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    overflow-y: auto;
    width: 300px;
    z-index: 1;
}
.xsj_container_toc>#wmd-preview{
    margin-left: 300px;
}
.hide_toc.xsj_container_toc>#nav{
    display: none;
}

.hide_toc.xsj_container_toc>#wmd-preview{
    margin-left:  50px;
}

#toc-nav {
    position: fixed;
    z-index: 2;
    bottom: 0;
    left: 0;
    margin: 0;
    min-width: 1.33em;
    border-top-right-radius: 2rem;
    box-shadow: 0 0 2px;
    font-size: 1.5em;
    color: black;
}

#toc-nav .toc-toggle-tip{
    display:none;
}
#toc-nav:hover .toc-toggle-tip{
    display:initial;
    margin-right: .5em;
    }
</style>
<style type="text/css">
.tocbot{overflow-y:auto}.tocbot>.toc-list{overflow:hidden;position:relative}.tocbot>.toc-list li{list-style:none}.toc-list{margin:0;padding-left:10px}a.toc-link{color:currentColor;height:100%}.is-collapsible{max-height:1000px;overflow:hidden;transition:all 300ms ease-in-out}.is-collapsed{max-height:0}.is-position-fixed{position:fixed !important;top:0}.is-active-link{font-weight:700}.toc-link::before{background-color:#EEE;content:' ';display:inline-block;height:inherit;left:0;margin-top:-1px;position:absolute;width:2px}.is-active-link::before{background-color:#54BC4B}
</style>
<style type="text/css">
/* normal start */
body {
  font-family: 'Helvetica Neue', Helvetica, Tahoma, Arial, 'Hiragino Sans GB', STHeiti, "Microsoft YaHei", "微软雅黑", 'WenQuanYi Micro Hei', STXihei, "华文细黑", Heiti, "黑体", SimSun, "宋体", Song, sans-serif;
  font-size: 16px;
  line-height: 1.8;
  font-weight: normal;
  color: #2f2f2f;
  word-wrap: break-word;
  word-break: break-word;
}


/* link start */
a:focus {
  outline: thin dotted #333;
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}

a:hover,
a:active {
  outline: 0;
}
a {
  color: #0088cc;
  text-decoration: none;
}

a:hover {
  color: #005580;
  text-decoration: underline;
}
/* link end */


/* head start */
h1,h2,h3,h4,h5,h6 {
  font-weight: bold;
  text-rendering: optimizelegibility;
}

h1 {
  font-size: 2rem;;
  margin: .8em 0 .6em 0;
}

h2 {
  font-size: 1.8rem;
  margin: .7em 0 .5em 0;
}

h3 {
  font-size: 1.6rem;
  margin: .6em 0 .4em 0;
}

h4 {
  font-size: 1.5rem;
  margin: .5em 0 .3em 0;
}

h5 {
  font-size: 1.4rem;
  margin: .5em 0 .3em 0;
}

h6 {
  font-size: 1.3rem;
  margin: .5em 0 .3em 0;
}
/* head end */

.xsj_hr {
    margin: 20px 0;
    border: 0;
    border-top: 1px dashed #2f2f2f;
    border-left: 90px solid transparent;
    border-right: 90px solid transparent;
}

p {
    margin: 1.1em 0 1.6em;
}

pre{
    line-height: initial !important;
    word-wrap: break-word;
    word-break: break-word;
    tab-size: 4;
    white-space: pre-wrap;
    font-family: monospace;
}

kbd{
    display: inline-block;
    padding: 3px 5px;
    font-size: 11px;
    line-height: 10px;
    color: #2f2f2f;
    vertical-align: middle;
    background: #fcfcfc;
    border: solid 1px #2f2f2f;
    border-bottom-color: #2f2f2f;
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 #2f2f2f;
}

address {
  display: block;
  margin-bottom: 20px;
  font-style: normal;
  line-height: 20px;
}


small {
  font-size: 85%;
}

strong {
  font-weight: bold;
}

em {
  font-style: italic;
}

cite {
  font-style: normal;
}


/* list start */
ul,ol {
  padding: 0;
  margin: 1.1em 0 1.1em 3em;
}

ul ul,
ul ol,
ol ol,
ol ul {
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 1em;
}
/* list end */

dl {
  margin-bottom: 20px;
}

dt,
dd {
  line-height: 20px;
}

dt {
  font-weight: bold;
  line-height: 1.35em;
}

dd {
  margin-left: 10px;
  line-height: 1.35em;
}
abbr[title],
abbr[data-original-title] {
  cursor: help;
  border-bottom: 1px dotted #999999;
}

/* normal end */


/* blockquote start */
blockquote {
  padding: 20px 20px;
  margin: 20px 0 20px;
  border-left: 5px solid rgba(153, 153, 153, 0.2);
  background: rgba(204, 204, 204, 0.2);
}

blockquote p {
    margin: 1.1em 0 1.1em;
}

blockquote>ol.markdown_ol, blockquote>ul.markdown_ul{
  margin-left: 1.1em;
}

blockquote>*:first-child {
  margin-top: 0;
}

blockquote>*:last-child {
  margin-bottom: 0;
}

blockquote small {
  display: block;
  line-height: 20px;
  color: #999999;
}

blockquote small:before {
  content: '\2014 \00A0';
}

blockquote footer{
    margin: 1em 0;
    font-style: italic;
}

blockquote footer cite {
    margin: 0 1em;
}

/* blockquote end */

/**
 * Treeview syntax highlighting based on highlight.js
 * Copyright (c) 2014-2015, Asciidocfx Team, (MIT Licensed)
 * https://github.com/asciidocfx/highlight-treeview.js
 */
.language-treeview.hljs{
  position: relative;
}
.hljs-folder,
.hljs-hiddenfile,
.hljs-file {
    position: relative;
    vertical-align: top;
    display: inline-block;
    height: 16px;
}
.hljs-folder:before,
.hljs-file:before,
.hljs-hiddenfile:before {
    top: 0;
    content: '';
    width: 14px;
    height: 12px;
    margin-top: 0px;
    margin-right: 3px;
    position: relative;
    display: inline-block;
    background-size: 14px;
    background-repeat: no-repeat;
}
.hljs-file:before,
.hljs-hiddenfile:before {
    height: 14px;
    margin-left: 1px;
}
.hljs-hiddenfile {
    opacity: 0.6;
}
.hljs-file.photo:before {
    font: normal normal normal 14px/1 FontAwesome;
    content: "\f1c5";
}
.hljs-file.plain:before {
    font: normal normal normal 14px/1 FontAwesome;
    content: "\f016";
}
.hljs-file.source:before {
    font: normal normal normal 14px/1 FontAwesome;
    content: "\f1c9";
}
.hljs-file.archive:before {
    font: normal normal normal 14px/1 FontAwesome;
    content: "\f1c6";
}
.hljs-file.audio:before {
    font: normal normal normal 14px/1 FontAwesome;
    content: "\f1c7";
}
.hljs-file.video:before {
    font: normal normal normal 14px/1 FontAwesome;
    content: "\f1c8";
}
.hljs-file.pdf:before {
    font: normal normal normal 14px/1 FontAwesome;
    content: "\f1c1";
}
.hljs-file.xls:before {
    font: normal normal normal 14px/1 FontAwesome;
    content: "\f1c3";
}
.hljs-file.doc:before {
    font: normal normal normal 14px/1 FontAwesome;
    content: "\f1c2";
}
.hljs-file.ppt:before {
    font: normal normal normal 14px/1 FontAwesome;
    content: "\f1c4";
}
.hljs-folder:before {
    font: normal normal normal 14px/1 FontAwesome;
    content: "\f114";
}
.hljs-hiddenfile:before {
    font: normal normal normal 14px/1 FontAwesome;
    content: "\f016";
}
.hljs-tvline {
    margin-left: 6px;
    position: absolute;
    text-indent: -99em;
    padding-bottom: 8px;
    vertical-align: top;
    display: inline-block;
    border-left-width: 1px;
    border-left-style: solid;
    border-left-color: rgb(94, 144, 117);
}
.hljs-folder-branch {
    width: 8px;
    height: 8px;
    margin-top: -1px;
    margin-left: 6px;
    text-indent: -99em;
    position: relative;
    vertical-align: top;
    display: inline-block;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: rgb(94, 144, 117);
}
.hljs-folder-branch.win {
    width: 14px;
    margin-right: 2px;
}
.hljs-folder-last-branch {
    height: 7px;
    width: 7px;
    margin-left: 6px;
    text-indent: -99em;
    position: relative;
    vertical-align: top;
    display: inline-block;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: rgb(94, 144, 117);
    border-left-width: 1px;
    border-left-style: solid;
    border-left-color: rgb(94, 144, 117);
}
.hljs-folder-last-branch.win {
    width: 13px;
    margin-right: 2px;
}


/**
 * Treeview syntax highlighting based on highlight.js
 */

/*wavedrom start*/

.wavedrom_svg text, .wavedrom_svg_defs text {
    font-size:11pt;
    font-style:normal;
    font-variant:normal;
    font-weight:normal;
    font-stretch:normal;
    text-align:center;
    fill-opacity:1;
    font-family:Helvetica
}
.wavedrom_svg .muted, .wavedrom_svg_defs .muted {
    fill:#aaa
}
.wavedrom_svg .warning, .wavedrom_svg_defs .warning {
    fill:#f6b900
}
.wavedrom_svg .error, .wavedrom_svg_defs .error {
    fill:#f60000
}
.wavedrom_svg .info, .wavedrom_svg_defs .info {
    fill:#0041c4
}
.wavedrom_svg .success, .wavedrom_svg_defs .success {
    fill:#00ab00
}
.wavedrom_svg .h1, .wavedrom_svg_defs .h1 {
    font-size:33pt;
    font-weight:bold
}
.wavedrom_svg .h2, .wavedrom_svg_defs .h2 {
    font-size:27pt;
    font-weight:bold
}
.wavedrom_svg .h3, .wavedrom_svg_defs .h3 {
    font-size:20pt;
    font-weight:bold
}
.wavedrom_svg .h4, .wavedrom_svg_defs .h4 {
    font-size:14pt;
    font-weight:bold
}
.wavedrom_svg .h5, .wavedrom_svg_defs .h5 {
    font-size:11pt;
    font-weight:bold
}
.wavedrom_svg .h6, .wavedrom_svg_defs .h6 {
    font-size:8pt;
    font-weight:bold
}
.wavedrom_svg_defs .s1 {
    fill:none;
    stroke:#000;
    stroke-width:1;
    stroke-linecap:round;
    stroke-linejoin:miter;
    stroke-miterlimit:4;
    stroke-opacity:1;
    stroke-dasharray:none
}
.wavedrom_svg_defs .s2 {
    fill:none;
    stroke:#000;
    stroke-width:0.5;
    stroke-linecap:round;
    stroke-linejoin:miter;
    stroke-miterlimit:4;
    stroke-opacity:1;
    stroke-dasharray:none
}
.wavedrom_svg_defs .s3 {
    color:#000;
    fill:none;
    stroke:#000;
    stroke-width:1;
    stroke-linecap:round;
    stroke-linejoin:miter;
    stroke-miterlimit:4;
    stroke-opacity:1;
    stroke-dasharray:1,3;
    stroke-dashoffset:0;
    marker:none;
    visibility:visible;
    display:inline;
    overflow:visible;
    enable-background:accumulate
}
.wavedrom_svg_defs .s4 {
    color:#000;
    fill:none;
    stroke:#000;
    stroke-width:1;
    stroke-linecap:round;
    stroke-linejoin:miter;
    stroke-miterlimit:4;
    stroke-opacity:1;
    stroke-dasharray:none;
    stroke-dashoffset:0;
    marker:none;
    visibility:visible;
    display:inline;
    overflow:visible
}
.wavedrom_svg_defs .s5 {
    fill:#fff;
    stroke:none
}
.wavedrom_svg_defs .s6 {
    color:#000;
    fill:#ffffb4;
    fill-opacity:1;
    fill-rule:nonzero;
    stroke:none;
    stroke-width:1px;
    marker:none;
    visibility:visible;
    display:inline;
    overflow:visible;
    enable-background:accumulate
}
.wavedrom_svg_defs .s7 {
    color:#000;
    fill:#ffe0b9;
    fill-opacity:1;
    fill-rule:nonzero;
    stroke:none;
    stroke-width:1px;
    marker:none;
    visibility:visible;
    display:inline;
    overflow:visible;
    enable-background:accumulate
}
.wavedrom_svg_defs .s8 {
    color:#000;
    fill:#b9e0ff;
    fill-opacity:1;
    fill-rule:nonzero;
    stroke:none;
    stroke-width:1px;
    marker:none;
    visibility:visible;
    display:inline;
    overflow:visible;
    enable-background:accumulate
}
.wavedrom_svg_defs .s9 {
    fill:#000;
    fill-opacity:1;
    stroke:none
}
.wavedrom_svg_defs .s10 {
    color:#000;
    fill:#fff;
    fill-opacity:1;
    fill-rule:nonzero;
    stroke:none;
    stroke-width:1px;
    marker:none;
    visibility:visible;
    display:inline;
    overflow:visible;
    enable-background:accumulate
}
.wavedrom_svg_defs .s11 {
    fill:#0041c4;
    fill-opacity:1;
    stroke:none
}
.wavedrom_svg_defs .s12 {
    fill:none;
    stroke:#0041c4;
    stroke-width:1;
    stroke-linecap:round;
    stroke-linejoin:miter;
    stroke-miterlimit:4;
    stroke-opacity:1;
    stroke-dasharray:none
}

/*wavedrom stop*/


/* fontawesome */

/*!
 * Font Awesome Free 5.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
svg:not(:root).svg-inline--fa {
  overflow: visible; }

.svg-inline--fa {
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;
  vertical-align: -.125em; }
  .svg-inline--fa.fa-lg {
    vertical-align: -.225em; }
  .svg-inline--fa.fa-w-1 {
    width: 0.0625em; }
  .svg-inline--fa.fa-w-2 {
    width: 0.125em; }
  .svg-inline--fa.fa-w-3 {
    width: 0.1875em; }
  .svg-inline--fa.fa-w-4 {
    width: 0.25em; }
  .svg-inline--fa.fa-w-5 {
    width: 0.3125em; }
  .svg-inline--fa.fa-w-6 {
    width: 0.375em; }
  .svg-inline--fa.fa-w-7 {
    width: 0.4375em; }
  .svg-inline--fa.fa-w-8 {
    width: 0.5em; }
  .svg-inline--fa.fa-w-9 {
    width: 0.5625em; }
  .svg-inline--fa.fa-w-10 {
    width: 0.625em; }
  .svg-inline--fa.fa-w-11 {
    width: 0.6875em; }
  .svg-inline--fa.fa-w-12 {
    width: 0.75em; }
  .svg-inline--fa.fa-w-13 {
    width: 0.8125em; }
  .svg-inline--fa.fa-w-14 {
    width: 0.875em; }
  .svg-inline--fa.fa-w-15 {
    width: 0.9375em; }
  .svg-inline--fa.fa-w-16 {
    width: 1em; }
  .svg-inline--fa.fa-w-17 {
    width: 1.0625em; }
  .svg-inline--fa.fa-w-18 {
    width: 1.125em; }
  .svg-inline--fa.fa-w-19 {
    width: 1.1875em; }
  .svg-inline--fa.fa-w-20 {
    width: 1.25em; }
  .svg-inline--fa.fa-pull-left {
    margin-right: .3em;
    width: auto; }
  .svg-inline--fa.fa-pull-right {
    margin-left: .3em;
    width: auto; }
  .svg-inline--fa.fa-border {
    height: 1.5em; }
  .svg-inline--fa.fa-li {
    width: 2em; }
  .svg-inline--fa.fa-fw {
    width: 1.25em; }

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0; }

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -.125em;
  width: 1em; }
  .fa-layers svg.svg-inline--fa {
    -webkit-transform-origin: center center;
            transform-origin: center center; }

.fa-layers-text, .fa-layers-counter {
  display: inline-block;
  position: absolute;
  text-align: center; }

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center; }

.fa-layers-counter {
  background-color: #ff253a;
  border-radius: 1em;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: #fff;
  height: 1.5em;
  line-height: 1;
  max-width: 5em;
  min-width: 1.5em;
  overflow: hidden;
  padding: .25em;
  right: 0;
  text-overflow: ellipsis;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right; }

.fa-layers-bottom-right {
  bottom: 0;
  right: 0;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right; }

.fa-layers-bottom-left {
  bottom: 0;
  left: 0;
  right: auto;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left; }

.fa-layers-top-right {
  right: 0;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right; }

.fa-layers-top-left {
  left: 0;
  right: auto;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top left;
          transform-origin: top left; }

.fa-lg {
  font-size: 1.33333em;
  line-height: 0.75em;
  vertical-align: -.0667em; }

.fa-xs {
  font-size: .75em; }

.fa-sm {
  font-size: .875em; }

.fa-1x {
  font-size: 1em; }

.fa-2x {
  font-size: 2em; }

.fa-3x {
  font-size: 3em; }

.fa-4x {
  font-size: 4em; }

.fa-5x {
  font-size: 5em; }

.fa-6x {
  font-size: 6em; }

.fa-7x {
  font-size: 7em; }

.fa-8x {
  font-size: 8em; }

.fa-9x {
  font-size: 9em; }

.fa-10x {
  font-size: 10em; }

.fa-fw {
  text-align: center;
  width: 1.25em; }

.fa-ul {
  list-style-type: none;
  margin-left: 2.5em;
  padding-left: 0; }
  .fa-ul > li {
    position: relative; }

.fa-li {
  left: -2em;
  position: absolute;
  text-align: center;
  width: 2em;
  line-height: inherit; }

.fa-border {
  border: solid 0.08em #eee;
  border-radius: .1em;
  padding: .2em .25em .15em; }

.fa-pull-left {
  float: left; }

.fa-pull-right {
  float: right; }

.fa.fa-pull-left,
.fas.fa-pull-left,
.far.fa-pull-left,
.fal.fa-pull-left,
.fab.fa-pull-left {
  margin-right: .3em; }

.fa.fa-pull-right,
.fas.fa-pull-right,
.far.fa-pull-right,
.fal.fa-pull-right,
.fab.fa-pull-right {
  margin-left: .3em; }

.fa-spin {
  -webkit-animation: fa-spin 2s infinite linear;
          animation: fa-spin 2s infinite linear; }

.fa-pulse {
  -webkit-animation: fa-spin 1s infinite steps(8);
          animation: fa-spin 1s infinite steps(8); }

@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg); }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg); } }

@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg); }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg); } }

.fa-rotate-90 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg); }

.fa-rotate-180 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg); }

.fa-rotate-270 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg); }

.fa-flip-horizontal {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1); }

.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1); }

.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1); }

:root .fa-rotate-90,
:root .fa-rotate-180,
:root .fa-rotate-270,
:root .fa-flip-horizontal,
:root .fa-flip-vertical,
:root .fa-flip-both {
  -webkit-filter: none;
          filter: none; }

.fa-stack {
  display: inline-block;
  height: 2em;
  position: relative;
  width: 2.5em; }

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0; }

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em; }

.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em; }

.fa-inverse {
  color: #fff; }

.sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px; }

.sr-only-focusable:active, .sr-only-focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto; }

/* fontawesome end*/

/* xsj patch start */

.xsj_anchor{
  overflow: hidden;
  float: right;
}

.blank_anchor_id {
    float: right;
    width: 1px;
    height: 0px;
}
.blank_anchor_id {
    visibility: hidden;
}
.blank_anchor_id:before {
    content: 'a';
}
.xsj_foreignObject{
  width: 100%!important;
  height: 100%!important;
  text-align: initial;
  word-spacing: normal;
}
.xsj_foreignObject hr{
    margin: inherit;
}
.xsj_foreignObject.xsj_drawio_foreignObject *{
  font-size: inherit;
}
.xsj_export_pdf .xsj_foreignObject.xsj_drawio_foreignObject *{
  font-size: 85%;
}

.xsj_foreignObject.xsj_drawio_foreignObject h1{
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.xsj_foreignObject.xsj_drawio_foreignObject h2{
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.xsj_foreignObject.xsj_drawio_foreignObject h3{
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.xsj_foreignObject.xsj_drawio_foreignObject h4{
  font-size: 1em;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.xsj_foreignObject.xsj_drawio_foreignObject h5{
  font-size: .83em;
  margin-block-start: 1.67em;
  margin-block-end: 1.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.xsj_foreignObject.xsj_drawio_foreignObject h6{
  font-size: .67em;
  margin-block-start: 2.33em;
  margin-block-end: 2.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

/* xsj patch end */


/*svg start*/
text{
    font-size: 14px;
}
/*svg end*/

/* title start */
h1.story_title {
    font-size: 3rem;
    margin: 0.7em 0;
}
/* title end */

/* tag start */
.story_tags {
    margin: 0 0 1.2em;
}
.tag.label{
    display: inline-block;
    vertical-align: baseline;
    line-height: 1;
    margin: 0 0.5em 0.5em 0;
    background: #e2e2e2;
    border-color: #e2e2e2;
    background-image: none;
    padding: 0.6em 0.8em;
    font-weight: bold;
    border-radius: 0.2857rem;
    box-sizing: border-box;
    font-size: 12px;
}
/* tag end */

/* emoji */
img.emoji {
    width: 1em;
    line-height: 1em;
    vertical-align: baseline;
    margin-bottom: 0;
}
/* emoji */

/* align grammar start*/

.story_align_left, .story_align_left .story_image_container {
    text-align: left;
}
.story_align_right, .story_align_right .story_image_container {
    text-align: right;
}
.story_align_center, .story_align_center .story_image_container {
    text-align: center;
}
.story_align_justify, .story_align_justify .story_image_container {
    text-align: justify;
}

/* align grammar end*/

/*mindmap start*/
.mindmap_container {
  text-align: center;
}

.xsj_mindmap_caption{
   border-bottom: 1px solid #d9d9d9;
  display: inline-block;
  color: #999;
  padding: 10px;
}
/*mindmap end*/



/* table start*/

table {
  max-width: 100%;
  background-color: transparent;
  border-collapse: collapse;
  border-spacing: 0;
  word-break: initial;
  border: 1px solid rgba(34,36,38,.15);
}
.table {
  width: 100%;
  margin-bottom: 20px;
  margin-right: auto;
  margin-left: auto;
}

.table th,
.table td {
  padding: 8px;
  line-height: 20px;
  text-align: left;
  vertical-align: top;
  border-top: 1px solid rgba(34,36,38,.1);
}

.table th {
  font-weight: bold;
}

.table thead th {
  vertical-align: bottom;
}

.table caption + thead tr:first-child th,
.table caption + thead tr:first-child td,
.table colgroup + thead tr:first-child th,
.table colgroup + thead tr:first-child td,
.table thead:first-child tr:first-child th,
.table thead:first-child tr:first-child td {
  border-top: 1px solid rgba(34,36,38,.1);
}

.table tbody + tbody {
  border-top: 2px solid rgba(34,36,38,.1);
}

.table .table {
  background-color: #ffffff;
}


.table-striped tbody > tr:nth-child(odd) > td,
.table-striped tbody > tr:nth-child(odd) > th {
  background-color: #f9f9f9;
}

.table-celled.table tr td,.table-celled.table tr th {
    border-left: 1px solid rgba(34,36,38,.1)
}

/* table end*/

/*code start*/

code {
    background-color: #F0F0F0;
    border-radius: 4px;
    padding: 2px 4px;
    margin: 0 .225em;
    color: #880000;
}
body code{
    border: 0;
    border-radius: 4px;
    font-size: .9em;
}

.hljs, .hljs * {
  overflow: visible !important;
} 

body .xiaoshujiang_code {
    border: 0;
    border-radius: 4px;
    font-size: .9em;
}
.xiaoshujiang_code ol{
    margin-top: 0px;
    margin-bottom: 0px;
}

.xiaoshujiang_pre {
    line-height: initial !important;
    word-wrap: break-word;
    word-break: break-word;
    tab-size: 4;
    white-space: pre-wrap;
    font-family: monospace;
}
.xiaoshujiang_code_container pre{
    margin: 0px;
}
.xiaoshujiang_code_container.xiaoshujiang_code_chunk{
    box-shadow: 0 0 0 1px #A3C293 inset,0 0 0 0 transparent;
    margin: 1em 0;
    padding: 1em;
}
.xiaoshujiang_code_container.xiaoshujiang_code_chunk_hide_code{
    box-shadow: initial;
    padding: initial;
    padding-bottom: 2em;
}
.xiaoshujiang_code_container .out_put{
    box-shadow: 0 0 0 1px #A3C293 inset,0 0 0 0 transparent;
    margin: 1em 0;
    background-color: #FCFFF5;
    color: #2C662D;
    padding: 1em;
}
.xiaoshujiang_code_container .out_put_error{
    background-color: #FFF6F6;
    color: #9F3A38;
    margin: 1em 0;
    box-shadow: 0 0 0 1px #E0B4B4 inset,0 0 0 0 transparent;
    padding: 1em;
}

/*code end*/

/* code line nums start*/

code.hljs.code_linenums, .xiaoshujiang_code.hljs.code_linenums{
    position: relative;
}
.ol_linenums{
    padding: 0px;
    margin-left: 2em;
    border-left: 1px solid #e0e0e0;
}
.li_linenum{
    position:relative;
    margin-left: 0.5em;
    list-style: none;
    counter-increment: lines 1;
}
.li_linenum.li_list_style{
    list-style: inherit;
    margin-left: 5px;
}
.li_linenum:before, .li_linenum_before_span{
    content: counter(lines, decimal);
  position: absolute;
  left: -3em;
  text-align: center;
  width: 2.5em;
  vertical-align: top;
}
.li_linenum_before_span_hide{
    display: none;
}
.xiaoshujiang_code .code_line_break_hack{
    margin:0;
    border:0;
    border-top:0;
    border-bottom:0;
}
.component_attachment, .code_line_break_hack{
  display: none;
  visibility: collapse!important;
  height: 0!important;
}

/* code line nums end*/

/* block code start */
.xiaoshujiang_code_container {
    margin: 1em 0px 2em;
    position: relative;
}


.xiaoshujiang_code_title_container{
    font-size: 70%;
    opacity: 0.5;
}
.xiaoshujiang_code_title_container>.xiaoshujiang_code_infos{
    float: right;
}
/* block code end */


/*mark start*/

.mark{
  border: 0;
  background-color: rgba(221, 243, 231, 0.4);
  color: #105012;
  padding: 2px 4px;
}

.li_linenum.line_mark:before, .line_mark .li_linenum_before_span {
    background: rgba(210, 118, 118, 0.6);
}
.line_mark{
    border: 1px dashed #3A4C42;
    margin-top: 2px;
}
code .mark, .xiaoshujiang_code .mark{
    border-radius: 0px;
    font-size: initial;
    padding: initial;
}
/*mark end*/


.xsj_code_strong{
  -webkit-text-emphasis: triangle;
  -webkit-text-emphasis-position: under;
}

/* attachment start */
a.attachment{
    background: #ecf0f3;
    border: 1px solid #bec6cb;
    display: inline-block;
    padding: 5px;
    margin: 2px;
    min-width: 250px;
}
a.attachment i.fa{
    font-size: 3em;
  float: left;
  margin-right: 0.2em;
}
a.attachment .filename{
    vertical-align: top;
  text-align: left;
  font-weight: bold;
}
a.attachment .filesize{
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  opacity: .6;
  font-size: 80%;
  white-space: nowrap;
}
/* attachment end */


/*code chunk video, slideshare start*/
.video_container{
    width: 100%;
    display: table;
    text-align: center;
    position: relative;
    padding-bottom: 56.25%!important;
}

.video_container iframe{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    vertical-align: middle;
}

.slideshare_container .inner{
    position: relative;
    width: 100%;
}

.slideshare_container .inner iframe{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

/*code chunk video, slideshare start*/



/*mermaid start*/

.mermaid {
    text-align: center;
}

.mermaid_svg{
    font-family: monospace;
}

.mermaid_svg .grid path {
  stroke: transparent;
}
/*mermaid stop*/


/* patch evernote start*/
.toc ul {
    list-style-type: none;
}
/* patch evernote end*/


/* image start*/
img {
    height: auto;
    max-width: 100%;
    vertical-align: middle;
    border: 0;
}

.story_image_container{
    text-align: center;
}
.story_image_container>.story_image{
    display: inline-block;
    position: relative;
    max-width: 100%;
}
.story_image_caption, .xsj_remote_html_caption {
    border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 10px;
}
.story_image_blank_caption, .xsj_remote_html_blank_caption{
    display: none;
}
.story_image>img{
    border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);
}

.story_inline_image{
  display: inline-block;
}
.story_inline_image>img{
    vertical-align: bottom;
}
/* image end*/

.story_remote_resource_block{
    text-align: center;
}

/* task list start */
.task-list-item{
    list-style: none;
}
.task-list-item.li_list_style{
    list-style:inherit;
}
.task-list-item>input{
    margin: 0 0 0 -1.5em;
    width: 1.5em;
}

/* task list end */

/* other start */
em.cjk_emphasis{
    font-style: normal;
    font-family: Georgia,"Times New Roman",Times,"楷体","AR PL UKai CN", "NSimSun","Songti SC","SimSun",serif!important;
}

.flow-chart, .sequence-diagram{
    text-align: center;
}
.plot, .plot-image{
    text-align: center;
    min-height: 200px;
    min-width: 200px;
}

.mathjax-container{
    text-align: center;
    margin: 0 auto;
}
div.mathjax{
    max-width: 100%;
    margin: 0 auto;
    font-size: 14px;
}

.mathjax-container .math_equation_table{
  border: 0;
  width: 100%;
}
.mathjax-container .math_equation_table td{
  text-align: center;
  vertical-align: top;
}

.xsj_numbered_heading{
  margin-right: .5em;
}

.xsj_export_pdf .fa-border {
  border: none;
  border-radius: initial;
  padding: initial;
  margin: 0 .25em;
  outline-offset: .2em;
  outline: 1px solid #eee;
}
.preview.html_preview{
  max-width: 100%;
}

.xsj_export_pdf.preview.html_preview{
  max-width: initial;
  border: initial;
  margin: initial;
  padding: initial;
  border-radius: initial;
  box-shadow: initial;
}
/* other end */




/* blockquote start*/
/** only icon **/
.html_preview>.markdown_blockquote{
    position: relative;
}
.html_preview>.markdown_blockquote.markdown_blockquote_icon{
    margin-left: 10px;
}
.html_preview>.markdown_blockquote>.xsj_paragraph:first-child>i:first-child{
    background-color: #dedede;
    border-radius: 100%;
    left: -18px;
    line-height: 30px;
    position: absolute;
    height: 30px;
    width: 30px;
    text-align: center;
    font-size: 16px!important;
    padding: 0;
    border: 0px;

}

.html_preview>.markdown_blockquote>.xsj_paragraph:first-child>.svg-image:first-child,
.html_preview>.markdown_blockquote>.xsj_paragraph:first-child>svg.svg-inline--fa:first-child {
    background-color: #dedede;
    border-radius: 100%;
    left: -15px;
    line-height: 30px;
    position: absolute;
    height: 20px;
    width: 20px;
    text-align: center;
    box-shadow: 0 0 0px 5px #dedede;
    font-size: 16px!important;
    padding: 0;
    border: 0px;
    outline: 0;
    margin: 0;
}
/** only icon **/
/** heading **/
.html_preview > .markdown_blockquote.markdown_blockquote_heading {
    margin-top: 40px;
    page-break-inside: auto;
}
.html_preview>.markdown_blockquote_heading>.xsj_heading:first-child {
    position: absolute;
    display: inline-block;
    top: -1em;
    font-size: 1.4em;
    background-color: #dedede;
    padding: 0 15px;
    border-top: 2px solid #bbb;
    border-radius: 10px;
    margin: 0;
}
.html_preview>.markdown_blockquote_heading>.xsj_heading:first-child .xsj_heading_content>i:first-child {
    background-color: #dedede;
    border-radius: 100%;
    left: -36px;
    top: 3em;
    line-height: 30px;
    position: absolute;
    height: 30px;
    width: 30px;
    text-align: center;
    font-size: 16px !important;
    padding: 0;
    border: 0px;
}

.html_preview>.markdown_blockquote_heading>.xsj_heading:first-child .xsj_heading_content>.svg-image:first-child,
.html_preview>.markdown_blockquote_heading>.xsj_heading:first-child .xsj_heading_content>svg.svg-inline--fa:first-child {
    background-color: #dedede;
    border-radius: 100%;
    left: -35px;
    top: 3em;
    line-height: 30px;
    position: absolute;
    height: 20px;
    width: 20px;
    text-align: center;
    box-shadow: 0 0 0px 5px #dedede;
    font-size: 16px!important;
    padding: 0;
    border: 0px;
    outline: 0;
    margin: 0;
}

/** heading **/
/* blockquote end*/


@media print{
  body{
    font-size: 18px;
    word-wrap: break-word;
    word-break: break-word;
    background: initial!important;
    font-kerning: normal;
    text-rendering: geometricPrecision;
  }
  .preview.html_preview{
    max-width: initial;
    border: initial;
    margin: initial;
    padding: initial;
    border-radius: initial;
    box-shadow: initial;
  }
  .xiaoshujiang_element.xsj_anchor{
    position: absolute;
  }
  tr { page-break-inside: avoid; }
  .story_image_container{
     page-break-inside: avoid;
  }
  blockquote{
    page-break-inside: avoid;
  }

  .xsj_underline{
      page-break-after: always;
      visibility: hidden;
  }
}

body{color:#2f2f2f}.xsj_hr{border-top:1px dashed #2f2f2f}kbd{color:#2f2f2f;border:solid 1px #2f2f2f;border-bottom-color:#2f2f2f;box-shadow:inset 0 -1px 0 #2f2f2f}table{border:1px solid rgba(34,36,38,.15)}.table td,.table th{border-top:1px solid #ddd}.table tbody+tbody{border-top:2px solid #ddd}.table .table{background:#fff}.table-striped tbody>tr:nth-child(odd)>td,.table-striped tbody>tr:nth-child(odd)>th{background:#f9f9f9}.table-celled.table tr td,.table-celled.table tr th{border-left:1px solid rgba(34,36,38,.1)}.line_mark{background:rgba(210,174,174,.3)}.xiaoshujiang_code .mark,code .mark{background:rgba(160,234,194,.7)}.markdown_vertical>*,.markdown_vertical>:first-child{margin-top:.8em}.markdown_vertical{font-family:YRDZST,"Noto Serif CJK SC",FandolKai,"Adobe Kaiti Std","Adobe 楷体 Std",FZKai-Z03S,"方正楷体简体","AR PL UKai CN","楷体",NSimSun,SimSun,serif;font-size:1.2em;writing-mode:vertical-rl;border:initial;border-left:initial;background:initial;margin-left:auto!important;margin-right:0}.markdown_vertical em{-webkit-text-emphasis:circle}.markdown_vertical strong{border-left:2px solid}.html_preview>.markdown_blockquote_heading.markdown_vertical>.xsj_heading:first-child{position:initial;background:initial;border:initial;background-color:initial;border-top:initial}.html_preview>.markdown_blockquote.markdown_vertical>.xsj_paragraph:first-child>i:first-child,.html_preview>.markdown_blockquote_heading.markdown_vertical>.xsj_heading:first-child .xsj_heading_content>i:first-child{position:initial;background-color:initial}@media print{.markdown_vertical{writing-mode:initial}.markdown_vertical strong{border-left:0;border-bottom:2px solid}}
/*

Original highlight.js style (c) Ivan Sagalaev <maniac@softwaremaniacs.org>

*/

.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  background: #F0F0F0;
}


/* Base color: saturation 0; */

.hljs,
.hljs-subst {
  color: #444;
}

.hljs-comment {
  color: #888888;
}

.hljs-keyword,
.hljs-attribute,
.hljs-selector-tag,
.hljs-meta-keyword,
.hljs-doctag,
.hljs-name {
  font-weight: bold;
}


/* User color: hue: 0 */

.hljs-type,
.hljs-string,
.hljs-number,
.hljs-selector-id,
.hljs-selector-class,
.hljs-quote,
.hljs-template-tag,
.hljs-deletion {
  color: #880000;
}

.hljs-title,
.hljs-section {
  color: #880000;
  font-weight: bold;
}

.hljs-regexp,
.hljs-symbol,
.hljs-variable,
.hljs-template-variable,
.hljs-link,
.hljs-selector-attr,
.hljs-selector-pseudo {
  color: #BC6060;
}


/* Language color: hue: 90; */

.hljs-literal {
  color: #78A960;
}

.hljs-built_in,
.hljs-bullet,
.hljs-code,
.hljs-addition {
  color: #397300;
}


/* Meta color: hue: 200 */

.hljs-meta {
  color: #1f7199;
}

.hljs-meta-string {
  color: #4d99bf;
}


/* Misc effects */

.hljs-emphasis {
  font-style: italic;
}

.hljs-strong {
  font-weight: bold;
}

</style>
</head><body>
<div class="xsj_root">
<p id="toc-nav"><a id="toc-toggle" href="javascript:void();"><span class="toc-toggle-icon">←</span> <span class="toc-toggle-tip">关闭目录</span></a></p>
<nav id="nav" class="tocbot"></nav>
<div class="preview" id="wmd-preview">

	<div class="preview html_preview xsj_export_html"><h1 class="story_title">运维相关</h1><div class="story_tags"><span class="tag blue label">部署</span><span class="tag blue label">配置</span><span class="tag blue label">启动</span></div><h3 class="xsj_heading_hash xsj_heading xsj_heading_h3" id="docker_1"><div class="xiaoshujiang_element xsj_anchor">
  <a name="docker_1" class="blank_anchor_name"></a><a id="docker_1" class="blank_anchor_id"></a><a name="docker" class="blank_anchor_name"></a><a id="docker" class="blank_anchor_id"></a>
</div>
<span class="xsj_heading_content"><span class="xsj_numbered_heading">1. </span>docker</span></h3>
<h4 class="xsj_heading_hash xsj_heading xsj_heading_h4" id="e5ae89e8a38520_2"><div class="xiaoshujiang_element xsj_anchor">
  <a name="e5ae89e8a38520_2" class="blank_anchor_name"></a><a id="e5ae89e8a38520_2" class="blank_anchor_id"></a><a name="安装" class="blank_anchor_name"></a><a id="安装" class="blank_anchor_id"></a>
</div>
<span class="xsj_heading_content"><span class="xsj_numbered_heading">1-1. </span><a href="https://docs.docker.com/engine/install/" class="xsj_link xsj_manu_link">安装 </a></span></h4>
</div>

</div></div>
<script>
  !function(e){function t(o){if(n[o])return n[o].exports;var l=n[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,t),l.l=!0,l.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){(function(o){var l,r,i;!function(n,o){r=[],l=o(n),void 0!==(i="function"==typeof l?l.apply(t,r):l)&&(e.exports=i)}(void 0!==o?o:this.window||this.global,function(e){"use strict";function t(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var o in n)m.call(n,o)&&(e[o]=n[o])}return e}function o(e,t,n){t||(t=250);var o,l;return function(){var r=n||this,i=+new Date,s=arguments;o&&i<o+t?(clearTimeout(l),l=setTimeout(function(){o=i,e.apply(r,s)},t)):(o=i,e.apply(r,s))}}var l,r,i=n(2),s={},c={},a=n(3),u=n(4);if("undefined"!=typeof window){var d,f=!!e.document.querySelector&&!!e.addEventListener,m=Object.prototype.hasOwnProperty;return c.destroy=function(){if(!s.skipRendering)try{document.querySelector(s.tocSelector).innerHTML=""}catch(e){console.warn("Element not found: "+s.tocSelector)}s.scrollContainer&&document.querySelector(s.scrollContainer)?(document.querySelector(s.scrollContainer).removeEventListener("scroll",this._scrollListener,!1),document.querySelector(s.scrollContainer).removeEventListener("resize",this._scrollListener,!1),l&&document.querySelector(s.scrollContainer).removeEventListener("click",this._clickListener,!1)):(document.removeEventListener("scroll",this._scrollListener,!1),document.removeEventListener("resize",this._scrollListener,!1),l&&document.removeEventListener("click",this._clickListener,!1))},c.init=function(e){if(f&&(s=t(i,e||{}),this.options=s,this.state={},s.scrollSmooth&&(s.duration=s.scrollSmoothDuration,s.offset=s.scrollSmoothOffset,c.scrollSmooth=n(5).initSmoothScrolling(s)),l=a(s),r=u(s),this._buildHtml=l,this._parseContent=r,c.destroy(),null!==(d=r.selectHeadings(s.contentSelector,s.headingSelector)))){var m=r.nestHeadingsArray(d),h=m.nest;s.skipRendering||l.render(s.tocSelector,h),this._scrollListener=o(function(e){l.updateToc(d);var t=e&&e.target&&e.target.scrollingElement&&0===e.target.scrollingElement.scrollTop;(e&&(0===e.eventPhase||null===e.currentTarget)||t)&&(l.updateToc(d),s.scrollEndCallback&&s.scrollEndCallback(e))},s.throttleTimeout),this._scrollListener(),s.scrollContainer&&document.querySelector(s.scrollContainer)?(document.querySelector(s.scrollContainer).addEventListener("scroll",this._scrollListener,!1),document.querySelector(s.scrollContainer).addEventListener("resize",this._scrollListener,!1)):(document.addEventListener("scroll",this._scrollListener,!1),document.addEventListener("resize",this._scrollListener,!1));var p=null;return this._clickListener=o(function(e){s.scrollSmooth&&l.disableTocAnimation(e),l.updateToc(d),p&&clearTimeout(p),p=setTimeout(function(){l.enableTocAnimation()},s.scrollSmoothDuration)},s.throttleTimeout),s.scrollContainer&&document.querySelector(s.scrollContainer)?document.querySelector(s.scrollContainer).addEventListener("click",this._clickListener,!1):document.addEventListener("click",this._clickListener,!1),this}},c.refresh=function(e){c.destroy(),c.init(e||this.options)},e.tocbot=c,c}})}).call(t,n(1))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports={tocSelector:".js-toc",contentSelector:".js-toc-content",headingSelector:"h1, h2, h3",ignoreSelector:".js-toc-ignore",hasInnerContainers:!1,linkClass:"toc-link",extraLinkClasses:"",activeLinkClass:"is-active-link",listClass:"toc-list",extraListClasses:"",isCollapsedClass:"is-collapsed",collapsibleClass:"is-collapsible",listItemClass:"toc-list-item",activeListItemClass:"is-active-li",collapseDepth:0,scrollSmooth:!0,scrollSmoothDuration:420,scrollSmoothOffset:0,scrollEndCallback:function(e){},headingsOffset:1,throttleTimeout:50,positionFixedSelector:null,positionFixedClass:"is-position-fixed",fixedSidebarOffset:"auto",includeHtml:!1,onClick:!1,orderedList:!0,scrollContainer:null,skipRendering:!1}},function(e,t){e.exports=function(e){function t(e,n){var r=n.appendChild(o(e));if(e.children.length){var i=l(e.isCollapsed);e.children.forEach(function(e){t(e,i)}),r.appendChild(i)}}function n(e,n){var o=l(!1);n.forEach(function(e){t(e,o)});var r=document.querySelector(e);if(null!==r)return r.firstChild&&r.removeChild(r.firstChild),0===n.length?r:r.appendChild(o)}function o(t){var n=document.createElement("li"),o=document.createElement("a");return e.listItemClass&&n.setAttribute("class",e.listItemClass),e.onClick&&(o.onclick=e.onClick),e.includeHtml&&t.childNodes.length?d.call(t.childNodes,function(e){o.appendChild(e.cloneNode(!0))}):o.textContent=t.textContent,o.setAttribute("href","#"+t.id),o.setAttribute("class",e.linkClass+p+"node-name--"+t.nodeName+p+e.extraLinkClasses),n.appendChild(o),n}function l(t){var n=e.orderedList?"ol":"ul",o=document.createElement(n),l=e.listClass+p+e.extraListClasses;return t&&(l+=p+e.collapsibleClass,l+=p+e.isCollapsedClass),o.setAttribute("class",l),o}function r(){if(e.scrollContainer&&document.querySelector(e.scrollContainer))var t=document.querySelector(e.scrollContainer).scrollTop;else var t=document.documentElement.scrollTop||m.scrollTop;var n=document.querySelector(e.positionFixedSelector);"auto"===e.fixedSidebarOffset&&(e.fixedSidebarOffset=document.querySelector(e.tocSelector).offsetTop),t>e.fixedSidebarOffset?-1===n.className.indexOf(e.positionFixedClass)&&(n.className+=p+e.positionFixedClass):n.className=n.className.split(p+e.positionFixedClass).join("")}function i(t){var n=0;return t!=document.querySelector(e.contentSelector&&null!=t)&&(n=t.offsetTop,e.hasInnerContainers&&(n+=i(t.offsetParent))),n}function s(t){if(e.scrollContainer&&document.querySelector(e.scrollContainer))var n=document.querySelector(e.scrollContainer).scrollTop;else var n=document.documentElement.scrollTop||m.scrollTop;e.positionFixedSelector&&r();var o,l=t;if(h&&null!==document.querySelector(e.tocSelector)&&l.length>0){f.call(l,function(t,r){if(i(t)>n+e.headingsOffset+10){return o=l[0===r?r:r-1],!0}if(r===l.length-1)return o=l[l.length-1],!0});var s=document.querySelector(e.tocSelector).querySelectorAll("."+e.linkClass);d.call(s,function(t){t.className=t.className.split(p+e.activeLinkClass).join("")});var a=document.querySelector(e.tocSelector).querySelectorAll("."+e.listItemClass);d.call(a,function(t){t.className=t.className.split(p+e.activeListItemClass).join("")});var u=document.querySelector(e.tocSelector).querySelector("."+e.linkClass+".node-name--"+o.nodeName+'[href="#'+o.id+'"]');-1===u.className.indexOf(e.activeLinkClass)&&(u.className+=p+e.activeLinkClass);var C=u.parentNode;C&&-1===C.className.indexOf(e.activeListItemClass)&&(C.className+=p+e.activeListItemClass);var v=document.querySelector(e.tocSelector).querySelectorAll("."+e.listClass+"."+e.collapsibleClass);d.call(v,function(t){-1===t.className.indexOf(e.isCollapsedClass)&&(t.className+=p+e.isCollapsedClass)}),u.nextSibling&&-1!==u.nextSibling.className.indexOf(e.isCollapsedClass)&&(u.nextSibling.className=u.nextSibling.className.split(p+e.isCollapsedClass).join("")),c(u.parentNode.parentNode)}}function c(t){return-1!==t.className.indexOf(e.collapsibleClass)&&-1!==t.className.indexOf(e.isCollapsedClass)?(t.className=t.className.split(p+e.isCollapsedClass).join(""),c(t.parentNode.parentNode)):t}function a(t){var n=t.target||t.srcElement;"string"==typeof n.className&&-1!==n.className.indexOf(e.linkClass)&&(h=!1)}function u(){h=!0}var d=[].forEach,f=[].some,m=document.body,h=!0,p=" ";return{enableTocAnimation:u,disableTocAnimation:a,render:n,updateToc:s}}},function(e,t){e.exports=function(e){function t(e){return e[e.length-1]}function n(e){return+e.nodeName.split("H").join("")}function o(t){var o={id:t.id,children:[],nodeName:t.nodeName,headingLevel:n(t),textContent:t.textContent.trim()};return e.includeHtml&&(o.childNodes=t.childNodes),o}function l(l,r){for(var i=o(l),s=n(l),c=r,a=t(c),u=a?a.headingLevel:0,d=s-u;d>0;)a=t(c),a&&void 0!==a.children&&(c=a.children),d--;return s>=e.collapseDepth&&(i.isCollapsed=!0),c.push(i),c}function r(t,n){var o=n;e.ignoreSelector&&(o=n.split(",").map(function(t){return t.trim()+":not("+e.ignoreSelector+")"}));try{return document.querySelector(t).querySelectorAll(o)}catch(e){return console.warn("Element not found: "+t),null}}function i(e){return s.call(e,function(e,t){return l(o(t),e.nest),e},{nest:[]})}var s=[].reduce;return{nestHeadingsArray:i,selectHeadings:r}}},function(e,t){function n(e){function t(e){return"a"===e.tagName.toLowerCase()&&(e.hash.length>0||"#"===e.href.charAt(e.href.length-1))&&(n(e.href)===s||n(e.href)+"#"===s)}function n(e){return e.slice(0,e.lastIndexOf("#"))}function l(e){var t=document.getElementById(e.substring(1));t&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())}!function(){document.documentElement.style}();var r=e.duration,i=e.offset,s=location.hash?n(location.href):location.href;!function(){function n(n){!t(n.target)||n.target.className.indexOf("no-smooth-scroll")>-1||"#"===n.target.href.charAt(n.target.href.length-2)&&"!"===n.target.href.charAt(n.target.href.length-1)||-1===n.target.className.indexOf(e.linkClass)||o(n.target.hash,{duration:r,offset:i,callback:function(){l(n.target.hash)}})}document.body.addEventListener("click",n,!1)}()}function o(e,t){function n(e){i=e-r,window.scrollTo(0,c.easing(i,s,u,d)),i<d?requestAnimationFrame(n):o()}function o(){window.scrollTo(0,s+u),"function"==typeof c.callback&&c.callback()}function l(e,t,n,o){return(e/=o/2)<1?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)}var r,i,s=window.pageYOffset,c={duration:t.duration,offset:t.offset||0,callback:t.callback,easing:t.easing||l},a=document.querySelector('[id="'+decodeURI(e).split("#").join("")+'"]'),u="string"==typeof e?c.offset+(e?a&&a.getBoundingClientRect().top||0:-(document.documentElement.scrollTop||document.body.scrollTop)):e,d="function"==typeof c.duration?c.duration(u):c.duration;requestAnimationFrame(function(e){r=e,n(e)})}t.initSmoothScrolling=n}]);
</script>
<script>
  var xsjRoot = document.querySelector('.xsj_root');
  xsjRoot.classList.add('xsj_container_toc')
tocbot.init({
  // Where to render the table of contents.
  tocSelector: '#nav',
  // Where to grab the headings to build the table of contents.
  contentSelector: '#wmd-preview',
  // Which headings to grab inside of the contentSelector element.
  headingSelector: '.html_preview>h1, .html_preview>h2,.html_preview>h3,.html_preview>h4,.html_preview>h5,.html_preview>h6',
});
var tocToggle = document.querySelector('#toc-toggle');
var toggler = function(e) {
    e.preventDefault();
    var tocContainer = document.querySelector('.xsj_container_toc');
    var icon = document.querySelector('.toc-toggle-icon');
    var tip = document.querySelector('.toc-toggle-tip');
    if (tocContainer.classList.contains('hide_toc')){
        tocContainer.classList.remove('hide_toc');
        icon.innerHTML = "←";
        tip.innerHTML = "关闭目录";
        
    } else {
        tocContainer.classList.add('hide_toc');
        icon.innerHTML = "→";
        tip.innerHTML = "展开目录";
    }
}
tocToggle.addEventListener('click', toggler, false);
</script>
</body></html>



/*! For license information please see 9831.3d39840d.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkencode=self.webpackChunkencode||[]).push([[9831],{9831:function(e,n,o){o.r(n),o.d(n,{conf:function(){return t},language:function(){return s}});var t={comments:{lineComment:";",blockComment:["#|","|#"]},brackets:[["(",")"],["{","}"],["[","]"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'}]},s={defaultToken:"",ignoreCase:!0,tokenPostfix:".scheme",brackets:[{open:"(",close:")",token:"delimiter.parenthesis"},{open:"{",close:"}",token:"delimiter.curly"},{open:"[",close:"]",token:"delimiter.square"}],keywords:["case","do","let","loop","if","else","when","cons","car","cdr","cond","lambda","lambda*","syntax-rules","format","set!","quote","eval","append","list","list?","member?","load"],constants:["#t","#f"],operators:["eq?","eqv?","equal?","and","or","not","null?"],tokenizer:{root:[[/#[xXoObB][0-9a-fA-F]+/,"number.hex"],[/[+-]?\d+(?:(?:\.\d*)?(?:[eE][+-]?\d+)?)?/,"number.float"],[/(?:\b(?:(define|define-syntax|define-macro))\b)(\s+)((?:\w|\-|\!|\?)*)/,["keyword","white","variable"]],{include:"@whitespace"},{include:"@strings"},[/[a-zA-Z_#][a-zA-Z0-9_\-\?\!\*]*/,{cases:{"@keywords":"keyword","@constants":"constant","@operators":"operators","@default":"identifier"}}]],comment:[[/[^\|#]+/,"comment"],[/#\|/,"comment","@push"],[/\|#/,"comment","@pop"],[/[\|#]/,"comment"]],whitespace:[[/[ \t\r\n]+/,"white"],[/#\|/,"comment","@comment"],[/;.*$/,"comment"]],strings:[[/"$/,"string","@popall"],[/"(?=.)/,"string","@multiLineString"]],multiLineString:[[/[^\\"]+$/,"string","@popall"],[/[^\\"]+/,"string"],[/\\./,"string.escape"],[/"/,"string","@popall"],[/\\$/,"string"]]}}}}]);
//# sourceMappingURL=9831.3d39840d.chunk.js.map
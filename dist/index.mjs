var e=function(e){this.data=e,this.query="",this.orWhere=this.orWhere.bind(this),this.where=this.where.bind(this),this.get=this.get.bind(this)};e.prototype.where=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return this.query.slice(-1).includes(")")&&(this.query+=" && "),"function"==typeof e[0]?(this.query+="(",e[0](this),this.query+=")"):1===e.length?this.query+="(item."+e[0]+")":2===e.length?this.query+="(item."+e[0]+" == '"+e[1]+"')":3===e.length&&(this.query+="(item."+e[0]+" "+e[1]+" '"+e[2]+"')"),this},e.prototype.orWhere=function(){for(var e,t=[],i=arguments.length;i--;)t[i]=arguments[i];return this.query+=" || ",(e=this).where.apply(e,t)},e.prototype.whereIncludes=function(e,t,i){return this.query+="(item."+e+" ? item."+e+".some(element => element."+t+" === '"+i+"') : false)",this},e.prototype.orWhereIncludes=function(e,t,i){return this.query+=" || ",this.query+="(item."+e+" ? item."+e+".some(element => element."+t+" === '"+i+"') : false)",this},e.prototype.stripEmpties=function(){this.query=this.query.replace(/&& \(\)/g,""),this.query=this.query.replace(/\(\)&&/g,"")},e.prototype.get=function(){var e=this;return this.stripEmpties(),console.log(this.query),this.data.filter(function(t){return new Function("item",'"use strict";return '+e.query+";")(t)})};export default e;
//# sourceMappingURL=index.mjs.map

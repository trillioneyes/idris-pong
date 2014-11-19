var canvas = document.getElementById("pong_canvas");
var context = canvas.getContext("2d");

function setFillStyle(color) {
  context.fillStyle = color;
}

var mouseY = canvas.height / 2;
var escape = false;
var demoProc = 0;

canvas.onmousemove = function(e) {
  mouseY = e.layerY;
};

document.onkeydown = function(e) {
  escape = e.keyCode == 27;
};
/** @constructor */
var i$VM = function() {
  this.valstack = [];
  this.valstack_top = 0;
  this.valstack_base = 0;

  this.ret = null;

  this.callstack = [];
}

var i$vm;
var i$valstack;
var i$valstack_top;
var i$valstack_base;
var i$ret;
var i$callstack;

var i$Int = {};
var i$String = {};
var i$Integer = {};
var i$Float = {};
var i$Char = {};
var i$Ptr = {};
var i$Forgot = {};

/** @constructor */
var i$CON = function(tag,args,app,ev) {
  this.tag = tag;
  this.args = args;
  this.app = app;
  this.ev = ev;
}

/** @constructor */
var i$POINTER = function(addr) {
  this.addr = addr;
}

var i$SCHED = function(vm) {
  i$vm = vm;
  i$valstack = vm.valstack;
  i$valstack_top = vm.valstack_top;
  i$valstack_base = vm.valstack_base;
  i$ret = vm.ret;
  i$callstack = vm.callstack;
}

var i$SLIDE = function(args) {
  for (var i = 0; i < args; ++i)
    i$valstack[i$valstack_base + i] = i$valstack[i$valstack_top + i];
}

var i$PROJECT = function(val,loc,arity) {
  for (var i = 0; i < arity; ++i)
    i$valstack[i$valstack_base + i + loc] = val.args[i];
}

var i$CALL = function(fun,args) {
  i$callstack.push(args);
  i$callstack.push(fun);
}

var i$ffiWrap = function(fid,oldbase,myoldbase) {
  return function() {
    i$callstack = [];

    var res = fid;

    for(var i = 0; i < (arguments.length ? arguments.length : 1); ++i) {
      while (res instanceof i$CON) {
        i$valstack_top += 1;
        i$valstack[i$valstack_top] = res;
        i$valstack[i$valstack_top + 1] = arguments[i];
        i$SLIDE(2);
        i$valstack_top = i$valstack_base + 2;
        i$CALL(_idris__123_APPLY0_125_,[oldbase])
        while (i$callstack.length) {
          var func = i$callstack.pop();
          var args = i$callstack.pop();
          func.apply(this,args);
        }
        res = i$ret;
      }
    }

    i$callstack = i$vm.callstack;

    return i$ret;
  }
}

var i$charCode = function(str) {
  if (typeof str == "string")
    return str.charCodeAt(0);
  else
    return str;
}

var i$fromCharCode = function(chr) {
  if (typeof chr == "string")
    return chr;
  else
    return String.fromCharCode(chr);
}
var i$putStr = function(s) {
  console.log(s);
};


var i$systemInfo = function(index) {
  switch(index) {
    case 0:
      return "javascript";
    case 1:
      return navigator.platform;
  }
  return "";
}
var _idris_Prelude_46_Applicative_46__36__62_$5 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_Prelude_46_Applicative_46__36__62_$4 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 7];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Applicative_46__36__62_$5,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Prelude_46_Applicative_46__36__62_$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Applicative_46__36__62_$4,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Prelude_46_Applicative_46__36__62_$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$valstack[i$valstack_base + 8] = null;
  i$valstack[i$valstack_base + 9] = null;
  i$valstack[i$valstack_base + 10] = null;
  i$valstack[i$valstack_base + 10] = new i$CON(65856,[i$valstack[i$valstack_base + 10]],_idris__123_APPLY0_125_$65856,null);
  i$valstack[i$valstack_base + 8] = new i$CON(65855,[i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10]],_idris__123_APPLY0_125_$65855,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 8];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Applicative_46__36__62_$3,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Prelude_46_Applicative_46__36__62_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 10];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 4;
  i$CALL(_idris_Prelude_46_Applicative_46__36__62_$2,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Functor_46_map,[myoldbase]);
}
var _idris_Prelude_46_Applicative_46__36__62_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_base + 7] = null;
  i$valstack[i$valstack_base + 8] = null;
  i$valstack[i$valstack_base + 9] = null;
  i$CALL(_idris_Prelude_46_Applicative_46__36__62_$1,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base + 3],10,3);
;
}
var _idris_Prelude_46_Applicative_46__36__62_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_base + 6] = null;
  i$valstack[i$valstack_base + 7] = null;
  i$valstack[i$valstack_base + 8] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 3];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 4;
  i$CALL(_idris_Prelude_46_Applicative_46__36__62_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46__60__36__62_,[myoldbase]);
}
var _idris_Prelude_46_Basics_46__46_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 6];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_Prelude_46_Basics_46__46_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Basics_46__46_$0,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Prelude_46_Classes_46__60_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$PROJECT(i$valstack[i$valstack_base + 1],2,3);
  i$ret = i$valstack[i$valstack_base + 3];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Prelude_46_Applicative_46__60__36__62_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_Prelude_46_Applicative_46__60__36__62_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$PROJECT(i$valstack[i$valstack_base + 3],4,3);
  ;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Applicative_46__60__36__62_$0,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Prelude_46_Classes_46__62_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$PROJECT(i$valstack[i$valstack_base + 1],2,3);
  i$ret = i$valstack[i$valstack_base + 4];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Prelude_46_Monad_46__62__62__61_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_Prelude_46_Monad_46__62__62__61_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$PROJECT(i$valstack[i$valstack_base + 3],4,2);
  ;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Monad_46__62__62__61_$0,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Force$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$ret = i$valstack[i$valstack_base + 3];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_PE_95__64__64_constructor_32_of_32_Prelude_46_Monad_46_Monad_35_Applicative_32_m_95_fd27177d = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base] = i$CON$65904;
  i$valstack[i$valstack_base + 1] = i$CON$65906;
  i$valstack[i$valstack_base + 2] = i$CON$65900;
  i$ret = new i$CON(0,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],null,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_PE_95_div_95_ba1952eb$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_PE_95_div_95_ba1952eb$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_PE_95_div_95_ba1952eb$1,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_PE_95_pure_95_a7425aec = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 2] = null;
  i$ret = new i$CON(65858,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65858,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_aiChasePos$6 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 13] = i$valstack[i$valstack_base + 13] * i$valstack[i$valstack_base + 14];
  i$valstack[i$valstack_base + 12] = i$valstack[i$valstack_base + 12] / i$valstack[i$valstack_base + 13];
  i$ret = i$valstack[i$valstack_base + 11] + i$valstack[i$valstack_base + 12];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_aiChasePos$5 = function(oldbase,myoldbase){
  i$CALL(_idris_Main_46_aiChasePos$6,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base],14,7);
;
}
var _idris_Main_46_aiChasePos$4 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 13] = i$ret;
  i$valstack[i$valstack_base + 12] = i$valstack[i$valstack_base + 12] * i$valstack[i$valstack_base + 13];
  i$CALL(_idris_Main_46_aiChasePos$5,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base],13,7);
;
}
var _idris_Main_46_aiChasePos$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 13] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 13];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Main_46_aiChasePos$4,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Num_36_Float_58__33_abs_58_0,[myoldbase]);
}
var _idris_Main_46_aiChasePos$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 12] = i$ret;
  i$valstack[i$valstack_base + 13] = null;
  i$valstack[i$valstack_base + 14] = null;
  i$valstack[i$valstack_base + 15] = null;
  i$valstack[i$valstack_base + 16] = null;
  i$valstack[i$valstack_base + 17] = null;
  i$valstack[i$valstack_base + 18] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 13];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 14];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 15];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 16];
  i$valstack[i$valstack_top + 7] = i$valstack[i$valstack_base + 17];
  i$valstack[i$valstack_top + 8] = i$valstack[i$valstack_base + 18];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 9;
  i$CALL(_idris_Main_46_aiChasePos$3,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_aiChasePos_58_pvy_58_0,[myoldbase]);
}
var _idris_Main_46_aiChasePos$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 12] = null;
  i$valstack[i$valstack_base + 13] = null;
  i$valstack[i$valstack_base + 14] = null;
  i$valstack[i$valstack_base + 15] = null;
  i$valstack[i$valstack_base + 16] = null;
  i$valstack[i$valstack_base + 17] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 12];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 13];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 14];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 15];
  i$valstack[i$valstack_top + 7] = i$valstack[i$valstack_base + 16];
  i$valstack[i$valstack_top + 8] = i$valstack[i$valstack_base + 17];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 9;
  i$CALL(_idris_Main_46_aiChasePos$2,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_aiChasePos_58_pvy_58_0,[myoldbase]);
}
var _idris_Main_46_aiChasePos$8 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 12] = i$ret;
  i$ret = i$valstack[i$valstack_base + 11] + i$valstack[i$valstack_base + 12];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_aiChasePos$7 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 12] = null;
  i$valstack[i$valstack_base + 13] = null;
  i$valstack[i$valstack_base + 14] = null;
  i$valstack[i$valstack_base + 15] = null;
  i$valstack[i$valstack_base + 16] = null;
  i$valstack[i$valstack_base + 17] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 12];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 13];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 14];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 15];
  i$valstack[i$valstack_top + 7] = i$valstack[i$valstack_base + 16];
  i$valstack[i$valstack_top + 8] = i$valstack[i$valstack_base + 17];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 9;
  i$CALL(_idris_Main_46_aiChasePos$8,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_aiChasePos_58_pvy_58_0,[myoldbase]);
}
var _idris_Main_46_aiChasePos$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 10] = i$ret;
  switch(i$valstack[i$valstack_base + 10].tag){
    case 0:
      i$CALL(_idris_Main_46_aiChasePos$1,[oldbase,myoldbase]);
      i$PROJECT(i$valstack[i$valstack_base + 1],11,2);
;
      break;
    case 1:
      i$CALL(_idris_Main_46_aiChasePos$7,[oldbase,myoldbase]);
      i$PROJECT(i$valstack[i$valstack_base + 1],11,2);
;
      break;
  };
}
var _idris_Main_46_aiChasePos = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 14;
  i$PROJECT(i$valstack[i$valstack_base + 4],5,3);
  i$PROJECT(i$valstack[i$valstack_base + 5],8,2);
  i$valstack[i$valstack_base + 10] = null;
  i$valstack[i$valstack_base + 11] = null;
  i$valstack[i$valstack_base + 12] = null;
  i$valstack[i$valstack_base + 13] = null;
  i$valstack[i$valstack_base + 14] = null;
  i$valstack[i$valstack_base + 15] = null;
  i$valstack[i$valstack_base + 16] = null;
  i$valstack[i$valstack_base + 17] = null;
  i$valstack[i$valstack_base + 18] = null;
  ;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 10];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 11];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 12];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 13];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 14];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 15];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 16];
  i$valstack[i$valstack_top + 7] = i$valstack[i$valstack_base + 17];
  i$valstack[i$valstack_top + 8] = i$valstack[i$valstack_base + 18];
  i$valstack[i$valstack_top + 9] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 10] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 11] = i$valstack[i$valstack_base + 8];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 12;
  i$CALL(_idris_Main_46_aiChasePos$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_aiChasePos_58_isn_39_tLazy_58_0,[myoldbase]);
}
var _idris_Main_46_attractPlay$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
  i$valstack[i$valstack_base + 6] = new i$CON(65648,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65648,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_attractPlay = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = "#000000";
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Main_46_attractPlay$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_clear,[myoldbase]);
}
var _idris_believe_95_me = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$valstack[i$valstack_base + 2];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_boundVelocity$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
  i$valstack[i$valstack_base + 4] = new i$CON(0,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],null,null);
  i$PROJECT(i$valstack[i$valstack_base + 4],5,2);
  switch(i$valstack[i$valstack_base + 5].tag){
    case 0:
      switch(i$valstack[i$valstack_base + 6].tag){
        case 0:
          i$valstack[i$valstack_base + 7] = null;
          i$valstack[i$valstack_base + 8] = null;
          i$valstack[i$valstack_base + 9] = "impossible";
          i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 7];
          i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 8];
          i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 9];
          i$SLIDE(3);
          i$valstack_top = i$valstack_base + 3;
          i$CALL(_idris_believe_95_me,[oldbase]);
          break;
        case 1:
          i$valstack[i$valstack_base + 7] = null;
          i$valstack[i$valstack_base + 8] = null;
          i$valstack[i$valstack_base + 9] = null;
          i$valstack[i$valstack_base + 10] = i$CON$65649;
          i$valstack[i$valstack_base + 11] = i$CON$65650;
          i$ret = new i$CON(65854,[i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11]],_idris__123_APPLY0_125_$65854,null);
          i$valstack_top = i$valstack_base;
          i$valstack_base = oldbase.addr;
          break;
      };
      break;
    case 1:
      switch(i$valstack[i$valstack_base + 6].tag){
        case 0:
          i$ret = i$CON$65651;
          i$valstack_top = i$valstack_base;
          i$valstack_base = oldbase.addr;
          break;
        case 1:
          i$valstack[i$valstack_base + 7] = null;
          i$ret = new i$CON(65856,[i$valstack[i$valstack_base + 7]],_idris__123_APPLY0_125_$65856,null);
          i$valstack_top = i$valstack_base;
          i$valstack_base = oldbase.addr;
          break;
      };
      break;
  };
}
var _idris_Main_46_boundVelocity$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46_boundVelocity$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33__62__61__58_0,[myoldbase]);
}
var _idris_Main_46_boundVelocity = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 10;
  i$PROJECT(i$valstack[i$valstack_base + 1],2,2);
  ;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46_boundVelocity$0,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33__60__61__58_0,[myoldbase]);
}
var _idris_Main_46_centerText = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 8;
  i$PROJECT(i$valstack[i$valstack_base + 4],5,2);
  i$PROJECT(i$valstack[i$valstack_base + 3],7,2);
  i$valstack[i$valstack_base + 9] = null;
  i$valstack[i$valstack_base + 10] = null;
  i$valstack[i$valstack_base + 11] = String(i$valstack[i$valstack_base + 1]);
  i$valstack[i$valstack_base + 12] = "px ";
  i$valstack[i$valstack_base + 12] = i$valstack[i$valstack_base + 12] + i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_base + 11] = i$valstack[i$valstack_base + 11] + i$valstack[i$valstack_base + 12];
  i$valstack[i$valstack_base + 11] = new i$CON(65635,[i$valstack[i$valstack_base + 11]],_idris__123_APPLY0_125_$65635,null);
  i$valstack[i$valstack_base + 12] = new i$CON(65660,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65660,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11],i$valstack[i$valstack_base + 12]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Prelude_46_Either_46_choose = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  switch(i$valstack[i$valstack_base].tag){
    case 0:
      i$valstack[i$valstack_base + 1] = i$CON$0;
      i$ret = new i$CON(1,[i$valstack[i$valstack_base + 1]],null,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    case 1:
      i$valstack[i$valstack_base + 1] = i$CON$0;
      i$ret = new i$CON(0,[i$valstack[i$valstack_base + 1]],null,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_Main_46_circle = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 6;
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = i$CON$65661;
  i$valstack[i$valstack_base + 7] = new i$CON(65665,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65665,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_clear = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = new i$CON(65634,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65634,null);
  i$valstack[i$valstack_base + 4] = i$CON$65667;
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_collides$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 13] = i$ret;
  i$ret = new i$CON(0,[i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11],i$valstack[i$valstack_base + 13]],null,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_collides$0 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base + 9],10,3);
  ;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 4];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 7;
  i$CALL(_idris_Main_46_collides$1,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_collides_58_newV_58_0,[myoldbase]);
}
var _idris_Main_46_collides$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 12] = i$ret;
  i$valstack[i$valstack_base + 9] = new i$CON(0,[i$valstack[i$valstack_base + 12],i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11]],null,null);
}
var _idris_Main_46_collides = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 9;
  i$PROJECT(i$valstack[i$valstack_base + 3],5,2);
  i$PROJECT(i$valstack[i$valstack_base + 2],7,2);
  i$CALL(_idris_Main_46_collides$0,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base + 1],9,3);
  ;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 4];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 7;
  i$CALL(_idris_Main_46_collides$2,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_collides_58_newP_58_0,[myoldbase]);
}
var _idris_Prelude_46_Classes_46_compare = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$PROJECT(i$valstack[i$valstack_base + 1],2,3);
  i$ret = i$valstack[i$valstack_base + 2];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Prelude_46_Basics_46_const = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$valstack[i$valstack_base + 2];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_demoSetTimeout$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
  i$valstack[i$valstack_base + 6] = new i$CON(65670,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65670,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_demoSetTimeout = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46_demoSetTimeout$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_killDemo,[myoldbase]);
}
var _idris_Prelude_46_Classes_46_divInt = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65913;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_draw$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 17] = i$ret;
  i$valstack[i$valstack_base + 18] = new i$CON(65676,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 11],i$valstack[i$valstack_base + 12],i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 13],i$valstack[i$valstack_base + 14],i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65676,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 15],i$valstack[i$valstack_base + 16],i$valstack[i$valstack_base + 17],i$valstack[i$valstack_base + 18]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_draw = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 17;
  i$PROJECT(i$valstack[i$valstack_base + 1],2,4);
  i$PROJECT(i$valstack[i$valstack_base + 2],6,3);
  i$PROJECT(i$valstack[i$valstack_base + 3],9,2);
  i$PROJECT(i$valstack[i$valstack_base + 4],11,2);
  i$PROJECT(i$valstack[i$valstack_base + 5],13,2);
  i$valstack[i$valstack_base + 15] = null;
  i$valstack[i$valstack_base + 16] = null;
  i$valstack[i$valstack_base + 17] = "#000000";
  ;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 17];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Main_46_draw$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_clear,[myoldbase]);
}
var _idris_Main_46_drawReport$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
  i$valstack[i$valstack_base + 6] = new i$CON(65690,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65690,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_drawReport = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 6;
  i$PROJECT(i$valstack[i$valstack_base],1,2);
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = "#000000";
  ;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Main_46_drawReport$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_clear,[myoldbase]);
}
var _idris_Prelude_46_List_46_elemBy$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  switch(i$valstack[i$valstack_base + 6].tag){
    case 0:
      i$valstack[i$valstack_base + 7] = null;
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 7];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 2];
      i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
      i$SLIDE(4);
      i$valstack_top = i$valstack_base + 4;
      i$CALL(_idris_Prelude_46_List_46_elemBy,[oldbase]);
      break;
    case 1:
      i$ret = i$CON$1;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_Prelude_46_List_46_elemBy$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_List_46_elemBy$1,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Prelude_46_List_46_elemBy = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  switch(i$valstack[i$valstack_base + 3].tag){
    case 1:
      i$PROJECT(i$valstack[i$valstack_base + 3],4,2);
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 2;
      i$CALL(_idris_Prelude_46_List_46_elemBy$0,[oldbase,myoldbase]);
      i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
      break;
    case 0:
      i$ret = i$CON$0;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_Main_46_fillText = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$PROJECT(i$valstack[i$valstack_base + 1],2,2);
  i$ret = new i$CON(65699,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65699,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Prelude_46_List_46_foldrImpl$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 13] = i$ret;
  i$valstack[i$valstack_base + 10] = new i$CON(65854,[i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11],i$valstack[i$valstack_base + 12],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 13]],_idris__123_APPLY0_125_$65854,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 10];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 7];
  i$SLIDE(6);
  i$valstack_top = i$valstack_base + 6;
  i$CALL(_idris_Prelude_46_List_46_foldrImpl,[oldbase]);
}
var _idris_Prelude_46_List_46_foldrImpl = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 8;
  switch(i$valstack[i$valstack_base + 5].tag){
    case 1:
      i$PROJECT(i$valstack[i$valstack_base + 5],6,2);
      i$valstack[i$valstack_base + 8] = null;
      i$valstack[i$valstack_base + 9] = null;
      i$valstack[i$valstack_base + 10] = null;
      i$valstack[i$valstack_base + 11] = null;
      i$valstack[i$valstack_base + 12] = null;
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 6];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 2;
      i$CALL(_idris_Prelude_46_List_46_foldrImpl$0,[oldbase,myoldbase]);
      i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
      break;
    case 0:
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
      i$SLIDE(2);
      i$valstack_top = i$valstack_base + 2;
      i$CALL(_idris__123_APPLY0_125_,[oldbase]);
      break;
  };
}
var _idris_Main_46_getInputState = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base] = null;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = i$CON$65629;
  i$valstack[i$valstack_base + 3] = i$CON$65701;
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_getParams$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_base + 3] = i$CON$65706;
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_getParams = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base] = null;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = "aiSpeed";
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Main_46_getParams$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_readParam,[myoldbase]);
}
var _idris_Prelude_46_Basics_46_id = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$valstack[i$valstack_base + 1];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_instructions = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base] = null;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = i$CON$65716;
  i$valstack[i$valstack_base + 3] = i$CON$65719;
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_io_95_bind$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 6];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_io_95_bind$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_io_95_bind$1,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_io_95_bind = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 4];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 5;
  i$CALL(_idris_io_95_bind$0,[oldbase,myoldbase]);
  i$CALL(_idris__123_io_95_bind2_125_,[myoldbase]);
}
var _idris_io_95_return = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$valstack[i$valstack_base + 1];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Prelude_46_Char_46_isDigit$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 1] = i$ret;
  switch(i$valstack[i$valstack_base + 1].tag){
    case 0:
      i$ret = i$CON$0;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    case 1:
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
      i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
      i$valstack_top = i$valstack_base + 1;
      i$CALL(_idris_Prelude_46_Char_46__123_isDigit0_125_,[oldbase]);
      break;
  };
}
var _idris_Prelude_46_Char_46_isDigit = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 1] = "0";
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Char_46_isDigit$0,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Char_58__33__62__61__58_0,[myoldbase]);
}
var _idris_Main_46_killDemo = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base] = null;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = i$CON$65720;
  i$valstack[i$valstack_base + 3] = i$CON$65722;
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_main = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base] = null;
  i$valstack[i$valstack_base + 1] = i$CON$3;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46_run,[oldbase]);
}
var _idris_Prelude_46_Functor_46_map$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_Prelude_46_Functor_46_map = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Functor_46_map$0,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46_newGame = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = i$CON$65723;
  i$valstack[i$valstack_base + 4] = new i$CON(65732,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65732,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_normal$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_base + 3] = i$CON$65735;
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_normal = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base] = null;
  i$valstack[i$valstack_base + 1] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46_normal$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_normal_58_random_58_0,[myoldbase]);
}
var _idris_Main_46_play$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
  i$valstack[i$valstack_base + 6] = new i$CON(65763,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65763,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_play = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46_play$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_killDemo,[myoldbase]);
}
var _idris_prim_95__95_sdivInt = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$valstack[i$valstack_base] / i$valstack[i$valstack_base + 1];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Prelude_46_Applicative_46_pure = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$PROJECT(i$valstack[i$valstack_base + 2],3,3);
  ;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_Main_46_putParams = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 11;
  i$PROJECT(i$valstack[i$valstack_base],1,7);
  i$valstack[i$valstack_base + 8] = null;
  i$valstack[i$valstack_base + 9] = null;
  i$valstack[i$valstack_base + 10] = "aiSpeed";
  i$valstack[i$valstack_base + 10] = new i$CON(65638,[i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65638,null);
  i$valstack[i$valstack_base + 11] = new i$CON(65776,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],_idris__123_APPLY0_125_$65776,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_randomParams$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_base + 3] = i$CON$65781;
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_randomParams$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_base + 3] = 10.0;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46_randomParams$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46_randomParams$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_Main_46_randomParams$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_Main_46_randomParams = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_base] = null;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46_randomParams$0,[oldbase,myoldbase]);
  i$CALL(_idris_PE_95__64__64_constructor_32_of_32_Prelude_46_Monad_46_Monad_35_Applicative_32_m_95_fd27177d,[myoldbase]);
}
var _idris_Main_46_readParam = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = new i$CON(65791,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65791,null);
  i$valstack[i$valstack_base + 4] = i$CON$65792;
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_really_95_believe_95_me = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$valstack[i$valstack_base + 2];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_rect = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$PROJECT(i$valstack[i$valstack_base + 1],2,2);
  i$PROJECT(i$valstack[i$valstack_base],4,2);
  i$ret = new i$CON(65793,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65793,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_run$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = i$CON$65820;
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_run$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_base + 7] = new i$CON(65795,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65795,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_run$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
  i$valstack[i$valstack_base + 9] = new i$CON(65815,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65815,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_run$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 8];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Main_46_run$3,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_drawReport,[myoldbase]);
}
var _idris_Main_46_run$4 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
  i$valstack[i$valstack_base + 9] = new i$CON(65819,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65819,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_run = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 10;
  switch(i$valstack[i$valstack_base + 1].tag){
    case 3:
      i$valstack[i$valstack_base + 2] = null;
      i$valstack[i$valstack_base + 3] = null;
      i$valstack[i$valstack_base + 4] = null;
      i$valstack[i$valstack_base + 5] = i$CON$65794;
      i$valstack[i$valstack_base + 6] = 10000.0;
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 6];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 3;
      i$CALL(_idris_Main_46_run$0,[oldbase,myoldbase]);
      i$CALL(_idris_Main_46_demoSetTimeout,[myoldbase]);
      break;
    case 4:
      i$PROJECT(i$valstack[i$valstack_base + 1],2,3);
      i$valstack[i$valstack_base + 5] = null;
      i$valstack[i$valstack_base + 6] = null;
      i$valstack[i$valstack_base + 5] = new i$CON(65630,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65630,null);
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 5];
      i$SLIDE(3);
      i$valstack_top = i$valstack_base + 3;
      i$CALL(_idris_Main_46_attractPlay,[oldbase]);
      break;
    case 5:
      i$PROJECT(i$valstack[i$valstack_base + 1],2,2);
      i$valstack[i$valstack_base + 4] = null;
      i$valstack[i$valstack_base + 5] = null;
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$CALL(_idris_Main_46_run$1,[oldbase,myoldbase]);
      i$CALL(_idris_Main_46_randomParams,[myoldbase]);
      break;
    case 0:
      i$PROJECT(i$valstack[i$valstack_base + 1],2,3);
      i$PROJECT(i$valstack[i$valstack_base + 4],5,2);
      i$valstack[i$valstack_base + 7] = null;
      i$valstack[i$valstack_base + 7] = new i$CON(65631,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65631,null);
      ;
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 7];
      i$SLIDE(3);
      i$valstack_top = i$valstack_base + 3;
      i$CALL(_idris_Main_46_play,[oldbase]);
      break;
    case 1:
      i$PROJECT(i$valstack[i$valstack_base + 1],2,4);
      i$valstack[i$valstack_base + 6] = null;
      i$valstack[i$valstack_base + 7] = null;
      i$valstack[i$valstack_base + 8] = null;
      i$valstack[i$valstack_base + 9] = null;
      i$valstack[i$valstack_base + 10] = null;
      i$valstack[i$valstack_base + 11] = null;
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 8];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 9];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 10];
      i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 11];
      i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 2];
      i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 4];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 6;
      i$CALL(_idris_Main_46_run$2,[oldbase,myoldbase]);
      i$CALL(_idris_Main_46_run_58_revert_58_1,[myoldbase]);
      break;
    case 2:
      i$PROJECT(i$valstack[i$valstack_base + 1],2,4);
      i$valstack[i$valstack_base + 6] = null;
      i$valstack[i$valstack_base + 7] = null;
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 2;
      i$CALL(_idris_Main_46_run$4,[oldbase,myoldbase]);
      i$CALL(_idris_Main_46_draw,[myoldbase]);
      break;
  };
}
var _idris_Main_46_setClick = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = canvas.onclick = i$ffiWrap(i$valstack[i$valstack_base + 1],oldbase,myoldbase);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_setEnabled$0 = function(oldbase,myoldbase){
  i$ret = document.params[i$valstack[i$valstack_base + 1]].disabled = i$valstack[i$valstack_base + 3] != 1;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_setEnabled = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$CALL(_idris_Main_46_setEnabled$0,[oldbase,myoldbase]);
  switch(i$valstack[i$valstack_base].tag){
    case 0:
      i$valstack[i$valstack_base + 3] = 0;
      break;
    case 1:
      i$valstack[i$valstack_base + 3] = 1;
      break;
  };
}
var _idris_Main_46_setFillStyle = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = setFillStyle(i$valstack[i$valstack_base]);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_setFont = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = context.font = i$valstack[i$valstack_base];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_setTimeout = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = setTimeout(i$ffiWrap(i$valstack[i$valstack_base + 1],oldbase,myoldbase), i$valstack[i$valstack_base + 2]);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_showMenu$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_base + 3] = i$CON$65834;
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_showMenu = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base] = null;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = "black";
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Main_46_showMenu$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_clear,[myoldbase]);
}
var _idris_Main_46_startGame$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_base + 4] = i$CON$65837;
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_startGame = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46_startGame$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_killDemo,[myoldbase]);
}
var _idris_Main_46_step$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 21] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 21];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 20];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_Main_46_step$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 19] = i$ret;
  switch(i$valstack[i$valstack_base + 19].tag){
    case 0:
      i$valstack[i$valstack_base + 20] = i$valstack[i$valstack_base + 19].args[0];
      i$ret = new i$CON(0,[i$valstack[i$valstack_base + 20]],null,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    case 1:
      i$valstack[i$valstack_base + 20] = i$valstack[i$valstack_base + 19].args[0];
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 2];
      i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 3];
      i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 4];
      i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 5];
      i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 6];
      i$valstack[i$valstack_top + 7] = i$valstack[i$valstack_base + 7];
      i$valstack[i$valstack_top + 8] = i$valstack[i$valstack_base + 8];
      i$valstack[i$valstack_top + 9] = i$valstack[i$valstack_base + 9];
      i$valstack[i$valstack_top + 10] = i$valstack[i$valstack_base + 10];
      i$valstack[i$valstack_top + 11] = i$valstack[i$valstack_base + 11];
      i$valstack[i$valstack_top + 12] = i$valstack[i$valstack_base + 12];
      i$valstack[i$valstack_top + 13] = i$valstack[i$valstack_base + 13];
      i$valstack[i$valstack_top + 14] = i$valstack[i$valstack_base + 14];
      i$valstack[i$valstack_top + 15] = i$valstack[i$valstack_base + 15];
      i$valstack[i$valstack_top + 16] = i$valstack[i$valstack_base + 16];
      i$valstack[i$valstack_top + 17] = i$valstack[i$valstack_base + 17];
      i$valstack[i$valstack_top + 18] = i$valstack[i$valstack_base + 18];
      i$valstack[i$valstack_top + 19] = i$valstack[i$valstack_base + 20];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 20;
      i$CALL(_idris_Main_46_step$1,[oldbase,myoldbase]);
      i$CALL(_idris_Main_46__123_step3_125_,[myoldbase]);
      break;
  };
}
var _idris_Main_46_step = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 18;
  i$PROJECT(i$valstack[i$valstack_base + 3],4,4);
  i$PROJECT(i$valstack[i$valstack_base + 4],8,3);
  i$PROJECT(i$valstack[i$valstack_base + 8],11,2);
  i$PROJECT(i$valstack[i$valstack_base + 10],13,2);
  i$PROJECT(i$valstack[i$valstack_base + 5],15,2);
  i$PROJECT(i$valstack[i$valstack_base + 2],17,2);
  i$valstack[i$valstack_base + 19] = null;
  i$valstack[i$valstack_base + 20] = null;
  ;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 19];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 20];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 11];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 12];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 7] = i$valstack[i$valstack_base + 13];
  i$valstack[i$valstack_top + 8] = i$valstack[i$valstack_base + 14];
  i$valstack[i$valstack_top + 9] = i$valstack[i$valstack_base + 15];
  i$valstack[i$valstack_top + 10] = i$valstack[i$valstack_base + 16];
  i$valstack[i$valstack_top + 11] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 12] = i$valstack[i$valstack_base + 7];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 13;
  i$CALL(_idris_Main_46_step$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_step_58_newBall_58_0,[myoldbase]);
}
var _idris_Main_46_toggleParamsEnabled$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 5] = new i$CON(65856,[i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65856,null);
  i$valstack[i$valstack_base + 6] = "aiSpeed";
  i$valstack[i$valstack_base + 7] = "twistFactor";
  i$valstack[i$valstack_base + 8] = "paddleHeight";
  i$valstack[i$valstack_base + 9] = "paddleWidth";
  i$valstack[i$valstack_base + 10] = "accelFactor";
  i$valstack[i$valstack_base + 11] = "vx0Factor";
  i$valstack[i$valstack_base + 12] = "vy0Factor";
  i$valstack[i$valstack_base + 13] = i$CON$0;
  i$valstack[i$valstack_base + 12] = new i$CON(1,[i$valstack[i$valstack_base + 12],i$valstack[i$valstack_base + 13]],null,null);
  i$valstack[i$valstack_base + 11] = new i$CON(1,[i$valstack[i$valstack_base + 11],i$valstack[i$valstack_base + 12]],null,null);
  i$valstack[i$valstack_base + 10] = new i$CON(1,[i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11]],null,null);
  i$valstack[i$valstack_base + 9] = new i$CON(1,[i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10]],null,null);
  i$valstack[i$valstack_base + 8] = new i$CON(1,[i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9]],null,null);
  i$valstack[i$valstack_base + 7] = new i$CON(1,[i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8]],null,null);
  i$valstack[i$valstack_base + 6] = new i$CON(1,[i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],null,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 6];
  i$SLIDE(6);
  i$valstack_top = i$valstack_base + 6;
  i$CALL(_idris_Prelude_46_List_46_foldrImpl,[oldbase]);
}
var _idris_Main_46_toggleParamsEnabled = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 13;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = null;
  i$valstack[i$valstack_base + 7] = null;
  i$valstack[i$valstack_base + 8] = null;
  i$valstack[i$valstack_base + 9] = i$CON$65845;
  i$valstack[i$valstack_base + 10] = i$CON$65847;
  i$valstack[i$valstack_base + 11] = i$CON$65841;
  i$valstack[i$valstack_base + 9] = new i$CON(0,[i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11]],null,null);
  i$valstack[i$valstack_base + 6] = new i$CON(65912,[i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9]],_idris__123_APPLY0_125_$65912,null);
  i$valstack[i$valstack_base + 7] = new i$CON(65911,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65911,null);
  i$valstack[i$valstack_base + 3] = new i$CON(65854,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],_idris__123_APPLY0_125_$65854,null);
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = i$CON$0;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46_toggleParamsEnabled$0,[oldbase,myoldbase]);
  i$CALL(_idris_PE_95_pure_95_a7425aec,[myoldbase]);
}
var _idris_Prelude_46_Strings_46_unpack$4 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$ret = new i$CON(1,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 4]],null,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Prelude_46_Strings_46_unpack$3 = function(oldbase,myoldbase){
  switch(i$valstack[i$valstack_base + 1].tag){
    case 1:
      i$PROJECT(i$valstack[i$valstack_base + 1],2,2);
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 1;
      i$CALL(_idris_Prelude_46_Strings_46_unpack$4,[oldbase,myoldbase]);
      i$CALL(_idris_Prelude_46_Strings_46_unpack,[myoldbase]);
      break;
    case 0:
      i$ret = i$CON$0;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_Prelude_46_Strings_46_unpack$5 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 1] = i$ret;
}
var _idris_Prelude_46_Strings_46_unpack$6 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 1] = i$ret;
}
var _idris_Prelude_46_Strings_46_unpack$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 1] = i$ret;
  i$CALL(_idris_Prelude_46_Strings_46_unpack$3,[oldbase,myoldbase]);
  switch(i$valstack[i$valstack_base + 1].tag){
    case 0:
      i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base + 1].args[0];
      i$valstack[i$valstack_base + 3] = null;
      i$valstack[i$valstack_base + 4] = null;
      i$valstack[i$valstack_base + 5] = i$valstack[i$valstack_base][0];
      i$valstack[i$valstack_base + 6] = i$valstack[i$valstack_base].substr(1,i$valstack[i$valstack_base].length - 1);
      i$valstack[i$valstack_base + 5] = new i$CON(1,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],null,null);
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 5];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 3;
      i$CALL(_idris_Prelude_46_Strings_46_unpack$5,[oldbase,myoldbase]);
      i$CALL(_idris_really_95_believe_95_me,[myoldbase]);
      break;
    case 1:
      i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base + 1].args[0];
      i$valstack[i$valstack_base + 3] = null;
      i$valstack[i$valstack_base + 4] = null;
      i$valstack[i$valstack_base + 5] = i$CON$0;
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 5];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 3;
      i$CALL(_idris_Prelude_46_Strings_46_unpack$6,[oldbase,myoldbase]);
      i$CALL(_idris_really_95_believe_95_me,[myoldbase]);
      break;
  };
}
var _idris_Prelude_46_Strings_46_unpack$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Prelude_46_Strings_46_unpack$2,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Either_46_choose,[myoldbase]);
}
var _idris_Prelude_46_Strings_46_unpack$0 = function(oldbase,myoldbase){
  i$CALL(_idris_Prelude_46_Strings_46_unpack$1,[oldbase,myoldbase]);
  switch(i$valstack[i$valstack_base + 1].tag){
    case 0:
      i$valstack[i$valstack_base + 1] = i$CON$1;
      break;
    case 1:
      i$valstack[i$valstack_base + 1] = i$CON$0;
      break;
  };
}
var _idris_Prelude_46_Strings_46_unpack = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 6;
  i$valstack[i$valstack_base + 1] = "";
  i$valstack[i$valstack_base + 1] = i$valstack[i$valstack_base] == i$valstack[i$valstack_base + 1];
  i$CALL(_idris_Prelude_46_Strings_46_unpack$0,[oldbase,myoldbase]);
  if (i$valstack[i$valstack_base + 1] == 0) {
    i$valstack[i$valstack_base + 1] = i$CON$0;
  } else {
    i$valstack[i$valstack_base + 1] = i$CON$1;
  };
}
var _idris_Main_46_writeParam = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = document.params[i$valstack[i$valstack_base]].value = i$valstack[i$valstack_base + 1];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_APPLY0_125_$65628 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,8);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 7] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 8] = i$valstack[i$valstack_base + 1];
  i$SLIDE(9);
  i$valstack_top = i$valstack_base + 9;
  i$CALL(_idris_Main_46_centerText_58_measure_58_0,[oldbase]);
}
var _idris__123_APPLY0_125_$65629 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46_getInputState_58_getMouse_58_0,[oldbase]);
}
var _idris__123_APPLY0_125_$65630 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Main_46_run_58_next_58_4,[oldbase]);
}
var _idris__123_APPLY0_125_$65631 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,4);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 1];
  i$SLIDE(5);
  i$valstack_top = i$valstack_base + 5;
  i$CALL(_idris_Main_46_run_58_report_58_0,[oldbase]);
}
var _idris__123_APPLY0_125_$65632 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_Main_46_setClick,[oldbase]);
}
var _idris__123_APPLY0_125_$65633 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_Main_46_setEnabled,[oldbase]);
}
var _idris__123_APPLY0_125_$65634 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46_setFillStyle,[oldbase]);
}
var _idris__123_APPLY0_125_$65635 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46_setFont,[oldbase]);
}
var _idris__123_APPLY0_125_$65636 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Main_46_setTimeout,[oldbase]);
}
var _idris__123_APPLY0_125_$65637 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46_startGame,[oldbase]);
}
var _idris__123_APPLY0_125_$65638 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_Main_46_writeParam,[oldbase]);
}
var _idris__123_APPLY0_125_$65639 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_attractPlay0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65640 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_attractPlay1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65641 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Main_46__123_attractPlay2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65642 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,4);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 1];
  i$SLIDE(5);
  i$valstack_top = i$valstack_base + 5;
  i$CALL(_idris_Main_46__123_attractPlay3_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65643 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,4);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 1];
  i$SLIDE(5);
  i$valstack_top = i$valstack_base + 5;
  i$CALL(_idris_Main_46__123_attractPlay4_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65644 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,4);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 1];
  i$SLIDE(5);
  i$valstack_top = i$valstack_base + 5;
  i$CALL(_idris_Main_46__123_attractPlay5_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65645 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,4);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 1];
  i$SLIDE(5);
  i$valstack_top = i$valstack_base + 5;
  i$CALL(_idris_Main_46__123_attractPlay6_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65646 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Main_46__123_attractPlay7_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65647 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Main_46__123_attractPlay8_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65648 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Main_46__123_attractPlay9_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65649 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_boundVelocity0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65650 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_boundVelocity1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65651 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_boundVelocity2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65652 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Main_46__123_case_32_block_32_in_32_attractPlay0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65653 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_case_32_block_32_in_32_boundVelocity0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65654 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_case_32_block_32_in_32_boundVelocity1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65655 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_case_32_block_32_in_32_boundVelocity2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65656 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Main_46__123_case_32_block_32_in_32_drawReport0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65657 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Main_46__123_case_32_block_32_in_32_play0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65658 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Main_46__123_case_32_block_32_in_32_run0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65659 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,6);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 1];
  i$SLIDE(7);
  i$valstack_top = i$valstack_base + 7;
  i$CALL(_idris_Main_46__123_centerText0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65660 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,6);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 1];
  i$SLIDE(7);
  i$valstack_top = i$valstack_base + 7;
  i$CALL(_idris_Main_46__123_centerText1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65661 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_circle0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65662 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Main_46__123_circle1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65663 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_circle2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65664 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_circle3_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65665 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Main_46__123_circle4_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65666 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_clear0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65667 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_clear1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65668 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46__123_demoSetTimeout0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65669 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_demoSetTimeout1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65670 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_Main_46__123_demoSetTimeout2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65671 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_draw0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65672 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46__123_draw1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65673 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,5);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 1];
  i$SLIDE(6);
  i$valstack_top = i$valstack_base + 6;
  i$CALL(_idris_Main_46__123_draw2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65674 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,7);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 7] = i$valstack[i$valstack_base + 1];
  i$SLIDE(8);
  i$valstack_top = i$valstack_base + 8;
  i$CALL(_idris_Main_46__123_draw3_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65675 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,7);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 7] = i$valstack[i$valstack_base + 1];
  i$SLIDE(8);
  i$valstack_top = i$valstack_base + 8;
  i$CALL(_idris_Main_46__123_draw4_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65676 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,7);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 7] = i$valstack[i$valstack_base + 1];
  i$SLIDE(8);
  i$valstack_top = i$valstack_base + 8;
  i$CALL(_idris_Main_46__123_draw5_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65677 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_drawReport0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65678 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_drawReport10_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65679 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_drawReport11_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65680 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_drawReport12_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65681 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46__123_drawReport13_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65682 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_drawReport14_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65683 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_drawReport15_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65684 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_drawReport16_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65685 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Main_46__123_drawReport17_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65686 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Main_46__123_drawReport18_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65687 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_Main_46__123_drawReport19_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65688 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_drawReport1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65689 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_Main_46__123_drawReport20_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65690 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_Main_46__123_drawReport21_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65691 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46__123_drawReport2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65692 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46__123_drawReport3_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65693 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_drawReport4_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65694 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_drawReport5_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65695 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_drawReport6_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65696 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_drawReport7_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65697 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_drawReport8_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65698 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46__123_drawReport9_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65699 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Main_46__123_fillText0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65700 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46__123_getInputState0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65701 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_getInputState1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65702 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,6);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 1];
  i$SLIDE(7);
  i$valstack_top = i$valstack_base + 7;
  i$CALL(_idris_Main_46__123_getParams0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65703 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Main_46__123_getParams10_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65704 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_Main_46__123_getParams11_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65705 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46__123_getParams12_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65706 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_getParams13_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65707 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,5);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 1];
  i$SLIDE(6);
  i$valstack_top = i$valstack_base + 6;
  i$CALL(_idris_Main_46__123_getParams1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65708 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,4);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 1];
  i$SLIDE(5);
  i$valstack_top = i$valstack_base + 5;
  i$CALL(_idris_Main_46__123_getParams2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65709 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Main_46__123_getParams3_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65710 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_Main_46__123_getParams4_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65711 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46__123_getParams5_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65712 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_getParams6_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65713 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,6);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 1];
  i$SLIDE(7);
  i$valstack_top = i$valstack_base + 7;
  i$CALL(_idris_Main_46__123_getParams7_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65714 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,5);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 1];
  i$SLIDE(6);
  i$valstack_top = i$valstack_base + 6;
  i$CALL(_idris_Main_46__123_getParams8_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65715 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,4);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 1];
  i$SLIDE(5);
  i$valstack_top = i$valstack_base + 5;
  i$CALL(_idris_Main_46__123_getParams9_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65716 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_instructions0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65717 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_instructions1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65718 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46__123_instructions2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65719 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_instructions3_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65720 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_killDemo0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65721 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46__123_killDemo1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65722 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_killDemo2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65723 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_newGame0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65724 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_newGame1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65725 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_newGame2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65726 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46__123_newGame3_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65727 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46__123_newGame4_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65728 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,4);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 1];
  i$SLIDE(5);
  i$valstack_top = i$valstack_base + 5;
  i$CALL(_idris_Main_46__123_newGame5_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65729 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,4);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 1];
  i$SLIDE(5);
  i$valstack_top = i$valstack_base + 5;
  i$CALL(_idris_Main_46__123_newGame6_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65730 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Main_46__123_newGame7_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65731 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_Main_46__123_newGame8_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65732 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46__123_newGame9_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65733 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_Main_46__123_normal0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65734 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46__123_normal1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65735 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_normal2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65736 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46__123_play0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65737 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_play10_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65738 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46__123_play11_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65739 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_play12_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65740 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_play13_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65741 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_play14_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65742 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Main_46__123_play15_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65743 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46__123_play16_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65744 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46__123_play17_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65745 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_play18_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65746 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_play19_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65747 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46__123_play1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65748 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_play20_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65749 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_play21_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65750 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_play22_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65751 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46__123_play23_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65752 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_play24_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65753 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_play25_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65754 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_play26_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65755 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46__123_play27_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65756 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_play28_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65757 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_play29_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65758 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_play2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65759 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_play30_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65760 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Main_46__123_play31_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65761 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Main_46__123_play32_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65762 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Main_46__123_play33_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65763 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Main_46__123_play34_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65764 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_play3_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65765 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_play4_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65766 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_play5_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65767 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_play6_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65768 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46__123_play7_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65769 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_play8_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65770 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_play9_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65771 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46__123_putParams0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65772 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_Main_46__123_putParams1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65773 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Main_46__123_putParams2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65774 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,4);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 1];
  i$SLIDE(5);
  i$valstack_top = i$valstack_base + 5;
  i$CALL(_idris_Main_46__123_putParams3_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65775 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,5);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 1];
  i$SLIDE(6);
  i$valstack_top = i$valstack_base + 6;
  i$CALL(_idris_Main_46__123_putParams4_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65776 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,6);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 1];
  i$SLIDE(7);
  i$valstack_top = i$valstack_base + 7;
  i$CALL(_idris_Main_46__123_putParams5_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65777 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,13);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 7] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 8] = i$valstack[i$valstack_base + 10];
  i$valstack[i$valstack_top + 9] = i$valstack[i$valstack_base + 11];
  i$valstack[i$valstack_top + 10] = i$valstack[i$valstack_base + 12];
  i$valstack[i$valstack_top + 11] = i$valstack[i$valstack_base + 13];
  i$valstack[i$valstack_top + 12] = i$valstack[i$valstack_base + 14];
  i$valstack[i$valstack_top + 13] = i$valstack[i$valstack_base + 1];
  i$SLIDE(14);
  i$valstack_top = i$valstack_base + 14;
  i$CALL(_idris_Main_46__123_randomParams0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65778 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Main_46__123_randomParams10_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65779 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_Main_46__123_randomParams11_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65780 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46__123_randomParams12_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65781 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_randomParams13_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65782 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,12);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 7] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 8] = i$valstack[i$valstack_base + 10];
  i$valstack[i$valstack_top + 9] = i$valstack[i$valstack_base + 11];
  i$valstack[i$valstack_top + 10] = i$valstack[i$valstack_base + 12];
  i$valstack[i$valstack_top + 11] = i$valstack[i$valstack_base + 13];
  i$valstack[i$valstack_top + 12] = i$valstack[i$valstack_base + 1];
  i$SLIDE(13);
  i$valstack_top = i$valstack_base + 13;
  i$CALL(_idris_Main_46__123_randomParams1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65783 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,11);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 7] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 8] = i$valstack[i$valstack_base + 10];
  i$valstack[i$valstack_top + 9] = i$valstack[i$valstack_base + 11];
  i$valstack[i$valstack_top + 10] = i$valstack[i$valstack_base + 12];
  i$valstack[i$valstack_top + 11] = i$valstack[i$valstack_base + 1];
  i$SLIDE(12);
  i$valstack_top = i$valstack_base + 12;
  i$CALL(_idris_Main_46__123_randomParams2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65784 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,10);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 7] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 8] = i$valstack[i$valstack_base + 10];
  i$valstack[i$valstack_top + 9] = i$valstack[i$valstack_base + 11];
  i$valstack[i$valstack_top + 10] = i$valstack[i$valstack_base + 1];
  i$SLIDE(11);
  i$valstack_top = i$valstack_base + 11;
  i$CALL(_idris_Main_46__123_randomParams3_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65785 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,9);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 7] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 8] = i$valstack[i$valstack_base + 10];
  i$valstack[i$valstack_top + 9] = i$valstack[i$valstack_base + 1];
  i$SLIDE(10);
  i$valstack_top = i$valstack_base + 10;
  i$CALL(_idris_Main_46__123_randomParams4_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65786 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,8);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 7] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 8] = i$valstack[i$valstack_base + 1];
  i$SLIDE(9);
  i$valstack_top = i$valstack_base + 9;
  i$CALL(_idris_Main_46__123_randomParams5_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65787 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,7);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 7] = i$valstack[i$valstack_base + 1];
  i$SLIDE(8);
  i$valstack_top = i$valstack_base + 8;
  i$CALL(_idris_Main_46__123_randomParams6_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65788 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,6);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 1];
  i$SLIDE(7);
  i$valstack_top = i$valstack_base + 7;
  i$CALL(_idris_Main_46__123_randomParams7_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65789 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,5);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 1];
  i$SLIDE(6);
  i$valstack_top = i$valstack_base + 6;
  i$CALL(_idris_Main_46__123_randomParams8_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65790 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,4);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 1];
  i$SLIDE(5);
  i$valstack_top = i$valstack_base + 5;
  i$CALL(_idris_Main_46__123_randomParams9_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65791 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46__123_readParam0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65792 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_readParam1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65793 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,4);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 1];
  i$SLIDE(5);
  i$valstack_top = i$valstack_base + 5;
  i$CALL(_idris_Main_46__123_rect0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65794 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_run0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65795 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_Main_46__123_run10_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65796 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46__123_run11_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65797 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46__123_run12_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65798 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_run13_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65799 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_run14_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65800 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_run15_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65801 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_run16_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65802 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_run17_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65803 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46__123_run18_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65804 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_run19_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65805 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_run1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65806 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_run20_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65807 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_run21_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65808 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46__123_run22_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65809 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_run23_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65810 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_run24_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65811 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_run25_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65812 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Main_46__123_run26_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65813 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Main_46__123_run27_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65814 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_run28_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65815 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Main_46__123_run29_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65816 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_run2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65817 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Main_46__123_run30_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65818 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_run31_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65819 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,4);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 1];
  i$SLIDE(5);
  i$valstack_top = i$valstack_base + 5;
  i$CALL(_idris_Main_46__123_run32_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65820 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_run3_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65821 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Main_46__123_run4_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65822 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,4);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 1];
  i$SLIDE(5);
  i$valstack_top = i$valstack_base + 5;
  i$CALL(_idris_Main_46__123_run5_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65823 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,4);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 1];
  i$SLIDE(5);
  i$valstack_top = i$valstack_base + 5;
  i$CALL(_idris_Main_46__123_run6_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65824 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Main_46__123_run7_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65825 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Main_46__123_run8_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65826 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Main_46__123_run9_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65827 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_showMenu0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65828 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_showMenu1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65829 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_showMenu2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65830 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_showMenu3_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65831 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46__123_showMenu4_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65832 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_showMenu5_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65833 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_showMenu6_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65834 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_showMenu7_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65835 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46__123_startGame0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65836 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_startGame1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65837 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_startGame2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65838 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,6);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 1];
  i$SLIDE(7);
  i$valstack_top = i$valstack_base + 7;
  i$CALL(_idris_Main_46__123_step0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65839 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,20);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 7] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 8] = i$valstack[i$valstack_base + 10];
  i$valstack[i$valstack_top + 9] = i$valstack[i$valstack_base + 11];
  i$valstack[i$valstack_top + 10] = i$valstack[i$valstack_base + 12];
  i$valstack[i$valstack_top + 11] = i$valstack[i$valstack_base + 13];
  i$valstack[i$valstack_top + 12] = i$valstack[i$valstack_base + 14];
  i$valstack[i$valstack_top + 13] = i$valstack[i$valstack_base + 15];
  i$valstack[i$valstack_top + 14] = i$valstack[i$valstack_base + 16];
  i$valstack[i$valstack_top + 15] = i$valstack[i$valstack_base + 17];
  i$valstack[i$valstack_top + 16] = i$valstack[i$valstack_base + 18];
  i$valstack[i$valstack_top + 17] = i$valstack[i$valstack_base + 19];
  i$valstack[i$valstack_top + 18] = i$valstack[i$valstack_base + 20];
  i$valstack[i$valstack_top + 19] = i$valstack[i$valstack_base + 21];
  i$valstack[i$valstack_top + 20] = i$valstack[i$valstack_base + 1];
  i$SLIDE(21);
  i$valstack_top = i$valstack_base + 21;
  i$CALL(_idris_Main_46__123_step2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65840 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46__123_toggleParamsEnabled0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65841 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_toggleParamsEnabled10_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65842 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46__123_toggleParamsEnabled1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65843 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_toggleParamsEnabled2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65844 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_toggleParamsEnabled3_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65845 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_toggleParamsEnabled4_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65846 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_toggleParamsEnabled5_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65847 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_toggleParamsEnabled6_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65848 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46__123_toggleParamsEnabled7_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65849 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_toggleParamsEnabled8_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65850 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_toggleParamsEnabled9_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65851 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,5);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 1];
  i$SLIDE(6);
  i$valstack_top = i$valstack_base + 6;
  i$CALL(_idris_Prelude_46_Applicative_46__36__62_,[oldbase]);
}
var _idris__123_APPLY0_125_$65852 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Prelude_46_Applicative_46__123_IO_32_instance_32_of_32_Prelude_46_Applicative_46_Applicative_44__32_method_32__60__36__62_0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65853 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Prelude_46_Applicative_46__123_IO_32_instance_32_of_32_Prelude_46_Applicative_46_Applicative_44__32_method_32__60__36__62_1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65854 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,5);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 1];
  i$SLIDE(6);
  i$valstack_top = i$valstack_base + 6;
  i$CALL(_idris_Prelude_46_Basics_46__46_,[oldbase]);
}
var _idris__123_APPLY0_125_$65855 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Prelude_46_Basics_46_const,[oldbase]);
}
var _idris__123_APPLY0_125_$65856 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Prelude_46_Basics_46_id,[oldbase]);
}
var _idris__123_APPLY0_125_$65857 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,4);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 1];
  i$SLIDE(5);
  i$valstack_top = i$valstack_base + 5;
  i$CALL(_idris_io_95_bind,[oldbase]);
}
var _idris__123_APPLY0_125_$65858 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_io_95_return,[oldbase]);
}
var _idris__123_APPLY0_125_$65859 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_prim_95__95_sdivInt,[oldbase]);
}
var _idris__123_APPLY0_125_$65860 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_Char_32_instance_32_of_32_Prelude_46_Classes_46_Ord0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65861 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_Char_32_instance_32_of_32_Prelude_46_Classes_46_Ord1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65862 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_Char_32_instance_32_of_32_Prelude_46_Classes_46_Ord2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65863 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_Char_32_instance_32_of_32_Prelude_46_Classes_46_Ord3_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65864 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_Char_32_instance_32_of_32_Prelude_46_Classes_46_Ord4_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65865 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_Char_32_instance_32_of_32_Prelude_46_Classes_46_Ord5_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65866 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_Float_32_instance_32_of_32_Prelude_46_Classes_46_Ord0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65867 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_Float_32_instance_32_of_32_Prelude_46_Classes_46_Ord1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65868 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_Float_32_instance_32_of_32_Prelude_46_Classes_46_Ord2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65869 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_Float_32_instance_32_of_32_Prelude_46_Classes_46_Ord3_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65870 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_Float_32_instance_32_of_32_Prelude_46_Classes_46_Ord4_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65871 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_Float_32_instance_32_of_32_Prelude_46_Classes_46_Ord5_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65872 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_Int_32_instance_32_of_32_Prelude_46_Classes_46_Ord0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65873 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_Int_32_instance_32_of_32_Prelude_46_Classes_46_Ord1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65874 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_Int_32_instance_32_of_32_Prelude_46_Classes_46_Ord2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65875 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_Int_32_instance_32_of_32_Prelude_46_Classes_46_Ord3_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65876 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_Int_32_instance_32_of_32_Prelude_46_Classes_46_Ord4_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65877 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_Int_32_instance_32_of_32_Prelude_46_Classes_46_Ord5_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65878 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_Main_46_getInputState_44__32_getEscape0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65879 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_Main_46_getInputState_44__32_getEscape1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65880 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_Main_46_getInputState_44__32_getEscape2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65881 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_Main_46_getInputState_44__32_getEscape3_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65882 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_Main_46_getInputState_44__32_getEscape4_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65883 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_Main_46_normal_44__32_random0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65884 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_Main_46_normal_44__32_random1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65885 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_Main_46_readParam_44__32_validFloatString1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65886 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_Main_46_readParam_44__32_validFloatString2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65887 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris__123_Main_46_run_44__32_continueGame1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65888 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_Main_46_run_44__32_continueGame2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65889 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris__123_Main_46_run_44__32_continueGame3_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65890 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_Main_46_startGame_44__32_reallyStart0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65891 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_Main_46_startGame_44__32_reallyStart1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65892 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_Main_46_startGame_44__32_reallyStart2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65893 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_Main_46_startGame_44__32_reallyStart3_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65894 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_Main_46_startGame_44__32_reallyStart4_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65895 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_Main_46_startGame_44__32_reallyStart5_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65896 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_Main_46_startGame_44__32_reallyStart6_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65897 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_Main_46_startGame_44__32_reallyStart7_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65898 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris__123_Main_46_step_44__32_newRight0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65899 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_PE_95__64__64_constructor_32_of_32_Prelude_46_Monad_46_Monad_35_Applicative_32_m_95_fd27177d0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65900 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_PE_95__64__64_constructor_32_of_32_Prelude_46_Monad_46_Monad_35_Applicative_32_m_95_fd27177d10_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65901 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_PE_95__64__64_constructor_32_of_32_Prelude_46_Monad_46_Monad_35_Applicative_32_m_95_fd27177d1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65902 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_PE_95__64__64_constructor_32_of_32_Prelude_46_Monad_46_Monad_35_Applicative_32_m_95_fd27177d2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65903 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_PE_95__64__64_constructor_32_of_32_Prelude_46_Monad_46_Monad_35_Applicative_32_m_95_fd27177d3_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65904 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_PE_95__64__64_constructor_32_of_32_Prelude_46_Monad_46_Monad_35_Applicative_32_m_95_fd27177d4_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65905 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_PE_95__64__64_constructor_32_of_32_Prelude_46_Monad_46_Monad_35_Applicative_32_m_95_fd27177d5_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65906 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_PE_95__64__64_constructor_32_of_32_Prelude_46_Monad_46_Monad_35_Applicative_32_m_95_fd27177d6_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65907 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_PE_95__64__64_constructor_32_of_32_Prelude_46_Monad_46_Monad_35_Applicative_32_m_95_fd27177d7_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65908 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_PE_95__64__64_constructor_32_of_32_Prelude_46_Monad_46_Monad_35_Applicative_32_m_95_fd27177d8_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65909 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_PE_95__64__64_constructor_32_of_32_Prelude_46_Monad_46_Monad_35_Applicative_32_m_95_fd27177d9_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65910 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,5);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 1];
  i$SLIDE(6);
  i$valstack_top = i$valstack_base + 6;
  i$CALL(_idris__123_io_95_bind1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65911 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$ret = new i$CON(65633,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65633,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_APPLY0_125_$65912 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,4);
  i$ret = new i$CON(65851,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65851,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_APPLY0_125_$65913 = function(oldbase,myoldbase){
  i$ret = new i$CON(65859,[i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65859,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_APPLY0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 20;
  if (i$valstack[i$valstack_base] instanceof i$CON && i$valstack[i$valstack_base].app) {
    i$valstack[i$valstack_base].app(oldbase,myoldbase);
  } else {
    i$ret = null;
    i$valstack_top = i$valstack_base;
    i$valstack_base = oldbase.addr;
  };
}
var _idris__123_Char_32_instance_32_of_32_Prelude_46_Classes_46_Ord0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Char_58__33_compare_58_0,[oldbase]);
}
var _idris_Prelude_46_Classes_46__123_Char_32_instance_32_of_32_Prelude_46_Classes_46_Ord_44__32_method_32__60__61_0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base] == i$valstack[i$valstack_base + 1];
  if (i$valstack[i$valstack_base + 2] == 0) {
    i$ret = i$CON$0;
    i$valstack_top = i$valstack_base;
    i$valstack_base = oldbase.addr;
  } else {
    i$ret = i$CON$1;
    i$valstack_top = i$valstack_base;
    i$valstack_base = oldbase.addr;
  };
}
var _idris_Prelude_46_Classes_46__123_Char_32_instance_32_of_32_Prelude_46_Classes_46_Ord_44__32_method_32__62__61_0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base] == i$valstack[i$valstack_base + 1];
  if (i$valstack[i$valstack_base + 2] == 0) {
    i$ret = i$CON$0;
    i$valstack_top = i$valstack_base;
    i$valstack_base = oldbase.addr;
  } else {
    i$ret = i$CON$1;
    i$valstack_top = i$valstack_base;
    i$valstack_base = oldbase.addr;
  };
}
var _idris__123_EVAL0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  if (i$valstack[i$valstack_base] instanceof i$CON && i$valstack[i$valstack_base].ev) {
    i$valstack[i$valstack_base].ev(oldbase,myoldbase);
  } else {
    i$ret = i$valstack[i$valstack_base];
    i$valstack_top = i$valstack_base;
    i$valstack_base = oldbase.addr;
  };
}
var _idris__123_Float_32_instance_32_of_32_Prelude_46_Classes_46_Ord0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33_compare_58_0,[oldbase]);
}
var _idris_Prelude_46_Classes_46__123_Float_32_instance_32_of_32_Prelude_46_Classes_46_Ord_44__32_method_32__60__61_0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base] == i$valstack[i$valstack_base + 1];
  if (i$valstack[i$valstack_base + 2] == 0) {
    i$ret = i$CON$0;
    i$valstack_top = i$valstack_base;
    i$valstack_base = oldbase.addr;
  } else {
    i$ret = i$CON$1;
    i$valstack_top = i$valstack_base;
    i$valstack_base = oldbase.addr;
  };
}
var _idris_Prelude_46_Classes_46__123_Float_32_instance_32_of_32_Prelude_46_Classes_46_Ord_44__32_method_32__62__61_0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base] == i$valstack[i$valstack_base + 1];
  if (i$valstack[i$valstack_base + 2] == 0) {
    i$ret = i$CON$0;
    i$valstack_top = i$valstack_base;
    i$valstack_base = oldbase.addr;
  } else {
    i$ret = i$CON$1;
    i$valstack_top = i$valstack_base;
    i$valstack_base = oldbase.addr;
  };
}
var _idris_Prelude_46_Applicative_46__123_IO_32_instance_32_of_32_Prelude_46_Applicative_46_Applicative_44__32_method_32__60__36__62_0_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$ret = new i$CON(65858,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65858,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Prelude_46_Applicative_46__123_IO_32_instance_32_of_32_Prelude_46_Applicative_46_Applicative_44__32_method_32__60__36__62_0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Applicative_46__123_IO_32_instance_32_of_32_Prelude_46_Applicative_46_Applicative_44__32_method_32__60__36__62_0_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris__123_Int_32_instance_32_of_32_Prelude_46_Classes_46_Ord0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Int_58__33_compare_58_0,[oldbase]);
}
var _idris_Prelude_46_Classes_46__123_Int_32_instance_32_of_32_Prelude_46_Classes_46_Ord_44__32_method_32__62__61_0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base] == i$valstack[i$valstack_base + 1];
  if (i$valstack[i$valstack_base + 2] == 0) {
    i$ret = i$CON$0;
    i$valstack_top = i$valstack_base;
    i$valstack_base = oldbase.addr;
  } else {
    i$ret = i$CON$1;
    i$valstack_top = i$valstack_base;
    i$valstack_base = oldbase.addr;
  };
}
var _idris__123_Main_46_collides_44__32_factor0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 4];
  i$SLIDE(7);
  i$valstack_top = i$valstack_base + 7;
  i$CALL(_idris_Main_46_collides_58_right_58_0,[oldbase]);
}
var _idris__123_Main_46_collides_44__32_left0_125_$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 1] = i$valstack[i$valstack_base + 1] + i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_base + 2] = 0.0;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33__62__61__58_0,[oldbase]);
}
var _idris__123_Main_46_collides_44__32_left0_125_$1 = function(oldbase,myoldbase){
  i$CALL(_idris__123_Main_46_collides_44__32_left0_125_$2,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base + 3];
}
var _idris__123_Main_46_collides_44__32_left0_125_$0 = function(oldbase,myoldbase){
  i$CALL(_idris__123_Main_46_collides_44__32_left0_125_$1,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base + 1],2,2);
  i$valstack[i$valstack_base + 1] = i$valstack[i$valstack_base + 2];
}
var _idris__123_Main_46_collides_44__32_left0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$CALL(_idris__123_Main_46_collides_44__32_left0_125_$0,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base],1,3);
;
}
var _idris__123_Main_46_collides_44__32_right0_125_$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33__62__61__58_0,[oldbase]);
}
var _idris__123_Main_46_collides_44__32_right0_125_$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$valstack[i$valstack_base + 3] + i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = null;
  i$valstack[i$valstack_base + 7] = null;
  i$valstack[i$valstack_base + 8] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 2];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 7;
  i$CALL(_idris__123_Main_46_collides_44__32_right0_125_$3,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_collides_58_pxr_58_0,[myoldbase]);
}
var _idris__123_Main_46_collides_44__32_right0_125_$1 = function(oldbase,myoldbase){
  i$CALL(_idris__123_Main_46_collides_44__32_right0_125_$2,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base],4,3);
  i$valstack[i$valstack_base + 4] = i$valstack[i$valstack_base + 5];
}
var _idris__123_Main_46_collides_44__32_right0_125_$0 = function(oldbase,myoldbase){
  i$CALL(_idris__123_Main_46_collides_44__32_right0_125_$1,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base + 3],4,2);
  i$valstack[i$valstack_base + 3] = i$valstack[i$valstack_base + 4];
}
var _idris__123_Main_46_collides_44__32_right0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 6;
  i$CALL(_idris__123_Main_46_collides_44__32_right0_125_$0,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base],3,3);
;
}
var _idris__123_Main_46_getInputState_44__32_getEscape0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = escape;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_Main_46_normal_44__32_random0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = Math.random();
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_Main_46_readParam_44__32_validFloatString0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_Main_46_readParam_58_validFloatString_58_0,[oldbase]);
}
var _idris__123_Main_46_run_44__32_continueGame0_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = 7;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Int_58__33__62__61__58_0,[oldbase]);
}
var _idris__123_Main_46_run_44__32_continueGame0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$CALL(_idris__123_Main_46_run_44__32_continueGame0_125_$0,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base],1,2);
  i$valstack[i$valstack_base + 1] = i$valstack[i$valstack_base + 2];
}
var _idris__123_Main_46_startGame_44__32_reallyStart0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = 0;
  i$valstack[i$valstack_base + 4] = 0;
  i$valstack[i$valstack_base + 3] = new i$CON(0,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],null,null);
  i$valstack[i$valstack_base + 4] = 2;
  i$valstack[i$valstack_base + 3] = new i$CON(2,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],null,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46_run,[oldbase]);
}
var _idris__123_Main_46_step_44__32_newBall0_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  switch(i$valstack[i$valstack_base + 2].tag){
    case 2:
      i$ret = i$CON$1;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    default:
      i$ret = i$CON$0;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
  };
}
var _idris__123_Main_46_step_44__32_newBall0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris__123_Main_46_step_44__32_newBall0_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33_compare_58_0,[myoldbase]);
}
var _idris__123_Main_46_step_44__32_newRight0_125_$0 = function(oldbase,myoldbase){
  i$ret = new i$CON(1,[i$valstack[i$valstack_base + 4]],null,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_Main_46_step_44__32_newRight0_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_base + 4] = new i$CON(0,[i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 5]],null,null);
}
var _idris__123_Main_46_step_44__32_newRight0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$CALL(_idris__123_Main_46_step_44__32_newRight0_125_$0,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base],4,2);
  i$valstack[i$valstack_base + 6] = i$CON$1;
  ;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 3];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 5;
  i$CALL(_idris__123_Main_46_step_44__32_newRight0_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_aiChasePos,[myoldbase]);
}
var _idris__123_PE_95__64__64_constructor_32_of_32_Prelude_46_Monad_46_Monad_35_Applicative_32_m_95_fd27177d0_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$ret = new i$CON(65858,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65858,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_PE_95__64__64_constructor_32_of_32_Prelude_46_Monad_46_Monad_35_Applicative_32_m_95_fd27177d0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris__123_PE_95__64__64_constructor_32_of_32_Prelude_46_Monad_46_Monad_35_Applicative_32_m_95_fd27177d0_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46__123_attractPlay0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = canvas.width;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_boundVelocity0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = -i$valstack[i$valstack_base];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_case_32_block_32_in_32_Main_46_run_44__32_continueGame0_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = 7;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Int_58__33__62__61__58_0,[oldbase]);
}
var _idris_Main_46__123_case_32_block_32_in_32_Main_46_run_44__32_continueGame0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_case_32_block_32_in_32_Main_46_run_44__32_continueGame0_125_$0,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base],1,2);
  i$valstack[i$valstack_base + 1] = i$valstack[i$valstack_base + 2];
}
var _idris_Main_46__123_case_32_block_32_in_32_attractPlay0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 2];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_Main_46_attractPlay,[oldbase]);
}
var _idris_Main_46__123_case_32_block_32_in_32_boundVelocity0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = -i$valstack[i$valstack_base];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_case_32_block_32_in_32_drawReport0_125_$5 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
  i$valstack[i$valstack_base + 9] = 10;
  i$valstack[i$valstack_base + 8] = i$valstack[i$valstack_base + 8] - i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_base + 8] = new i$CON(0,[i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 2]],null,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 8];
  i$SLIDE(5);
  i$valstack_top = i$valstack_base + 5;
  i$CALL(_idris_Main_46_centerText,[oldbase]);
}
var _idris_Main_46__123_case_32_block_32_in_32_drawReport0_125_$4 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
  i$valstack[i$valstack_base + 9] = 2;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 9];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_case_32_block_32_in_32_drawReport0_125_$5,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46__123_case_32_block_32_in_32_drawReport0_125_$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_case_32_block_32_in_32_drawReport0_125_$4,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46__123_case_32_block_32_in_32_drawReport0_125_$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$valstack[i$valstack_base + 8] = 10;
  i$valstack[i$valstack_base + 7] = i$valstack[i$valstack_base + 7] + i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_base + 8] = 0;
  i$valstack[i$valstack_base + 7] = new i$CON(0,[i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8]],null,null);
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46__123_case_32_block_32_in_32_drawReport0_125_$3,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Integral_36_Int_58__33_div_58_0,[myoldbase]);
}
var _idris_Main_46__123_case_32_block_32_in_32_drawReport0_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$valstack[i$valstack_base + 8] = 2;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 8];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_case_32_block_32_in_32_drawReport0_125_$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46__123_case_32_block_32_in_32_drawReport0_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_case_32_block_32_in_32_drawReport0_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46__123_case_32_block_32_in_32_drawReport0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 6;
  i$valstack[i$valstack_base + 4] = String(i$valstack[i$valstack_base]);
  i$valstack[i$valstack_base + 5] = 120;
  i$valstack[i$valstack_base + 6] = "Courier";
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46__123_case_32_block_32_in_32_drawReport0_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Integral_36_Int_58__33_div_58_0,[myoldbase]);
}
var _idris_Main_46__123_case_32_block_32_in_32_play0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 2];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_Main_46_play,[oldbase]);
}
var _idris_Main_46__123_case_32_block_32_in_32_run0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 2];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Main_46_run_58_continueGame_58_1,[oldbase]);
}
var _idris_Main_46__123_centerText0_125_$5 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
  i$valstack[i$valstack_base + 8] = i$valstack[i$valstack_base + 3] + i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_base + 8] = i$valstack[i$valstack_base + 8] + i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_base + 7] = new i$CON(0,[i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8]],null,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 7];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46_fillText,[oldbase]);
}
var _idris_Main_46__123_centerText0_125_$4 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
  i$valstack[i$valstack_base + 9] = 2;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 9];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_centerText0_125_$5,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46__123_centerText0_125_$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
  i$valstack[i$valstack_base + 9] = i$valstack[i$valstack_base + 4] - i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 9];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_centerText0_125_$4,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46__123_centerText0_125_$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$valstack[i$valstack_base + 7] = i$valstack[i$valstack_base + 1] + i$valstack[i$valstack_base + 7];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46__123_centerText0_125_$3,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Integral_36_Int_58__33_div_58_0,[myoldbase]);
}
var _idris_Main_46__123_centerText0_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$valstack[i$valstack_base + 8] = 2;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 8];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_centerText0_125_$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46__123_centerText0_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$valstack[i$valstack_base + 8] = i$valstack[i$valstack_base + 2] - i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 8];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_centerText0_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46__123_centerText0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46__123_centerText0_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Integral_36_Int_58__33_div_58_0,[myoldbase]);
}
var _idris_Main_46__123_circle0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = context.beginPath();
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_clear0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = context.fillRect(0, 0, canvas.width, canvas.height);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_demoSetTimeout0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = demoProc = i$valstack[i$valstack_base];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_draw0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = canvas.height;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_drawReport0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = canvas.width;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_fillText0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = context.fillText(i$valstack[i$valstack_base], i$valstack[i$valstack_base + 1], i$valstack[i$valstack_base + 2]);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_getInputState0_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_base + 3] = new i$CON(0,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],null,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_Main_46__123_getInputState0_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_Main_46__123_getInputState0_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_Main_46__123_getInputState0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46__123_getInputState0_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_PE_95__64__64_constructor_32_of_32_Prelude_46_Monad_46_Monad_35_Applicative_32_m_95_fd27177d,[myoldbase]);
}
var _idris_Main_46__123_getParams0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(0,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],null,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_instructions0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = canvas.width;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_io_95_bind0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_Prelude_46_Char_46__123_isDigit0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 1] = "9";
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Char_58__33__60__61__58_0,[oldbase]);
}
var _idris_Main_46__123_killDemo0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = demoProc;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_newGame0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = canvas.width;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_normal0_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_base + 4] = i$valstack[i$valstack_base] + i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base + 5] = 3.0;
  i$valstack[i$valstack_base + 5] = i$valstack[i$valstack_base + 2] / i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_base + 4] = i$valstack[i$valstack_base + 4] + i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_Main_46__123_normal0_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 5];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_Main_46__123_normal0_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_Main_46__123_normal0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46__123_normal0_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_PE_95__64__64_constructor_32_of_32_Prelude_46_Monad_46_Monad_35_Applicative_32_m_95_fd27177d,[myoldbase]);
}
var _idris_Main_46__123_play0_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$ret = new i$CON(65858,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65858,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_play0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_play0_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46__123_putParams0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 2] = "vy0Factor";
  i$ret = new i$CON(65638,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65638,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_randomParams0_125_$6 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 19] = i$ret;
  i$valstack[i$valstack_base + 20] = 1.5;
  i$valstack[i$valstack_base + 20] = i$valstack[i$valstack_base + 11] * i$valstack[i$valstack_base + 20];
  i$valstack[i$valstack_base + 20] = i$valstack[i$valstack_base + 10] + i$valstack[i$valstack_base + 20];
  i$valstack[i$valstack_base + 21] = i$valstack[i$valstack_base + 12] + i$valstack[i$valstack_base + 13];
  i$valstack[i$valstack_base + 15] = new i$CON(0,[i$valstack[i$valstack_base + 15],i$valstack[i$valstack_base + 16],i$valstack[i$valstack_base + 17],i$valstack[i$valstack_base + 18],i$valstack[i$valstack_base + 19],i$valstack[i$valstack_base + 20],i$valstack[i$valstack_base + 21]],null,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 14];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 15];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_Main_46__123_randomParams0_125_$5 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 18] = i$ret;
  i$valstack[i$valstack_base + 19] = 1.0;
  i$valstack[i$valstack_base + 20] = 0.1;
  i$valstack[i$valstack_base + 20] = i$valstack[i$valstack_base + 9] * i$valstack[i$valstack_base + 20];
  i$valstack[i$valstack_base + 20] = i$valstack[i$valstack_base + 8] + i$valstack[i$valstack_base + 20];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 19];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 20];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_randomParams0_125_$6,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33_max_58_0,[myoldbase]);
}
var _idris_Main_46__123_randomParams0_125_$4 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 19] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 18];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 19];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_randomParams0_125_$5,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33_max_58_0,[myoldbase]);
}
var _idris_Main_46__123_randomParams0_125_$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 17] = i$ret;
  i$valstack[i$valstack_base + 18] = 3.0;
  i$valstack[i$valstack_base + 19] = 8.0;
  i$valstack[i$valstack_base + 19] = i$valstack[i$valstack_base + 7] * i$valstack[i$valstack_base + 19];
  i$valstack[i$valstack_base + 19] = i$valstack[i$valstack_base + 6] + i$valstack[i$valstack_base + 19];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 19];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Main_46__123_randomParams0_125_$4,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Num_36_Float_58__33_abs_58_0,[myoldbase]);
}
var _idris_Main_46__123_randomParams0_125_$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 15] = i$ret;
  i$valstack[i$valstack_base + 16] = 2.0;
  i$valstack[i$valstack_base + 16] = i$valstack[i$valstack_base + 3] * i$valstack[i$valstack_base + 16];
  i$valstack[i$valstack_base + 16] = i$valstack[i$valstack_base + 2] + i$valstack[i$valstack_base + 16];
  i$valstack[i$valstack_base + 17] = 10.0;
  i$valstack[i$valstack_base + 18] = 15.0;
  i$valstack[i$valstack_base + 18] = i$valstack[i$valstack_base + 5] * i$valstack[i$valstack_base + 18];
  i$valstack[i$valstack_base + 18] = i$valstack[i$valstack_base + 4] + i$valstack[i$valstack_base + 18];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 17];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 18];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_randomParams0_125_$3,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33_max_58_0,[myoldbase]);
}
var _idris_Main_46__123_randomParams0_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 14] = i$ret;
  i$valstack[i$valstack_base + 15] = 4.0;
  i$valstack[i$valstack_base + 16] = 3.0;
  i$valstack[i$valstack_base + 16] = i$valstack[i$valstack_base + 1] * i$valstack[i$valstack_base + 16];
  i$valstack[i$valstack_base + 16] = i$valstack[i$valstack_base] + i$valstack[i$valstack_base + 16];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 15];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 16];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_randomParams0_125_$2,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33_max_58_0,[myoldbase]);
}
var _idris_Main_46__123_randomParams0_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 16] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 14];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 15];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 16];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_Main_46__123_randomParams0_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_Main_46__123_randomParams0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 8;
  i$valstack[i$valstack_base + 14] = null;
  i$valstack[i$valstack_base + 15] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46__123_randomParams0_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_PE_95__64__64_constructor_32_of_32_Prelude_46_Monad_46_Monad_35_Applicative_32_m_95_fd27177d,[myoldbase]);
}
var _idris_Main_46__123_readParam0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = document.params[i$valstack[i$valstack_base]].value;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_rect0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = context.fillRect(i$valstack[i$valstack_base], i$valstack[i$valstack_base + 1], i$valstack[i$valstack_base + 2], i$valstack[i$valstack_base + 3]);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_run0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = 2;
  i$valstack[i$valstack_base + 3] = 3;
  i$valstack[i$valstack_base + 2] = new i$CON(5,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],null,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46_run,[oldbase]);
}
var _idris__123_runMain0_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_EVAL0_125_,[oldbase]);
}
var _idris__123_runMain0_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base] = i$ret;
  i$valstack[i$valstack_base + 1] = i$CON$0;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris__123_runMain0_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris__123_runMain0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris__123_runMain0_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_main,[myoldbase]);
}
var _idris_Main_46__123_showMenu0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = canvas.width;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_startGame0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46_startGame_58_reallyStart_58_0,[oldbase]);
}
var _idris_Main_46__123_step0_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = new i$CON(0,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 6]],null,null);
  i$ret = new i$CON(1,[i$valstack[i$valstack_base + 7]],null,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_step0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  switch(i$valstack[i$valstack_base].tag){
    case 0:
      i$valstack[i$valstack_base + 7] = new i$CON(0,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],null,null);
      i$CALL(_idris_Main_46__123_step0_125_$0,[oldbase,myoldbase]);
      i$PROJECT(i$valstack[i$valstack_base + 4],8,2);
      i$valstack[i$valstack_base + 8] = new i$CON(0,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 9]],null,null);
      break;
    case 1:
      i$valstack[i$valstack_base + 7] = i$CON$2;
      i$ret = new i$CON(0,[i$valstack[i$valstack_base + 7]],null,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_Main_46__123_toggleParamsEnabled0_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$ret = new i$CON(65858,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65858,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_toggleParamsEnabled0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_toggleParamsEnabled0_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris__123_Char_32_instance_32_of_32_Prelude_46_Classes_46_Ord1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65860,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65860,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_Float_32_instance_32_of_32_Prelude_46_Classes_46_Ord1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65866,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65866,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Prelude_46_Applicative_46__123_IO_32_instance_32_of_32_Prelude_46_Applicative_46_Applicative_44__32_method_32__60__36__62_1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = new i$CON(65852,[i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65852,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_Int_32_instance_32_of_32_Prelude_46_Classes_46_Ord1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65872,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65872,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_Main_46_collides_44__32_left1_125_$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$valstack[i$valstack_base + 3] + i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33__60__61__58_0,[oldbase]);
}
var _idris__123_Main_46_collides_44__32_left1_125_$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base + 2] - i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_base + 3] = 0.0;
  i$CALL(_idris__123_Main_46_collides_44__32_left1_125_$3,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base + 1],4,7);
  i$valstack[i$valstack_base + 4] = i$valstack[i$valstack_base + 7];
}
var _idris__123_Main_46_collides_44__32_left1_125_$1 = function(oldbase,myoldbase){
  i$CALL(_idris__123_Main_46_collides_44__32_left1_125_$2,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base],3,3);
  i$valstack[i$valstack_base + 3] = i$valstack[i$valstack_base + 4];
}
var _idris__123_Main_46_collides_44__32_left1_125_$0 = function(oldbase,myoldbase){
  i$CALL(_idris__123_Main_46_collides_44__32_left1_125_$1,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base + 2],3,2);
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base + 3];
}
var _idris__123_Main_46_collides_44__32_left1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 6;
  i$CALL(_idris__123_Main_46_collides_44__32_left1_125_$0,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base],2,3);
;
}
var _idris__123_Main_46_collides_44__32_right1_125_$4 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$valstack[i$valstack_base + 4] + i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33__60__61__58_0,[oldbase]);
}
var _idris__123_Main_46_collides_44__32_right1_125_$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$CALL(_idris__123_Main_46_collides_44__32_right1_125_$4,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base + 1],5,7);
  i$valstack[i$valstack_base + 5] = i$valstack[i$valstack_base + 8];
}
var _idris__123_Main_46_collides_44__32_right1_125_$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$valstack[i$valstack_base + 3] - i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = null;
  i$valstack[i$valstack_base + 7] = null;
  i$valstack[i$valstack_base + 8] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 2];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 7;
  i$CALL(_idris__123_Main_46_collides_44__32_right1_125_$3,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_collides_58_pxr_58_0,[myoldbase]);
}
var _idris__123_Main_46_collides_44__32_right1_125_$1 = function(oldbase,myoldbase){
  i$CALL(_idris__123_Main_46_collides_44__32_right1_125_$2,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base],4,3);
  i$valstack[i$valstack_base + 4] = i$valstack[i$valstack_base + 5];
}
var _idris__123_Main_46_collides_44__32_right1_125_$0 = function(oldbase,myoldbase){
  i$CALL(_idris__123_Main_46_collides_44__32_right1_125_$1,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base + 3],4,2);
  i$valstack[i$valstack_base + 3] = i$valstack[i$valstack_base + 4];
}
var _idris__123_Main_46_collides_44__32_right1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 6;
  i$CALL(_idris__123_Main_46_collides_44__32_right1_125_$0,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base],3,3);
;
}
var _idris__123_Main_46_getInputState_44__32_getEscape1_125_$0 = function(oldbase,myoldbase){
  i$ret = new i$CON(65858,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65858,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_Main_46_getInputState_44__32_getEscape1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = 1;
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base] == i$valstack[i$valstack_base + 2];
  i$CALL(_idris__123_Main_46_getInputState_44__32_getEscape1_125_$0,[oldbase,myoldbase]);
  if (i$valstack[i$valstack_base + 2] == 0) {
    i$valstack[i$valstack_base + 2] = i$CON$0;
  } else {
    i$valstack[i$valstack_base + 2] = i$CON$1;
  };
}
var _idris__123_Main_46_normal_44__32_random1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = 2.0;
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base] * i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_base + 3] = 1.0;
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base + 2] - i$valstack[i$valstack_base + 3];
  i$ret = new i$CON(65858,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65858,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_Main_46_readParam_44__32_validFloatString1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base] == i$valstack[i$valstack_base + 1];
  if (i$valstack[i$valstack_base + 2] == 0) {
    i$ret = i$CON$0;
    i$valstack_top = i$valstack_base;
    i$valstack_base = oldbase.addr;
  } else {
    i$ret = i$CON$1;
    i$valstack_top = i$valstack_base;
    i$valstack_base = oldbase.addr;
  };
}
var _idris__123_Main_46_run_44__32_continueGame1_125_$2 = function(oldbase,myoldbase){
  switch(i$valstack[i$valstack_base + 4].tag){
    case 0:
      i$valstack[i$valstack_base + 5] = null;
      i$valstack[i$valstack_base + 6] = 2;
      i$valstack[i$valstack_base + 6] = new i$CON(2,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 6]],null,null);
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 6];
      i$SLIDE(2);
      i$valstack_top = i$valstack_base + 2;
      i$CALL(_idris_Main_46_run,[oldbase]);
      break;
    case 1:
      i$valstack[i$valstack_base + 5] = null;
      i$valstack[i$valstack_base + 6] = i$CON$3;
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 6];
      i$SLIDE(2);
      i$valstack_top = i$valstack_base + 2;
      i$CALL(_idris_Main_46_run,[oldbase]);
      break;
  };
}
var _idris__123_Main_46_run_44__32_continueGame1_125_$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
}
var _idris__123_Main_46_run_44__32_continueGame1_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$CALL(_idris__123_Main_46_run_44__32_continueGame1_125_$2,[oldbase,myoldbase]);
  switch(i$valstack[i$valstack_base + 4].tag){
    case 0:
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 1;
      i$CALL(_idris__123_Main_46_run_44__32_continueGame1_125_$3,[oldbase,myoldbase]);
      i$CALL(_idris__123_Main_46_run_44__32_continueGame0_125_,[myoldbase]);
      break;
    case 1:
      i$valstack[i$valstack_base + 4] = i$CON$1;
      break;
  };
}
var _idris__123_Main_46_run_44__32_continueGame1_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = 7;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris__123_Main_46_run_44__32_continueGame1_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Int_58__33__62__61__58_0,[myoldbase]);
}
var _idris__123_Main_46_run_44__32_continueGame1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$CALL(_idris__123_Main_46_run_44__32_continueGame1_125_$0,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base],4,2);
;
}
var _idris__123_Main_46_startGame_44__32_reallyStart1_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = new i$CON(65890,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65890,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_Main_46_startGame_44__32_reallyStart1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris__123_Main_46_startGame_44__32_reallyStart1_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_newGame,[myoldbase]);
}
var _idris__123_Main_46_step_44__32_newRight1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65898,[i$valstack[i$valstack_base + 12],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 9]],_idris__123_APPLY0_125_$65898,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_PE_95__64__64_constructor_32_of_32_Prelude_46_Monad_46_Monad_35_Applicative_32_m_95_fd27177d1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = new i$CON(65899,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65899,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_attractPlay1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = canvas.height;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_boundVelocity1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Num_36_Float_58__33_abs_58_0,[oldbase]);
}
var _idris_Main_46__123_case_32_block_32_in_32_boundVelocity1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Num_36_Float_58__33_abs_58_0,[oldbase]);
}
var _idris_Main_46__123_centerText1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 9;
  i$valstack[i$valstack_base + 7] = null;
  i$valstack[i$valstack_base + 8] = null;
  i$valstack[i$valstack_base + 9] = null;
  i$valstack[i$valstack_base + 10] = null;
  i$valstack[i$valstack_base + 11] = null;
  i$valstack[i$valstack_base + 12] = null;
  i$valstack[i$valstack_base + 13] = null;
  i$valstack[i$valstack_base + 14] = null;
  i$valstack[i$valstack_base + 15] = null;
  i$valstack[i$valstack_base + 9] = new i$CON(65628,[i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11],i$valstack[i$valstack_base + 12],i$valstack[i$valstack_base + 13],i$valstack[i$valstack_base + 14],i$valstack[i$valstack_base + 15],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65628,null);
  i$valstack[i$valstack_base + 10] = new i$CON(65659,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65659,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_circle1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = context.arc(i$valstack[i$valstack_base], i$valstack[i$valstack_base + 1], i$valstack[i$valstack_base + 2], 0, 2*Math.PI, false);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_clear1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65666;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_demoSetTimeout1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65668,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65668,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_draw1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 2] = 5.0;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46_circle,[oldbase]);
}
var _idris_Main_46__123_drawReport1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = canvas.height;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_getInputState1_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_base + 4] = new i$CON(65700,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65700,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_getInputState1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46__123_getInputState1_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_getInputState_58_getEscape_58_0,[myoldbase]);
}
var _idris_Main_46__123_getParams1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65702,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65702,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_instructions1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = canvas.height;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_io_95_bind1_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris__123_io_95_bind1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 5];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 6;
  i$CALL(_idris__123_io_95_bind1_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris__123_io_95_bind0_125_,[myoldbase]);
}
var _idris_Main_46__123_killDemo1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = clearTimeout(i$valstack[i$valstack_base]);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_newGame1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = canvas.height;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_normal1_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = new i$CON(65733,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65733,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_normal1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46__123_normal1_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_normal_58_random_58_0,[myoldbase]);
}
var _idris_Main_46__123_play1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = new i$CON(65736,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65736,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_putParams1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = "vx0Factor";
  i$valstack[i$valstack_base + 5] = new i$CON(65638,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65638,null);
  i$valstack[i$valstack_base + 6] = new i$CON(65771,[i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65771,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_randomParams1_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 15] = i$ret;
  i$valstack[i$valstack_base + 16] = new i$CON(65777,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 12],i$valstack[i$valstack_base + 11]],_idris__123_APPLY0_125_$65777,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 13],i$valstack[i$valstack_base + 14],i$valstack[i$valstack_base + 15],i$valstack[i$valstack_base + 16]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_randomParams1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 13] = null;
  i$valstack[i$valstack_base + 14] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46__123_randomParams1_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_normal,[myoldbase]);
}
var _idris_Main_46__123_readParam1_125_$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_Main_46__123_readParam1_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 1] = i$ret;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_readParam1_125_$2,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_readParam_58_readNumber_58_0,[myoldbase]);
}
var _idris_Main_46__123_readParam1_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 3];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_Main_46__123_readParam1_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_Main_46__123_readParam1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46__123_readParam1_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_PE_95__64__64_constructor_32_of_32_Prelude_46_Monad_46_Monad_35_Applicative_32_m_95_fd27177d,[myoldbase]);
}
var _idris_Main_46__123_run1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = i$CON$65637;
  i$ret = new i$CON(65632,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65632,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_showMenu1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = canvas.height;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_startGame1_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_base + 4] = new i$CON(65835,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65835,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_startGame1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = i$CON$0;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Main_46__123_startGame1_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_toggleParamsEnabled,[myoldbase]);
}
var _idris_Main_46__123_step1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65838,[i$valstack[i$valstack_base + 18],i$valstack[i$valstack_base + 20],i$valstack[i$valstack_base + 15],i$valstack[i$valstack_base + 16],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 17]],_idris__123_APPLY0_125_$65838,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_toggleParamsEnabled1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = new i$CON(65840,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65840,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_Char_32_instance_32_of_32_Prelude_46_Classes_46_Ord2_125_$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  switch(i$valstack[i$valstack_base + 2].tag){
    case 0:
      i$ret = i$CON$1;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    default:
      i$ret = i$CON$0;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
  };
}
var _idris__123_Char_32_instance_32_of_32_Prelude_46_Classes_46_Ord2_125_$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris__123_Char_32_instance_32_of_32_Prelude_46_Classes_46_Ord2_125_$3,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris__123_Char_32_instance_32_of_32_Prelude_46_Classes_46_Ord2_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris__123_Char_32_instance_32_of_32_Prelude_46_Classes_46_Ord2_125_$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris__123_Char_32_instance_32_of_32_Prelude_46_Classes_46_Ord2_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris__123_Char_32_instance_32_of_32_Prelude_46_Classes_46_Ord2_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Classes_46_compare,[myoldbase]);
}
var _idris__123_Char_32_instance_32_of_32_Prelude_46_Classes_46_Ord2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris__123_Char_32_instance_32_of_32_Prelude_46_Classes_46_Ord2_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris__64_Prelude_46_Classes_46_Ord_36_Char,[myoldbase]);
}
var _idris__123_Float_32_instance_32_of_32_Prelude_46_Classes_46_Ord2_125_$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  switch(i$valstack[i$valstack_base + 2].tag){
    case 0:
      i$ret = i$CON$1;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    default:
      i$ret = i$CON$0;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
  };
}
var _idris__123_Float_32_instance_32_of_32_Prelude_46_Classes_46_Ord2_125_$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris__123_Float_32_instance_32_of_32_Prelude_46_Classes_46_Ord2_125_$3,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris__123_Float_32_instance_32_of_32_Prelude_46_Classes_46_Ord2_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris__123_Float_32_instance_32_of_32_Prelude_46_Classes_46_Ord2_125_$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris__123_Float_32_instance_32_of_32_Prelude_46_Classes_46_Ord2_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris__123_Float_32_instance_32_of_32_Prelude_46_Classes_46_Ord2_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Classes_46_compare,[myoldbase]);
}
var _idris__123_Float_32_instance_32_of_32_Prelude_46_Classes_46_Ord2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris__123_Float_32_instance_32_of_32_Prelude_46_Classes_46_Ord2_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris__64_Prelude_46_Classes_46_Ord_36_Float,[myoldbase]);
}
var _idris__123_Int_32_instance_32_of_32_Prelude_46_Classes_46_Ord2_125_$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  switch(i$valstack[i$valstack_base + 2].tag){
    case 0:
      i$ret = i$CON$1;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    default:
      i$ret = i$CON$0;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
  };
}
var _idris__123_Int_32_instance_32_of_32_Prelude_46_Classes_46_Ord2_125_$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris__123_Int_32_instance_32_of_32_Prelude_46_Classes_46_Ord2_125_$3,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris__123_Int_32_instance_32_of_32_Prelude_46_Classes_46_Ord2_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris__123_Int_32_instance_32_of_32_Prelude_46_Classes_46_Ord2_125_$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris__123_Int_32_instance_32_of_32_Prelude_46_Classes_46_Ord2_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris__123_Int_32_instance_32_of_32_Prelude_46_Classes_46_Ord2_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Classes_46_compare,[myoldbase]);
}
var _idris__123_Int_32_instance_32_of_32_Prelude_46_Classes_46_Ord2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris__123_Int_32_instance_32_of_32_Prelude_46_Classes_46_Ord2_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris__64_Prelude_46_Classes_46_Ord_36_Int,[myoldbase]);
}
var _idris__123_Main_46_collides_44__32_left2_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = 2.0;
  i$valstack[i$valstack_base + 4] = i$valstack[i$valstack_base + 2] / i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_base + 4] = i$valstack[i$valstack_base + 1] - i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33__62__61__58_0,[oldbase]);
}
var _idris__123_Main_46_collides_44__32_left2_125_$0 = function(oldbase,myoldbase){
  i$CALL(_idris__123_Main_46_collides_44__32_left2_125_$1,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base + 3],4,2);
  i$valstack[i$valstack_base + 3] = i$valstack[i$valstack_base + 5];
}
var _idris__123_Main_46_collides_44__32_left2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$CALL(_idris__123_Main_46_collides_44__32_left2_125_$0,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base],3,3);
;
}
var _idris__123_Main_46_collides_44__32_right2_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = 2.0;
  i$valstack[i$valstack_base + 4] = i$valstack[i$valstack_base + 2] / i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_base + 4] = i$valstack[i$valstack_base + 1] - i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33__62__61__58_0,[oldbase]);
}
var _idris__123_Main_46_collides_44__32_right2_125_$0 = function(oldbase,myoldbase){
  i$CALL(_idris__123_Main_46_collides_44__32_right2_125_$1,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base + 3],4,2);
  i$valstack[i$valstack_base + 3] = i$valstack[i$valstack_base + 5];
}
var _idris__123_Main_46_collides_44__32_right2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$CALL(_idris__123_Main_46_collides_44__32_right2_125_$0,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base],3,3);
;
}
var _idris__123_Main_46_getInputState_44__32_getEscape2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 1] = 0;
  i$ret = escape = i$valstack[i$valstack_base + 1];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_Main_46_readParam_44__32_validFloatString2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65885,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65885,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_Main_46_run_44__32_continueGame2_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 1] = i$ret;
  i$valstack[i$valstack_base + 2] = i$CON$0;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris__123_Main_46_run_44__32_continueGame2_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 3];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris__123_Main_46_run_44__32_continueGame2_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris__123_Main_46_run_44__32_continueGame2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris__123_Main_46_run_44__32_continueGame2_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_PE_95__64__64_constructor_32_of_32_Prelude_46_Monad_46_Monad_35_Applicative_32_m_95_fd27177d,[myoldbase]);
}
var _idris__123_Main_46_startGame_44__32_reallyStart2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = i$CON$3;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46_run,[oldbase]);
}
var _idris__123_PE_95__64__64_constructor_32_of_32_Prelude_46_Monad_46_Monad_35_Applicative_32_m_95_fd27177d2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65901,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65901,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_attractPlay2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 2];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_Main_46_attractPlay,[oldbase]);
}
var _idris_Main_46__123_boundVelocity2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Num_36_Float_58__33_abs_58_0,[oldbase]);
}
var _idris_Main_46__123_case_32_block_32_in_32_boundVelocity2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Num_36_Float_58__33_abs_58_0,[oldbase]);
}
var _idris_Main_46__123_circle2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = context.fill();
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_demoSetTimeout2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 5] = new i$CON(65636,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65636,null);
  i$valstack[i$valstack_base + 6] = i$CON$65669;
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_draw2_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
  i$valstack[i$valstack_base + 9] = new i$CON(65672,[i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65672,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_draw2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 6] = null;
  i$valstack[i$valstack_base + 7] = null;
  i$valstack[i$valstack_base + 8] = i$valstack[i$valstack_base] - i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base + 9] = 2.0;
  i$valstack[i$valstack_base + 9] = i$valstack[i$valstack_base + 3] / i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_base + 9] = i$valstack[i$valstack_base + 2] - i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_base + 8] = new i$CON(0,[i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9]],null,null);
  i$valstack[i$valstack_base + 9] = new i$CON(0,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 3]],null,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 9];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_draw2_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_rect,[myoldbase]);
}
var _idris_Main_46__123_drawReport2_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$ret = new i$CON(65858,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65858,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_drawReport2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_drawReport2_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46__123_getParams2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65707,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65707,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_instructions2_125_$5 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_base + 6] = new i$CON(0,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 6]],null,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
  i$SLIDE(5);
  i$valstack_top = i$valstack_base + 5;
  i$CALL(_idris_Main_46_centerText,[oldbase]);
}
var _idris_Main_46__123_instructions2_125_$4 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_base + 7] = 4;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 7];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_instructions2_125_$5,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46__123_instructions2_125_$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_instructions2_125_$4,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46__123_instructions2_125_$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_base + 5] = new i$CON(0,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],null,null);
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46__123_instructions2_125_$3,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Integral_36_Int_58__33_div_58_0,[myoldbase]);
}
var _idris_Main_46__123_instructions2_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_base + 7] = 4;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 7];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_instructions2_125_$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46__123_instructions2_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_base + 7] = 3;
  i$valstack[i$valstack_base + 7] = i$valstack[i$valstack_base + 7] * i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 7];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_instructions2_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46__123_instructions2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 6;
  i$valstack[i$valstack_base + 2] = "Set the parameters and click here to start.";
  i$valstack[i$valstack_base + 3] = 12;
  i$valstack[i$valstack_base + 4] = "Lucida Console";
  i$valstack[i$valstack_base + 5] = 0;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46__123_instructions2_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Integral_36_Int_58__33_div_58_0,[myoldbase]);
}
var _idris__123_io_95_bind2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65910,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65910,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_killDemo2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65721,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65721,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_newGame2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = Math.random() * 2 * Math.PI;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_normal2_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_base + 4] = new i$CON(65734,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65734,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_normal2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46__123_normal2_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_normal_58_random_58_0,[myoldbase]);
}
var _idris_Main_46__123_play2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65747,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65747,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_putParams2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = "accelFactor";
  i$valstack[i$valstack_base + 6] = new i$CON(65638,[i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65638,null);
  i$valstack[i$valstack_base + 7] = new i$CON(65772,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65772,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_randomParams2_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 14] = i$ret;
  i$valstack[i$valstack_base + 15] = new i$CON(65782,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 11],i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10]],_idris__123_APPLY0_125_$65782,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 12],i$valstack[i$valstack_base + 13],i$valstack[i$valstack_base + 14],i$valstack[i$valstack_base + 15]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_randomParams2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 12] = null;
  i$valstack[i$valstack_base + 13] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46__123_randomParams2_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_normal,[myoldbase]);
}
var _idris_Main_46__123_run2_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_base + 4] = i$CON$65805;
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_run2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46__123_run2_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_showMenu,[myoldbase]);
}
var _idris_Main_46__123_showMenu2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$SLIDE(0);
  i$valstack_top = i$valstack_base;
  i$CALL(_idris_Main_46_instructions,[oldbase]);
}
var _idris_Main_46__123_startGame2_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_base + 4] = i$CON$65836;
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_startGame2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46__123_startGame2_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_getParams,[myoldbase]);
}
var _idris_Main_46__123_step2_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 23] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 23];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 22];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_Main_46__123_step2_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 21] = i$ret;
  switch(i$valstack[i$valstack_base + 21].tag){
    case 0:
      i$valstack[i$valstack_base + 22] = i$valstack[i$valstack_base + 21].args[0];
      i$ret = new i$CON(0,[i$valstack[i$valstack_base + 22]],null,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    case 1:
      i$valstack[i$valstack_base + 22] = i$valstack[i$valstack_base + 21].args[0];
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 11];
      i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 12];
      i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 13];
      i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 14];
      i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 9];
      i$valstack[i$valstack_top + 7] = i$valstack[i$valstack_base + 10];
      i$valstack[i$valstack_top + 8] = i$valstack[i$valstack_base + 15];
      i$valstack[i$valstack_top + 9] = i$valstack[i$valstack_base + 4];
      i$valstack[i$valstack_top + 10] = i$valstack[i$valstack_base + 16];
      i$valstack[i$valstack_top + 11] = i$valstack[i$valstack_base + 2];
      i$valstack[i$valstack_top + 12] = i$valstack[i$valstack_base + 3];
      i$valstack[i$valstack_top + 13] = i$valstack[i$valstack_base + 5];
      i$valstack[i$valstack_top + 14] = i$valstack[i$valstack_base + 6];
      i$valstack[i$valstack_top + 15] = i$valstack[i$valstack_base + 7];
      i$valstack[i$valstack_top + 16] = i$valstack[i$valstack_base + 8];
      i$valstack[i$valstack_top + 17] = i$valstack[i$valstack_base + 17];
      i$valstack[i$valstack_top + 18] = i$valstack[i$valstack_base + 18];
      i$valstack[i$valstack_top + 19] = i$valstack[i$valstack_base + 19];
      i$valstack[i$valstack_top + 20] = i$valstack[i$valstack_base + 20];
      i$valstack[i$valstack_top + 21] = i$valstack[i$valstack_base + 22];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 22;
      i$CALL(_idris_Main_46__123_step2_125_$1,[oldbase,myoldbase]);
      i$CALL(_idris_Main_46__123_step1_125_,[myoldbase]);
      break;
  };
}
var _idris_Main_46__123_step2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 21] = null;
  i$valstack[i$valstack_base + 22] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 21];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 22];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 7] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 8] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 9] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 10] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 11] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 12] = i$valstack[i$valstack_base + 10];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 13;
  i$CALL(_idris_Main_46__123_step2_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_step_58_newRight_58_0,[myoldbase]);
}
var _idris_Main_46__123_toggleParamsEnabled2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65842,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65842,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_Char_32_instance_32_of_32_Prelude_46_Classes_46_Ord3_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65862,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65862,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_Float_32_instance_32_of_32_Prelude_46_Classes_46_Ord3_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65868,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65868,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_Int_32_instance_32_of_32_Prelude_46_Classes_46_Ord3_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65874,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65874,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_Main_46_getInputState_44__32_getEscape3_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris__123_Main_46_getInputState_44__32_getEscape3_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris__123_Main_46_getInputState_44__32_getEscape3_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris__123_Main_46_getInputState_44__32_getEscape3_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris__123_Main_46_getInputState_44__32_getEscape3_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_PE_95__64__64_constructor_32_of_32_Prelude_46_Monad_46_Monad_35_Applicative_32_m_95_fd27177d,[myoldbase]);
}
var _idris__123_Main_46_readParam_44__32_validFloatString3_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_Main_46_readParam_58_validFloatString_58_0,[oldbase]);
}
var _idris__123_Main_46_run_44__32_continueGame3_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 6;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = null;
  i$valstack[i$valstack_base + 7] = new i$CON(65887,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65887,null);
  i$valstack[i$valstack_base + 8] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_base + 9] = 500.0;
  i$valstack[i$valstack_base + 8] = i$valstack[i$valstack_base + 8] * i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_base + 6] = new i$CON(65636,[i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8]],_idris__123_APPLY0_125_$65636,null);
  i$valstack[i$valstack_base + 7] = i$CON$65888;
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_Main_46_startGame_44__32_reallyStart3_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 1] = i$ret;
  i$valstack[i$valstack_base + 2] = i$CON$0;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris__123_Main_46_startGame_44__32_reallyStart3_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 3];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris__123_Main_46_startGame_44__32_reallyStart3_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris__123_Main_46_startGame_44__32_reallyStart3_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris__123_Main_46_startGame_44__32_reallyStart3_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_PE_95__64__64_constructor_32_of_32_Prelude_46_Monad_46_Monad_35_Applicative_32_m_95_fd27177d,[myoldbase]);
}
var _idris__123_PE_95__64__64_constructor_32_of_32_Prelude_46_Monad_46_Monad_35_Applicative_32_m_95_fd27177d3_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65902;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_attractPlay3_125_$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  switch(i$valstack[i$valstack_base + 7].tag){
    case 0:
      i$valstack[i$valstack_base + 8] = i$valstack[i$valstack_base + 7].args[0];
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 8];
      i$SLIDE(2);
      i$valstack_top = i$valstack_base + 2;
      i$CALL(_idris__123_APPLY0_125_,[oldbase]);
      break;
    case 1:
      i$valstack[i$valstack_base + 8] = i$valstack[i$valstack_base + 7].args[0];
      i$valstack[i$valstack_base + 9] = null;
      i$valstack[i$valstack_base + 10] = new i$CON(65641,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65641,null);
      i$valstack[i$valstack_base + 11] = 16.666666666666668;
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 9];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 10];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 11];
      i$SLIDE(3);
      i$valstack_top = i$valstack_base + 3;
      i$CALL(_idris_Main_46_demoSetTimeout,[oldbase]);
      break;
  };
}
var _idris_Main_46__123_attractPlay3_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = 1.0;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 4;
  i$CALL(_idris_Main_46__123_attractPlay3_125_$2,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_step,[myoldbase]);
}
var _idris_Main_46__123_attractPlay3_125_$4 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
  i$valstack[i$valstack_base + 6] = new i$CON(0,[i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 7]],null,null);
}
var _idris_Main_46__123_attractPlay3_125_$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 10];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 5;
  i$CALL(_idris_Main_46__123_attractPlay3_125_$4,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_aiChasePos,[myoldbase]);
}
var _idris_Main_46__123_attractPlay3_125_$0 = function(oldbase,myoldbase){
  i$CALL(_idris_Main_46__123_attractPlay3_125_$1,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base + 4],6,2);
  i$valstack[i$valstack_base + 8] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_base + 9] = i$CON$0;
  i$CALL(_idris_Main_46__123_attractPlay3_125_$3,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base],10,4);
;
}
var _idris_Main_46__123_attractPlay3_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 7;
  i$CALL(_idris_Main_46__123_attractPlay3_125_$0,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base],5,4);
  i$valstack[i$valstack_base + 5] = i$valstack[i$valstack_base + 7];
}
var _idris_Main_46__123_circle3_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65663;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_draw3_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 11] = i$ret;
  i$valstack[i$valstack_base + 12] = new i$CON(65673,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65673,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11],i$valstack[i$valstack_base + 12]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_draw3_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 9] = null;
  i$valstack[i$valstack_base + 10] = null;
  i$valstack[i$valstack_base + 11] = 0.0;
  i$valstack[i$valstack_base + 12] = 2.0;
  i$valstack[i$valstack_base + 12] = i$valstack[i$valstack_base + 2] / i$valstack[i$valstack_base + 12];
  i$valstack[i$valstack_base + 12] = i$valstack[i$valstack_base + 1] - i$valstack[i$valstack_base + 12];
  i$valstack[i$valstack_base + 11] = new i$CON(0,[i$valstack[i$valstack_base + 11],i$valstack[i$valstack_base + 12]],null,null);
  i$valstack[i$valstack_base + 12] = new i$CON(0,[i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 2]],null,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 11];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 12];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_draw3_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_rect,[myoldbase]);
}
var _idris_Main_46__123_draw3_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$CALL(_idris_Main_46__123_draw3_125_$0,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base],8,7);
  i$valstack[i$valstack_base + 8] = i$valstack[i$valstack_base + 11];
}
var _idris_Main_46__123_drawReport3_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = new i$CON(65691,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65691,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_getParams3_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65708,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65708,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_instructions3_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = i$CON$65717;
  i$valstack[i$valstack_base + 4] = new i$CON(65718,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65718,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_newGame3_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = Math.sin(i$valstack[i$valstack_base]);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_play3_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65758;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_putParams3_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = null;
  i$valstack[i$valstack_base + 7] = "paddleWidth";
  i$valstack[i$valstack_base + 7] = new i$CON(65638,[i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65638,null);
  i$valstack[i$valstack_base + 8] = new i$CON(65773,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65773,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_randomParams3_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 13] = i$ret;
  i$valstack[i$valstack_base + 14] = new i$CON(65783,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9]],_idris__123_APPLY0_125_$65783,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 11],i$valstack[i$valstack_base + 12],i$valstack[i$valstack_base + 13],i$valstack[i$valstack_base + 14]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_randomParams3_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 11] = null;
  i$valstack[i$valstack_base + 12] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46__123_randomParams3_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_normal,[myoldbase]);
}
var _idris_Main_46__123_run3_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_base + 4] = i$CON$65816;
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_run3_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = i$CON$1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Main_46__123_run3_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_toggleParamsEnabled,[myoldbase]);
}
var _idris_Main_46__123_showMenu3_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = "white";
  i$valstack[i$valstack_base + 3] = new i$CON(65634,[i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65634,null);
  i$valstack[i$valstack_base + 4] = i$CON$65829;
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_step3_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65839,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 11],i$valstack[i$valstack_base + 12],i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 13],i$valstack[i$valstack_base + 14],i$valstack[i$valstack_base + 15],i$valstack[i$valstack_base + 16],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 17],i$valstack[i$valstack_base + 18],i$valstack[i$valstack_base + 19]],_idris__123_APPLY0_125_$65839,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_toggleParamsEnabled3_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65843;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_Char_32_instance_32_of_32_Prelude_46_Classes_46_Ord4_125_$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  switch(i$valstack[i$valstack_base + 2].tag){
    case 2:
      i$ret = i$CON$1;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    default:
      i$ret = i$CON$0;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
  };
}
var _idris__123_Char_32_instance_32_of_32_Prelude_46_Classes_46_Ord4_125_$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris__123_Char_32_instance_32_of_32_Prelude_46_Classes_46_Ord4_125_$3,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris__123_Char_32_instance_32_of_32_Prelude_46_Classes_46_Ord4_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris__123_Char_32_instance_32_of_32_Prelude_46_Classes_46_Ord4_125_$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris__123_Char_32_instance_32_of_32_Prelude_46_Classes_46_Ord4_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris__123_Char_32_instance_32_of_32_Prelude_46_Classes_46_Ord4_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Classes_46_compare,[myoldbase]);
}
var _idris__123_Char_32_instance_32_of_32_Prelude_46_Classes_46_Ord4_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris__123_Char_32_instance_32_of_32_Prelude_46_Classes_46_Ord4_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris__64_Prelude_46_Classes_46_Ord_36_Char,[myoldbase]);
}
var _idris__123_Float_32_instance_32_of_32_Prelude_46_Classes_46_Ord4_125_$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  switch(i$valstack[i$valstack_base + 2].tag){
    case 2:
      i$ret = i$CON$1;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    default:
      i$ret = i$CON$0;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
  };
}
var _idris__123_Float_32_instance_32_of_32_Prelude_46_Classes_46_Ord4_125_$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris__123_Float_32_instance_32_of_32_Prelude_46_Classes_46_Ord4_125_$3,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris__123_Float_32_instance_32_of_32_Prelude_46_Classes_46_Ord4_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris__123_Float_32_instance_32_of_32_Prelude_46_Classes_46_Ord4_125_$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris__123_Float_32_instance_32_of_32_Prelude_46_Classes_46_Ord4_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris__123_Float_32_instance_32_of_32_Prelude_46_Classes_46_Ord4_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Classes_46_compare,[myoldbase]);
}
var _idris__123_Float_32_instance_32_of_32_Prelude_46_Classes_46_Ord4_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris__123_Float_32_instance_32_of_32_Prelude_46_Classes_46_Ord4_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris__64_Prelude_46_Classes_46_Ord_36_Float,[myoldbase]);
}
var _idris__123_Int_32_instance_32_of_32_Prelude_46_Classes_46_Ord4_125_$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  switch(i$valstack[i$valstack_base + 2].tag){
    case 2:
      i$ret = i$CON$1;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    default:
      i$ret = i$CON$0;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
  };
}
var _idris__123_Int_32_instance_32_of_32_Prelude_46_Classes_46_Ord4_125_$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris__123_Int_32_instance_32_of_32_Prelude_46_Classes_46_Ord4_125_$3,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris__123_Int_32_instance_32_of_32_Prelude_46_Classes_46_Ord4_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris__123_Int_32_instance_32_of_32_Prelude_46_Classes_46_Ord4_125_$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris__123_Int_32_instance_32_of_32_Prelude_46_Classes_46_Ord4_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris__123_Int_32_instance_32_of_32_Prelude_46_Classes_46_Ord4_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Classes_46_compare,[myoldbase]);
}
var _idris__123_Int_32_instance_32_of_32_Prelude_46_Classes_46_Ord4_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris__123_Int_32_instance_32_of_32_Prelude_46_Classes_46_Ord4_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris__64_Prelude_46_Classes_46_Ord_36_Int,[myoldbase]);
}
var _idris__123_Main_46_getInputState_44__32_getEscape4_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = i$CON$65880;
  i$valstack[i$valstack_base + 4] = new i$CON(65881,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65881,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_Main_46_readParam_44__32_validFloatString4_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_Main_46_readParam_58_validFloatString_58_0,[oldbase]);
}
var _idris__123_Main_46_startGame_44__32_reallyStart4_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = i$CON$65892;
  i$valstack[i$valstack_base + 5] = 3000.0;
  i$valstack[i$valstack_base + 3] = new i$CON(65636,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65636,null);
  i$valstack[i$valstack_base + 4] = i$CON$65893;
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_PE_95__64__64_constructor_32_of_32_Prelude_46_Monad_46_Monad_35_Applicative_32_m_95_fd27177d4_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65903;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_attractPlay4_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$valstack[i$valstack_base + 8] = new i$CON(65642,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65642,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_attractPlay4_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46__123_attractPlay4_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_getInputState,[myoldbase]);
}
var _idris_Main_46__123_circle4_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = new i$CON(65662,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65662,null);
  i$valstack[i$valstack_base + 7] = i$CON$65664;
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_draw4_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 8] = null;
  i$valstack[i$valstack_base + 9] = null;
  i$valstack[i$valstack_base + 10] = i$CON$65671;
  i$valstack[i$valstack_base + 11] = new i$CON(65674,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65674,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_drawReport4_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65692,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65692,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_getParams4_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65709,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65709,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_newGame4_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = Math.cos(i$valstack[i$valstack_base]);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_play4_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65764;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_putParams4_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 6] = null;
  i$valstack[i$valstack_base + 7] = null;
  i$valstack[i$valstack_base + 8] = "paddleHeight";
  i$valstack[i$valstack_base + 8] = new i$CON(65638,[i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65638,null);
  i$valstack[i$valstack_base + 9] = new i$CON(65774,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65774,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_randomParams4_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 12] = i$ret;
  i$valstack[i$valstack_base + 13] = new i$CON(65784,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8]],_idris__123_APPLY0_125_$65784,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11],i$valstack[i$valstack_base + 12],i$valstack[i$valstack_base + 13]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_randomParams4_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 10] = null;
  i$valstack[i$valstack_base + 11] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46__123_randomParams4_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_normal,[myoldbase]);
}
var _idris_Main_46__123_run4_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = new i$CON(4,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],null,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46_run,[oldbase]);
}
var _idris_Main_46__123_showMenu4_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = i$CON$65830;
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_showMenu4_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 7;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = "PONG";
  i$valstack[i$valstack_base + 5] = 120;
  i$valstack[i$valstack_base + 6] = "Lucida Console";
  i$valstack[i$valstack_base + 7] = 0;
  i$valstack[i$valstack_base + 8] = 0;
  i$valstack[i$valstack_base + 7] = new i$CON(0,[i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8]],null,null);
  i$valstack[i$valstack_base + 8] = new i$CON(0,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],null,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 8];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 5;
  i$CALL(_idris_Main_46__123_showMenu4_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_centerText,[myoldbase]);
}
var _idris_Main_46__123_toggleParamsEnabled4_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65844;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_Char_32_instance_32_of_32_Prelude_46_Classes_46_Ord5_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65864,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65864,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_Float_32_instance_32_of_32_Prelude_46_Classes_46_Ord5_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65870,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65870,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_Int_32_instance_32_of_32_Prelude_46_Classes_46_Ord5_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65876,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65876,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_Main_46_startGame_44__32_reallyStart5_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_base + 4] = i$CON$65894;
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_Main_46_startGame_44__32_reallyStart5_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = "There was an error in your parameters";
  i$valstack[i$valstack_base + 4] = 5;
  i$valstack[i$valstack_base + 5] = 100;
  i$valstack[i$valstack_base + 4] = new i$CON(0,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],null,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris__123_Main_46_startGame_44__32_reallyStart5_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_fillText,[myoldbase]);
}
var _idris__123_PE_95__64__64_constructor_32_of_32_Prelude_46_Monad_46_Monad_35_Applicative_32_m_95_fd27177d5_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 1] = null;
  i$ret = new i$CON(65858,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65858,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_attractPlay5_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$valstack[i$valstack_base + 8] = new i$CON(65643,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65643,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_attractPlay5_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46__123_attractPlay5_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_instructions,[myoldbase]);
}
var _idris_Main_46__123_draw5_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 8] = null;
  i$valstack[i$valstack_base + 9] = null;
  i$valstack[i$valstack_base + 10] = "#FFFFFF";
  i$valstack[i$valstack_base + 10] = new i$CON(65634,[i$valstack[i$valstack_base + 10]],_idris__123_APPLY0_125_$65634,null);
  i$valstack[i$valstack_base + 11] = new i$CON(65675,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65675,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_drawReport5_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65693;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_getParams5_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65710,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65710,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_newGame5_125_$4 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 10] = i$valstack[i$valstack_base + 4] * i$valstack[i$valstack_base + 10];
  i$valstack[i$valstack_base + 9] = new i$CON(0,[i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10]],null,null);
  i$valstack[i$valstack_base + 7] = new i$CON(0,[i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9]],null,null);
  i$valstack[i$valstack_base + 8] = new i$CON(0,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base]],null,null);
  i$valstack[i$valstack_base + 7] = new i$CON(0,[i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 5]],null,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 7];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_Main_46__123_newGame5_125_$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 9] = i$valstack[i$valstack_base + 3] * i$valstack[i$valstack_base + 9];
  i$CALL(_idris_Main_46__123_newGame5_125_$4,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base + 1],10,7);
  i$valstack[i$valstack_base + 10] = i$valstack[i$valstack_base + 16];
}
var _idris_Main_46__123_newGame5_125_$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_base + 7] = 2.0;
  i$valstack[i$valstack_base + 7] = i$valstack[i$valstack_base + 2] / i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_base + 8] = 2.0;
  i$valstack[i$valstack_base + 8] = i$valstack[i$valstack_base] / i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_base + 7] = new i$CON(0,[i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8]],null,null);
  i$valstack[i$valstack_base + 8] = 4.0;
  i$CALL(_idris_Main_46__123_newGame5_125_$3,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base + 1],9,7);
  i$valstack[i$valstack_base + 9] = i$valstack[i$valstack_base + 14];
}
var _idris_Main_46__123_newGame5_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 8];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_Main_46__123_newGame5_125_$2,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_Main_46__123_newGame5_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = new i$CON(0,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],null,null);
  i$valstack[i$valstack_base + 6] = null;
  i$valstack[i$valstack_base + 7] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46__123_newGame5_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_PE_95__64__64_constructor_32_of_32_Prelude_46_Monad_46_Monad_35_Applicative_32_m_95_fd27177d,[myoldbase]);
}
var _idris_Main_46__123_newGame5_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 12;
  i$valstack[i$valstack_base + 5] = 2.0;
  i$valstack[i$valstack_base + 5] = i$valstack[i$valstack_base] / i$valstack[i$valstack_base + 5];
  i$CALL(_idris_Main_46__123_newGame5_125_$0,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base + 1],6,7);
  i$valstack[i$valstack_base + 6] = i$valstack[i$valstack_base + 8];
}
var _idris_Main_46__123_play5_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 1] = null;
  i$ret = new i$CON(65858,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65858,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_putParams5_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 7] = null;
  i$valstack[i$valstack_base + 8] = null;
  i$valstack[i$valstack_base + 9] = "twistFactor";
  i$valstack[i$valstack_base + 9] = new i$CON(65638,[i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65638,null);
  i$valstack[i$valstack_base + 10] = new i$CON(65775,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65775,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_randomParams5_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 11] = i$ret;
  i$valstack[i$valstack_base + 12] = new i$CON(65785,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],_idris__123_APPLY0_125_$65785,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11],i$valstack[i$valstack_base + 12]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_randomParams5_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 9] = null;
  i$valstack[i$valstack_base + 10] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46__123_randomParams5_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_normal,[myoldbase]);
}
var _idris_Main_46__123_run5_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = new i$CON(65821,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65821,null);
  i$valstack[i$valstack_base + 7] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_base + 8] = 1000.0;
  i$valstack[i$valstack_base + 7] = i$valstack[i$valstack_base + 7] * i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 7];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_Main_46_demoSetTimeout,[oldbase]);
}
var _idris_Main_46__123_showMenu5_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = i$CON$65828;
  i$valstack[i$valstack_base + 4] = new i$CON(65831,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65831,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_toggleParamsEnabled5_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 1] = null;
  i$ret = new i$CON(65858,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65858,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_Main_46_startGame_44__32_reallyStart6_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = "white";
  i$valstack[i$valstack_base + 3] = new i$CON(65634,[i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65634,null);
  i$valstack[i$valstack_base + 4] = i$CON$65895;
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_PE_95__64__64_constructor_32_of_32_Prelude_46_Monad_46_Monad_35_Applicative_32_m_95_fd27177d6_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65905;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_attractPlay6_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = null;
  i$valstack[i$valstack_base + 7] = "white";
  i$valstack[i$valstack_base + 7] = new i$CON(65634,[i$valstack[i$valstack_base + 7]],_idris__123_APPLY0_125_$65634,null);
  i$valstack[i$valstack_base + 8] = new i$CON(65644,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65644,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_drawReport6_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65694;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_getParams6_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65711,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65711,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_newGame6_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = null;
  i$valstack[i$valstack_base + 7] = new i$CON(65727,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65727,null);
  i$valstack[i$valstack_base + 8] = new i$CON(65728,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65728,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_play6_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65766;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_randomParams6_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 10] = i$ret;
  i$valstack[i$valstack_base + 11] = new i$CON(65786,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65786,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_randomParams6_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 8] = null;
  i$valstack[i$valstack_base + 9] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46__123_randomParams6_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_normal,[myoldbase]);
}
var _idris_Main_46__123_run6_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$valstack[i$valstack_base + 8] = new i$CON(65822,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65822,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_run6_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46__123_run6_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_instructions,[myoldbase]);
}
var _idris_Main_46__123_showMenu6_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = i$CON$65827;
  i$valstack[i$valstack_base + 4] = i$CON$65832;
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_toggleParamsEnabled6_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65846;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_Main_46_startGame_44__32_reallyStart7_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = "12px Lucida Console";
  i$valstack[i$valstack_base + 3] = new i$CON(65635,[i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65635,null);
  i$valstack[i$valstack_base + 4] = i$CON$65896;
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_PE_95__64__64_constructor_32_of_32_Prelude_46_Monad_46_Monad_35_Applicative_32_m_95_fd27177d7_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Prelude_46_Applicative_46__64_Prelude_46_Applicative_46_Applicative_36_IO_58__33__60__36__62__58_0,[oldbase]);
}
var _idris_Main_46__123_attractPlay7_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = i$CON$65640;
  i$valstack[i$valstack_base + 7] = new i$CON(65645,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65645,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_drawReport7_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 1] = null;
  i$ret = new i$CON(65858,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65858,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_getParams7_125_$8 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 8];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_Main_46__123_getParams7_125_$7 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 10] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 10];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 6];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 4;
  i$CALL(_idris_Main_46__123_getParams7_125_$8,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46__64_Prelude_46_Applicative_46_Applicative_36_Maybe_58__33__60__36__62__58_0,[myoldbase]);
}
var _idris_Main_46__123_getParams7_125_$6 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 12] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 10];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 11];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 12];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 4;
  i$CALL(_idris_Main_46__123_getParams7_125_$7,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46__64_Prelude_46_Applicative_46_Applicative_36_Maybe_58__33__60__36__62__58_0,[myoldbase]);
}
var _idris_Main_46__123_getParams7_125_$5 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 14] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 12];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 13];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 14];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 4];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 4;
  i$CALL(_idris_Main_46__123_getParams7_125_$6,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46__64_Prelude_46_Applicative_46_Applicative_36_Maybe_58__33__60__36__62__58_0,[myoldbase]);
}
var _idris_Main_46__123_getParams7_125_$4 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 16] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 14];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 15];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 16];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 3];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 4;
  i$CALL(_idris_Main_46__123_getParams7_125_$5,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46__64_Prelude_46_Applicative_46_Applicative_36_Maybe_58__33__60__36__62__58_0,[myoldbase]);
}
var _idris_Main_46__123_getParams7_125_$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 18] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 16];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 17];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 18];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 2];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 4;
  i$CALL(_idris_Main_46__123_getParams7_125_$4,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46__64_Prelude_46_Applicative_46_Applicative_36_Maybe_58__33__60__36__62__58_0,[myoldbase]);
}
var _idris_Main_46__123_getParams7_125_$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 20] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 18];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 19];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 20];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 4;
  i$CALL(_idris_Main_46__123_getParams7_125_$3,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46__64_Prelude_46_Applicative_46_Applicative_36_Maybe_58__33__60__36__62__58_0,[myoldbase]);
}
var _idris_Main_46__123_getParams7_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$valstack[i$valstack_base + 8] = null;
  i$valstack[i$valstack_base + 9] = null;
  i$valstack[i$valstack_base + 10] = null;
  i$valstack[i$valstack_base + 11] = null;
  i$valstack[i$valstack_base + 12] = null;
  i$valstack[i$valstack_base + 13] = null;
  i$valstack[i$valstack_base + 14] = null;
  i$valstack[i$valstack_base + 15] = null;
  i$valstack[i$valstack_base + 16] = null;
  i$valstack[i$valstack_base + 17] = null;
  i$valstack[i$valstack_base + 18] = null;
  i$valstack[i$valstack_base + 19] = null;
  i$valstack[i$valstack_base + 20] = null;
  i$valstack[i$valstack_base + 21] = null;
  i$valstack[i$valstack_base + 22] = i$CON$65712;
  i$valstack[i$valstack_base + 22] = new i$CON(1,[i$valstack[i$valstack_base + 22]],null,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 20];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 21];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 22];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 4;
  i$CALL(_idris_Main_46__123_getParams7_125_$2,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46__64_Prelude_46_Applicative_46_Applicative_36_Maybe_58__33__60__36__62__58_0,[myoldbase]);
}
var _idris_Main_46__123_getParams7_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 9] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 9];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_Main_46__123_getParams7_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_Main_46__123_getParams7_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 16;
  i$valstack[i$valstack_base + 7] = null;
  i$valstack[i$valstack_base + 8] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46__123_getParams7_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_PE_95__64__64_constructor_32_of_32_Prelude_46_Monad_46_Monad_35_Applicative_32_m_95_fd27177d,[myoldbase]);
}
var _idris_Main_46__123_newGame7_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = new i$CON(65726,[i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65726,null);
  i$valstack[i$valstack_base + 7] = new i$CON(65729,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65729,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_play7_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Prelude_46_Applicative_46__64_Prelude_46_Applicative_46_Applicative_36_IO_58__33__60__36__62__58_0,[oldbase]);
}
var _idris_Main_46__123_randomParams7_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 9] = i$ret;
  i$valstack[i$valstack_base + 10] = new i$CON(65787,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65787,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_randomParams7_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 7] = null;
  i$valstack[i$valstack_base + 8] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46__123_randomParams7_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_normal,[myoldbase]);
}
var _idris_Main_46__123_run7_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_base + 7] = new i$CON(65823,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65823,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_run7_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_run7_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_draw,[myoldbase]);
}
var _idris_Main_46__123_showMenu7_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = "white";
  i$valstack[i$valstack_base + 3] = new i$CON(65634,[i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65634,null);
  i$valstack[i$valstack_base + 4] = i$CON$65833;
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_toggleParamsEnabled7_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Prelude_46_Applicative_46__64_Prelude_46_Applicative_46_Applicative_36_IO_58__33__60__36__62__58_0,[oldbase]);
}
var _idris__123_PE_95__64__64_constructor_32_of_32_Prelude_46_Monad_46_Monad_35_Applicative_32_m_95_fd27177d8_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65907,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65907,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_attractPlay8_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = i$CON$65639;
  i$valstack[i$valstack_base + 7] = new i$CON(65646,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65646,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_drawReport8_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65696;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_getParams8_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
  i$valstack[i$valstack_base + 9] = new i$CON(65713,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65713,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_getParams8_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 6] = null;
  i$valstack[i$valstack_base + 7] = null;
  i$valstack[i$valstack_base + 8] = "vy0Factor";
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 8];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Main_46__123_getParams8_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_readParam,[myoldbase]);
}
var _idris_Main_46__123_newGame8_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = i$CON$65725;
  i$valstack[i$valstack_base + 6] = new i$CON(65730,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65730,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_play8_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65768,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65768,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_randomParams8_125_$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
  i$valstack[i$valstack_base + 9] = new i$CON(65788,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65788,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_randomParams8_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
  i$valstack[i$valstack_base + 9] = 0.6;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 9];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_randomParams8_125_$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46__123_randomParams8_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 10] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 10];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_Main_46__123_randomParams8_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_Main_46__123_randomParams8_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_base + 6] = null;
  i$valstack[i$valstack_base + 7] = null;
  i$valstack[i$valstack_base + 8] = null;
  i$valstack[i$valstack_base + 9] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46__123_randomParams8_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_PE_95__64__64_constructor_32_of_32_Prelude_46_Monad_46_Monad_35_Applicative_32_m_95_fd27177d,[myoldbase]);
}
var _idris_Main_46__123_run8_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_base + 7] = new i$CON(65824,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65824,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_run8_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Main_46__123_run8_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_newGame,[myoldbase]);
}
var _idris_Main_46__123_toggleParamsEnabled8_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65848,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65848,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_PE_95__64__64_constructor_32_of_32_Prelude_46_Monad_46_Monad_35_Applicative_32_m_95_fd27177d9_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65908;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_attractPlay9_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_base + 7] = new i$CON(65647,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65647,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_attractPlay9_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_attractPlay9_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_draw,[myoldbase]);
}
var _idris_Main_46__123_drawReport9_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Prelude_46_Applicative_46__64_Prelude_46_Applicative_46_Applicative_36_IO_58__33__60__36__62__58_0,[oldbase]);
}
var _idris_Main_46__123_getParams9_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$valstack[i$valstack_base + 8] = new i$CON(65714,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65714,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_getParams9_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = null;
  i$valstack[i$valstack_base + 7] = "vx0Factor";
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 7];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Main_46__123_getParams9_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_readParam,[myoldbase]);
}
var _idris_Main_46__123_newGame9_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = i$CON$65724;
  i$valstack[i$valstack_base + 5] = new i$CON(65731,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65731,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_play9_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65769;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_randomParams9_125_$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$valstack[i$valstack_base + 8] = new i$CON(65789,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65789,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_randomParams9_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$valstack[i$valstack_base + 8] = 4.0;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 8];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_randomParams9_125_$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46__123_randomParams9_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 9] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 9];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_Main_46__123_randomParams9_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_Main_46__123_randomParams9_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = null;
  i$valstack[i$valstack_base + 7] = null;
  i$valstack[i$valstack_base + 8] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46__123_randomParams9_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_PE_95__64__64_constructor_32_of_32_Prelude_46_Monad_46_Monad_35_Applicative_32_m_95_fd27177d,[myoldbase]);
}
var _idris_Main_46__123_run9_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_base + 7] = new i$CON(65825,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65825,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_run9_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = i$CON$0;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Main_46__123_run9_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_toggleParamsEnabled,[myoldbase]);
}
var _idris_Main_46__123_toggleParamsEnabled9_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65849;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_PE_95__64__64_constructor_32_of_32_Prelude_46_Monad_46_Monad_35_Applicative_32_m_95_fd27177d10_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65909;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_drawReport10_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65698,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65698,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_getParams10_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_base + 7] = new i$CON(65715,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65715,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_getParams10_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = "accelFactor";
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Main_46__123_getParams10_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_readParam,[myoldbase]);
}
var _idris_Main_46__123_play10_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65770;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_randomParams10_125_$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_base + 7] = new i$CON(65790,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65790,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_randomParams10_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_base + 7] = 1.25;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 7];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_randomParams10_125_$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46__123_randomParams10_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 8];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_Main_46__123_randomParams10_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_Main_46__123_randomParams10_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = null;
  i$valstack[i$valstack_base + 7] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46__123_randomParams10_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_PE_95__64__64_constructor_32_of_32_Prelude_46_Monad_46_Monad_35_Applicative_32_m_95_fd27177d,[myoldbase]);
}
var _idris_Main_46__123_run10_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
  i$valstack[i$valstack_base + 6] = new i$CON(65826,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65826,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_run10_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Main_46__123_run10_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_putParams,[myoldbase]);
}
var _idris_Main_46__123_toggleParamsEnabled10_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65850;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_drawReport11_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65678;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_getParams11_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
  i$valstack[i$valstack_base + 6] = new i$CON(65703,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65703,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_getParams11_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = "paddleWidth";
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Main_46__123_getParams11_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_readParam,[myoldbase]);
}
var _idris_Main_46__123_play11_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = null;
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_randomParams11_125_$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
  i$valstack[i$valstack_base + 6] = new i$CON(65778,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65778,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_randomParams11_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
  i$valstack[i$valstack_base + 6] = 7.0;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 6];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_randomParams11_125_$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46__123_randomParams11_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 7];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_Main_46__123_randomParams11_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_Main_46__123_randomParams11_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46__123_randomParams11_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_PE_95__64__64_constructor_32_of_32_Prelude_46_Monad_46_Monad_35_Applicative_32_m_95_fd27177d,[myoldbase]);
}
var _idris_Main_46__123_run11_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$ret = new i$CON(65858,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65858,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_run11_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_run11_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46__123_drawReport12_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65679;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_getParams12_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = new i$CON(65704,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65704,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_getParams12_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = "paddleHeight";
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Main_46__123_getParams12_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_readParam,[myoldbase]);
}
var _idris_Main_46__123_play12_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65738,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65738,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_randomParams12_125_$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = new i$CON(65779,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65779,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_randomParams12_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = 50.0;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_randomParams12_125_$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46__123_randomParams12_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 6];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_Main_46__123_randomParams12_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_Main_46__123_randomParams12_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46__123_randomParams12_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_PE_95__64__64_constructor_32_of_32_Prelude_46_Monad_46_Monad_35_Applicative_32_m_95_fd27177d,[myoldbase]);
}
var _idris_Main_46__123_run12_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = new i$CON(65796,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65796,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_drawReport13_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = null;
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_getParams13_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_base + 4] = new i$CON(65705,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65705,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_getParams13_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = "twistFactor";
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Main_46__123_getParams13_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_readParam,[myoldbase]);
}
var _idris_Main_46__123_play13_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65739;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_randomParams13_125_$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_base + 4] = new i$CON(65780,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65780,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_randomParams13_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_base + 4] = 1.3;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_randomParams13_125_$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46__123_randomParams13_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 5];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_Main_46__123_randomParams13_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_Main_46__123_randomParams13_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46__123_randomParams13_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_PE_95__64__64_constructor_32_of_32_Prelude_46_Monad_46_Monad_35_Applicative_32_m_95_fd27177d,[myoldbase]);
}
var _idris_Main_46__123_run13_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65797,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65797,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_drawReport14_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65681,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65681,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_play14_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65740;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_run14_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65798;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_drawReport15_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65682;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_play15_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 2];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_Main_46_play,[oldbase]);
}
var _idris_Main_46__123_run15_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65799;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_drawReport16_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65683;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_play16_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$ret = new i$CON(65858,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65858,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_play16_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_play16_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46__123_run16_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 1] = null;
  i$ret = new i$CON(65858,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65858,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_drawReport17_125_$5 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
  i$valstack[i$valstack_base + 9] = 10;
  i$valstack[i$valstack_base + 8] = i$valstack[i$valstack_base + 8] - i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_base + 8] = new i$CON(0,[i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 2]],null,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 8];
  i$SLIDE(5);
  i$valstack_top = i$valstack_base + 5;
  i$CALL(_idris_Main_46_centerText,[oldbase]);
}
var _idris_Main_46__123_drawReport17_125_$4 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
  i$valstack[i$valstack_base + 9] = 2;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 9];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_drawReport17_125_$5,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46__123_drawReport17_125_$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_drawReport17_125_$4,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46__123_drawReport17_125_$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$valstack[i$valstack_base + 8] = 10;
  i$valstack[i$valstack_base + 7] = i$valstack[i$valstack_base + 7] + i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_base + 8] = 0;
  i$valstack[i$valstack_base + 7] = new i$CON(0,[i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8]],null,null);
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46__123_drawReport17_125_$3,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Integral_36_Int_58__33_div_58_0,[myoldbase]);
}
var _idris_Main_46__123_drawReport17_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$valstack[i$valstack_base + 8] = 2;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 8];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_drawReport17_125_$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46__123_drawReport17_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_drawReport17_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46__123_drawReport17_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 6;
  i$valstack[i$valstack_base + 4] = String(i$valstack[i$valstack_base]);
  i$valstack[i$valstack_base + 5] = 120;
  i$valstack[i$valstack_base + 6] = "Courier";
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46__123_drawReport17_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Integral_36_Int_58__33_div_58_0,[myoldbase]);
}
var _idris_Main_46__123_play17_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = new i$CON(65743,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65743,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_run17_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65801;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_drawReport18_125_$7 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$valstack[i$valstack_base + 8] = new i$CON(65685,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65685,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 8];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_Main_46__123_drawReport18_125_$6 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 8];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_drawReport18_125_$7,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46__123_drawReport18_125_$5 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 12] = i$ret;
  i$valstack[i$valstack_base + 13] = 10;
  i$valstack[i$valstack_base + 12] = i$valstack[i$valstack_base + 12] - i$valstack[i$valstack_base + 13];
  i$valstack[i$valstack_base + 12] = new i$CON(0,[i$valstack[i$valstack_base + 12],i$valstack[i$valstack_base + 3]],null,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 10];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 11];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 12];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 5;
  i$CALL(_idris_Main_46__123_drawReport18_125_$6,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_centerText,[myoldbase]);
}
var _idris_Main_46__123_drawReport18_125_$4 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 12] = i$ret;
  i$valstack[i$valstack_base + 13] = 2;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 12];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 13];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_drawReport18_125_$5,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46__123_drawReport18_125_$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 12] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 12];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_drawReport18_125_$4,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46__123_drawReport18_125_$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$valstack[i$valstack_base + 8] = String(i$valstack[i$valstack_base]);
  i$valstack[i$valstack_base + 9] = 120;
  i$valstack[i$valstack_base + 10] = "Courier";
  i$valstack[i$valstack_base + 11] = 0;
  i$valstack[i$valstack_base + 12] = 0;
  i$valstack[i$valstack_base + 11] = new i$CON(0,[i$valstack[i$valstack_base + 11],i$valstack[i$valstack_base + 12]],null,null);
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46__123_drawReport18_125_$3,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Integral_36_Int_58__33_div_58_0,[myoldbase]);
}
var _idris_Main_46__123_drawReport18_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
  i$valstack[i$valstack_base + 4] = new i$CON(0,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],null,null);
  i$PROJECT(i$valstack[i$valstack_base + 4],5,2);
  switch(i$valstack[i$valstack_base + 5].tag){
    case 0:
      switch(i$valstack[i$valstack_base + 6].tag){
        case 0:
          i$valstack[i$valstack_base + 7] = null;
          i$valstack[i$valstack_base + 8] = null;
          i$valstack[i$valstack_base + 9] = null;
          i$valstack[i$valstack_base + 10] = i$CON$65695;
          i$valstack[i$valstack_base + 11] = i$CON$65697;
          i$valstack[i$valstack_base + 12] = i$CON$65680;
          i$valstack[i$valstack_base + 10] = new i$CON(0,[i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11],i$valstack[i$valstack_base + 12]],null,null);
          i$valstack[i$valstack_base + 11] = i$CON$65684;
          i$valstack[i$valstack_base + 10] = new i$CON(0,[i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11]],null,null);
          i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 7];
          i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 8];
          i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 9];
          i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 10];
          myoldbase.addr = i$valstack_base;
          i$valstack_base = i$valstack_top;
          i$valstack_top += 4;
          i$CALL(_idris_Main_46__123_drawReport18_125_$2,[oldbase,myoldbase]);
          i$CALL(_idris_Prelude_46_Monad_46__62__62__61_,[myoldbase]);
          break;
        default:
          i$valstack[i$valstack_base + 7] = "AI wins!";
          i$valstack[i$valstack_base + 8] = 80;
          i$valstack[i$valstack_base + 9] = "Courier";
          i$valstack[i$valstack_base + 10] = 0;
          i$valstack[i$valstack_base + 11] = 0;
          i$valstack[i$valstack_base + 10] = new i$CON(0,[i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11]],null,null);
          i$valstack[i$valstack_base + 11] = new i$CON(0,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],null,null);
          i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 7];
          i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 8];
          i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 9];
          i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 10];
          i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 11];
          i$SLIDE(5);
          i$valstack_top = i$valstack_base + 5;
          i$CALL(_idris_Main_46_centerText,[oldbase]);
      };
      break;
    case 1:
      switch(i$valstack[i$valstack_base + 6].tag){
        case 0:
          i$valstack[i$valstack_base + 7] = "Human wins!";
          i$valstack[i$valstack_base + 8] = 40;
          i$valstack[i$valstack_base + 9] = "Courier";
          i$valstack[i$valstack_base + 10] = 0;
          i$valstack[i$valstack_base + 11] = 0;
          i$valstack[i$valstack_base + 10] = new i$CON(0,[i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11]],null,null);
          i$valstack[i$valstack_base + 11] = new i$CON(0,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],null,null);
          i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 7];
          i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 8];
          i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 9];
          i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 10];
          i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 11];
          i$SLIDE(5);
          i$valstack_top = i$valstack_base + 5;
          i$CALL(_idris_Main_46_centerText,[oldbase]);
          break;
        default:
          i$valstack[i$valstack_base + 7] = "AI wins!";
          i$valstack[i$valstack_base + 8] = 80;
          i$valstack[i$valstack_base + 9] = "Courier";
          i$valstack[i$valstack_base + 10] = 0;
          i$valstack[i$valstack_base + 11] = 0;
          i$valstack[i$valstack_base + 10] = new i$CON(0,[i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11]],null,null);
          i$valstack[i$valstack_base + 11] = new i$CON(0,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],null,null);
          i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 7];
          i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 8];
          i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 9];
          i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 10];
          i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 11];
          i$SLIDE(5);
          i$valstack_top = i$valstack_base + 5;
          i$CALL(_idris_Main_46_centerText,[oldbase]);
      };
      break;
    default:
      i$valstack[i$valstack_base + 7] = "AI wins!";
      i$valstack[i$valstack_base + 8] = 80;
      i$valstack[i$valstack_base + 9] = "Courier";
      i$valstack[i$valstack_base + 10] = 0;
      i$valstack[i$valstack_base + 11] = 0;
      i$valstack[i$valstack_base + 10] = new i$CON(0,[i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11]],null,null);
      i$valstack[i$valstack_base + 11] = new i$CON(0,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],null,null);
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 7];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 8];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 9];
      i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 10];
      i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 11];
      i$SLIDE(5);
      i$valstack_top = i$valstack_base + 5;
      i$CALL(_idris_Main_46_centerText,[oldbase]);
  };
}
var _idris_Main_46__123_drawReport18_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = 7;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_drawReport18_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Int_58__33__62__61__58_0,[myoldbase]);
}
var _idris_Main_46__123_drawReport18_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 10;
  i$valstack[i$valstack_base + 4] = 7;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_drawReport18_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Int_58__33__62__61__58_0,[myoldbase]);
}
var _idris_Main_46__123_play18_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65744,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65744,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_run18_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Prelude_46_Applicative_46__64_Prelude_46_Applicative_46_Applicative_36_IO_58__33__60__36__62__58_0,[oldbase]);
}
var _idris_Main_46__123_drawReport19_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = i$CON$65688;
  i$valstack[i$valstack_base + 6] = new i$CON(65686,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65686,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_play19_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65745;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_run19_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65803,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65803,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_drawReport20_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = i$CON$65677;
  i$valstack[i$valstack_base + 6] = new i$CON(65687,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65687,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_play20_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65746;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_run20_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65804;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_drawReport21_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = "#FFFFFF";
  i$valstack[i$valstack_base + 5] = new i$CON(65634,[i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65634,null);
  i$valstack[i$valstack_base + 6] = new i$CON(65689,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65689,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_play21_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 1] = null;
  i$ret = new i$CON(65858,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65858,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_run21_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65806;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_play22_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65749;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_run22_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = null;
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_play23_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Prelude_46_Applicative_46__64_Prelude_46_Applicative_46_Applicative_36_IO_58__33__60__36__62__58_0,[oldbase]);
}
var _idris_Main_46__123_run23_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65808,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65808,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_play24_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65751,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65751,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_run24_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65809;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_play25_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65752;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_run25_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65810;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_play26_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65753;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_run26_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 2];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Main_46_run_58_continueGame_58_1,[oldbase]);
}
var _idris_Main_46__123_play27_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = null;
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_run27_125_$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = new i$CON(65812,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65812,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_Main_46__123_run27_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_run27_125_$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46__123_run27_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Main_46__123_run27_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_drawReport,[myoldbase]);
}
var _idris_Main_46__123_run27_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 6;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = null;
  i$valstack[i$valstack_base + 7] = i$CON$65800;
  i$valstack[i$valstack_base + 8] = i$CON$65802;
  i$valstack[i$valstack_base + 9] = i$CON$65807;
  i$valstack[i$valstack_base + 7] = new i$CON(0,[i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9]],null,null);
  i$valstack[i$valstack_base + 8] = i$CON$65811;
  i$valstack[i$valstack_base + 7] = new i$CON(0,[i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8]],null,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 7];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 4;
  i$CALL(_idris_Main_46__123_run27_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Monad_46__62__62__61_,[myoldbase]);
}
var _idris_Main_46__123_play28_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65755,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65755,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_run28_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 1] = i$ret;
  i$valstack[i$valstack_base + 2] = i$CON$0;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_Main_46__123_run28_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 3];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_Main_46__123_run28_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_Main_46__123_run28_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46__123_run28_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_PE_95__64__64_constructor_32_of_32_Prelude_46_Monad_46_Monad_35_Applicative_32_m_95_fd27177d,[myoldbase]);
}
var _idris_Main_46__123_play29_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65756;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_run29_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 6;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = null;
  i$valstack[i$valstack_base + 7] = new i$CON(65813,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65813,null);
  i$valstack[i$valstack_base + 8] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_base + 9] = 500.0;
  i$valstack[i$valstack_base + 8] = i$valstack[i$valstack_base + 8] * i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_base + 6] = new i$CON(65636,[i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8]],_idris__123_APPLY0_125_$65636,null);
  i$valstack[i$valstack_base + 7] = i$CON$65814;
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_play30_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65757;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_run30_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = new i$CON(0,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],null,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46_run,[oldbase]);
}
var _idris_Main_46__123_play31_125_$5 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 9] = i$ret;
  i$valstack[i$valstack_base + 7] = new i$CON(65855,[i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9]],_idris__123_APPLY0_125_$65855,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 7];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_Main_46__123_play31_125_$4 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 9] = i$ret;
  i$valstack[i$valstack_base + 10] = i$CON$0;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 10];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_play31_125_$5,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46__123_play31_125_$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 10];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 11];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_Main_46__123_play31_125_$4,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_Main_46__123_play31_125_$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_base + 7] = null;
  i$valstack[i$valstack_base + 8] = null;
  i$valstack[i$valstack_base + 9] = null;
  i$valstack[i$valstack_base + 10] = null;
  i$valstack[i$valstack_base + 11] = i$CON$65748;
  i$valstack[i$valstack_base + 12] = i$CON$65750;
  i$valstack[i$valstack_base + 13] = i$CON$65754;
  i$valstack[i$valstack_base + 11] = new i$CON(0,[i$valstack[i$valstack_base + 11],i$valstack[i$valstack_base + 12],i$valstack[i$valstack_base + 13]],null,null);
  i$valstack[i$valstack_base + 12] = i$CON$65759;
  i$valstack[i$valstack_base + 11] = new i$CON(0,[i$valstack[i$valstack_base + 11],i$valstack[i$valstack_base + 12]],null,null);
  i$CALL(_idris_Main_46__123_play31_125_$3,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base + 11],12,2);
  i$valstack[i$valstack_base + 11] = i$valstack[i$valstack_base + 12];
}
var _idris_Main_46__123_play31_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_base + 7] = null;
  i$valstack[i$valstack_base + 8] = new i$CON(65742,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65742,null);
  i$valstack[i$valstack_base + 9] = 16.666666666666668;
  i$valstack[i$valstack_base + 7] = new i$CON(65636,[i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9]],_idris__123_APPLY0_125_$65636,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 7];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_play31_125_$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46__123_play31_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  switch(i$valstack[i$valstack_base + 4].tag){
    case 0:
      i$valstack[i$valstack_base + 5] = i$valstack[i$valstack_base + 4].args[0];
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
      i$SLIDE(2);
      i$valstack_top = i$valstack_base + 2;
      i$CALL(_idris__123_APPLY0_125_,[oldbase]);
      break;
    case 1:
      i$valstack[i$valstack_base + 5] = i$valstack[i$valstack_base + 4].args[0];
      i$valstack[i$valstack_base + 6] = null;
      i$valstack[i$valstack_base + 7] = null;
      i$valstack[i$valstack_base + 8] = null;
      i$valstack[i$valstack_base + 9] = i$CON$65765;
      i$valstack[i$valstack_base + 10] = i$CON$65767;
      i$valstack[i$valstack_base + 11] = i$CON$65737;
      i$valstack[i$valstack_base + 9] = new i$CON(0,[i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11]],null,null);
      i$valstack[i$valstack_base + 10] = i$CON$65741;
      i$valstack[i$valstack_base + 9] = new i$CON(0,[i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10]],null,null);
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 7];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 8];
      i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 9];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 4;
      i$CALL(_idris_Main_46__123_play31_125_$1,[oldbase,myoldbase]);
      i$CALL(_idris_Prelude_46_Monad_46__62__62__61_,[myoldbase]);
      break;
  };
}
var _idris_Main_46__123_play31_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 10;
  i$valstack[i$valstack_base + 4] = 1.0;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 4;
  i$CALL(_idris_Main_46__123_play31_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_step,[myoldbase]);
}
var _idris_Main_46__123_run31_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 1] = i$ret;
  i$valstack[i$valstack_base + 2] = i$CON$0;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_Main_46__123_run31_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 3];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_Main_46__123_run31_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_Main_46__123_run31_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46__123_run31_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_PE_95__64__64_constructor_32_of_32_Prelude_46_Monad_46_Monad_35_Applicative_32_m_95_fd27177d,[myoldbase]);
}
var _idris_Main_46__123_play32_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_base + 7] = new i$CON(65760,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65760,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_play32_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46__123_play32_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_getInputState,[myoldbase]);
}
var _idris_Main_46__123_run32_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 6;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = null;
  i$valstack[i$valstack_base + 7] = null;
  i$valstack[i$valstack_base + 8] = new i$CON(65817,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65817,null);
  i$valstack[i$valstack_base + 9] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_base + 10] = 1000.0;
  i$valstack[i$valstack_base + 9] = i$valstack[i$valstack_base + 9] * i$valstack[i$valstack_base + 10];
  i$valstack[i$valstack_base + 7] = new i$CON(65636,[i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9]],_idris__123_APPLY0_125_$65636,null);
  i$valstack[i$valstack_base + 8] = i$CON$65818;
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_play33_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_base + 7] = new i$CON(65761,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65761,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_play33_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_play33_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_draw,[myoldbase]);
}
var _idris_Main_46__123_play34_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_base + 7] = new i$CON(65762,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65762,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_play34_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = "#000000";
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Main_46__123_play34_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_clear,[myoldbase]);
}
var _idris_Main_46_aiChasePos_58_boundMagnitude_58_0$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 11] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 11];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33_min_58_0,[oldbase]);
}
var _idris_Main_46_aiChasePos_58_boundMagnitude_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 11] = -i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_base + 12] = i$valstack[i$valstack_base + 9] * i$valstack[i$valstack_base + 10];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 11];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 12];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46_aiChasePos_58_boundMagnitude_58_0$0,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33_max_58_0,[myoldbase]);
}
var _idris_Main_46_aiChasePos_58_isn_39_tLazy_58_0$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 12] = i$ret;
  switch(i$valstack[i$valstack_base + 12].tag){
    case 2:
      i$ret = i$CON$1;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    default:
      i$ret = i$CON$0;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
  };
}
var _idris_Main_46_aiChasePos_58_isn_39_tLazy_58_0$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 12] = i$ret;
  switch(i$valstack[i$valstack_base + 12].tag){
    case 0:
      i$ret = i$CON$1;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    default:
      i$ret = i$CON$0;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
  };
}
var _idris_Main_46_aiChasePos_58_isn_39_tLazy_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  switch(i$valstack[i$valstack_base + 9].tag){
    case 1:
      i$valstack[i$valstack_base + 12] = 3.0;
      i$valstack[i$valstack_base + 12] = i$valstack[i$valstack_base + 12] * i$valstack[i$valstack_base + 10];
      i$valstack[i$valstack_base + 13] = 4.0;
      i$valstack[i$valstack_base + 12] = i$valstack[i$valstack_base + 12] / i$valstack[i$valstack_base + 13];
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 11];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 12];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 2;
      i$CALL(_idris_Main_46_aiChasePos_58_isn_39_tLazy_58_0$0,[oldbase,myoldbase]);
      i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33_compare_58_0,[myoldbase]);
      break;
    case 0:
      i$valstack[i$valstack_base + 12] = 4.0;
      i$valstack[i$valstack_base + 12] = i$valstack[i$valstack_base + 10] / i$valstack[i$valstack_base + 12];
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 11];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 12];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 2;
      i$CALL(_idris_Main_46_aiChasePos_58_isn_39_tLazy_58_0$1,[oldbase,myoldbase]);
      i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33_compare_58_0,[myoldbase]);
      break;
  };
}
var _idris_Main_46_aiChasePos_58_pvy_58_0$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 19] = i$valstack[i$valstack_base + 19] / i$valstack[i$valstack_base + 20];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 10];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 11];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 12];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 13];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 14];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 15];
  i$valstack[i$valstack_top + 7] = i$valstack[i$valstack_base + 16];
  i$valstack[i$valstack_top + 8] = i$valstack[i$valstack_base + 17];
  i$valstack[i$valstack_top + 9] = i$valstack[i$valstack_base + 18];
  i$valstack[i$valstack_top + 10] = i$valstack[i$valstack_base + 19];
  i$SLIDE(11);
  i$valstack_top = i$valstack_base + 11;
  i$CALL(_idris_Main_46_aiChasePos_58_boundMagnitude_58_0,[oldbase]);
}
var _idris_Main_46_aiChasePos_58_pvy_58_0$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 19] = i$valstack[i$valstack_base + 5] - i$valstack[i$valstack_base + 19];
  i$CALL(_idris_Main_46_aiChasePos_58_pvy_58_0$2,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base + 1],20,2);
  i$valstack[i$valstack_base + 20] = i$valstack[i$valstack_base + 21];
}
var _idris_Main_46_aiChasePos_58_pvy_58_0$0 = function(oldbase,myoldbase){
  i$CALL(_idris_Main_46_aiChasePos_58_pvy_58_0$1,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base + 1],19,2);
;
}
var _idris_Main_46_aiChasePos_58_pvy_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 13;
  i$valstack[i$valstack_base + 9] = null;
  i$valstack[i$valstack_base + 10] = null;
  i$valstack[i$valstack_base + 11] = null;
  i$valstack[i$valstack_base + 12] = null;
  i$valstack[i$valstack_base + 13] = null;
  i$valstack[i$valstack_base + 14] = null;
  i$valstack[i$valstack_base + 15] = null;
  i$valstack[i$valstack_base + 16] = null;
  i$valstack[i$valstack_base + 17] = null;
  i$CALL(_idris_Main_46_aiChasePos_58_pvy_58_0$0,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base],18,7);
;
}
var _idris_Main_46_centerText_58_measure_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = context.measureText(i$valstack[i$valstack_base + 7]).width;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_collides_58_dvy_58_0$4 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 10] = i$valstack[i$valstack_base + 10] - i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_base + 9] = i$valstack[i$valstack_base + 9] * i$valstack[i$valstack_base + 10];
  i$ret = i$valstack[i$valstack_base + 9] / i$valstack[i$valstack_base + 5];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_collides_58_dvy_58_0$3 = function(oldbase,myoldbase){
  i$CALL(_idris_Main_46_collides_58_dvy_58_0$4,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base + 10],11,2);
  i$valstack[i$valstack_base + 10] = i$valstack[i$valstack_base + 12];
}
var _idris_Main_46_collides_58_dvy_58_0$2 = function(oldbase,myoldbase){
  i$CALL(_idris_Main_46_collides_58_dvy_58_0$3,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base + 1],10,3);
;
}
var _idris_Main_46_collides_58_dvy_58_0$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
  switch(i$valstack[i$valstack_base + 8].tag){
    case 0:
      i$ret = 0.0;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    case 1:
      i$CALL(_idris_Main_46_collides_58_dvy_58_0$2,[oldbase,myoldbase]);
      i$PROJECT(i$valstack[i$valstack_base],9,7);
      i$valstack[i$valstack_base + 9] = i$valstack[i$valstack_base + 10];
      break;
  };
}
var _idris_Main_46_collides_58_dvy_58_0$7 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 9] = i$valstack[i$valstack_base + 9] - i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_base + 8] = i$valstack[i$valstack_base + 8] * i$valstack[i$valstack_base + 9];
  i$ret = i$valstack[i$valstack_base + 8] / i$valstack[i$valstack_base + 3];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_collides_58_dvy_58_0$6 = function(oldbase,myoldbase){
  i$CALL(_idris_Main_46_collides_58_dvy_58_0$7,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base + 9],10,2);
  i$valstack[i$valstack_base + 9] = i$valstack[i$valstack_base + 11];
}
var _idris_Main_46_collides_58_dvy_58_0$5 = function(oldbase,myoldbase){
  i$CALL(_idris_Main_46_collides_58_dvy_58_0$6,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base + 1],9,3);
;
}
var _idris_Main_46_collides_58_dvy_58_0$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  switch(i$valstack[i$valstack_base + 7].tag){
    case 0:
      i$valstack[i$valstack_base + 8] = null;
      i$valstack[i$valstack_base + 9] = null;
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 8];
      i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 9];
      i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 4];
      i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 5];
      i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 6];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 7;
      i$CALL(_idris_Main_46_collides_58_dvy_58_0$1,[oldbase,myoldbase]);
      i$CALL(_idris_Main_46_collides_58_right_58_0,[myoldbase]);
      break;
    case 1:
      i$CALL(_idris_Main_46_collides_58_dvy_58_0$5,[oldbase,myoldbase]);
      i$PROJECT(i$valstack[i$valstack_base],8,7);
      i$valstack[i$valstack_base + 8] = i$valstack[i$valstack_base + 9];
      break;
  };
}
var _idris_Main_46_collides_58_dvy_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 6;
  i$valstack[i$valstack_base + 7] = null;
  i$valstack[i$valstack_base + 8] = null;
  i$valstack[i$valstack_base + 9] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 9];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 7;
  i$CALL(_idris_Main_46_collides_58_dvy_58_0$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_collides_58_left_58_0,[myoldbase]);
}
var _idris_Main_46_collides_58_factor_58_0$4 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 10] = i$ret;
  i$valstack[i$valstack_base + 9] = i$valstack[i$valstack_base + 9] + i$valstack[i$valstack_base + 10];
  i$ret = i$valstack[i$valstack_base + 8] / i$valstack[i$valstack_base + 9];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_collides_58_factor_58_0$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 10] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 10];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Main_46_collides_58_factor_58_0$4,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Num_36_Float_58__33_abs_58_0,[myoldbase]);
}
var _idris_Main_46_collides_58_factor_58_0$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 9] = 1.0;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 6];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 7;
  i$CALL(_idris_Main_46_collides_58_factor_58_0$3,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_collides_58_dvy_58_0,[myoldbase]);
}
var _idris_Main_46_collides_58_factor_58_0$1 = function(oldbase,myoldbase){
  switch(i$valstack[i$valstack_base + 7].tag){
    case 0:
      i$ret = 0.0;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    case 1:
      i$CALL(_idris_Main_46_collides_58_factor_58_0$2,[oldbase,myoldbase]);
      i$PROJECT(i$valstack[i$valstack_base],8,7);
      i$valstack[i$valstack_base + 8] = i$valstack[i$valstack_base + 12];
      break;
  };
}
var _idris_Main_46_collides_58_factor_58_0$5 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
}
var _idris_Main_46_collides_58_factor_58_0$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$CALL(_idris_Main_46_collides_58_factor_58_0$1,[oldbase,myoldbase]);
  switch(i$valstack[i$valstack_base + 7].tag){
    case 0:
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
      i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
      i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 5;
      i$CALL(_idris_Main_46_collides_58_factor_58_0$5,[oldbase,myoldbase]);
      i$CALL(_idris__123_Main_46_collides_44__32_factor0_125_,[myoldbase]);
      break;
    case 1:
      i$valstack[i$valstack_base + 7] = i$CON$1;
      break;
  };
}
var _idris_Main_46_collides_58_factor_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 6;
  i$valstack[i$valstack_base + 7] = null;
  i$valstack[i$valstack_base + 8] = null;
  i$valstack[i$valstack_base + 9] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 9];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 7;
  i$CALL(_idris_Main_46_collides_58_factor_58_0$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_collides_58_left_58_0,[myoldbase]);
}
var _idris_Main_46_collides_58_left_58_0$4 = function(oldbase,myoldbase){
  switch(i$valstack[i$valstack_base + 7].tag){
    case 0:
      i$ret = i$CON$0;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    case 1:
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
      i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
      i$valstack_top = i$valstack_base + 1;
      i$CALL(_idris__123_Main_46_collides_44__32_left0_125_,[oldbase]);
      break;
  };
}
var _idris_Main_46_collides_58_left_58_0$5 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
}
var _idris_Main_46_collides_58_left_58_0$3 = function(oldbase,myoldbase){
  i$CALL(_idris_Main_46_collides_58_left_58_0$4,[oldbase,myoldbase]);
  switch(i$valstack[i$valstack_base + 7].tag){
    case 0:
      i$valstack[i$valstack_base + 7] = i$CON$0;
      break;
    case 1:
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 2;
      i$CALL(_idris_Main_46_collides_58_left_58_0$5,[oldbase,myoldbase]);
      i$CALL(_idris__123_Main_46_collides_44__32_left1_125_,[myoldbase]);
      break;
  };
}
var _idris_Main_46_collides_58_left_58_0$6 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
}
var _idris_Main_46_collides_58_left_58_0$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$CALL(_idris_Main_46_collides_58_left_58_0$3,[oldbase,myoldbase]);
  switch(i$valstack[i$valstack_base + 7].tag){
    case 0:
      i$valstack[i$valstack_base + 7] = i$CON$0;
      break;
    case 1:
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 3];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 3;
      i$CALL(_idris_Main_46_collides_58_left_58_0$6,[oldbase,myoldbase]);
      i$CALL(_idris__123_Main_46_collides_44__32_left2_125_,[myoldbase]);
      break;
  };
}
var _idris_Main_46_collides_58_left_58_0$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = 2.0;
  i$valstack[i$valstack_base + 8] = i$valstack[i$valstack_base + 3] / i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_base + 8] = i$valstack[i$valstack_base + 2] + i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 8];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46_collides_58_left_58_0$2,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33__60__61__58_0,[myoldbase]);
}
var _idris_Main_46_collides_58_left_58_0$0 = function(oldbase,myoldbase){
  i$CALL(_idris_Main_46_collides_58_left_58_0$1,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base + 7],8,2);
  i$valstack[i$valstack_base + 7] = i$valstack[i$valstack_base + 9];
}
var _idris_Main_46_collides_58_left_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$CALL(_idris_Main_46_collides_58_left_58_0$0,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base + 1],7,3);
;
}
var _idris_Main_46_collides_58_newP_58_0$2 = function(oldbase,myoldbase){
  i$ret = new i$CON(0,[i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8]],null,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_collides_58_newP_58_0$1 = function(oldbase,myoldbase){
  i$CALL(_idris_Main_46_collides_58_newP_58_0$2,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base + 8],9,2);
  i$valstack[i$valstack_base + 8] = i$valstack[i$valstack_base + 10];
}
var _idris_Main_46_collides_58_newP_58_0$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$CALL(_idris_Main_46_collides_58_newP_58_0$1,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base + 1],8,3);
;
}
var _idris_Main_46_collides_58_newP_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 6];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 7;
  i$CALL(_idris_Main_46_collides_58_newP_58_0$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_collides_58_newX_58_0,[myoldbase]);
}
var _idris_Main_46_collides_58_newV_58_0$7 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 9] = i$ret;
  i$valstack[i$valstack_base + 8] = i$valstack[i$valstack_base + 8] + i$valstack[i$valstack_base + 9];
  i$ret = new i$CON(0,[i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8]],null,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_collides_58_newV_58_0$6 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 6];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 7;
  i$CALL(_idris_Main_46_collides_58_newV_58_0$7,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_collides_58_dvy_58_0,[myoldbase]);
}
var _idris_Main_46_collides_58_newV_58_0$5 = function(oldbase,myoldbase){
  i$CALL(_idris_Main_46_collides_58_newV_58_0$6,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base + 8],9,2);
  i$valstack[i$valstack_base + 8] = i$valstack[i$valstack_base + 10];
}
var _idris_Main_46_collides_58_newV_58_0$4 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 9] = i$ret;
  i$valstack[i$valstack_base + 8] = i$valstack[i$valstack_base + 8] / i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_base + 7] = i$valstack[i$valstack_base + 7] + i$valstack[i$valstack_base + 8];
  i$CALL(_idris_Main_46_collides_58_newV_58_0$5,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base + 1],8,3);
  i$valstack[i$valstack_base + 8] = i$valstack[i$valstack_base + 10];
}
var _idris_Main_46_collides_58_newV_58_0$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 9] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 9];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Main_46_collides_58_newV_58_0$4,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Num_36_Float_58__33_abs_58_0,[myoldbase]);
}
var _idris_Main_46_collides_58_newV_58_0$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 9] = i$ret;
  i$valstack[i$valstack_base + 8] = i$valstack[i$valstack_base + 8] * i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 6];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 7;
  i$CALL(_idris_Main_46_collides_58_newV_58_0$3,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_collides_58_newVX_58_0,[myoldbase]);
}
var _idris_Main_46_collides_58_newV_58_0$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 6];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 7;
  i$CALL(_idris_Main_46_collides_58_newV_58_0$2,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_collides_58_newVX_58_0,[myoldbase]);
}
var _idris_Main_46_collides_58_newV_58_0$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 6];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 7;
  i$CALL(_idris_Main_46_collides_58_newV_58_0$1,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_collides_58_factor_58_0,[myoldbase]);
}
var _idris_Main_46_collides_58_newV_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 6];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 7;
  i$CALL(_idris_Main_46_collides_58_newV_58_0$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_collides_58_newVX_58_0,[myoldbase]);
}
var _idris_Main_46_collides_58_newVX_58_0$2 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base + 9],10,2);
  i$ret = i$valstack[i$valstack_base + 10];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_collides_58_newVX_58_0$5 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 9] = i$ret;
  i$ret = -i$valstack[i$valstack_base + 9];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_collides_58_newVX_58_0$4 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 9];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Main_46_collides_58_newVX_58_0$5,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Num_36_Float_58__33_abs_58_0,[myoldbase]);
}
var _idris_Main_46_collides_58_newVX_58_0$3 = function(oldbase,myoldbase){
  i$CALL(_idris_Main_46_collides_58_newVX_58_0$4,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base + 9],10,2);
  i$valstack[i$valstack_base + 9] = i$valstack[i$valstack_base + 10];
}
var _idris_Main_46_collides_58_newVX_58_0$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
  switch(i$valstack[i$valstack_base + 8].tag){
    case 0:
      i$CALL(_idris_Main_46_collides_58_newVX_58_0$2,[oldbase,myoldbase]);
      i$PROJECT(i$valstack[i$valstack_base + 1],9,3);
      i$valstack[i$valstack_base + 9] = i$valstack[i$valstack_base + 11];
      break;
    case 1:
      i$CALL(_idris_Main_46_collides_58_newVX_58_0$3,[oldbase,myoldbase]);
      i$PROJECT(i$valstack[i$valstack_base + 1],9,3);
      i$valstack[i$valstack_base + 9] = i$valstack[i$valstack_base + 11];
      break;
  };
}
var _idris_Main_46_collides_58_newVX_58_0$7 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Num_36_Float_58__33_abs_58_0,[oldbase]);
}
var _idris_Main_46_collides_58_newVX_58_0$6 = function(oldbase,myoldbase){
  i$CALL(_idris_Main_46_collides_58_newVX_58_0$7,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base + 8],9,2);
  i$valstack[i$valstack_base + 8] = i$valstack[i$valstack_base + 9];
}
var _idris_Main_46_collides_58_newVX_58_0$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  switch(i$valstack[i$valstack_base + 7].tag){
    case 0:
      i$valstack[i$valstack_base + 8] = null;
      i$valstack[i$valstack_base + 9] = null;
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 8];
      i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 9];
      i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 4];
      i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 5];
      i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 6];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 7;
      i$CALL(_idris_Main_46_collides_58_newVX_58_0$1,[oldbase,myoldbase]);
      i$CALL(_idris_Main_46_collides_58_right_58_0,[myoldbase]);
      break;
    case 1:
      i$CALL(_idris_Main_46_collides_58_newVX_58_0$6,[oldbase,myoldbase]);
      i$PROJECT(i$valstack[i$valstack_base + 1],8,3);
      i$valstack[i$valstack_base + 8] = i$valstack[i$valstack_base + 10];
      break;
  };
}
var _idris_Main_46_collides_58_newVX_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_base + 7] = null;
  i$valstack[i$valstack_base + 8] = null;
  i$valstack[i$valstack_base + 9] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 9];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 7;
  i$CALL(_idris_Main_46_collides_58_newVX_58_0$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_collides_58_left_58_0,[myoldbase]);
}
var _idris_Main_46_collides_58_newX_58_0$2 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base + 9],10,2);
  i$ret = i$valstack[i$valstack_base + 10];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_collides_58_newX_58_0$4 = function(oldbase,myoldbase){
  i$ret = i$valstack[i$valstack_base + 9] - i$valstack[i$valstack_base + 10];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_collides_58_newX_58_0$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 9] = i$ret;
  i$CALL(_idris_Main_46_collides_58_newX_58_0$4,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base + 1],10,3);
  i$valstack[i$valstack_base + 10] = i$valstack[i$valstack_base + 11];
}
var _idris_Main_46_collides_58_newX_58_0$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
  switch(i$valstack[i$valstack_base + 8].tag){
    case 0:
      i$CALL(_idris_Main_46_collides_58_newX_58_0$2,[oldbase,myoldbase]);
      i$PROJECT(i$valstack[i$valstack_base + 1],9,3);
;
      break;
    case 1:
      i$valstack[i$valstack_base + 9] = null;
      i$valstack[i$valstack_base + 10] = null;
      i$valstack[i$valstack_base + 11] = null;
      i$valstack[i$valstack_base + 12] = null;
      i$valstack[i$valstack_base + 13] = null;
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 9];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 10];
      i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 11];
      i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 12];
      i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 13];
      i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 6];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 7;
      i$CALL(_idris_Main_46_collides_58_newX_58_0$3,[oldbase,myoldbase]);
      i$CALL(_idris_Main_46_collides_58_pxr_58_0,[myoldbase]);
      break;
  };
}
var _idris_Main_46_collides_58_newX_58_0$6 = function(oldbase,myoldbase){
  i$ret = i$valstack[i$valstack_base + 8] + i$valstack[i$valstack_base + 9];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_collides_58_newX_58_0$5 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$valstack[i$valstack_base + 8] + i$valstack[i$valstack_base + 9];
  i$CALL(_idris_Main_46_collides_58_newX_58_0$6,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base + 1],9,3);
  i$valstack[i$valstack_base + 9] = i$valstack[i$valstack_base + 10];
}
var _idris_Main_46_collides_58_newX_58_0$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  switch(i$valstack[i$valstack_base + 7].tag){
    case 0:
      i$valstack[i$valstack_base + 8] = null;
      i$valstack[i$valstack_base + 9] = null;
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 8];
      i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 9];
      i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 4];
      i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 5];
      i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 6];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 7;
      i$CALL(_idris_Main_46_collides_58_newX_58_0$1,[oldbase,myoldbase]);
      i$CALL(_idris_Main_46_collides_58_right_58_0,[myoldbase]);
      break;
    case 1:
      i$valstack[i$valstack_base + 8] = 0.0;
      i$CALL(_idris_Main_46_collides_58_newX_58_0$5,[oldbase,myoldbase]);
      i$PROJECT(i$valstack[i$valstack_base],9,7);
      i$valstack[i$valstack_base + 9] = i$valstack[i$valstack_base + 12];
      break;
  };
}
var _idris_Main_46_collides_58_newX_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 7;
  i$valstack[i$valstack_base + 7] = null;
  i$valstack[i$valstack_base + 8] = null;
  i$valstack[i$valstack_base + 9] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 9];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 7;
  i$CALL(_idris_Main_46_collides_58_newX_58_0$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_collides_58_left_58_0,[myoldbase]);
}
var _idris_Main_46_collides_58_pxr_58_0$0 = function(oldbase,myoldbase){
  i$ret = i$valstack[i$valstack_base + 6] - i$valstack[i$valstack_base + 7];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_collides_58_pxr_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$CALL(_idris_Main_46_collides_58_pxr_58_0$0,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base],7,7);
  i$valstack[i$valstack_base + 7] = i$valstack[i$valstack_base + 10];
}
var _idris_Main_46_collides_58_right_58_0$4 = function(oldbase,myoldbase){
  switch(i$valstack[i$valstack_base + 7].tag){
    case 0:
      i$ret = i$CON$0;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    case 1:
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 6];
      i$SLIDE(3);
      i$valstack_top = i$valstack_base + 3;
      i$CALL(_idris__123_Main_46_collides_44__32_right0_125_,[oldbase]);
      break;
  };
}
var _idris_Main_46_collides_58_right_58_0$5 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
}
var _idris_Main_46_collides_58_right_58_0$3 = function(oldbase,myoldbase){
  i$CALL(_idris_Main_46_collides_58_right_58_0$4,[oldbase,myoldbase]);
  switch(i$valstack[i$valstack_base + 7].tag){
    case 0:
      i$valstack[i$valstack_base + 7] = i$CON$0;
      break;
    case 1:
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 6];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 3;
      i$CALL(_idris_Main_46_collides_58_right_58_0$5,[oldbase,myoldbase]);
      i$CALL(_idris__123_Main_46_collides_44__32_right1_125_,[myoldbase]);
      break;
  };
}
var _idris_Main_46_collides_58_right_58_0$6 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
}
var _idris_Main_46_collides_58_right_58_0$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$CALL(_idris_Main_46_collides_58_right_58_0$3,[oldbase,myoldbase]);
  switch(i$valstack[i$valstack_base + 7].tag){
    case 0:
      i$valstack[i$valstack_base + 7] = i$CON$0;
      break;
    case 1:
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 5];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 3;
      i$CALL(_idris_Main_46_collides_58_right_58_0$6,[oldbase,myoldbase]);
      i$CALL(_idris__123_Main_46_collides_44__32_right2_125_,[myoldbase]);
      break;
  };
}
var _idris_Main_46_collides_58_right_58_0$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = 2.0;
  i$valstack[i$valstack_base + 8] = i$valstack[i$valstack_base + 5] / i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_base + 8] = i$valstack[i$valstack_base + 4] + i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 8];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46_collides_58_right_58_0$2,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33__60__61__58_0,[myoldbase]);
}
var _idris_Main_46_collides_58_right_58_0$0 = function(oldbase,myoldbase){
  i$CALL(_idris_Main_46_collides_58_right_58_0$1,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base + 7],8,2);
  i$valstack[i$valstack_base + 7] = i$valstack[i$valstack_base + 9];
}
var _idris_Main_46_collides_58_right_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$CALL(_idris_Main_46_collides_58_right_58_0$0,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base + 1],7,3);
;
}
var _idris_Main_46_getInputState_58_getEscape_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 6;
  i$valstack[i$valstack_base] = null;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = i$CON$65878;
  i$valstack[i$valstack_base + 5] = i$CON$65879;
  i$valstack[i$valstack_base + 2] = new i$CON(65857,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65857,null);
  i$valstack[i$valstack_base + 3] = i$CON$65882;
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_getInputState_58_getMouse_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = mouseY;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_normal_58_random_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base] = null;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = i$CON$65883;
  i$valstack[i$valstack_base + 3] = i$CON$65884;
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_readParam_58_readNumber_58_0$5 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  switch(i$valstack[i$valstack_base + 2].tag){
    case 0:
      i$ret = i$CON$0;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    case 1:
      i$valstack[i$valstack_base + 3] = parseFloat(i$valstack[i$valstack_base + 1]);
      i$ret = new i$CON(1,[i$valstack[i$valstack_base + 3]],null,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_Main_46_readParam_58_readNumber_58_0$4 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_Main_46_readParam_58_readNumber_58_0$5,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_readParam_58_validFloatString_58_0,[myoldbase]);
}
var _idris_Main_46_readParam_58_readNumber_58_0$10 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$valstack[i$valstack_base + 4] = new i$CON(1,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 7]],null,null);
}
var _idris_Main_46_readParam_58_readNumber_58_0$9 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 8];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46_readParam_58_readNumber_58_0$10,[oldbase,myoldbase]);
  i$CALL(_idris__95_Prelude_46_Strings_46_unpack_95_with_95_20,[myoldbase]);
}
var _idris_Main_46_readParam_58_readNumber_58_0$11 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
}
var _idris_Main_46_readParam_58_readNumber_58_0$12 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
}
var _idris_Main_46_readParam_58_readNumber_58_0$8 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
  i$CALL(_idris_Main_46_readParam_58_readNumber_58_0$9,[oldbase,myoldbase]);
  switch(i$valstack[i$valstack_base + 8].tag){
    case 0:
      i$valstack[i$valstack_base + 9] = i$valstack[i$valstack_base + 8].args[0];
      i$valstack[i$valstack_base + 10] = null;
      i$valstack[i$valstack_base + 11] = null;
      i$valstack[i$valstack_base + 12] = i$valstack[i$valstack_base + 6][0];
      i$valstack[i$valstack_base + 13] = i$valstack[i$valstack_base + 6].substr(1,i$valstack[i$valstack_base + 6].length - 1);
      i$valstack[i$valstack_base + 12] = new i$CON(1,[i$valstack[i$valstack_base + 12],i$valstack[i$valstack_base + 13]],null,null);
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 10];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 11];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 12];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 3;
      i$CALL(_idris_Main_46_readParam_58_readNumber_58_0$11,[oldbase,myoldbase]);
      i$CALL(_idris_really_95_believe_95_me,[myoldbase]);
      break;
    case 1:
      i$valstack[i$valstack_base + 9] = i$valstack[i$valstack_base + 8].args[0];
      i$valstack[i$valstack_base + 10] = null;
      i$valstack[i$valstack_base + 11] = null;
      i$valstack[i$valstack_base + 12] = i$CON$0;
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 10];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 11];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 12];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 3;
      i$CALL(_idris_Main_46_readParam_58_readNumber_58_0$12,[oldbase,myoldbase]);
      i$CALL(_idris_really_95_believe_95_me,[myoldbase]);
      break;
  };
}
var _idris_Main_46_readParam_58_readNumber_58_0$7 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 8];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Main_46_readParam_58_readNumber_58_0$8,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Either_46_choose,[myoldbase]);
}
var _idris_Main_46_readParam_58_readNumber_58_0$6 = function(oldbase,myoldbase){
  i$CALL(_idris_Main_46_readParam_58_readNumber_58_0$7,[oldbase,myoldbase]);
  switch(i$valstack[i$valstack_base + 8].tag){
    case 0:
      i$valstack[i$valstack_base + 8] = i$CON$1;
      break;
    case 1:
      i$valstack[i$valstack_base + 8] = i$CON$0;
      break;
  };
}
var _idris_Main_46_readParam_58_readNumber_58_0$3 = function(oldbase,myoldbase){
  i$CALL(_idris_Main_46_readParam_58_readNumber_58_0$4,[oldbase,myoldbase]);
  switch(i$valstack[i$valstack_base + 4].tag){
    case 1:
      i$PROJECT(i$valstack[i$valstack_base + 4],5,2);
      i$valstack[i$valstack_base + 7] = null;
      i$valstack[i$valstack_base + 8] = "";
      i$valstack[i$valstack_base + 8] = i$valstack[i$valstack_base + 6] == i$valstack[i$valstack_base + 8];
      i$CALL(_idris_Main_46_readParam_58_readNumber_58_0$6,[oldbase,myoldbase]);
      if (i$valstack[i$valstack_base + 8] == 0) {
        i$valstack[i$valstack_base + 8] = i$CON$0;
      } else {
        i$valstack[i$valstack_base + 8] = i$CON$1;
      };
      break;
    case 0:
      i$valstack[i$valstack_base + 4] = i$CON$0;
      break;
  };
}
var _idris_Main_46_readParam_58_readNumber_58_0$13 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
}
var _idris_Main_46_readParam_58_readNumber_58_0$14 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
}
var _idris_Main_46_readParam_58_readNumber_58_0$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$CALL(_idris_Main_46_readParam_58_readNumber_58_0$3,[oldbase,myoldbase]);
  switch(i$valstack[i$valstack_base + 4].tag){
    case 0:
      i$valstack[i$valstack_base + 5] = i$valstack[i$valstack_base + 4].args[0];
      i$valstack[i$valstack_base + 6] = null;
      i$valstack[i$valstack_base + 7] = null;
      i$valstack[i$valstack_base + 8] = i$valstack[i$valstack_base + 1][0];
      i$valstack[i$valstack_base + 9] = i$valstack[i$valstack_base + 1].substr(1,i$valstack[i$valstack_base + 1].length - 1);
      i$valstack[i$valstack_base + 8] = new i$CON(1,[i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9]],null,null);
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 7];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 8];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 3;
      i$CALL(_idris_Main_46_readParam_58_readNumber_58_0$13,[oldbase,myoldbase]);
      i$CALL(_idris_really_95_believe_95_me,[myoldbase]);
      break;
    case 1:
      i$valstack[i$valstack_base + 5] = i$valstack[i$valstack_base + 4].args[0];
      i$valstack[i$valstack_base + 6] = null;
      i$valstack[i$valstack_base + 7] = null;
      i$valstack[i$valstack_base + 8] = i$CON$0;
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 7];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 8];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 3;
      i$CALL(_idris_Main_46_readParam_58_readNumber_58_0$14,[oldbase,myoldbase]);
      i$CALL(_idris_really_95_believe_95_me,[myoldbase]);
      break;
  };
}
var _idris_Main_46_readParam_58_readNumber_58_0$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Main_46_readParam_58_readNumber_58_0$2,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Either_46_choose,[myoldbase]);
}
var _idris_Main_46_readParam_58_readNumber_58_0$0 = function(oldbase,myoldbase){
  i$CALL(_idris_Main_46_readParam_58_readNumber_58_0$1,[oldbase,myoldbase]);
  switch(i$valstack[i$valstack_base + 4].tag){
    case 0:
      i$valstack[i$valstack_base + 4] = i$CON$1;
      break;
    case 1:
      i$valstack[i$valstack_base + 4] = i$CON$0;
      break;
  };
}
var _idris_Main_46_readParam_58_readNumber_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 12;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = i$CON$0;
  i$valstack[i$valstack_base + 4] = "";
  i$valstack[i$valstack_base + 4] = i$valstack[i$valstack_base + 1] == i$valstack[i$valstack_base + 4];
  i$CALL(_idris_Main_46_readParam_58_readNumber_58_0$0,[oldbase,myoldbase]);
  if (i$valstack[i$valstack_base + 4] == 0) {
    i$valstack[i$valstack_base + 4] = i$CON$0;
  } else {
    i$valstack[i$valstack_base + 4] = i$CON$1;
  };
}
var _idris_Main_46_readParam_58_validFloatString_58_0$1 = function(oldbase,myoldbase){
  switch(i$valstack[i$valstack_base + 5].tag){
    case 0:
      i$ret = i$CON$0;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    case 1:
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
      i$SLIDE(2);
      i$valstack_top = i$valstack_base + 2;
      i$CALL(_idris__123_Main_46_readParam_44__32_validFloatString0_125_,[oldbase]);
      break;
  };
}
var _idris_Main_46_readParam_58_validFloatString_58_0$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
  i$CALL(_idris_Main_46_readParam_58_validFloatString_58_0$1,[oldbase,myoldbase]);
  switch(i$valstack[i$valstack_base + 5].tag){
    case 0:
      i$valstack[i$valstack_base + 5] = i$CON$1;
      break;
    case 1:
      i$valstack[i$valstack_base + 5] = i$CON$0;
      break;
  };
}
var _idris_Main_46_readParam_58_validFloatString_58_0$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
  switch(i$valstack[i$valstack_base + 5].tag){
    case 0:
      i$ret = i$CON$0;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    case 1:
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
      i$SLIDE(2);
      i$valstack_top = i$valstack_base + 2;
      i$CALL(_idris__123_Main_46_readParam_44__32_validFloatString3_125_,[oldbase]);
      break;
  };
}
var _idris_Main_46_readParam_58_validFloatString_58_0$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
  switch(i$valstack[i$valstack_base + 5].tag){
    case 0:
      i$ret = i$CON$0;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    case 1:
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
      i$SLIDE(2);
      i$valstack_top = i$valstack_base + 2;
      i$CALL(_idris__123_Main_46_readParam_44__32_validFloatString4_125_,[oldbase]);
      break;
  };
}
var _idris_Main_46_readParam_58_validFloatString_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  switch(i$valstack[i$valstack_base + 2].tag){
    case 1:
      i$PROJECT(i$valstack[i$valstack_base + 2],3,2);
      if (i$valstack[i$valstack_base + 3] == "-") {
        i$valstack[i$valstack_base + 5] = null;
        i$valstack[i$valstack_base + 6] = i$CON$65886;
        i$valstack[i$valstack_base + 7] = "-";
        i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
        i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 6];
        i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 7];
        i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 4];
        myoldbase.addr = i$valstack_base;
        i$valstack_base = i$valstack_top;
        i$valstack_top += 4;
        i$CALL(_idris_Main_46_readParam_58_validFloatString_58_0$0,[oldbase,myoldbase]);
        i$CALL(_idris_Prelude_46_List_46_elemBy,[myoldbase]);
      } else if (i$valstack[i$valstack_base + 3] == ".") {
        switch(i$valstack[i$valstack_base + 1].tag){
          case 0:
            i$valstack[i$valstack_base + 5] = null;
            i$valstack[i$valstack_base + 6] = i$CON$1;
            i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
            i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 6];
            i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
            i$SLIDE(3);
            i$valstack_top = i$valstack_base + 3;
            i$CALL(_idris_Main_46_readParam_58_validFloatString_58_0,[oldbase]);
            break;
          case 1:
            i$ret = i$CON$0;
            i$valstack_top = i$valstack_base;
            i$valstack_base = oldbase.addr;
            break;
          default:
            i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
            myoldbase.addr = i$valstack_base;
            i$valstack_base = i$valstack_top;
            i$valstack_top += 1;
            i$CALL(_idris_Main_46_readParam_58_validFloatString_58_0$2,[oldbase,myoldbase]);
            i$CALL(_idris_Prelude_46_Char_46_isDigit,[myoldbase]);
        };
      } else {
        i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
        myoldbase.addr = i$valstack_base;
        i$valstack_base = i$valstack_top;
        i$valstack_top += 1;
        i$CALL(_idris_Main_46_readParam_58_validFloatString_58_0$3,[oldbase,myoldbase]);
        i$CALL(_idris_Prelude_46_Char_46_isDigit,[myoldbase]);
      };
      break;
    case 0:
      i$ret = i$CON$1;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_Main_46_run_58_report_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  switch(i$valstack[i$valstack_base + 4].tag){
    case 1:
      i$valstack[i$valstack_base + 5] = null;
      i$valstack[i$valstack_base + 6] = i$CON$1;
      i$valstack[i$valstack_base + 7] = 1;
      i$valstack[i$valstack_base + 7] = i$valstack[i$valstack_base + 3] + i$valstack[i$valstack_base + 7];
      i$valstack[i$valstack_base + 7] = new i$CON(0,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 7]],null,null);
      i$valstack[i$valstack_base + 8] = 2;
      i$valstack[i$valstack_base + 6] = new i$CON(1,[i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8]],null,null);
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 6];
      i$SLIDE(2);
      i$valstack_top = i$valstack_base + 2;
      i$CALL(_idris_Main_46_run,[oldbase]);
      break;
    case 0:
      i$valstack[i$valstack_base + 5] = null;
      i$valstack[i$valstack_base + 6] = i$CON$0;
      i$valstack[i$valstack_base + 7] = 1;
      i$valstack[i$valstack_base + 7] = i$valstack[i$valstack_base + 2] + i$valstack[i$valstack_base + 7];
      i$valstack[i$valstack_base + 7] = new i$CON(0,[i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 3]],null,null);
      i$valstack[i$valstack_base + 8] = 2;
      i$valstack[i$valstack_base + 6] = new i$CON(1,[i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8]],null,null);
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 6];
      i$SLIDE(2);
      i$valstack_top = i$valstack_base + 2;
      i$CALL(_idris_Main_46_run,[oldbase]);
      break;
    case 2:
      i$valstack[i$valstack_base + 5] = null;
      i$valstack[i$valstack_base + 6] = i$CON$3;
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 6];
      i$SLIDE(2);
      i$valstack_top = i$valstack_base + 2;
      i$CALL(_idris_Main_46_run,[oldbase]);
      break;
  };
}
var _idris_Main_46_startGame_58_reallyStart_58_0$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
  i$valstack[i$valstack_base + 6] = new i$CON(65855,[i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8]],_idris__123_APPLY0_125_$65855,null);
  i$valstack[i$valstack_base + 5] = new i$CON(65632,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65632,null);
  i$valstack[i$valstack_base + 6] = new i$CON(65891,[i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65891,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_startGame_58_reallyStart_58_0$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
  i$valstack[i$valstack_base + 9] = i$CON$0;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 9];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46_startGame_58_reallyStart_58_0$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46_startGame_58_reallyStart_58_0$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 10] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 10];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_Main_46_startGame_58_reallyStart_58_0$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_Main_46_startGame_58_reallyStart_58_0$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = i$CON$65897;
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_startGame_58_reallyStart_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 9;
  switch(i$valstack[i$valstack_base + 1].tag){
    case 1:
      i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base + 1].args[0];
      i$valstack[i$valstack_base + 3] = null;
      i$valstack[i$valstack_base + 4] = null;
      i$valstack[i$valstack_base + 5] = null;
      i$valstack[i$valstack_base + 6] = null;
      i$valstack[i$valstack_base + 7] = null;
      i$valstack[i$valstack_base + 8] = null;
      i$valstack[i$valstack_base + 9] = null;
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$CALL(_idris_Main_46_startGame_58_reallyStart_58_0$0,[oldbase,myoldbase]);
      i$CALL(_idris_PE_95__64__64_constructor_32_of_32_Prelude_46_Monad_46_Monad_35_Applicative_32_m_95_fd27177d,[myoldbase]);
      break;
    case 0:
      i$valstack[i$valstack_base + 2] = null;
      i$valstack[i$valstack_base + 3] = null;
      i$valstack[i$valstack_base + 4] = "black";
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 1;
      i$CALL(_idris_Main_46_startGame_58_reallyStart_58_0$3,[oldbase,myoldbase]);
      i$CALL(_idris_Main_46_clear,[myoldbase]);
      break;
  };
}
var _idris_Main_46_step_58_movedBall_58_0$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 15] = i$ret;
  i$valstack[i$valstack_base + 14] = new i$CON(0,[i$valstack[i$valstack_base + 14],i$valstack[i$valstack_base + 15]],null,null);
  i$ret = new i$CON(0,[i$valstack[i$valstack_base + 13],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 14]],null,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_step_58_movedBall_58_0$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 14] = i$ret;
  i$valstack[i$valstack_base + 15] = null;
  i$valstack[i$valstack_base + 16] = null;
  i$valstack[i$valstack_base + 17] = null;
  i$valstack[i$valstack_base + 18] = null;
  i$valstack[i$valstack_base + 19] = null;
  i$valstack[i$valstack_base + 20] = null;
  i$valstack[i$valstack_base + 21] = null;
  i$valstack[i$valstack_base + 22] = null;
  i$valstack[i$valstack_base + 23] = null;
  i$valstack[i$valstack_base + 24] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 15];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 16];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 17];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 18];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 19];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 20];
  i$valstack[i$valstack_top + 7] = i$valstack[i$valstack_base + 21];
  i$valstack[i$valstack_top + 8] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 9] = i$valstack[i$valstack_base + 22];
  i$valstack[i$valstack_top + 10] = i$valstack[i$valstack_base + 10];
  i$valstack[i$valstack_top + 11] = i$valstack[i$valstack_base + 23];
  i$valstack[i$valstack_top + 12] = i$valstack[i$valstack_base + 24];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 13;
  i$CALL(_idris_Main_46_step_58_movedBall_58_0$1,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_step_58_newVY_58_0,[myoldbase]);
}
var _idris_Main_46_step_58_movedBall_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 12;
  i$valstack[i$valstack_base + 13] = i$valstack[i$valstack_base + 7] * i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base + 13] = i$valstack[i$valstack_base + 4] + i$valstack[i$valstack_base + 13];
  i$valstack[i$valstack_base + 14] = i$valstack[i$valstack_base + 8] * i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base + 14] = i$valstack[i$valstack_base + 5] + i$valstack[i$valstack_base + 14];
  i$valstack[i$valstack_base + 13] = new i$CON(0,[i$valstack[i$valstack_base + 13],i$valstack[i$valstack_base + 14]],null,null);
  i$valstack[i$valstack_base + 14] = null;
  i$valstack[i$valstack_base + 15] = null;
  i$valstack[i$valstack_base + 16] = null;
  i$valstack[i$valstack_base + 17] = null;
  i$valstack[i$valstack_base + 18] = null;
  i$valstack[i$valstack_base + 19] = null;
  i$valstack[i$valstack_base + 20] = null;
  i$valstack[i$valstack_base + 21] = null;
  i$valstack[i$valstack_base + 22] = null;
  i$valstack[i$valstack_base + 23] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 14];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 15];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 16];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 17];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 18];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 19];
  i$valstack[i$valstack_top + 7] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 8] = i$valstack[i$valstack_base + 20];
  i$valstack[i$valstack_top + 9] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 10] = i$valstack[i$valstack_base + 21];
  i$valstack[i$valstack_top + 11] = i$valstack[i$valstack_base + 22];
  i$valstack[i$valstack_top + 12] = i$valstack[i$valstack_base + 23];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 13;
  i$CALL(_idris_Main_46_step_58_movedBall_58_0$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_step_58_newVX_58_0,[myoldbase]);
}
var _idris_Main_46_step_58_newBall_58_0$4 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 14] = i$ret;
  i$ret = new i$CON(1,[i$valstack[i$valstack_base + 14]],null,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_step_58_newBall_58_0$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 14] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 14];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 11];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 12];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 9];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 5;
  i$CALL(_idris_Main_46_step_58_newBall_58_0$4,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_collides,[myoldbase]);
}
var _idris_Main_46_step_58_newBall_58_0$6 = function(oldbase,myoldbase){
  switch(i$valstack[i$valstack_base + 14].tag){
    case 0:
      i$valstack[i$valstack_base + 15] = i$CON$0;
      i$ret = new i$CON(0,[i$valstack[i$valstack_base + 15]],null,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    case 1:
      i$valstack[i$valstack_base + 15] = i$CON$1;
      i$ret = new i$CON(0,[i$valstack[i$valstack_base + 15]],null,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_Main_46_step_58_newBall_58_0$5 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 14] = i$ret;
  i$CALL(_idris_Main_46_step_58_newBall_58_0$6,[oldbase,myoldbase]);
  switch(i$valstack[i$valstack_base + 14].tag){
    case 0:
      i$valstack[i$valstack_base + 14] = i$CON$1;
      break;
    default:
      i$valstack[i$valstack_base + 14] = i$CON$0;
  };
}
var _idris_Main_46_step_58_newBall_58_0$2 = function(oldbase,myoldbase){
  switch(i$valstack[i$valstack_base + 13].tag){
    case 0:
      i$valstack[i$valstack_base + 14] = null;
      i$valstack[i$valstack_base + 15] = null;
      i$valstack[i$valstack_base + 16] = null;
      i$valstack[i$valstack_base + 17] = null;
      i$valstack[i$valstack_base + 18] = null;
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 14];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 15];
      i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 16];
      i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 4];
      i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 5];
      i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 6];
      i$valstack[i$valstack_top + 7] = i$valstack[i$valstack_base + 7];
      i$valstack[i$valstack_top + 8] = i$valstack[i$valstack_base + 8];
      i$valstack[i$valstack_top + 9] = i$valstack[i$valstack_base + 9];
      i$valstack[i$valstack_top + 10] = i$valstack[i$valstack_base + 10];
      i$valstack[i$valstack_top + 11] = i$valstack[i$valstack_base + 17];
      i$valstack[i$valstack_top + 12] = i$valstack[i$valstack_base + 18];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 13;
      i$CALL(_idris_Main_46_step_58_newBall_58_0$3,[oldbase,myoldbase]);
      i$CALL(_idris_Main_46_step_58_movedBall_58_0,[myoldbase]);
      break;
    case 1:
      i$valstack[i$valstack_base + 14] = 0.0;
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 14];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 2;
      i$CALL(_idris_Main_46_step_58_newBall_58_0$5,[oldbase,myoldbase]);
      i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33_compare_58_0,[myoldbase]);
      break;
  };
}
var _idris_Main_46_step_58_newBall_58_0$7 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 13] = i$ret;
}
var _idris_Main_46_step_58_newBall_58_0$1 = function(oldbase,myoldbase){
  i$CALL(_idris_Main_46_step_58_newBall_58_0$2,[oldbase,myoldbase]);
  switch(i$valstack[i$valstack_base + 13].tag){
    case 0:
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 9];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 2;
      i$CALL(_idris_Main_46_step_58_newBall_58_0$7,[oldbase,myoldbase]);
      i$CALL(_idris__123_Main_46_step_44__32_newBall0_125_,[myoldbase]);
      break;
    case 1:
      i$valstack[i$valstack_base + 13] = i$CON$1;
      break;
  };
}
var _idris_Main_46_step_58_newBall_58_0$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 13] = i$ret;
  i$CALL(_idris_Main_46_step_58_newBall_58_0$1,[oldbase,myoldbase]);
  switch(i$valstack[i$valstack_base + 13].tag){
    case 0:
      i$valstack[i$valstack_base + 13] = i$CON$1;
      break;
    default:
      i$valstack[i$valstack_base + 13] = i$CON$0;
  };
}
var _idris_Main_46_step_58_newBall_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 6;
  i$valstack[i$valstack_base + 13] = 0.0;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 13];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46_step_58_newBall_58_0$0,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33_compare_58_0,[myoldbase]);
}
var _idris_Main_46_step_58_newRight_58_0$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 15] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 15];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 14];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_Main_46_step_58_newRight_58_0$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 13] = i$ret;
  switch(i$valstack[i$valstack_base + 13].tag){
    case 0:
      i$valstack[i$valstack_base + 14] = i$valstack[i$valstack_base + 13].args[0];
      i$ret = new i$CON(0,[i$valstack[i$valstack_base + 14]],null,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    case 1:
      i$valstack[i$valstack_base + 14] = i$valstack[i$valstack_base + 13].args[0];
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 2];
      i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 3];
      i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 4];
      i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 5];
      i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 6];
      i$valstack[i$valstack_top + 7] = i$valstack[i$valstack_base + 7];
      i$valstack[i$valstack_top + 8] = i$valstack[i$valstack_base + 8];
      i$valstack[i$valstack_top + 9] = i$valstack[i$valstack_base + 9];
      i$valstack[i$valstack_top + 10] = i$valstack[i$valstack_base + 10];
      i$valstack[i$valstack_top + 11] = i$valstack[i$valstack_base + 11];
      i$valstack[i$valstack_top + 12] = i$valstack[i$valstack_base + 12];
      i$valstack[i$valstack_top + 13] = i$valstack[i$valstack_base + 14];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 14;
      i$CALL(_idris_Main_46_step_58_newRight_58_0$1,[oldbase,myoldbase]);
      i$CALL(_idris__123_Main_46_step_44__32_newRight1_125_,[myoldbase]);
      break;
  };
}
var _idris_Main_46_step_58_newRight_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 13] = null;
  i$valstack[i$valstack_base + 14] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 13];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 14];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 7] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 8] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 9] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 10] = i$valstack[i$valstack_base + 10];
  i$valstack[i$valstack_top + 11] = i$valstack[i$valstack_base + 11];
  i$valstack[i$valstack_top + 12] = i$valstack[i$valstack_base + 12];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 13;
  i$CALL(_idris_Main_46_step_58_newRight_58_0$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_step_58_newBall_58_0,[myoldbase]);
}
var _idris_Main_46_step_58_newVX_58_0$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 13] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 13];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 7];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_Main_46_step_58_newVX_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 13] = 0.0;
  i$valstack[i$valstack_base + 13] = new i$CON(0,[i$valstack[i$valstack_base + 13],i$valstack[i$valstack_base + 9]],null,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 13];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46_step_58_newVX_58_0$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_boundVelocity,[myoldbase]);
}
var _idris_Main_46_step_58_newVY_58_0$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 13] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 13];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 8];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_Main_46_step_58_newVY_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 13] = 0.0;
  i$valstack[i$valstack_base + 13] = new i$CON(0,[i$valstack[i$valstack_base + 13],i$valstack[i$valstack_base + 10]],null,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 13];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46_step_58_newVY_58_0$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_boundVelocity,[myoldbase]);
}
var _idris_Prelude_46_Applicative_46__64_Prelude_46_Applicative_46_Applicative_36_IO_58__33__60__36__62__58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = new i$CON(65853,[i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65853,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Prelude_46_Applicative_46__64_Prelude_46_Applicative_46_Applicative_36_Maybe_58__33__60__36__62__58_0$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$ret = new i$CON(1,[i$valstack[i$valstack_base + 6]],null,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Prelude_46_Applicative_46__64_Prelude_46_Applicative_46_Applicative_36_Maybe_58__33__60__36__62__58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  switch(i$valstack[i$valstack_base + 3].tag){
    case 1:
      i$valstack[i$valstack_base + 4] = i$valstack[i$valstack_base + 3].args[0];
      switch(i$valstack[i$valstack_base + 2].tag){
        case 1:
          i$valstack[i$valstack_base + 5] = i$valstack[i$valstack_base + 2].args[0];
          i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
          i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
          myoldbase.addr = i$valstack_base;
          i$valstack_base = i$valstack_top;
          i$valstack_top += 2;
          i$CALL(_idris_Prelude_46_Applicative_46__64_Prelude_46_Applicative_46_Applicative_36_Maybe_58__33__60__36__62__58_0$0,[oldbase,myoldbase]);
          i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
          break;
        default:
          i$ret = i$CON$0;
          i$valstack_top = i$valstack_base;
          i$valstack_base = oldbase.addr;
      };
      break;
    default:
      i$ret = i$CON$0;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
  };
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Integral_36_Int_58__33_div_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$SLIDE(0);
  i$valstack_top = i$valstack_base;
  i$CALL(_idris_Prelude_46_Classes_46_divInt,[oldbase]);
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Num_36_Float_58__33_abs_58_0$1 = function(oldbase,myoldbase){
  switch(i$valstack[i$valstack_base + 1].tag){
    case 0:
      i$ret = i$valstack[i$valstack_base];
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    case 1:
      i$ret = -i$valstack[i$valstack_base];
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Num_36_Float_58__33_abs_58_0$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 1] = i$ret;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Num_36_Float_58__33_abs_58_0$1,[oldbase,myoldbase]);
  switch(i$valstack[i$valstack_base + 1].tag){
    case 0:
      i$valstack[i$valstack_base + 1] = i$CON$1;
      break;
    default:
      i$valstack[i$valstack_base + 1] = i$CON$0;
  };
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Num_36_Float_58__33_abs_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 1] = 0.0;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Num_36_Float_58__33_abs_58_0$0,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33_compare_58_0,[myoldbase]);
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Char_58__33__60__61__58_0$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  switch(i$valstack[i$valstack_base + 2].tag){
    case 0:
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
      i$SLIDE(2);
      i$valstack_top = i$valstack_base + 2;
      i$CALL(_idris_Prelude_46_Classes_46__123_Char_32_instance_32_of_32_Prelude_46_Classes_46_Ord_44__32_method_32__60__61_0_125_,[oldbase]);
      break;
    case 1:
      i$ret = i$CON$1;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Char_58__33__60__61__58_0$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Char_58__33__60__61__58_0$3,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Char_58__33__60__61__58_0$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Char_58__33__60__61__58_0$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Char_58__33__60__61__58_0$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Char_58__33__60__61__58_0$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Classes_46__60_,[myoldbase]);
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Char_58__33__60__61__58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Char_58__33__60__61__58_0$0,[oldbase,myoldbase]);
  i$CALL(_idris__64_Prelude_46_Classes_46_Ord_36_Char,[myoldbase]);
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Char_58__33__62__61__58_0$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  switch(i$valstack[i$valstack_base + 2].tag){
    case 0:
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
      i$SLIDE(2);
      i$valstack_top = i$valstack_base + 2;
      i$CALL(_idris_Prelude_46_Classes_46__123_Char_32_instance_32_of_32_Prelude_46_Classes_46_Ord_44__32_method_32__62__61_0_125_,[oldbase]);
      break;
    case 1:
      i$ret = i$CON$1;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Char_58__33__62__61__58_0$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Char_58__33__62__61__58_0$3,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Char_58__33__62__61__58_0$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Char_58__33__62__61__58_0$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Char_58__33__62__61__58_0$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Char_58__33__62__61__58_0$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Classes_46__62_,[myoldbase]);
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Char_58__33__62__61__58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Char_58__33__62__61__58_0$0,[oldbase,myoldbase]);
  i$CALL(_idris__64_Prelude_46_Classes_46_Ord_36_Char,[myoldbase]);
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Char_58__33_compare_58_0$1 = function(oldbase,myoldbase){
  switch(i$valstack[i$valstack_base + 3].tag){
    case 0:
      i$ret = i$CON$2;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    case 1:
      i$ret = i$CON$0;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Char_58__33_compare_58_0$0 = function(oldbase,myoldbase){
  switch(i$valstack[i$valstack_base + 2].tag){
    case 0:
      i$valstack[i$valstack_base + 3] = i$valstack[i$valstack_base] < i$valstack[i$valstack_base + 1];
      i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Char_58__33_compare_58_0$1,[oldbase,myoldbase]);
      if (i$valstack[i$valstack_base + 3] == 0) {
        i$valstack[i$valstack_base + 3] = i$CON$0;
      } else {
        i$valstack[i$valstack_base + 3] = i$CON$1;
      };
      break;
    case 1:
      i$ret = i$CON$1;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Char_58__33_compare_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base] == i$valstack[i$valstack_base + 1];
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Char_58__33_compare_58_0$0,[oldbase,myoldbase]);
  if (i$valstack[i$valstack_base + 2] == 0) {
    i$valstack[i$valstack_base + 2] = i$CON$0;
  } else {
    i$valstack[i$valstack_base + 2] = i$CON$1;
  };
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33__60__61__58_0$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  switch(i$valstack[i$valstack_base + 2].tag){
    case 0:
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
      i$SLIDE(2);
      i$valstack_top = i$valstack_base + 2;
      i$CALL(_idris_Prelude_46_Classes_46__123_Float_32_instance_32_of_32_Prelude_46_Classes_46_Ord_44__32_method_32__60__61_0_125_,[oldbase]);
      break;
    case 1:
      i$ret = i$CON$1;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33__60__61__58_0$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33__60__61__58_0$3,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33__60__61__58_0$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33__60__61__58_0$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33__60__61__58_0$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33__60__61__58_0$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Classes_46__60_,[myoldbase]);
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33__60__61__58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33__60__61__58_0$0,[oldbase,myoldbase]);
  i$CALL(_idris__64_Prelude_46_Classes_46_Ord_36_Float,[myoldbase]);
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33__62__61__58_0$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  switch(i$valstack[i$valstack_base + 2].tag){
    case 0:
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
      i$SLIDE(2);
      i$valstack_top = i$valstack_base + 2;
      i$CALL(_idris_Prelude_46_Classes_46__123_Float_32_instance_32_of_32_Prelude_46_Classes_46_Ord_44__32_method_32__62__61_0_125_,[oldbase]);
      break;
    case 1:
      i$ret = i$CON$1;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33__62__61__58_0$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33__62__61__58_0$3,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33__62__61__58_0$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33__62__61__58_0$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33__62__61__58_0$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33__62__61__58_0$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Classes_46__62_,[myoldbase]);
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33__62__61__58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33__62__61__58_0$0,[oldbase,myoldbase]);
  i$CALL(_idris__64_Prelude_46_Classes_46_Ord_36_Float,[myoldbase]);
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33_compare_58_0$1 = function(oldbase,myoldbase){
  switch(i$valstack[i$valstack_base + 3].tag){
    case 0:
      i$ret = i$CON$2;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    case 1:
      i$ret = i$CON$0;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33_compare_58_0$0 = function(oldbase,myoldbase){
  switch(i$valstack[i$valstack_base + 2].tag){
    case 0:
      i$valstack[i$valstack_base + 3] = i$valstack[i$valstack_base] < i$valstack[i$valstack_base + 1];
      i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33_compare_58_0$1,[oldbase,myoldbase]);
      if (i$valstack[i$valstack_base + 3] == 0) {
        i$valstack[i$valstack_base + 3] = i$CON$0;
      } else {
        i$valstack[i$valstack_base + 3] = i$CON$1;
      };
      break;
    case 1:
      i$ret = i$CON$1;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33_compare_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base] == i$valstack[i$valstack_base + 1];
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33_compare_58_0$0,[oldbase,myoldbase]);
  if (i$valstack[i$valstack_base + 2] == 0) {
    i$valstack[i$valstack_base + 2] = i$CON$0;
  } else {
    i$valstack[i$valstack_base + 2] = i$CON$1;
  };
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33_max_58_0$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  switch(i$valstack[i$valstack_base + 2].tag){
    case 0:
      i$ret = i$valstack[i$valstack_base + 1];
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    case 1:
      i$ret = i$valstack[i$valstack_base];
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33_max_58_0$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33_max_58_0$3,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33_max_58_0$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33_max_58_0$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33_max_58_0$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33_max_58_0$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Classes_46__62_,[myoldbase]);
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33_max_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33_max_58_0$0,[oldbase,myoldbase]);
  i$CALL(_idris__64_Prelude_46_Classes_46_Ord_36_Float,[myoldbase]);
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33_min_58_0$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  switch(i$valstack[i$valstack_base + 2].tag){
    case 0:
      i$ret = i$valstack[i$valstack_base + 1];
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    case 1:
      i$ret = i$valstack[i$valstack_base];
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33_min_58_0$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33_min_58_0$3,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33_min_58_0$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33_min_58_0$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33_min_58_0$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33_min_58_0$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Classes_46__60_,[myoldbase]);
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33_min_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Float_58__33_min_58_0$0,[oldbase,myoldbase]);
  i$CALL(_idris__64_Prelude_46_Classes_46_Ord_36_Float,[myoldbase]);
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Int_58__33__62__61__58_0$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  switch(i$valstack[i$valstack_base + 2].tag){
    case 0:
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
      i$SLIDE(2);
      i$valstack_top = i$valstack_base + 2;
      i$CALL(_idris_Prelude_46_Classes_46__123_Int_32_instance_32_of_32_Prelude_46_Classes_46_Ord_44__32_method_32__62__61_0_125_,[oldbase]);
      break;
    case 1:
      i$ret = i$CON$1;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Int_58__33__62__61__58_0$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Int_58__33__62__61__58_0$3,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Int_58__33__62__61__58_0$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Int_58__33__62__61__58_0$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Int_58__33__62__61__58_0$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Int_58__33__62__61__58_0$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Classes_46__62_,[myoldbase]);
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Int_58__33__62__61__58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = null;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Int_58__33__62__61__58_0$0,[oldbase,myoldbase]);
  i$CALL(_idris__64_Prelude_46_Classes_46_Ord_36_Int,[myoldbase]);
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Int_58__33_compare_58_0$1 = function(oldbase,myoldbase){
  switch(i$valstack[i$valstack_base + 3].tag){
    case 0:
      i$ret = i$CON$2;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    case 1:
      i$ret = i$CON$0;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Int_58__33_compare_58_0$0 = function(oldbase,myoldbase){
  switch(i$valstack[i$valstack_base + 2].tag){
    case 0:
      i$valstack[i$valstack_base + 3] = i$valstack[i$valstack_base] < i$valstack[i$valstack_base + 1];
      i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Int_58__33_compare_58_0$1,[oldbase,myoldbase]);
      if (i$valstack[i$valstack_base + 3] == 0) {
        i$valstack[i$valstack_base + 3] = i$CON$0;
      } else {
        i$valstack[i$valstack_base + 3] = i$CON$1;
      };
      break;
    case 1:
      i$ret = i$CON$1;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Int_58__33_compare_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base] == i$valstack[i$valstack_base + 1];
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Int_58__33_compare_58_0$0,[oldbase,myoldbase]);
  if (i$valstack[i$valstack_base + 2] == 0) {
    i$valstack[i$valstack_base + 2] = i$CON$0;
  } else {
    i$valstack[i$valstack_base + 2] = i$CON$1;
  };
}
var _idris_Main_46_run_58_continueGame_58_1$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_base + 7] = new i$CON(65889,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65889,null);
  i$ret = new i$CON(65857,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],_idris__123_APPLY0_125_$65857,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_run_58_continueGame_58_1 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Main_46_run_58_continueGame_58_1$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_newGame,[myoldbase]);
}
var _idris_Main_46_run_58_revert_58_1 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  switch(i$valstack[i$valstack_base + 4].tag){
    case 1:
      i$PROJECT(i$valstack[i$valstack_base + 5],6,2);
      i$valstack[i$valstack_base + 8] = 1;
      i$valstack[i$valstack_base + 8] = i$valstack[i$valstack_base + 7] - i$valstack[i$valstack_base + 8];
      i$ret = new i$CON(0,[i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 8]],null,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    case 0:
      i$PROJECT(i$valstack[i$valstack_base + 5],6,2);
      i$valstack[i$valstack_base + 8] = 1;
      i$valstack[i$valstack_base + 8] = i$valstack[i$valstack_base + 6] - i$valstack[i$valstack_base + 8];
      i$ret = new i$CON(0,[i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 7]],null,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_Main_46_run_58_next_58_4$0 = function(oldbase,myoldbase){
  switch(i$valstack[i$valstack_base + 4].tag){
    case 0:
      i$valstack[i$valstack_base + 5] = null;
      i$valstack[i$valstack_base + 6] = 2;
      i$valstack[i$valstack_base + 7] = 1;
      i$valstack[i$valstack_base + 7] = i$valstack[i$valstack_base + 2] - i$valstack[i$valstack_base + 7];
      i$valstack[i$valstack_base + 6] = new i$CON(5,[i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],null,null);
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 6];
      i$SLIDE(2);
      i$valstack_top = i$valstack_base + 2;
      i$CALL(_idris_Main_46_run,[oldbase]);
      break;
    case 1:
      i$valstack[i$valstack_base + 5] = null;
      i$valstack[i$valstack_base + 6] = i$CON$3;
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 6];
      i$SLIDE(2);
      i$valstack_top = i$valstack_base + 2;
      i$CALL(_idris_Main_46_run,[oldbase]);
      break;
  };
}
var _idris_Main_46_run_58_next_58_4 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  switch(i$valstack[i$valstack_base + 3].tag){
    case 2:
      i$valstack[i$valstack_base + 4] = null;
      i$valstack[i$valstack_base + 5] = i$CON$3;
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
      i$SLIDE(2);
      i$valstack_top = i$valstack_base + 2;
      i$CALL(_idris_Main_46_run,[oldbase]);
      break;
    default:
      i$valstack[i$valstack_base + 4] = 0;
      i$valstack[i$valstack_base + 4] = i$valstack[i$valstack_base + 2] == i$valstack[i$valstack_base + 4];
      i$CALL(_idris_Main_46_run_58_next_58_4$0,[oldbase,myoldbase]);
      if (i$valstack[i$valstack_base + 4] == 0) {
        i$valstack[i$valstack_base + 4] = i$CON$0;
      } else {
        i$valstack[i$valstack_base + 4] = i$CON$1;
      };
  };
}
var _idris__95_Prelude_46_Strings_46_unpack_95_with_95_20$4 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$ret = new i$CON(1,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 4]],null,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__95_Prelude_46_Strings_46_unpack_95_with_95_20$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris__95_Prelude_46_Strings_46_unpack_95_with_95_20$4,[oldbase,myoldbase]);
  i$CALL(_idris__95_Prelude_46_Strings_46_unpack_95_with_95_20,[myoldbase]);
}
var _idris__95_Prelude_46_Strings_46_unpack_95_with_95_20$5 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
}
var _idris__95_Prelude_46_Strings_46_unpack_95_with_95_20$6 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
}
var _idris__95_Prelude_46_Strings_46_unpack_95_with_95_20$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
  i$CALL(_idris__95_Prelude_46_Strings_46_unpack_95_with_95_20$3,[oldbase,myoldbase]);
  switch(i$valstack[i$valstack_base + 5].tag){
    case 0:
      i$valstack[i$valstack_base + 6] = i$valstack[i$valstack_base + 5].args[0];
      i$valstack[i$valstack_base + 7] = null;
      i$valstack[i$valstack_base + 8] = null;
      i$valstack[i$valstack_base + 9] = i$valstack[i$valstack_base + 3][0];
      i$valstack[i$valstack_base + 10] = i$valstack[i$valstack_base + 3].substr(1,i$valstack[i$valstack_base + 3].length - 1);
      i$valstack[i$valstack_base + 9] = new i$CON(1,[i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10]],null,null);
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 7];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 8];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 9];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 3;
      i$CALL(_idris__95_Prelude_46_Strings_46_unpack_95_with_95_20$5,[oldbase,myoldbase]);
      i$CALL(_idris_really_95_believe_95_me,[myoldbase]);
      break;
    case 1:
      i$valstack[i$valstack_base + 6] = i$valstack[i$valstack_base + 5].args[0];
      i$valstack[i$valstack_base + 7] = null;
      i$valstack[i$valstack_base + 8] = null;
      i$valstack[i$valstack_base + 9] = i$CON$0;
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 7];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 8];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 9];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 3;
      i$CALL(_idris__95_Prelude_46_Strings_46_unpack_95_with_95_20$6,[oldbase,myoldbase]);
      i$CALL(_idris_really_95_believe_95_me,[myoldbase]);
      break;
  };
}
var _idris__95_Prelude_46_Strings_46_unpack_95_with_95_20$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris__95_Prelude_46_Strings_46_unpack_95_with_95_20$2,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Either_46_choose,[myoldbase]);
}
var _idris__95_Prelude_46_Strings_46_unpack_95_with_95_20$0 = function(oldbase,myoldbase){
  i$CALL(_idris__95_Prelude_46_Strings_46_unpack_95_with_95_20$1,[oldbase,myoldbase]);
  switch(i$valstack[i$valstack_base + 5].tag){
    case 0:
      i$valstack[i$valstack_base + 5] = i$CON$1;
      break;
    case 1:
      i$valstack[i$valstack_base + 5] = i$CON$0;
      break;
  };
}
var _idris__95_Prelude_46_Strings_46_unpack_95_with_95_20 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 9;
  switch(i$valstack[i$valstack_base + 1].tag){
    case 1:
      i$PROJECT(i$valstack[i$valstack_base + 1],2,2);
      i$valstack[i$valstack_base + 4] = null;
      i$valstack[i$valstack_base + 5] = "";
      i$valstack[i$valstack_base + 5] = i$valstack[i$valstack_base + 3] == i$valstack[i$valstack_base + 5];
      i$CALL(_idris__95_Prelude_46_Strings_46_unpack_95_with_95_20$0,[oldbase,myoldbase]);
      if (i$valstack[i$valstack_base + 5] == 0) {
        i$valstack[i$valstack_base + 5] = i$CON$0;
      } else {
        i$valstack[i$valstack_base + 5] = i$CON$1;
      };
      break;
    case 0:
      i$ret = i$CON$0;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris__64_Prelude_46_Classes_46_Ord_36_Char = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base] = i$CON$65861;
  i$valstack[i$valstack_base + 1] = i$CON$65863;
  i$valstack[i$valstack_base + 2] = i$CON$65865;
  i$ret = new i$CON(0,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],null,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__64_Prelude_46_Classes_46_Ord_36_Float = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base] = i$CON$65867;
  i$valstack[i$valstack_base + 1] = i$CON$65869;
  i$valstack[i$valstack_base + 2] = i$CON$65871;
  i$ret = new i$CON(0,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],null,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__64_Prelude_46_Classes_46_Ord_36_Int = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base] = i$CON$65873;
  i$valstack[i$valstack_base + 1] = i$CON$65875;
  i$valstack[i$valstack_base + 2] = i$CON$65877;
  i$ret = new i$CON(0,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],null,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_drawReport_95_case$5 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 13] = i$ret;
  i$valstack[i$valstack_base + 14] = new i$CON(65656,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 9]],_idris__123_APPLY0_125_$65656,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 13];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 14];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_Main_46_drawReport_95_case$4 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 14] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 13];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 14];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46_drawReport_95_case$5,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46_drawReport_95_case$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 18] = i$ret;
  i$valstack[i$valstack_base + 19] = 10;
  i$valstack[i$valstack_base + 18] = i$valstack[i$valstack_base + 18] - i$valstack[i$valstack_base + 19];
  i$valstack[i$valstack_base + 18] = new i$CON(0,[i$valstack[i$valstack_base + 18],i$valstack[i$valstack_base + 9]],null,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 14];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 15];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 16];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 17];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 18];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 5;
  i$CALL(_idris_Main_46_drawReport_95_case$4,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_centerText,[myoldbase]);
}
var _idris_Main_46_drawReport_95_case$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 18] = i$ret;
  i$valstack[i$valstack_base + 19] = 2;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 18];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 19];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46_drawReport_95_case$3,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46_drawReport_95_case$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 18] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 18];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 7];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46_drawReport_95_case$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46_drawReport_95_case$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 13] = i$ret;
  i$valstack[i$valstack_base + 14] = String(i$valstack[i$valstack_base]);
  i$valstack[i$valstack_base + 15] = 120;
  i$valstack[i$valstack_base + 16] = "Courier";
  i$valstack[i$valstack_base + 17] = 0;
  i$valstack[i$valstack_base + 18] = 0;
  i$valstack[i$valstack_base + 17] = new i$CON(0,[i$valstack[i$valstack_base + 17],i$valstack[i$valstack_base + 18]],null,null);
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46_drawReport_95_case$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Integral_36_Int_58__33_div_58_0,[myoldbase]);
}
var _idris_Main_46_play_95_case$4 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 16] = i$ret;
  i$valstack[i$valstack_base + 14] = new i$CON(65855,[i$valstack[i$valstack_base + 14],i$valstack[i$valstack_base + 15],i$valstack[i$valstack_base + 16]],_idris__123_APPLY0_125_$65855,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 13];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 14];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_Main_46_play_95_case$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 16] = i$ret;
  i$valstack[i$valstack_base + 17] = i$CON$0;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 16];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 17];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46_play_95_case$4,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46_play_95_case$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 16];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 17];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 18];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_Main_46_play_95_case$3,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_Main_46_play_95_case$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 13] = i$ret;
  i$valstack[i$valstack_base + 14] = null;
  i$valstack[i$valstack_base + 15] = null;
  i$valstack[i$valstack_base + 16] = null;
  i$valstack[i$valstack_base + 17] = null;
  i$CALL(_idris_Main_46_play_95_case$2,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base + 9],18,2);
;
}
var _idris_Main_46_play_95_case$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 13] = i$ret;
  i$valstack[i$valstack_base + 14] = null;
  i$valstack[i$valstack_base + 15] = new i$CON(65657,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 12],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65657,null);
  i$valstack[i$valstack_base + 16] = 16.666666666666668;
  i$valstack[i$valstack_base + 14] = new i$CON(65636,[i$valstack[i$valstack_base + 14],i$valstack[i$valstack_base + 15],i$valstack[i$valstack_base + 16]],_idris__123_APPLY0_125_$65636,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 13];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 14];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46_play_95_case$1,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46_run_95_case$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 10] = i$ret;
  i$valstack[i$valstack_base + 11] = new i$CON(65658,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65658,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 10];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 11];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_Main_46_run_95_case$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 11] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 10];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 11];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46_run_95_case$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46_run_95_case$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 10] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Main_46_run_95_case$1,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_drawReport,[myoldbase]);
}
var _idris_Main_46_Main_46_run_58_continueGame_58_1_95_case$2 = function(oldbase,myoldbase){
  switch(i$valstack[i$valstack_base + 10].tag){
    case 0:
      i$valstack[i$valstack_base + 11] = null;
      i$valstack[i$valstack_base + 12] = 2;
      i$valstack[i$valstack_base + 12] = new i$CON(2,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 12]],null,null);
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 11];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 12];
      i$SLIDE(2);
      i$valstack_top = i$valstack_base + 2;
      i$CALL(_idris_Main_46_run,[oldbase]);
      break;
    case 1:
      i$valstack[i$valstack_base + 11] = null;
      i$valstack[i$valstack_base + 12] = i$CON$3;
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 11];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 12];
      i$SLIDE(2);
      i$valstack_top = i$valstack_base + 2;
      i$CALL(_idris_Main_46_run,[oldbase]);
      break;
  };
}
var _idris_Main_46_Main_46_run_58_continueGame_58_1_95_case$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 10] = i$ret;
}
var _idris_Main_46_Main_46_run_58_continueGame_58_1_95_case$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 10] = i$ret;
  i$CALL(_idris_Main_46_Main_46_run_58_continueGame_58_1_95_case$2,[oldbase,myoldbase]);
  switch(i$valstack[i$valstack_base + 10].tag){
    case 0:
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 1;
      i$CALL(_idris_Main_46_Main_46_run_58_continueGame_58_1_95_case$3,[oldbase,myoldbase]);
      i$CALL(_idris_Main_46__123_case_32_block_32_in_32_Main_46_run_44__32_continueGame0_125_,[myoldbase]);
      break;
    case 1:
      i$valstack[i$valstack_base + 10] = i$CON$1;
      break;
  };
}
var _idris_Main_46_Main_46_run_58_continueGame_58_1_95_case$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 11] = 7;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 10];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 11];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46_Main_46_run_58_continueGame_58_1_95_case$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Classes_46__64_Prelude_46_Classes_46_Ord_36_Int_58__33__62__61__58_0,[myoldbase]);
}
var i$CON$0 = new i$CON(0,[],null,null);
var i$CON$1 = new i$CON(1,[],null,null);
var i$CON$2 = new i$CON(2,[],null,null);
var i$CON$3 = new i$CON(3,[],null,null);
var i$CON$65629 = new i$CON(65629,[],_idris__123_APPLY0_125_$65629,null);
var i$CON$65637 = new i$CON(65637,[],_idris__123_APPLY0_125_$65637,null);
var i$CON$65639 = new i$CON(65639,[],_idris__123_APPLY0_125_$65639,null);
var i$CON$65640 = new i$CON(65640,[],_idris__123_APPLY0_125_$65640,null);
var i$CON$65649 = new i$CON(65649,[],_idris__123_APPLY0_125_$65649,null);
var i$CON$65650 = new i$CON(65650,[],_idris__123_APPLY0_125_$65650,null);
var i$CON$65651 = new i$CON(65651,[],_idris__123_APPLY0_125_$65651,null);
var i$CON$65661 = new i$CON(65661,[],_idris__123_APPLY0_125_$65661,null);
var i$CON$65663 = new i$CON(65663,[],_idris__123_APPLY0_125_$65663,null);
var i$CON$65664 = new i$CON(65664,[],_idris__123_APPLY0_125_$65664,null);
var i$CON$65666 = new i$CON(65666,[],_idris__123_APPLY0_125_$65666,null);
var i$CON$65667 = new i$CON(65667,[],_idris__123_APPLY0_125_$65667,null);
var i$CON$65669 = new i$CON(65669,[],_idris__123_APPLY0_125_$65669,null);
var i$CON$65671 = new i$CON(65671,[],_idris__123_APPLY0_125_$65671,null);
var i$CON$65677 = new i$CON(65677,[],_idris__123_APPLY0_125_$65677,null);
var i$CON$65678 = new i$CON(65678,[],_idris__123_APPLY0_125_$65678,null);
var i$CON$65679 = new i$CON(65679,[],_idris__123_APPLY0_125_$65679,null);
var i$CON$65680 = new i$CON(65680,[],_idris__123_APPLY0_125_$65680,null);
var i$CON$65682 = new i$CON(65682,[],_idris__123_APPLY0_125_$65682,null);
var i$CON$65683 = new i$CON(65683,[],_idris__123_APPLY0_125_$65683,null);
var i$CON$65684 = new i$CON(65684,[],_idris__123_APPLY0_125_$65684,null);
var i$CON$65688 = new i$CON(65688,[],_idris__123_APPLY0_125_$65688,null);
var i$CON$65693 = new i$CON(65693,[],_idris__123_APPLY0_125_$65693,null);
var i$CON$65694 = new i$CON(65694,[],_idris__123_APPLY0_125_$65694,null);
var i$CON$65695 = new i$CON(65695,[],_idris__123_APPLY0_125_$65695,null);
var i$CON$65696 = new i$CON(65696,[],_idris__123_APPLY0_125_$65696,null);
var i$CON$65697 = new i$CON(65697,[],_idris__123_APPLY0_125_$65697,null);
var i$CON$65701 = new i$CON(65701,[],_idris__123_APPLY0_125_$65701,null);
var i$CON$65706 = new i$CON(65706,[],_idris__123_APPLY0_125_$65706,null);
var i$CON$65712 = new i$CON(65712,[],_idris__123_APPLY0_125_$65712,null);
var i$CON$65716 = new i$CON(65716,[],_idris__123_APPLY0_125_$65716,null);
var i$CON$65717 = new i$CON(65717,[],_idris__123_APPLY0_125_$65717,null);
var i$CON$65719 = new i$CON(65719,[],_idris__123_APPLY0_125_$65719,null);
var i$CON$65720 = new i$CON(65720,[],_idris__123_APPLY0_125_$65720,null);
var i$CON$65722 = new i$CON(65722,[],_idris__123_APPLY0_125_$65722,null);
var i$CON$65723 = new i$CON(65723,[],_idris__123_APPLY0_125_$65723,null);
var i$CON$65724 = new i$CON(65724,[],_idris__123_APPLY0_125_$65724,null);
var i$CON$65725 = new i$CON(65725,[],_idris__123_APPLY0_125_$65725,null);
var i$CON$65735 = new i$CON(65735,[],_idris__123_APPLY0_125_$65735,null);
var i$CON$65737 = new i$CON(65737,[],_idris__123_APPLY0_125_$65737,null);
var i$CON$65739 = new i$CON(65739,[],_idris__123_APPLY0_125_$65739,null);
var i$CON$65740 = new i$CON(65740,[],_idris__123_APPLY0_125_$65740,null);
var i$CON$65741 = new i$CON(65741,[],_idris__123_APPLY0_125_$65741,null);
var i$CON$65745 = new i$CON(65745,[],_idris__123_APPLY0_125_$65745,null);
var i$CON$65746 = new i$CON(65746,[],_idris__123_APPLY0_125_$65746,null);
var i$CON$65748 = new i$CON(65748,[],_idris__123_APPLY0_125_$65748,null);
var i$CON$65749 = new i$CON(65749,[],_idris__123_APPLY0_125_$65749,null);
var i$CON$65750 = new i$CON(65750,[],_idris__123_APPLY0_125_$65750,null);
var i$CON$65752 = new i$CON(65752,[],_idris__123_APPLY0_125_$65752,null);
var i$CON$65753 = new i$CON(65753,[],_idris__123_APPLY0_125_$65753,null);
var i$CON$65754 = new i$CON(65754,[],_idris__123_APPLY0_125_$65754,null);
var i$CON$65756 = new i$CON(65756,[],_idris__123_APPLY0_125_$65756,null);
var i$CON$65757 = new i$CON(65757,[],_idris__123_APPLY0_125_$65757,null);
var i$CON$65758 = new i$CON(65758,[],_idris__123_APPLY0_125_$65758,null);
var i$CON$65759 = new i$CON(65759,[],_idris__123_APPLY0_125_$65759,null);
var i$CON$65764 = new i$CON(65764,[],_idris__123_APPLY0_125_$65764,null);
var i$CON$65765 = new i$CON(65765,[],_idris__123_APPLY0_125_$65765,null);
var i$CON$65766 = new i$CON(65766,[],_idris__123_APPLY0_125_$65766,null);
var i$CON$65767 = new i$CON(65767,[],_idris__123_APPLY0_125_$65767,null);
var i$CON$65769 = new i$CON(65769,[],_idris__123_APPLY0_125_$65769,null);
var i$CON$65770 = new i$CON(65770,[],_idris__123_APPLY0_125_$65770,null);
var i$CON$65781 = new i$CON(65781,[],_idris__123_APPLY0_125_$65781,null);
var i$CON$65792 = new i$CON(65792,[],_idris__123_APPLY0_125_$65792,null);
var i$CON$65794 = new i$CON(65794,[],_idris__123_APPLY0_125_$65794,null);
var i$CON$65798 = new i$CON(65798,[],_idris__123_APPLY0_125_$65798,null);
var i$CON$65799 = new i$CON(65799,[],_idris__123_APPLY0_125_$65799,null);
var i$CON$65800 = new i$CON(65800,[],_idris__123_APPLY0_125_$65800,null);
var i$CON$65801 = new i$CON(65801,[],_idris__123_APPLY0_125_$65801,null);
var i$CON$65802 = new i$CON(65802,[],_idris__123_APPLY0_125_$65802,null);
var i$CON$65804 = new i$CON(65804,[],_idris__123_APPLY0_125_$65804,null);
var i$CON$65805 = new i$CON(65805,[],_idris__123_APPLY0_125_$65805,null);
var i$CON$65806 = new i$CON(65806,[],_idris__123_APPLY0_125_$65806,null);
var i$CON$65807 = new i$CON(65807,[],_idris__123_APPLY0_125_$65807,null);
var i$CON$65809 = new i$CON(65809,[],_idris__123_APPLY0_125_$65809,null);
var i$CON$65810 = new i$CON(65810,[],_idris__123_APPLY0_125_$65810,null);
var i$CON$65811 = new i$CON(65811,[],_idris__123_APPLY0_125_$65811,null);
var i$CON$65814 = new i$CON(65814,[],_idris__123_APPLY0_125_$65814,null);
var i$CON$65816 = new i$CON(65816,[],_idris__123_APPLY0_125_$65816,null);
var i$CON$65818 = new i$CON(65818,[],_idris__123_APPLY0_125_$65818,null);
var i$CON$65820 = new i$CON(65820,[],_idris__123_APPLY0_125_$65820,null);
var i$CON$65827 = new i$CON(65827,[],_idris__123_APPLY0_125_$65827,null);
var i$CON$65828 = new i$CON(65828,[],_idris__123_APPLY0_125_$65828,null);
var i$CON$65829 = new i$CON(65829,[],_idris__123_APPLY0_125_$65829,null);
var i$CON$65830 = new i$CON(65830,[],_idris__123_APPLY0_125_$65830,null);
var i$CON$65832 = new i$CON(65832,[],_idris__123_APPLY0_125_$65832,null);
var i$CON$65833 = new i$CON(65833,[],_idris__123_APPLY0_125_$65833,null);
var i$CON$65834 = new i$CON(65834,[],_idris__123_APPLY0_125_$65834,null);
var i$CON$65836 = new i$CON(65836,[],_idris__123_APPLY0_125_$65836,null);
var i$CON$65837 = new i$CON(65837,[],_idris__123_APPLY0_125_$65837,null);
var i$CON$65841 = new i$CON(65841,[],_idris__123_APPLY0_125_$65841,null);
var i$CON$65843 = new i$CON(65843,[],_idris__123_APPLY0_125_$65843,null);
var i$CON$65844 = new i$CON(65844,[],_idris__123_APPLY0_125_$65844,null);
var i$CON$65845 = new i$CON(65845,[],_idris__123_APPLY0_125_$65845,null);
var i$CON$65846 = new i$CON(65846,[],_idris__123_APPLY0_125_$65846,null);
var i$CON$65847 = new i$CON(65847,[],_idris__123_APPLY0_125_$65847,null);
var i$CON$65849 = new i$CON(65849,[],_idris__123_APPLY0_125_$65849,null);
var i$CON$65850 = new i$CON(65850,[],_idris__123_APPLY0_125_$65850,null);
var i$CON$65861 = new i$CON(65861,[],_idris__123_APPLY0_125_$65861,null);
var i$CON$65863 = new i$CON(65863,[],_idris__123_APPLY0_125_$65863,null);
var i$CON$65865 = new i$CON(65865,[],_idris__123_APPLY0_125_$65865,null);
var i$CON$65867 = new i$CON(65867,[],_idris__123_APPLY0_125_$65867,null);
var i$CON$65869 = new i$CON(65869,[],_idris__123_APPLY0_125_$65869,null);
var i$CON$65871 = new i$CON(65871,[],_idris__123_APPLY0_125_$65871,null);
var i$CON$65873 = new i$CON(65873,[],_idris__123_APPLY0_125_$65873,null);
var i$CON$65875 = new i$CON(65875,[],_idris__123_APPLY0_125_$65875,null);
var i$CON$65877 = new i$CON(65877,[],_idris__123_APPLY0_125_$65877,null);
var i$CON$65878 = new i$CON(65878,[],_idris__123_APPLY0_125_$65878,null);
var i$CON$65879 = new i$CON(65879,[],_idris__123_APPLY0_125_$65879,null);
var i$CON$65880 = new i$CON(65880,[],_idris__123_APPLY0_125_$65880,null);
var i$CON$65882 = new i$CON(65882,[],_idris__123_APPLY0_125_$65882,null);
var i$CON$65883 = new i$CON(65883,[],_idris__123_APPLY0_125_$65883,null);
var i$CON$65884 = new i$CON(65884,[],_idris__123_APPLY0_125_$65884,null);
var i$CON$65886 = new i$CON(65886,[],_idris__123_APPLY0_125_$65886,null);
var i$CON$65888 = new i$CON(65888,[],_idris__123_APPLY0_125_$65888,null);
var i$CON$65892 = new i$CON(65892,[],_idris__123_APPLY0_125_$65892,null);
var i$CON$65893 = new i$CON(65893,[],_idris__123_APPLY0_125_$65893,null);
var i$CON$65894 = new i$CON(65894,[],_idris__123_APPLY0_125_$65894,null);
var i$CON$65895 = new i$CON(65895,[],_idris__123_APPLY0_125_$65895,null);
var i$CON$65896 = new i$CON(65896,[],_idris__123_APPLY0_125_$65896,null);
var i$CON$65897 = new i$CON(65897,[],_idris__123_APPLY0_125_$65897,null);
var i$CON$65900 = new i$CON(65900,[],_idris__123_APPLY0_125_$65900,null);
var i$CON$65902 = new i$CON(65902,[],_idris__123_APPLY0_125_$65902,null);
var i$CON$65903 = new i$CON(65903,[],_idris__123_APPLY0_125_$65903,null);
var i$CON$65904 = new i$CON(65904,[],_idris__123_APPLY0_125_$65904,null);
var i$CON$65905 = new i$CON(65905,[],_idris__123_APPLY0_125_$65905,null);
var i$CON$65906 = new i$CON(65906,[],_idris__123_APPLY0_125_$65906,null);
var i$CON$65908 = new i$CON(65908,[],_idris__123_APPLY0_125_$65908,null);
var i$CON$65909 = new i$CON(65909,[],_idris__123_APPLY0_125_$65909,null);
var i$CON$65913 = new i$CON(65913,[],_idris__123_APPLY0_125_$65913,null);
var main = function(){
if (typeof document != "undefined" && (document.readyState == "complete" || document.readyState == "loaded")) {
    var vm = new i$VM();
    i$SCHED(vm);
    _idris__123_runMain0_125_(new i$POINTER(0));
    while (i$callstack.length) {
      var func = i$callstack.pop();
      var args = i$callstack.pop();
      func.apply(this,args);
    };
  } else if (typeof window != "undefined") {
    window.addEventListener("DOMContentLoaded",function(){
  var vm = new i$VM();
  i$SCHED(vm);
  _idris__123_runMain0_125_(new i$POINTER(0));
  while (i$callstack.length) {
    var func = i$callstack.pop();
    var args = i$callstack.pop();
    func.apply(this,args);
  };
}
,false);
  } else if (true) {
    var vm = new i$VM();
    i$SCHED(vm);
    _idris__123_runMain0_125_(new i$POINTER(0));
    while (i$callstack.length) {
      var func = i$callstack.pop();
      var args = i$callstack.pop();
      func.apply(this,args);
    };
  }
}
main()
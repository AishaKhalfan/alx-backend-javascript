let log = console.log;

let a = 5;
let b = 50;

let a1 = (function (){ return 5 })()
let b1 = (function (){ return 50 })()

log( a1 );
log( b1 );

let a2 = function(num){ return 5*num }
let b2 = function() { return 50}

log(a2(b2()) );

let a3 = 100;
setTimeout( function(){ a3++; log(a3) }, 0);
log(a3);
setTimeout( function(){ log(a3) }, 0)

let p = new Promise(function(resolve, reject){
  setTimeout( function(){
    resolve("Yo!");
  }, 0)	  
});
log(p);
setTimeout(function(){
  log(p); 
}, 10);
log(p);

p.then(function(val){
  log(val);
})

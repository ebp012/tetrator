const qs = (selector) => document.querySelector(selector);
      const qsa = (selector) => document.querySelectorAll(selector);
var base = 2;
var exp = 3;



function tet(q,p) {
  var b = q;
  var ans = b;
  if (p == 1) ans = b;
  if (p >= 1 && p%1 == 0) {
    for (var j = 2; j <= p && ans <= 2**1024; j++) {
      ans = b ** ans;
    }
    //if (ans > 2n**1024n) ans = Infinity;
  }
  if (p < 1 && p%1 == 0) {
    for (var j = 1; j > p && ans <= 2**1024; j--) {
      ans = Math.log(ans) / Math.log(b);
    }
    //if (ans > 2n**1024n) ans = Infinity;
  }
  if (Number.isFinite(ans) == false) Infinity;
  return ans;
}


qs('#basebox').addEventListener('input', function () {
  takeInputs();
});

qs('#expbox').addEventListener('input', function () {
  takeInputs();
});

function takeInputs () {
  base = qs('#basebox').value;
  qs('#baseval').innerHTML = base;
  exp = qs('#expbox').value;
  qs('#expval').innerHTML = base;
  
  if (qs('#basebox').value + 1 != NaN && this.value != '') qs('#baseval').innerHTML = qs('#basebox').value;
  else qs('#baseval').innerHTML = 'b';
  
  qs('#answer').innerHTML = tet(base, exp);
  
  for (var i = -1; i <= 4; i++) {
    qs('#y' + i.toString()).innerHTML = tet(base,i);
  }
}

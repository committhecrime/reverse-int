module.exports = function reverse (n) {

    if(n < 0){
        let a = n * (-1);
        let b = a.toString().split("");
        let c = b.reverse();
        let d = c.join('');
        let res = +d;
        return res;
    }else {
        let b = n.toString().split("");
        let c = b.reverse();
        let d = c.join('');
        let res = +d;
        return res;
      }
    }
  

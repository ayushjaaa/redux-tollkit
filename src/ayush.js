  var obj  ={
        name:"hsrsh"
    }
function name(a,b) {
  
    console.log(this,a,b)
}
name.apply(true,[1,2])
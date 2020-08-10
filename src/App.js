import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
const arr=[1,2,3]




  const string1='//ff/////a/'
const string2='/http///a/bs/f/////g'
const string3='/gt/hop/lola/'

const temp=string2.split('')
for(let i =0;i<temp.length;i++){
  if(temp[i]===temp[i+1])
temp[i+1]=''
  console.log('true')
}
console.log('temp', temp)



const pureFn=(string)=>{
  const pure=string.split('//')
  const result = pure.reduce((sum, current)=> {
    return sum + current;
  }, );
return result
}

// const res=pureFn(string3)
// console.log('res', res)

const res= string3.split('').every(function(item, i, list) { return item === list[i]; }); // false
console.log('res', res)




/////////////////////////////////////////////////////////////////


// const string1='nextjs/kabinet'
// const string2='/kabinet'
// const pureFn=(string)=>{
// const testArray=['next','js','lost']
// const find= testArray.some((entry)=> string.includes(entry));
// const flag= find?false:true
// return flag
// }
// const pure=pureFn(string2)

  return (
    <div className="App">
 
    </div>
  );
}

export default App;

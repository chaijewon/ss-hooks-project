import React from 'react';
import logo from './logo.svg';
import './App.css';
// props
function App() {
  return (
    /*<MyComponent name={"홍길동"} sex={"남자"}/>*/
      <MyComponent>데이터</MyComponent>
  );
  // <MyComponent></MyComponent>
}

function MyComponent(props) {
   return (
       <h1>안녕하세요 , {props.name},{props.sex}입니다</h1>
   )
}

// default Props
MyComponent.defaultProps={
    name:'심청이',
    sex:'여자'
}
export default App;

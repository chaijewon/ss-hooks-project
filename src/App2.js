import React from "react";
import ProtoTypes from 'prop-types'

/*
    bool : The prop should be a Boolean.  isOpen:1 => true/false
    number : The prop should be a number. age:삼  => sex:3
    string : The prop should be a string.
    array : The prop should be an array.  []
    object : The prop should be an object. {}
 */
/*
      1) 데이터 받기
         = 속성(props) => 변경이 없는 값
         = 상태(state) => 변경이 가능한값
      2) 데이터 저장
      3) 필요한 컴포넌트에 데이터 전송
          ===> props이용해서 전송
      ======================= MainComponent (App)
      4) 화면 출력 => SubComponent

      <App name="aaa"/>
      props,state => 작성요령 => JSON
      props,state=> Object단위
      => var s={}
      function App(props) => props={name:'aaa'}
      {
           props.name
      }
 */
function App2(){
   return (
       <MyComponent>React-Redux</MyComponent>
   )
}

function MyComponent(props){
    return (
        <div>
            <h1>이름:{props.name},나이:{props.age}</h1>
            <h2>데이터값:{props.children}</h2>
        </div>
    )
}

/*MyComponent.defaultProps={
    name:'',
    age:'이십'
}*/
MyComponent.propTypes={
    name:ProtoTypes.string.isRequired,
    age:ProtoTypes.number
}
export default App2;
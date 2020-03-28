import React,{useState} from "react";
/*
      React : 화면 UI
        1) 생명주기
           componentDidMount() : 가상돔에 데이터를 출력 (window.onload)
           setState({}) => render()
        2) 변수 : props,state
           props => <App name="">
           state => setState({page:2}) => render()를 호출해서 화면 변경
                    this.state.page=1 => 값만 변경
        3) 이벤트
              => bind를 이용해서 처리
              => onclick=>이벤트 처리 불가능
                 => onClick,onChange , onKeyPress
                 등록
                 this.onChange=this.onChange.bind(this)
        4) proto-types
                 number :
                 string
                 object
                 func
                 array
                 => isRequired
        5) JSX : XML형식으로 코딩
      Hooks
        = useState
        = useMemo / useCallback
        = useContext
        = useReducer
        = 사용자 정의 Hooks
        = useEffect
      Redux
        = actions
        = reduers
        = store
        = components
        = index.js

        ==> 동기/비동기
            react-thunk => 미들웨어  async function()
                                     {
                                         function a(){
                                         }
                                          useEffect(a(),[name])
                                     }
      FrameWork
        =>
         react-saga => 포인터 (함수)
         mobx => annotation
 */
function Hooks_useState() {
   // state설정
    /*
         class App3 extends Component
         {
             state={
                변경되는 데이터 설정
                name:''
                data:[]
             }

             constructor(props)
             {
                 this.state={
                    name:'',
                    data:[]
                 }
             }

         }


         function
          = function App3()
            {
               const [name,setName]=useState('')
                                         ======== 값
               const [data,setData]=useState([])
            }

            class A
            {
               private String name;
               public void setName(String name)
               {
                  this.name=name
               }
            }
     */
    const [name,setName]=useState('');
    const [nickname,setNickname]=useState('');
    // 이벤트 처리
    const onChangeName=(e)=>{
        setName(e.target.value)
    }
    const onChangenickname=e=>{
        setNickname(e.target.value)
    }
    return (
        <div>
            <div>
                <input type={"text"} value={name} onChange={onChangeName}/>
                <input typs={"text"} value={nickname} onChange={onChangenickname}/>
            </div>
            <div>
                <div>
                    <b>이름:{name}</b>
                </div>
                <div>
                    <b>닉네임:{nickname}</b>
                </div>
            </div>
        </div>
    )

}
export default Hooks_useState;
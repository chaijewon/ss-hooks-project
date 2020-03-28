import React,{useState,useEffect} from "react";
/*
    useEffect
      => componentDidMount(),componentWillMount()=>16버전 => 종료
      => 외부 데이터 읽기
         axios
         fetch
 */
import axios from 'axios'
function Hooks_useEffect() {
   const [music,setMusic]=useState([]);
   const [detail,setDetail]=useState({});
   const [movie,setMovie]=useState([]);
   //var music=[];
    // 화면 출력 전에 데이터를 읽을때 사용
    //  async ==> await => 비동기 (react-thunk => 비동기 react-saga)
    /*
        <% %> useEffect

        <html>
     */
   useEffect(()=>{
       const fatchData=async ()=>{
           const result=await axios("http://localhost:3000/music.json")
           console.log(result.data);
           setMusic(result.data);
       }
       fatchData();
   },[])
    useEffect(()=>{
        const fatchData=async ()=>{
            const result=await axios("http://localhost:3000/movie.json")
            console.log(result.data);
            setMovie(result.data);
        }
        fatchData();
    },[])
    {/* 이벤트 발생시 데이터값 state에 채우는 방식
        onClick={()=>setDetail(m)}
    */}
    const html=music.map((m)=>

        <tr //onClick={()=>setDetail(m)}
        >
            <td>{m.rank}</td>
            <td><img src={m.poster} width={"30%"} height={"30%"}/></td>
            <td>{m.title}</td>
            <td>{m.singer}</td>
        </tr>
    )
    return (
        <div className={"contanier"}>
            <div className={"row"}>
                <div className={"col-md-6"}>
                <table className={"table table-hover"}>
                    <thead>
                      <tr className={"danger"}>
                          <th>순위</th>
                          <th></th>
                          <th>곡명</th>
                          <th>가수명</th>
                      </tr>
                    </thead>
                    <tbody>
                     {html}
                    </tbody>
                </table>
                </div>
                <div className={"col-md-6"}>
                  {/*<Detail m={detail}/>*/}
                  <Movie movie={movie}/>
                </div>
            </div>
        </div>
    )

}
function Movie(props) {
    const html=props.movie.map((m)=>
      <tr>
          <td><img src={m.poster} width={"30"} height={"30"}/></td>
          <td>{m.title}</td>
          <td>{m.director}</td>
          <td>{m.actor}</td>
      </tr>
    )
    return (
        <table className={"table table-hover"}>
            <thead>
              <tr className={"success"}>
                  <th></th>
                  <th>영화명</th>
                  <th>감독</th>
                  <th>출연</th>
              </tr>
            </thead>
            <tbody>
            {html}
            </tbody>
        </table>
    )
}
function Detail(props) {
    return (
        <table className={"table"}>
            <tr>
                <td className={"text-center"} colSpan={"2"}>
                    <iframe src={"http://youtube.com/embed/"+props.m.key} width={"500"} height={"350"}></iframe>
                </td>
            </tr>
            <tr>
                <td>곡명</td>
                <td>{props.m.title}</td>
            </tr>
            <tr>
               <td>가수명</td>
               <td>{props.m.singer}</td>
            </tr>
            <tr>
                <td>앨범</td>
                <td>{props.m.album}</td>
            </tr>

        </table>
    )

}
export default Hooks_useEffect;
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
   //var music=[];
   useEffect(()=>{
       const fatchData=async ()=>{
           const result=await axios("http://localhost:3000/music.json")
           console.log(result.data);
           setMusic(result.data);
       }
       fatchData();
   },[])

    const html=music.map((m)=>
        <tr onClick={()=>setDetail(m)}>
            <td>{m.rank}</td>
            <td><img src={m.poster} width={"30%"} height={"30%"}/></td>
            <td>{m.title}</td>
            <td>{m.singer}</td>
        </tr>
    )
    return (
        <div className={"contanier"}>
            <div className={"row"}>
                <div className={"col-md-8"}>
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
                <div className={"col-md-4"}>
                  <Detail m={detail}/>
                </div>
            </div>
        </div>
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
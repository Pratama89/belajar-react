import { useState } from 'react'
import Header from './components/header';


function App() {
  const students = ['Kirana', 'Amir', 'Mushab'];
        const [likes, setLikes] = useState(0);
        const [angka, setAngka] = useState(0);

        function handleClick() {
          setLikes(likes + 1);
        }

        function Tombol ({title}){
          if(angka == 10 || angka < 0){
            return(
              <button onClick={title == "-" ? Kurang : Tambah} disabled >{title ? title : ""}</button>
            )
          } else {
            return(
              <button onClick={title == "-" ? Kurang : Tambah}>{title ? title : ""}</button>
            )
          }
        }

        function Tambah(){
          setAngka(angka + 1);
        }
        function Kurang(){
          setAngka(angka - 1);
        }
        function Reset(){
          setAngka(0);
        }

        function ResetButton(){
          if(angka == 10 || angka < 0) {
            return(
              <button onClick={Reset}> Reset </button>
            )
          } else {
            return(
              <button onClick={Reset} disabled> Reset </button>
            )
          }
        }

        
        return (
        <div>
          <Header nama="Pharmadental Supply"/>
          <ul>
            {
              students.map((student) => (
                <li key={student}>{student}</li>
              ))
            }  
          </ul>
          <button onClick={handleClick}>Like ({likes})</button>

          <br />
          <br />

          <Tombol title="-" />
            <span> {angka==10 || angka < 0 ? "Done" : angka} </span>
            <Tombol title="+" />
            <br />
            <br />
            <ResetButton />
        </div>          
        );
}

export default App

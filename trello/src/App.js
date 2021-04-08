import './App.css';
import React ,{useState}from 'react'
import Modal from 'react-modal'
import Tab from './components/Tab';
import Col from './components/Col';
import { v1 as uuidv1 } from 'uuid';

Modal.setAppElement('#root')
function App() {
  const [datas,setDatas] = useState([])
  const [title,setTitle] = useState('')
  const [description,setDescription] = useState('')
  const [avatar,setAvatar] = useState('')
  const [modal,setModal] = useState(false)
  
  const [status,setStatus] = useState('')




  const submit = (evt) =>{
    evt.preventDefault();
    const id = uuidv1();
    let data = {
      status,title,description,avatar,id
    }
    
    datas.push(data)
    setDatas(datas)
    console.log(datas)

    
  }
  return  <div className="App">
      <main className="flexbox" >
          <Col id="col_1" className="col">
            <h2>Backlog</h2>
            <button onClick={()=>{setModal(true);setStatus("Backlog")}} >+</button>
              {datas.map((data,i)=>(
            <Tab id={data.id} className="tab" draggable="true" key={i} data={ data.status==="Backlog"? data:null}>
                  
            </Tab>
            ))}
          </Col>
          <Col id="col_2" className="col">
            <h2>Todo</h2>
            <button onClick={()=>{setModal(true);setStatus("Todo")}} >+</button>
              { datas.map((data,i)=>(
            <Tab id={data.id} className="tab" draggable="true" key={i} data={data.status==="Todo"? data:null}>
                  
            </Tab>
            ))}
          </Col>
          <Col id="col_3" className="col">
            <h2>InProgress </h2>
            <button onClick={()=>{setModal(true);setStatus("Inprogress")}} >+</button>
              { datas.map((data,i)=>(
            <Tab id={data.id} className="tab" draggable="true" key={i} data={data.status==="Inprogress"? data: null}>
                  
            </Tab>
            ))}
          </Col>
          <Col id="col_4" className="col">
            <h2>Done</h2>
            <button onClick={()=>{setModal(true);setStatus("Done")}} >+</button>
              { datas.map((data,i)=>(
            <Tab id={data.id} className="tab" draggable="true" key={i} data={data.status==="Done"? data:null}>
                  
            </Tab>
            ))}
          </Col>
         
          <Modal isOpen={modal} onRequestClose={()=>setModal(false)}>
          <button onClick={()=>setModal(false)} >X</button>
          <form onSubmit={submit}>
            <input type='text' className='input_title' value={title} onChange={e=>setTitle(e.target.value)} maxLength="19"/>
            <textarea className='descriptionbox' value={description} onChange={e=>setDescription(e.target.value)}/>
            <input type='file' className="imageFile"  value={avatar}onChange={e=>setAvatar(e.target.value.url)}/>
            <input type="hidden" className="tab_status" value={status} />
            <input type="submit" value="Submit" />
          </form>
          </Modal>
          
      </main>
    </div>
  ;
}

export default App;

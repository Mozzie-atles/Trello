import React ,{useState}from 'react'
import Modal from 'react-modal'

function Tab(props) {
    const [modal,setModal] = useState(false)
    
    const drag = (e) =>{
        e.dataTransfer.setData('tab_id',e.target.id);


    }

    const cantDrop = (e)=>{
        e.stopPropagation();
    }


    if(props.data===null){
        return <div>

        </div>
    }else{
        const avatar = String(props.data.avatar)
        console.log(avatar)
        return <div id={props.id} className={props.className} draggable="true" onDragStart={drag} onDragOver={cantDrop} onClick={()=>setModal(true)}>
                <h1>{props.data.title}</h1>
                <div>
                <Modal isOpen={modal} onRequestClose={()=>setModal(false)}>
                <button onDoubleClick={()=>setModal(false)} >X</button>
                    <input type="text" value = {props.data.title} maxLength="19"/>
                    <img src={avatar}  width="300" height="300"/>
                    <textarea value={props.data.description}/>
                </Modal>
                </div>
        </div>
        
    }
}

export default Tab

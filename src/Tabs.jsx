import React from 'react'
import { useState } from 'react'
import './Tabs.css'

function Tabs() {
    const tabs=[{id:1,name:"TAB1",content:"tab 1 content"},
                {id:2,name:"TAB2",content:"tab 2 content"},
                {id:3,name:"TAB3",content:"tab 3 content"},
                {id:4,name:"TAB4",content:"tab 4 content"}]

    const [active,setactive]=useState(()=>{return JSON.parse(localStorage.getItem("activeTab"))||1})

    const clickTabHandler=(id)=>{
        setactive(id);
        localStorage.setItem("activeTab",JSON.stringify(id));
         }
 
     return (

        <div className="container">
            <h1>Tabs Component With React</h1>
            <div className="tabs">
                {tabs.map(tab=><button key={tab.id} className={`tab ${tab.id===active?'active':''}`} onClick={()=>clickTabHandler(tab.id)}>{tab.name}</button>)}
            </div>
            <div className="content">
                <h2>content{active}</h2>
                <p>{(tabs.find(tab=>tab.id===active)).content}</p>
            </div>
        </div>
   
    )
}

export default Tabs
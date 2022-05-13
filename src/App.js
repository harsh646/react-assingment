import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header";
import Lists from "./MyComponents/Lists";
import AddList from "./MyComponents/AddList";
import React, { useState } from 'react';

function App() {
  const onDelete=(list)=>{
    console.log("deleted on",list)
    setLists(lists.filter((e)=>{
      return e!==list;
    }))
  }
  const addList=(name)=>{
    console.log("add",name)
    let sno
    if(lists.length==0)
    {
      sno=0

    }
    else
    {
      sno=lists[lists.length-1].sno+1;

    }
    const mylist={
      sno:sno,
      name:name,
    }
    setLists([...lists,mylist]);

  }
  const [lists, setLists]=useState([
    {
      sno:1,
      name:"Chilman mehrotra",
      des:"Client Manager"
    },
    {
      sno:2,
      name:"Saboor Sirwal",
      des:"Recruitment Success"
    },
    {
      sno:3,
      name:"Smriti Wadhwa",
      des:""
    }
  ])

  return (
  <>

  <Header/>
  <AddList addList={addList}/>
  <Lists lists={lists} onDelete={onDelete}/>
  </>
  );
}

export default App;

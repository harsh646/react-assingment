import React from 'react'
import ListItem from "../MyComponents/ListItem";

export default function Lists(props) {
  return (
    <div className='con3'>
      <div className='con8'>
      {props.lists.length===0?"No member to display":
      props.lists.map((list)=>{
        return (<ListItem list={list} key={list.sno}onDelete={props.onDelete}/>)

      })
        }
        </div>
    </div>
  )
}

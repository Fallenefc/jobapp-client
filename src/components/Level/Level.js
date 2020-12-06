import React from 'react';
import './styles.css'

export default function Level({name, selected, toggleSelected, index}) {
  return (
    <button type="button" onClick={() => toggleSelected(name, index)} className={index === selected ? 'chosen' : 'not-chos'}>
      {name}
    </button>
  )
}

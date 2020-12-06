import React from 'react';
import './styles.css'

export default function Tags({name, selected, toggleSelected}) {
  return (
    <button type="button" onClick={() => toggleSelected(name)} className={`selected-${selected}`}>
      {name}
    </button>
  )
}

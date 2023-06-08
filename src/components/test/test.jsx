import React from 'react'

function Testcomp({ isDarkMode, toggleDarkMode }) {
    console.log(isDarkMode);
  return (
    <div>
        {isDarkMode}
        <button onClick={toggleDarkMode}>toggle theme</button>
        hi every one
    </div>
  )
}

export default Testcomp
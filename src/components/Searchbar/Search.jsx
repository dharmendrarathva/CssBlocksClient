import React from 'react'
import './Search.css'
import { IoIosSearch } from "react-icons/io";

const Search = () => {
  return (
    <div>
    <form className="form">
<IoIosSearch className="search-icon" />

      <input className="input" placeholder="Search Cards , Buttons , Components etc..." required="" type="text"/>
      <button className="reset" type="reset">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
      </button>
  </form>

    </div>

  )
}

export default Search
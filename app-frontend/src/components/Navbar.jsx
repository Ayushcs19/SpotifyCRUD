import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <div>
 <div>
  <style dangerouslySetInnerHTML={{__html: "\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color:grey;\n}\n\nli {\n  float: left;\n}\n\nli a {\n  display: block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\nli a:hover:not(.active) {\n  background-color: #111;\n}\n\n.active {\n  background-color: #04AA6D;\n}\n" }} />
  <ul>
   <li><Link to="/">Home</Link></li>
    <li style={{float:"right"}} >
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/></li>
  </ul>
</div>

</div>
  )
}




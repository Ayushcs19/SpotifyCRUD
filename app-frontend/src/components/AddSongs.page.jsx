import React from 'react'
import { Link } from 'react-router-dom'

export default function AddSongs() {
  return (
    <div>
      <h2 style={{margin:'17px'}}>Adding a new song</h2>
     
    <form style={{
        grid:''
    }}>
  <div class="form-group d-flex flex-row" style={{
      gap:'80px'
  }}>
    
    <label for="songName">Song Name</label>
    <input type="text" class="form-control" style={{
        minWidth:'200px',
        maxWidth:'400px',marginLeft:'56px'
    }} id="songName" aria-describedby="songName" placeholder="" />
  </div>
  <div class="form-group d-flex flex-row"  style={{
      gap:'110px' 
  }}>
    <label for="dateReleased">Date Relaeased</label>
    <input type="text" class="form-control" id="dateReleased" style={{
        minWidth:'200px',
        maxWidth:'400px'
    }} placeholder="" />
  </div>
  <div class="form-group d-flex flex-row"  style={{
      gap:'80px'
  }}>
    <label for="Artwork" class="custom-upload">Artwork</label>
    <input type="file" class="form-control" placeholder="hello" style={{
        minWidth:'200px',
        maxWidth:'400px',marginLeft:'81px'
    }} id="Artwork"  />
  </div>
  <div class="form-group d-flex flex-row"  style={{
      gap:'80px'
  }}>
    <label for="Artist">Artist</label>
    <select class="form-control" style={{
        minWidth:'200px',
        maxWidth:'400px',marginLeft:'100px'
    }} id="Artist">
        <option>AP Dhillon</option>
      <option>Lewis Capaldi</option>
      <option>Sidhu Moose Wala</option>
      <option>Quavo</option>
      <option>Juice WRLDloc</option>
    </select>
    <Link to="/addartist" className='btn btn-primary'>Add Artist </Link>
  </div>
  <div class="form-group form-check">
    <input type="button" class="btn btn-primary" id="exampleCheck1" value="cancel" style={{marginLeft:'-23px'}} />
    <input type="button" class="btn btn-secondary" id="exampleCheck1" value="save"  style={{marginLeft:'6px'}}/>
  </div>
  <button type="submit" class="btn btn-primary" style={{marginTop:'5px'}}>Submit</button>
</form>

    </div>
  )
}

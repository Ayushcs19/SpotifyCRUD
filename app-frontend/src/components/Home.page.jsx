import { Button } from "bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const data = {
    headings: ["Artwork", "Song", "Date of Release", "Artist", "Rate"],
    artists: [{
        name:'Justin Bieber',
        song:'Sorry',
        date:'5th sept 2022',
        image:'hi',

    },
    {
        name:'Atif',
        song:'Dilbar',
        date:'9th dec 2022',
        image:'hi',

    },
    {
        name:'Arjit',
        song:'Tum hi ho',
        date:'12th april 2019',
        image:'hi',

    },
    {
        name:'Sidhu Moose Wala',
        song:'Devil',
        date:'29th Mar 2018',
        image:'hi',

    },
    {
      name:'Sidhu Moose Wala',
      song:'Devil',
      date:'29th Mar 2018',
      image:'hi',

  },    {
    name:'Sidhu Moose Wala',
    song:'Devil',
    date:'29th Mar 2018',
    image:'hi',

},    {
  name:'Sidhu Moose Wala',
  song:'Devil',
  date:'29th Mar 2018',
  image:'hi',

},    {
  name:'Sidhu Moose Wala',
  song:'Devil',
  date:'29th Mar 2018',
  image:'hi',

},    {
  name:'Sidhu Moose Wala',
  song:'Devil',
  date:'29th Mar 2018',
  image:'hi',

},    {
  name:'Sidhu Moose Wala',
  song:'Devil',
  date:'29th Mar 2018',
  image:'hi',

},
    
],
  };
  const {openModal, setOpenMadal} = useState(false);
  const headings = data.headings;
  const artists = data.artists;
  return (
    <div>
     <div>
  <h2 style={{marginLeft:'50px'}}> Top 10 Song</h2>
      <Link to="/addsongs" className="btn btn-success" style={{float:'right' , marginTop:'-30px'}}> +  Add Songs</Link>
      <table class="table table-Light" style={{
}}>
        <thead>
          <tr style={{backgroundColor:'black',color:'white'} }>
            {
                headings.map((heading) => {
                    return <th scope="col">{heading}</th>
                })
            }  
          </tr>
        </thead>
        <tbody>
          {artists.map((artist) => {
              return <tr>
                  <th>artwork</th>
                  <th>{artist.song}</th>
                  <th>{artist.date}</th>
                  <th>{artist.name}</th>
                  <th>rate</th>
              </tr>
          })}  
          {/* <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr> */}
        </tbody>
      </table>
      </div>
    </div>
  );
}

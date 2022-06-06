import React from 'react'

function ToptenArtist() {
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
          name:'Honey singh',
          song:'Blue eyes',
          date:'22th  jan 2018',
          image:'hi',
    
      },    {
        name:'Hardy sindhu',
        song:'backbone',
        date:'12th Mar 2018',
        image:'hi',
    
    },    {
      name:'Darshan reval',
      song:'Pheli love',
      date:'9th Mar 2018',
      image:'hi',
    
    },    {
      name:'Kv singh',
      song:'Gallan ch romance',
      date:'2th feb 2018',
      image:'hi',
    
    },    {
      name:'Jass manak',
      song:'love',
      date:'17th  oct  2018',
      image:'hi',
    
    },    {
      name:'jubin',
      song:'Devil',
      date:'29th Mar 2018',
      image:'hi',
    
    },
    ,    {
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
    //   const {openModal, setOpenMadal} = useState(false);
      const headings = data.headings;
      const artists = data.artists;
  return (
    <div>
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
  )
}

export default ToptenArtist
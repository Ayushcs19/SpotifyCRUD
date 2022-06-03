import React from "react";

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
        name:'Justin Bieber',
        song:'Sorry',
        date:'5th sept 2022',
        image:'hi',

    },
    {
        name:'Justin Bieber',
        song:'Sorry',
        date:'5th sept 2022',
        image:'hi',

    },
    {
        name:'Justin Bieber',
        song:'Sorry',
        date:'5th sept 2022',
        image:'hi',

    },
    
],
  };
  const headings = data.headings;
  const artists = data.artists;
  return (
    <div>
      <table class="table table-dark">
        <thead>
          <tr>
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
  );
}

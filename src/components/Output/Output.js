import React from 'react';
import { useSelector } from 'react-redux';
export default function Output() {

    const giphy = useSelector((state)=> state.giphy)

  return (
      <div>
          <div name = 'output'>
        {
          giphy.length > 0 ?
          giphy.map(el=>{
            return(
              <div key={el.id}>
                <iframe src = {el.embed_url} frameBorder='0'></iframe>
                <h4>{el.title}</h4>
              </div>
            )
          })
          : (
            <h1>Empty ...</h1>
          )
        }


      </div>
      </div>
  )
}
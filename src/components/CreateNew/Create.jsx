import React from 'react'

function Create() {
  return (
    <div>
        <h1>Form to create a new service</h1>
         {/* NOTE: action will be the route, method will be the HTTP Method. NB: HTTP verb is Create, while HTTP method is POST */}
         <form action="/api/services/" method='POST'>
            Service Name: <input type="text" name='name' /> <br />
                    Type: <input type="text" name='type' /> <br />    
            <input type="submit" name='' value="Create New Service" />
        </form>
        
    </div>
  )
}

export default Create
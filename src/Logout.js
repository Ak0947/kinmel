import React from 'react'

export const Logout = () => {
    let i = localStorage.getItem("currentUserId");
    let j = localStorage.getItem("checkId");

      function St()
    {
        localStorage.setItem("currentUserId", 'a');
        localStorage.setItem("checkId", '0');
        // console.log('currentUserId');
     
    }
 
 
    function St1()
    {
        localStorage.setItem("currentUserId", i);
        localStorage.setItem("checkId", j);
        // console.log(i);
   
    }


  return (
    <div><h1>
        Are you sure ?
        </h1>
        <div className='ASDS' onClick={St}><a href='/'>Yes</a></div>
        <br></br>
        <br />
        <div className='ASDS' onClick={St1}><a href='/'>No</a></div>
 </div>
  )
}


// import React from 'react'

// export const Logout = () => {
  
//   return (
//     <div>logout</div>
//   )
// }

import { useRouter } from 'next/router';
import React, { useState } from 'react'

const home = ({query}) => {

    const router = useRouter();
  const [state,setState] = useState('')
    function handleClick() {
     router.push("jistix://jistix/barcode");
    }
  
    React.useEffect(()=>{
      const {code} = router.query;
      if(code){
        setState(code);
      }
    },[])

  return (   <>
    <div className="home">
      <div className="links">
        <h1>Your barcode is: {state ? state : ''}</h1>
        <button onClick={handleClick}>click</button>
      </div>
        
    </div>
      <br />
  </>
  )
}

export default home

export async function getServerSideProps(context) {
    const query = context.query;
  
    return {
      props: {
        query
      }, // will be passed to the page component as props
    }
  }
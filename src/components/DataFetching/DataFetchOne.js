import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function DataFetchOne() {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
          .then(result =>{
              console.log('result: ',result);
              setLoading(true);
              setUser(result.data);
          })
          .catch(error =>{
              setLoading(true);
              setError(error);
              
          })
    },[])


    if(!loading){
        return <div>Loading...</div>
    }else if(error){
        return <div>Error: {error.message}</div>
    }
    else{
        return (
          <div>
            <h4>User</h4>
            <ul>
              {user.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>
        );
    }
  
}

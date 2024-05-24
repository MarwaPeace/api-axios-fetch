import { useEffect ,useState} from 'react'
import axios from 'axios';
const Home = () => {
    const[data,setData]=useState([])
    const[record,setRecord]=useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            setData(res.data)
            setRecord(res.data)
        } )
        .catch(err=> console.log(err))
    },[])
    const Filter = (event) => {
        const inputValue = event.target.value.toLowerCase(); // Convertir l'entrée en minuscules
        setRecord(data.filter(f => f.name.toLowerCase().includes(inputValue)));
    }
  
  return (
    
    <>
    <div className='p-5 bg-light'>
       <div className='bg-white shadow border'>
        <input type="text" className='form-control' onChange={Filter}  placeholder='Search'/>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {record.map((d,i)=>(
                    <tr key={i}>
                        <td>{d.id}</td>
                        <td>{d.name}</td>
                        <td>{d.email}</td>
                        <td>{d.phone}</td>
                        
                    </tr>

                ))}
            </tbody>
        </table>

       </div>
       </div>     
    </>
  )
}

export default Home

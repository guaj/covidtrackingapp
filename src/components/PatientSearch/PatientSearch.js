import './PatientSearch.css';
import PatientMock from './mockPatient.json'
import {useState} from 'react'

function PatientSearch() {
 const[searchingTerm, settingSearchTerm] =useState ('')
 return (
   <div className="PatientSearch">
     <input type="text" placeholder= "Search..."
     onChange={(event) =>
     {settingSearchTerm(event.target.value);
     }}
     />
     {PatientMock.filter((value)=>{
       if (searchingTerm == ""){
         return value
     } else if (value.first_name.toLocaleLowerCase().includes(searchingTerm.toLowerCase())){
       return value
     }
   }).map((value,key)=>{

       return (
       <div className= "user" key={key}>
       <p>{value.first_name}</p>
       </div>
       );
     })}



   </div>
 );
}

export default PatientSearch;

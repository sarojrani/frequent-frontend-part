import React, { useState } from 'react'

const List = () => {
    const [user]=useState([])
  return (
    <div className='product-list'>
    <ul>
            <li>Fname</li>
            <li>Lname</li>
            <li>Email</li>
            <li>Country</li>
            <li>State</li>
            <li>City</li>
            <li>Gender</li>
            <li>DOB</li>
            <li>Age</li>
        </ul>
        {
            user.length>0? user.map((item,index)=>(
                <ul key={item._id}>
            <li>{index+1}</li>
            <li>{item.Fname}</li>
            <li>{item.Lname}</li>
            <li>{item.Email}</li>
            <li>{item.Country}</li>
            <li>{item.City}</li>
            <li>{item.State}</li>
            <li>{item.Gender}</li>
            <li>{item.DOB}</li>
            <li>{item.Age}</li>
            </ul>
            )):
            <h1>no result found</h1>

        }
        </div>
  )
}

export default List
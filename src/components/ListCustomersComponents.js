import React,{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CustomerService from '../services/CustomerService'

const ListCustomersComponents = () => {

const [customers, setcustomers] = useState([])

useEffect(() => {
  CustomerService.getAllCustomers().then((response) => {
    setcustomers(response.data)
    console.log(response.data);
  }).catch(error =>{
    console.log(error);
  })
}, [])


  return (
    <div className="container">
        <h2 className="text-center"> List Customers </h2>
        <Link to = "/add-customer" className="btn btn-primary mb-2" > Add Customer </Link>
        <table className="table table-bordered table-striped">
            <thead>
                <th> Customer Id</th>
                <th>  First Name</th>
                <th>  Last Name</th>
                <th>  Email</th>
                <th>  phone</th>
                <th>  Actions</th>


            </thead>
            <tbody>
                {
                    customers.map(
                        customer =>
                        <tr key = {customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.firstName}</td>
                            <td>{customer.lastName}</td>
                            <td>{customer.email}</td>
                            <td>{customer.phone}</td>
                            <td>
                                <Link className="btn btn-info" to={`/edit-customer/${customer.id}`}> Update </Link>
                            </td>

                        </tr>
                    )
                }
            </tbody>

        </table>
    </div>
  )
}

export default ListCustomersComponents
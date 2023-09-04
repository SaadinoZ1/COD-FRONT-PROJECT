import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import CustomerService from '../services/CustomerService'

const AddCustomerComponent = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const navigate  = useNavigate();
  const {id} = useParams();

  const saveOrUpdateCustomer = (e) => {
    e.preventDefault();

    const customer = {firstName, lastName, email, phone}
  if(id){
    CustomerService.updateCustomer(id, customer).then((response) => {
       navigate.push('/customers')
    }).catch(Error => {
      console.log(Error)
    })

  }else{
    CustomerService.createCustomer(customer).then((response) =>{
      console.log(response.data)

      navigate.push('/customers');

 }).catch(Error => {
   console.log(Error)
 })
  }}


  useEffect(() => {
    CustomerService.getCustomerById(id).then((response) => {
       setFirstName(response.data.firstName)
       setLastName(response.data.lastName)
       setEmail(response.data.email)
       setPhone(response.data.phone)
    }).catch(Error => {
      console.log(Error)
    })
    
  }, [])
  
  const   title = () => {
      if(id){
        return <h2 className="text-center"> Update Customer </h2>
      }else{
        return <h2 className="text-center"> Add Customer </h2>
      }
   }

  return (
    <div>
      <br /> <br />
      <div className="container">
        <div className="row">
         <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center"> Add Customer </h2>
          <div className="card-body">
           <form>
            <div className="form-group mb-2">
              <label className="form-label"> First Name : </label>
              <input
                    type="text"
                    placeholder="Enter first name "
                    name="firstName"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
              >
              </input>
            </div>


            <div className="form-group mb-2">
              <label className="form-label"> Last Name : </label>
              <input
                    type="text"
                    placeholder="Enter last name "
                    name="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
              >
              </input>
            </div>


            <div className="form-group mb-2">
              <label className="form-label"> Email : </label>
              <input
                    type="text"
                    placeholder="Enter email "
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
              >
              </input>
            </div>


            <div className="form-group mb-2">
              <label className="form-label"> phone : </label>
              <input
                    type="text"
                    placeholder="Enter phone "
                    name="phone"
                    className="form-control"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
              >
              </input>
            </div>

            <button className="btn btn-success" onClick={(e) => saveOrUpdateCustomer(e)}> Submit </button>
            <Link to = "/customers" className="btn btn-danger"> Cancel</Link>

           </form>
           </div>
           </div>
           </div>
           </div>
    </div>
  )
}

export default AddCustomerComponent
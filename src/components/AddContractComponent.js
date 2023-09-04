import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import ContractService from '../services/ContractService'

const AddContractComponent = () => {

  const [customer, setCustomer] = useState('')
  const [vin, setVin] = useState('')
  const [status, setStatus] = useState('')
  const [isSigned, setisSigned] = useState('')
  const navigate  = useNavigate();
  const {id} = useParams();

  const saveOrUpdateContract = (e) => {
    e.preventDefault();

    const contract = {customer, vin, status, isSigned}
  if(id){
    ContractService.updateContract(id, contract).then((response) => {
       navigate.push('/contracts')
    }).catch(Error => {
      console.log(Error)
    })

  }else{
    ContractService.createContract(contract).then((response) =>{
      console.log(response.data)

      navigate.push('/contracts');

 }).catch(Error => {
   console.log(Error)
 })
  }}


  useEffect(() => {
    ContractService.getContractById(id).then((response) => {
       setCustomer(response.data.customer)
       setVin(response.data.vin)
       setStatus(response.data.status)
       setisSigned(response.data.isSigned)
    }).catch(Error => {
      console.log(Error)
    })
    
  }, [])
  
  const   title = () => {
      if(id){
        return <h2 className="text-center"> Update Contract </h2>
      }else{
        return <h2 className="text-center"> Add Contract </h2>
      }
   }

  return (
    <div>
      <br /> <br />
      <div className="container">
        <div className="row">
         <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center"> Add Contract </h2>
          <div className="card-body">
           <form>
            <div className="form-group mb-2">
              <label className="form-label"> Customer : </label>
              <input
                    type="text"
                    placeholder="Enter customer "
                    name="customer"
                    className="form-control"
                    value={customer}
                    onChange={(e) => setCustomer(e.target.value)}
              >
              </input>
            </div>


            <div className="form-group mb-2">
              <label className="form-label"> Vin : </label>
              <input
                    type="text"
                    placeholder="Enter vin "
                    name="vin"
                    className="form-control"
                    value={vin}
                    onChange={(e) => setVin(e.target.value)}
              >
              </input>
            </div>


            <div className="form-group mb-2">
              <label className="form-label"> Status : </label>
              <input
                    type="text"
                    placeholder="Enter status "
                    name="status"
                    className="form-control"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
              >
              </input>
            </div>


            <div className="form-group mb-2">
              <label className="form-label"> isSigned : </label>
              <input
                    type="text"
                    placeholder=" isSigned "
                    name="isSigned"
                    className="form-control"
                    value={isSigned}
                    onChange={(e) => setisSigned(e.target.value)}
              >
              </input>
            </div>

            <button className="btn btn-success" onClick={(e) => saveOrUpdateContract(e)}> Submit </button>
            <Link to = "/contracts" className="btn btn-danger"> Cancel</Link>

           </form>
           </div>
           </div>
           </div>
           </div>
    </div>
  )
}

export default AddContractComponent
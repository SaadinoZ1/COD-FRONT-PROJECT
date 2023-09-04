import React,{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ContractService from '../services/ContractService'

const ListContractsComponents = () => {

const [contracts, setcontracts] = useState([])

useEffect(() => {
    ContractService.getAllContracts().then((response) => {
    setcontracts(response.data)
    console.log(response.data);
  }).catch(error =>{
    console.log(error);
  })
}, [])


  return (
    <div className="container">
        <h2 className="text-center"> List Contracts </h2>
        <Link to = "/add-contract" className="btn btn-primary mb-2" > Add Contract </Link>
        <table className="table table-bordered table-striped">
            <thead>
                <th> Contract Id</th>
                <th>  Customer</th>
                <th>  Vin</th>
                <th>  Status</th>
                <th>  isSigned</th>
                <th>  Actions</th>


            </thead>
            <tbody>
                {
                    contracts.map(
                        contract =>
                        <tr key = {contract.id}>
                            <td>{contract.id}</td>
                            <td>{contract.cutomer}</td>
                            <td>{contract.vin}</td>
                            <td>{contract.status}</td>
                            <td>{contract.isSigned}</td>
                            <td>
                                <Link className="btn btn-info" to={`/edit-contract/${contract.id}`}> Update </Link>
                            </td>

                        </tr>
                    )
                }
            </tbody>

        </table>
    </div>
  )
}

export default ListContractsComponents
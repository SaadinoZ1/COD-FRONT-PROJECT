import axios from 'axios'

const CONTRACT_BASE_REST_API_URL = 'http://localhost:8080/api/v1/contracts' ;

class ContractService{

    getAllContracts(){
        return axios.get(CONTRACT_BASE_REST_API_URL)
    }

    createContract(contract){
        return axios.post(CONTRACT_BASE_REST_API_URL, contract)
    }
    getContractById(contractId){
        return axios.get(CONTRACT_BASE_REST_API_URL + '/' + contractId);
    }
    updateContract(contractId, contract){
        return axios.put(CONTRACT_BASE_REST_API_URL + '/' + contractId, contract)
    }
}
export default new ContractService();
import axios from 'axios'

class apiClient {
    constructor(remoteHostUrl){
        this.remoteHostUrl = remoteHostUrl
        this.token = null
     }
     setToken(token){
        this.token =token
     }

     async request({endpoint, method = `GET`, data = {}}){
        const url = `${this.remoteHostUrl}/${endpoint}`

        const headers = {
        "Content-type": "application/json"
        }

        if (this.token){
            headers["authorization"] = `Bearer  ${this.token}`
        }
        try{
            const res = await axios({url,method,data,headers})
            return  {data: res.data, error:null}
        }catch(err){
            console.error({errorResponse:error.response})
            const message =error?.response?.data?.message
            return  {data:null, error: message || String(error)}
        }
     }
     async  loginUser(credentials){
        return  await  this.request({ endpoint: `auth/log-in`,method:`POST`, data: credentials})

     }
     async  signupUser(credentials){
        return  await  this.request({ endpoint: `auth/register`,method:`POST`, data: credentials})

     }
    }

export default  new apiClient ("http://localhost:3001")



















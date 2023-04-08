import axios from "axios";

const URL = "http://localhost:5500"

const post = async (apiUrl: string, body: Object) => {
    try{
        const data = await axios.post(URL+apiUrl,{
            email: "vineethh.is20@bmsce.ac.in",
            ...body
        }, {
            headers: {
                "Content-Type": "Application/json",
                "Authorization": "Bearer 346433c5cdf018029041"
            }
        })
        const response = await data.data
        if(data.status === 200){
            return response
        }
        else{
            var error =new Error('Error '+data.status+' ;'+data.statusText);
            throw error
        }
    }
    catch(err){
        throw err;
    }
}

const put = async (apiUrl: string, body: Object) => {
    try{
        const data = await axios.put(URL+apiUrl, {
            email: "vineethh.is20@bmsce.ac.in",
            ...body
        },{
            headers: {
                "Content-Type": "Application/json",
                "Authorization": "Bearer 346433c5cdf018029041"
            }
        })
        const response = await data.data
        if(data.status === 200){
            return response
        }
        else{
            var error =new Error('Error '+data.status+' ;'+data.statusText);
            throw error
        }
    }
    catch(err){
        throw err;
    }
}

export const getClubData=(clubid: string)=>{
    return new Promise((resolve,reject)=>{
        post("/api/club/"+clubid,{})
        .then((vals)=>{
            console.log(vals)
            resolve(vals.clubCoordinator)
        }).catch((err)=>{
            if(err.status===404||err.message==="Error 404 ; Not Found" || err.message==="Error 404 ;")
            resolve(false)
            reject(err.message)
        })
  })
}

export const updateClub=(clubId: string, body: Object)=>{
    return new Promise((resolve,reject)=>{
        put("/api/club/"+clubId, body)
        .then((vals)=>{
            resolve(vals)
        }).catch((err)=>{  
            reject(err.message)
        })
  })
  }
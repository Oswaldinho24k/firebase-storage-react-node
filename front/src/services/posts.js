import axios from 'axios'
import firebase from './firebase'

let host = 'http://localhost:3000/posts'

export const getPosts=()=>{
    return axios.get(host)
        .then(r=>{
            return r.data
        }).catch(e=>{
            return e.response
        })
}

export const postPost=(post)=>{
    return axios.post(host, post)
        .then(r=>{
            return r.data
        }).catch(e=>{
            return e.response
        })  
}

export const uploadFile=(file)=>{
    console.log('subiendo')
    const task = firebase.storage().ref('chelas').child(file.name).put(file)

    return task
        .then(snap=>snap.ref.getDownloadURL())
        .then(link=>link)
}
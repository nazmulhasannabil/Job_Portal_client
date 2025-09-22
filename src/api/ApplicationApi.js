export const myApplicationPromise = email =>{
    return fetch(`https://job-portal-server-2-re3d.onrender.com/applications?email=${email}`).then(res =>res.json());
}
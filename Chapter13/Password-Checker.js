const allowed = ["caratland", "pizza", "armybomb"];

function passwordChecker(pass) {
    return allowed.includes(pass)
}
   
function login(password) {
    return new Promise((resolve, reject) => {
        if (passwordChecker(password)) {
            resolve({
                status:true
            });
        }else{
            reject({
                status:false
            });
        }
    } 
}

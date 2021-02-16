function Admins(login, password)
{
    this.login = login;
    this.password= password;
}
Admins.prototype.checkAdmin = function (){
    if(this.login==="Admin"&& this.password==="admin"){
        console.log("Right admin");
    }

}
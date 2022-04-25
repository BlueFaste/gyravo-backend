const login = function (req, res) {
    console.log('login',req.body);

    res.send('ok login')
}

const register = function (req,res) {
    console.log('register',req.body);

    res.send('ok register')
}

const logout = function (req, res){

    res.send('Logout')
}

const auth = {
    login,
    register,
    logout

}

export default auth
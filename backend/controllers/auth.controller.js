export const signup = async (req, res) => {
    try{
        const {fullName, username, password, confirmPassword, gender} = res.body;
    } catch (error){

    }
};

export const login = (req, res) => {
    res.send("Login User");
    console.log("login");
};

export const logout = (req, res) => {
    res.send("Logout User");
    console.log("logout");
};
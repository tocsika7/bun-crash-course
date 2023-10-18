import axios from "axios";

async function fetch_user(user: String){
    const res = await axios.get('https://api.github.com/users/' + user);
    return res.data;
}

export default fetch_user;
import fetch_user from "./github_api";

(async () => {
    const user_data = await fetch_user('tocsika7');
    document.querySelector('h1').innerHTML = JSON.stringify(user_data);
})();
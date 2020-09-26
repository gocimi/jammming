const accessToken = "";
const clientId = "e0383c8fd2a14023b4b7c1599429095e";
const responseType = "token";
const redirectUri = "http://localhost:3000/";
const scope = "user-read-private%20user-read-email";

const Spotify = {

    getAccessToken() {
        if (accessToken) {
            return accessToken;
        } else {
            window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}&state=123`;
        }
    }

}

export default Spotify;
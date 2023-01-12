export const isNumber = (txt) => {
    const regex = /^[0-9\b]+$/;
    if (txt === "" || regex.test(txt)) {
        return true
    }
    return false
};

export function C_time() {
    const time = (new Date()).getTime();
    return time;
}

export const Endpoint = {
    API_URL: 'https://invoice-a4dd7-default-rtdb.firebaseio.com/'
}
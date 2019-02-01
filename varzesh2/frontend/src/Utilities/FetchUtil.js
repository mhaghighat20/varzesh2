import {CookieUtil} from "./CookieUtil";


export class FetchUtil {
    static fetchFromUrl(url) {
        return fetch(url, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
        }).then(function (response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        }).then(response => response.json())
        .catch(err => {
            console.log(err);
            throw err;
        });
    }

    static postToUrl(url, body) {
        const csrfToken = CookieUtil.getCookie('csrftoken');
        return fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            // mode: "no-cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                // "Content-Type": "application/x-www-form-urlencoded",
                'X-CSRFToken': csrfToken
            },
            body: JSON.stringify(body),
            redirect: "manual", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
        }).then(function (response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        }).then(response => {
            return response.json()
        })
        .catch(err => {
            throw err;
        });
    }
}
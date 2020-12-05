import http from "k6/http";
import {check, fail} from "k6"

export let options = {
    vus: 5,
    stages: [
        { duration: "2m", target: 10 },
        { duration: "2m", target: 15 },
        { duration: "2m", target: 5 },
        { duration: "1m30s", target: 0 }
    ]
};

export default function() {
    const res = http.get('http://simple-api-node.info/users');
    check (res, {
        "is status 200" : (r) => r.status === 200
    });
}
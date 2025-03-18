import {check, group, sleep} from "k6";
import {
    BASE_URL,
    BEARER_TOKEN,
    UPDATE_STEP_ACTIVITY,
    USER_DASHBOARD

} from "./endpoints.js";
import {headers,loadOptions,updateActivityPayload} from "./helper.js";
import * as http from "http";

export const options={
    scenarios: loadOptions
}

export default function (){
    let res;
    // group('Update step Activity ', function (){
    //     res = http.post(`${BASE_URL}${UPDATE_STEP_ACTIVITY}`, updateActivityPayload(), {headers: headers});
    //     console.log(res.status_text);
    // });
    group('Dashboard data', function (){
        res = http.get(`${BASE_URL}${USER_DASHBOARD}`, {headers:headers});
        console.log(res.status_text);
    })
    sleep(1)

}
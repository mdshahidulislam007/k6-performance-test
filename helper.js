import {BEARER_TOKEN} from "./endpoints.js";


export const loadOptions = {
    load_scenario: {
        executor: 'constant-vus',
        vus: 20,
        duration: '10s'
    },
}

export const headers = {
    'access-control-allow-origin': '*',
    'Content-Type': 'application/json',
    Authorization: BEARER_TOKEN
}

export let updateActivityPayload = () => {
    let payload = {
        activity_list: [
            {
                date: "2025-02-23",
                step_count: 7000,
                walking_time_minute: "120"
            }
        ],
        recording_type: "manual"
    }
    return JSON.stringify(payload);
}

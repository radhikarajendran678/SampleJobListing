import { APPLY_JOB } from "./constant";

export function applyToJob(item){
    console.log("item   "+ item)
    return {
        type: APPLY_JOB,
        data: item
    }

}
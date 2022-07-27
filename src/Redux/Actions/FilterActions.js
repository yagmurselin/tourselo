import { FILTER_CLICKED } from "./types";

export const filterClicked= (showModal) => {
    return(dispatch) =>{
    dispatch({
        type:FILTER_CLICKED,
        payload:showModal,
    })
}}
import { API_ENDPOINT } from "../../config/constants"; 
 import { 
   CommentDetailsPayload, 
   CommentListAvailableAction, 
   CommentsDispatch, 
   CommentData 
 } from "./types"; 
 export const reorderTasks = (dispatch: CommentsDispatch, newState: CommentData)  => { 
   dispatch({type: CommentListAvailableAction.REORDER_COMMENT , payload: newState}) 
 } 
 // The function will take a dispatch as first argument, which can be used to send an action to `reducer` and update the state accordingly 
 export const addComment = async ( 
   dispatch: CommentsDispatch, 
   projectID: string, 
   taskID: string, 
   comment: CommentDetailsPayload 
 ) => { 
   const token = localStorage.getItem("authToken") ?? ""; 
   try { 
     console.log("TESt"); 
     console.log(comment); 
     dispatch({ type: CommentListAvailableAction.FETCH_COMMENTS_REQUEST }); 
     const response = await fetch( 
       `${API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`, 
       { 
         method: "POST", 
         headers: { 
           "Content-Type": "application/json", 
           Authorization: `Bearer ${token}`, 
         }, 
         body: JSON.stringify(comment), 
       } 
     ); 
  
     if (!response.ok) { 
       throw new Error("Failed to create task"); 
     } 
     dispatch({ type: CommentListAvailableAction.CREATE_COMMENT_SUCCESS }); 
     refreshComments(dispatch, projectID, taskID); 
   } catch (error) { 
     console.error("Operation failed:", error); 
     dispatch({ 
       type: CommentListAvailableAction.CREATE_COMMENT_FAILURE, 
       payload: "Unable to create task", 
     }); 
   } 
 }; 
  
 export const refreshComments = async ( 
   dispatch: CommentsDispatch, 
   projectID: string, 
   taskID: string, 
 ) => { 
   const token = localStorage.getItem("authToken") ?? ""; 
   try { 
     dispatch({ type: CommentListAvailableAction.FETCH_COMMENTS_REQUEST }); 
     const response = await fetch( 
       `${API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`, 
       { 
         headers: { 
           "Content-Type": "application/json", 
           Authorization: `Bearer ${token}`, 
         }, 
       } 
     ); 
  
     if (!response.ok) { 
       throw new Error("Failed to fetch comment "); 
     } 
  
     // extract the response body as JSON data 
     const data = await response.json(); 
     dispatch({ 
       type: CommentListAvailableAction.FETCH_COMMENTS_SUCCESS, 
       payload: data, 
     }); 
     console.dir(data); 
   } catch (error) { 
     console.error("Operation failed:", error); 
     dispatch({ 
       type: CommentListAvailableAction.CREATE_COMMENT_FAILURE, 
       payload: "Unable to load comments", 
     }); 
   } 
 };
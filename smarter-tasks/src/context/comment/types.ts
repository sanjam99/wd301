export enum CommentListAvailableAction { 
   FETCH_COMMENTS_REQUEST = "FETCH_COMMENTS_REQUEST", 
   FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS", 
   FETCH_COMMENTS_FAILURE = "FETCH_COMMENTS_FAILURE", 
  
   CREATE_COMMENT_REQUEST = "CREATE_COMMENT_REQUEST", 
   CREATE_COMMENT_SUCCESS = "CREATE_COMMENT_SUCCESS", 
   CREATE_COMMENT_FAILURE = "CREATE_COMMENT_FAILURE", 
  
   REORDER_COMMENT  = "REORDER_COMMENT ", 
 } 
  
 export type CommentActions = 
   | { type: CommentListAvailableAction.REORDER_COMMENT ; payload: CommentData } 
   | { type: CommentListAvailableAction.FETCH_COMMENTS_REQUEST } 
   | { type: CommentListAvailableAction.FETCH_COMMENTS_SUCCESS; payload: CommentData } 
   | { type: CommentListAvailableAction.FETCH_COMMENTS_FAILURE; payload: string } 
    
   | { type: CommentListAvailableAction.CREATE_COMMENT_REQUEST } 
   | { type: CommentListAvailableAction.CREATE_COMMENT_SUCCESS } 
   | { type: CommentListAvailableAction.CREATE_COMMENT_FAILURE; payload: string }; 
  
 // A type to hold dispatch actions in a context. 
 export type CommentsDispatch = React.Dispatch<CommentActions>; 
  
  
  
 // export type AvailableColumns = "pending" | "in_progress" | "done"; 
  
 // export type ColumnData = { 
 //   id: string; 
 //   title: string; 
 //   taskIDs: string[]; 
 // }; 
  
 // export type Columns = { 
 //   [k in AvailableColumns]: ColumnData; 
 // }; 
  
 // export type CommentDetails = { 
 //   id: number; 
 //   description: string; 
 //   taskId: number; 
 //   owner: number; 
 // }; 
 export type CommentDetailsPayload = Omit<CommentDetails, "id">; 
  
 // export type Comments = { 
 //   [k: string]: CommentDetails; 
 // }; 
  
 export type User = { 
   name: string;   
   email: string; 
   id: number; 
 } 
  
 export type CommentDetails = { 
   User: User; 
   id: number; 
   description: string; 
   updatedAt: string; 
   owner: number; 
 }; 
  
 export type CommentData = CommentDetails[]; 
  
  
 export interface CommentListState { 
   commentData: CommentData; 
   isLoading: boolean; 
   isError: boolean; 
   errorMessage: string; 
 }
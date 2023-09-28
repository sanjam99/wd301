import { API_ENDPOINT } from '../../config/constants';
// src/context/projects/actions.ts
// ...
// ...
// Here, first I'll define a new async function called `addProject`. 
// Then I'll add `dispatch` as first argument, as we need this to dispatch action
// objects to our projects reducer. The second argument is `args`, where we'll pass 
// the new project data.
export const addMember = async (dispatch: any, args: any) => {
  try {
    const token = localStorage.getItem("authToken") ?? "";
    const response = await fetch(`${API_ENDPOINT}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(args),
    });

    if (!response.ok) {
      throw new Error("Failed to create user");
    }

    const data = await response.json();
    console.log("data=",data)

    if (data.errors && data.errors.length > 0) {
      return { ok: false, error: data.errors[0].message };
    }

    dispatch({ type: "ADD_MEMBER_SUCCESS", payload: data.user });

    // Return the success status with lowercase 'ok'
    return { ok: true };
  } catch (error) {
    console.error("Operation failed:", error);
    return { ok: false, error };
  }
};

export const fetchMembers = async (dispatch: any) => {
  const token = localStorage.getItem("authToken") ?? "";
  
  try {
    dispatch({ type: "FETCH_MEMBERS_REQUEST" });
    const response = await fetch(`${API_ENDPOINT}/users`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch({ type: "FETCH_MEMBERS_SUCCESS", payload: data });
  } catch (error) {
    console.log('Error fetching members:', error);
    dispatch({ type: "FETCH_MEMBERS_FAILURE", payload: 'Unable to load members' });
  }
};
export const deletemember = async (dispatch: any, id: number) => { 
   const token = localStorage.getItem("authToken") ?? ""; 
  
   try { 
     dispatch({ type: "DELETE_MEMBER" }); 
     const response = await fetch(`${API_ENDPOINT}/users/${id}`, { 
       method: "DELETE", 
       headers: { 
         "Content-Type": "application/json", 
         Authorization: `Bearer ${token}`, 
       }, 
     }); 
  
     if (!response.ok) { 
       throw new Error("Failed to delete user"); 
     } 
  
     dispatch({ type: "DELETE_MEMBER_SUCCESS", payload: id }); 
     return { ok: true }; 
   } catch (error) { 
     console.error("Operation failed:", error); 
     return { ok: false, error }; 
   } 
 };
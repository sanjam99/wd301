interface Member {
  id: number;
  name: string;
  email: string; 
}
// Now, I'll rename the interface in the `ProjectList` component from `State`
// to `ProjectsState`. And I'll also export the interface. 

export interface MembersState {
  members: Member[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}
// Next, I'll comment the `Action` interface

// interface Action {
//   type: string;
//   payload?: any;
// }

// Then I'll define a new type called `ProjectsActions` 
// for all possible combimations of action objects.

export type MembersActions = 
  | { type: 'FETCH_MEMBERS_REQUEST' }
  | { type: 'FETCH_MEMBERS_SUCCESS'; payload: Member[] }
  | { type: 'FETCH_MEMBERS_FAILURE'; payload: string }
  | { type: 'ADD_MEMBER_SUCCESS'; payload: Member }
  | { type: "DELETE_MEMBER_SUCCESS"; payload: number };

export const initialState: MembersState = {
  members: [],
  isLoading: false,
  isError: false,
  errorMessage: ''
};

// Then we will pass the `initialState` object to the `state` of reducer function.

export const reducer = (state: MembersState = initialState, action: MembersActions): MembersState => {
  // ...
  switch (action.type) {
    case "FETCH_MEMBERS_REQUEST":
      return {
        ...state,
        isLoading: true
      };   
    case "FETCH_MEMBERS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        members: action.payload,
      };      
    case "FETCH_MEMBERS_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true, 
        errorMessage: action.payload
      };           
      case 'ADD_MEMBER_SUCCESS':
      // Here I'll insert new new project object, which is coming in this 
      // `action.payload`, to the `projects` array present in state.
      return { ...state, members: [...state.members, action.payload] };  
          case "DELETE_MEMBER_SUCCESS": 
       return { 
  ...state, 
  members: state.members.filter((user) => user.id !== action.payload), 
};

    default:
      return state;
  }
}
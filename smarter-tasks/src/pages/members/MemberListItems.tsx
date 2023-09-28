import React from "react";
import { useMembersState, useMembersDispatch } from "../../context/members/context";
import { deletemember } from "../../context/members/actions";

export default function MemberListItems() {
  const state: any = useMembersState();
  const dispatch: any = useMembersDispatch();
  const { members, isLoading, isError, errorMessage } = state;

     const handleDelete = (id: number) => { 
     deletemember(dispatch, id); 
     console.log("clicked for delete for id:",id)
   };

  if (members.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>{errorMessage}</span>;
  }

  return (
    <>
      {members.map((member: any) => (
        <div
          key={member.id}
          className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative"
        >
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
            Name: {member.name}
          </h5>
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
            Email: {member.email}
          </h5>
          {/* Delete Button */}
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
            onClick={() => handleDelete(member.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
}

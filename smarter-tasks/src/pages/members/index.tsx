import NewMember from "./NewMember"; 
import React, { useEffect, Suspense } from "react";
import { fetchMembers } from "../../context/members/actions";
import { useMembersDispatch } from "../../context/members/context";
const MemberListItems = React.lazy(() => import("./MemberList"));
import ErrorBoundary from "../../components/ErrorBoundary";

const MemberList: React.FC = () => {
  const dispatchMembers = useMembersDispatch();

  useEffect(() => {
    fetchMembers(dispatchMembers);
  }, []);
  return (
    <div className="flex justify-between"> 
         <h2 className="text-2xl font-medium tracking-tight">Members</h2> 
         <NewMember /> 
      <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
          <MemberListItems />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};
export default MemberList;

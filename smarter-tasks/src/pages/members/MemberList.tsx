import React, { useState, useEffect } from 'react';
import { API_ENDPOINT } from '../../config/constants';
interface Member {
  id: number;
  email: string,
  name: string;
}
const MemberList: React.FC = () => {
  const [members, setmembers] = useState<Member[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    // Fetch the list of projects here
    fetchProjects();
  }, []);
  const fetchProjects = async () => {
    const token = localStorage.getItem("authToken") ?? "";
    console.log("tokens:",token);
    try {
      setIsLoading(true);
      const response = await fetch(`${API_ENDPOINT}/users`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
      });
      const data = await response.json();
      setmembers(data);
      setIsLoading(false);
    } catch (error) {
      console.log('Error fetching projects:', error);
      setIsLoading(false);
    }
  };
  return (
    <div>
      <h2>Project List</h2>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {members.map(member => (
            <li key={member.id}>{member.name}<br></br>{member.email}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default MemberList;
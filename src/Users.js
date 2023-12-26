import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { usersActions } from "./store/users";
import { Alert } from "react-bootstrap";

function Users() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOnLine, setIsOnline] = useState(true);
  const dispatch = useDispatch();

  const offlineData = useSelector((state) => state.usersData.users);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const result = await response.json();
        setIsOnline(true);
        setData(result);
        dispatch(usersActions.addUsers(result));
      } catch (error) {
        setData(offlineData);
        if (!navigator.onLine) setIsOnline(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // The empty dependency array ensures that useEffect runs only once (similar to componentDidMount)

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {isOnLine === false && (
        <Alert key="warning" variant="warning">
          Your offline, Kindly check your internet connection.
        </Alert>
      )}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Users;

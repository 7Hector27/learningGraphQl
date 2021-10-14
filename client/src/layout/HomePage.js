import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

export default function HomePage() {
  const [comments, setComments] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(async () => {
    const config = {
      headers: {
        "x-auth-token": token,
      },
    };
    const res = await axios.get("/api/comment", config);
    console.log(res);
    setComments(res.data);
  }, []);
  console.log(comments);
  return (
    <>
      <h1>Today's post </h1>
      {comments.map((comment) => (
        <Card style={{ marginTop: "10px" }}>
          <Card.Header>{comment.title}</Card.Header>
          <Card.Body>
            <Card.Text>{comment.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
      {/* {comments.map((comment) => (
        <h1>{comment.title}</h1>
      ))} */}
    </>
  );
}

"use client";
import React from "react";
import { trpc } from "../trpc/react";
const Homepage = () => {
  const { data, isLoading } = trpc.example.hello.useQuery({
    text: "World",
  });
  const { data: users, isLoading: isUsersLoading } = trpc.example.getAll.useQuery();
  return (
    <div>
      <div>TRPC setup</div>
      <div>Data: {isLoading ? "Loading..." : JSON.stringify(data)}</div>
      <div>User Count : {isUsersLoading ? "Loading..." : users}</div>
    </div>
  );
};

export default Homepage;

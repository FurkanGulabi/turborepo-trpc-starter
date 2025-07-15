"use client";
import React from 'react';
import { trpc } from '../trpc/react';
const Homepage = () => {
  const { data, isLoading } = trpc.example.getAll.useQuery();
  return (
    <div>
      <div>TRPC setup</div>
      <div>Data: {isLoading ? "Loading..." : JSON.stringify(data)}</div>
    </div>
  )
}

export default Homepage
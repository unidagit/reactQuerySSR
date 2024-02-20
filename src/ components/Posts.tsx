"use client"
import React from 'react'
import { useQueryClient } from '@tanstack/react-query';

export default function Posts() {
    const queryClient = useQueryClient();
    const data = queryClient.getQueryData(["todos"]);
console.log(data)
  return (
    <div>
      <p>{data?.id}</p>
      <p>{data?.title}</p>
    </div>
  )
}

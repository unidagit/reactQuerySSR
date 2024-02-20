"use client"
import React from 'react'
import { useQuery } from '@tanstack/react-query';
import { getData } from '@/app/page';

export default function Posts() {
    const {data} = useQuery({queryKey: ["todos"], queryFn:getData})
console.log(data)
  return (
    <div>
      <p>{data.id}</p>
      <p>{data.title}</p>
    </div>
  )
}

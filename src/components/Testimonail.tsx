'use client'

import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'

const content = [
    {
      title: "Collaborative Editing",
      quote:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      name: "Basit"
    },
    {
      title: "Real time changes",
      quote:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      name: "Umer"
    },
    {
      title: "Version control",
      quote:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      name: "Shaikh"
    },
    {
      title: "Running out of content",
      quote:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      name: "Talha"
    },
  ];



export default function Testimonail() {
  return (
    <div className='h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden'>
      <h2 className='text-3xl font-bold text-center mb-8 z-10'>Hear our Harmony: Voices of Sucess</h2>
      <div className='flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8'>
        <div className='w-full max-w-6xl'>
            <InfiniteMovingCards 
            items={content}
            direction='right'
            speed='slow'
            />
        </div>

      </div>
    </div>
  )
}



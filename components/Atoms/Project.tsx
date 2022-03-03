// import React, { useEffect, useState } from 'react';
// import 'emoji-mart/css/emoji-mart.css';
// import { getBlogDetail } from '@/utils/api'

interface Props {
  readonly img: string,
  readonly projectName: string,
  readonly projectDescription: string,
}

const Project: React.FC<Props> = ({ img, projectName, projectDescription }: Props) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      {/* <img className="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" /> */}
      <img className="w-full" src={img} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{projectName}</div>
        <p className="text-gray-700 text-base">{projectDescription}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div>
    </div>
  )
}

export default Project

import { formatDistance, subDays } from 'date-fns';
import React from 'react'
import BlogCard from './Blog/BlogCard'
import SimpleNavbar from './Components/SimpleNavbar';

function App() {
  return (
    <div className="h-full flex flex-col">
      <SimpleNavbar />
      <div className="p-4 md:p-16 bg-gray-100 flex justify-center h-full flex-1">
        <div className="container">
          <BlogCard
            category="PHYSICS"
            name="Author"
            createdAt={formatDistance(subDays(new Date(), 3),new Date(), { addSuffix: true })}
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            status={1}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

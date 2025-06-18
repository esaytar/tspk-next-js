'use client';
import { useState, useEffect } from 'react';
import useSetSearchResults from '../store/useSetSearchResults';

export default function Search() {
  const [query, setQuery] = useState('');
  const setSearchResults = useSetSearchResults((state) => state.setSearchResults)
  const searchResults = useSetSearchResults((state) => state.searchResults)
  const [index, setIndex] = useState([]);
  useEffect(() => {
    fetch('/search-index.json')
      .then(res => res.json())
      .then(data => setIndex(data));
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }
    const found = index.filter(page => 
      page.title.toLowerCase().includes(query.toLowerCase())
      // || page.content.toLowerCase().includes(query.toLowerCase()) 
    );
    
    setSearchResults(found.slice(0, 5)); 
  }, [query, index]);

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Поиск" 
        className={`bg-transparent text-white w-full transition-all duration-300 `}
      />
      {searchResults.length !== 0  && (
        <div className='w-full absolute bg-[#2B2B2B] top-16.5 left-0 text-white p-4 z-20 rounded-[10px] flex flex-col gap-5'>
          {searchResults.map(page => (
            <div key={page.id} >
              <a href={page.url} >
                {page.title}
              </a>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';

const Documents = () => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await axios.get('http://cms.nik200dr.beget.tech/wp-json/wp/v2/documents');
        setDocuments(response.data);
      } catch (err) {
        if (err.response) {
          console.error('Response error:', err.response.data);
          setError('Ошибка сервера');
        } else if (err.request) {
          console.error('Request error:', err.request);
          setError('Нет ответа от сервера');
        } else {
          console.error('Unexpected error:', err.message);
          setError('Неизвестная ошибка');
        }
      } finally {
        setLoading(false);
      }
    };
  
    fetchDocuments();
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Документы</h1>
      <ul>
        {documents.map(doc => (
          <li key={doc.id}>
            <a href={doc.acf.file} target="_blank" rel="noopener noreferrer">
              {doc.title.rendered}
            </a>
            <p>Категория: {doc.acf.category}</p>
            <p>Дата: {doc.acf.upload_date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Documents;
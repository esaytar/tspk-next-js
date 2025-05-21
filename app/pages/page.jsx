'use client';
import { useEffect, useState } from 'react';
import { fetchDocs } from '../../lib/strapi';

export default function DocsPage() {
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const { data } = await fetchDocs();
        setDocs(data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Документы</h1>
      
      {docs.length === 0 ? (
        <p>Документов пока нет</p>
      ) : (
        <div className="space-y-4">
          {docs.map((doc) => (
            <DocItem key={doc.id} doc={doc} />
          ))}
        </div>
      )}
    </div>
  );
}

function DocItem({ doc }) {

  const title = doc.attributes?.title || 'Без названия';
  const fileUrl = doc.attributes?.file?.data?.attributes?.url;

  return (
    <div className="border p-4 rounded-lg">
      <h2 className="text-lg font-semibold">
        {fileUrl ? (
          <a 
            href={`${process.env.NEXT_PUBLIC_STRAPI_URL}${fileUrl}`}
            download
            className="hover:text-blue-600"
          >
            {title}
          </a>
        ) : (
          title
        )}
      </h2>
    </div>
  );
}
 'use client';
import { useEffect, useState } from 'react';

export default function DocsPage() {
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/docs?populate=*`,
          { cache: 'no-store' }
        );
        
        if (!res.ok) throw new Error('Ошибка загрузки');
        
        const { data } = await res.json();
        setDocs(data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDocs();
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p className="text-red-500">Ошибка: {error}</p>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Документы</h1>
      
      <div className="space-y-2">
        {docs.length > 0 ? (
          docs.map((doc) => {
            const fileUrl = doc.attributes?.file?.data?.attributes?.url;
            const fileName = doc.attributes?.title;

            return (
              <div key={doc.id}>
                {fileUrl ? (
                  <a
                    href={`${process.env.NEXT_PUBLIC_STRAPI_URL}${fileUrl}`}
                    download
                    className="text-blue-600 hover:underline"
                  >
                    {fileName}
                  </a>
                ) : (
                  <span className="text-gray-600">{fileName}</span>
                )}
              </div>
            );
          })
        ) : (
          <p>Нет доступных документов</p>
        )}
      </div>
    </div>
  );
}

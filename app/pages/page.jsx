 'use client';
import { useEffect, useState } from 'react';

export default function DocsPage() {
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/docs?populate=*`);
        const { data } = await res.json();
        setDocs(data || []);
      } catch (error) {
        console.error('Error loading documents:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDocs();
  }, []);

  if (loading) return <p className="p-4">Загрузка документов...</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Документы</h1>
      
      <div className="space-y-2">
        {docs.length > 0 ? (
          docs.map((doc) => {

            const file = doc.file;
            const fileName = file?.name || doc.title || 'Документ';
            const fileUrl = file?.url;

            return (
              <div key={doc.id} className="py-1">
                {fileUrl ? (
                  <a
                    href={`${process.env.NEXT_PUBLIC_STRAPI_URL}${fileUrl}`}
                    download={fileName}
                    className="text-blue-600 hover:underline"
                  >
                    {doc.title || fileName} ({file.ext})
                  </a>
                ) : (
                  <span className="text-gray-600">
                    {doc.title || 'Документ без файла'}
                  </span>
                )}
              </div>
            );
          })
        ) : (
          <p className="text-gray-500">Нет доступных документов</p>
        )}
      </div>
    </div>
  );
}

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
        console.error('Load error:', err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) return <div className="text-center py-8">Загрузка документов...</div>;
  if (error) return <div className="text-red-500 p-4">Ошибка: {error}</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Документы</h1>
      
      {docs.length === 0 ? (
        <p className="text-center text-gray-500">Нет доступных документов</p>
      ) : (
        <div className="space-y-6">
          {docs.map((doc) => {
            const fileData = doc.attributes?.file?.data?.attributes;
            const fileName = fileData?.name || doc.attributes?.title || 'Документ';
            const fileUrl = fileData?.url;
            const fileExt = fileData?.ext?.replace('.', '') || 'файл';

            return (
              <div key={doc.id} className="border-b border-gray-200 pb-4">
                {fileUrl ? (
                  <a
                    href={`${process.env.NEXT_PUBLIC_STRAPI_URL}${fileUrl}`}
                    download={fileName}
                    className="flex items-center gap-3 group"
                  >
                    <div className="bg-blue-100 text-blue-800 px-3 py-2 rounded-lg">
                      {fileExt.toUpperCase()}
                    </div>
                    <div>
                      <p className="font-medium text-lg group-hover:text-blue-600">
                        {doc.attributes.title || fileName}
                      </p>
                      <p className="text-sm text-gray-500">
                        {fileName} • {fileData?.size ? (fileData.size / 1024).toFixed(1) + ' KB' : ''}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-3">
                    <div className="bg-gray-100 text-gray-800 px-3 py-2 rounded-lg">
                      ?
                    </div>
                    <p className="font-medium text-lg">
                      {doc.attributes.title || 'Без названия'}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

'use client';
import { useEffect, useState } from 'react';
import { fetchDocuments } from '../../lib/strapi';

export default function DocumentsPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetchDocuments();
        setData(response.data || []);
      } catch (err) {
        setError(err.message);
        console.error(err);
      }
    };
    loadData();
  }, []);

  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;
  if (!data) return <div className="p-4">Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Documents</h1>
      <div className="grid gap-4">
        {data.map((doc) => (
          <div key={doc.id} className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold">
              {doc.attributes.title}
            </h2>
            {doc.attributes.file?.data?.attributes?.url && (
              <a
                href={`${process.env.NEXT_PUBLIC_STRAPI_URL}${doc.attributes.file.data.attributes.url}`}
                download
                className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Download
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
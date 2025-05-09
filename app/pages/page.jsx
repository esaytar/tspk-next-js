'use client';
import { useEffect, useState } from 'react';
import { getDocuments } from '../../lib/strapi';

export default function DocumentsPage() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    getDocuments().then(setDocuments);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Документы</h1>
      <div className="space-y-4">
        {documents.map((doc) => (
          <div key={doc.id} className="border rounded-lg p-4 hover:shadow-md">
            {doc.file?.url && (
              <a
                target='_blank'
                href={`http://localhost:1337${doc.file.url}`}
                download={doc.file.name || "document"}
                className="mt-2 inline-block bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                {doc.title || doc.file.ext}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
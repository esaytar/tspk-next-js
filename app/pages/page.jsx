'use client';
import { useEffect, useState } from 'react';

export default function DocsPage() {
  const [state, setState] = useState({
    loading: true,
    error: null,
    docs: []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/docs?populate=*`,
          { cache: 'no-store' }
        );
        
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        
        const { data } = await res.json();
        
        setState({
          loading: false,
          error: null,
          docs: Array.isArray(data) ? data : []
        });
      } catch (error) {
        console.error('Fetch failed:', error);
        setState({
          loading: false,
          error: error.message,
          docs: []
        });
      }
    };

    fetchData();
  }, []);

  if (state.loading) return <LoadingSkeleton />;
  if (state.error) return <ErrorDisplay message={state.error} />;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Документы</h1>
      <DocumentList docs={state.docs} />
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="space-y-4">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="h-20 bg-gray-100 rounded animate-pulse" />
      ))}
    </div>
  );
}

function ErrorDisplay({ message }) {
  return (
    <div className="bg-red-50 border-l-4 border-red-500 p-4">
      <p className="font-medium text-red-700">Ошибка загрузки</p>
      <p className="text-red-600">{message}</p>
    </div>
  );
}

function DocumentList({ docs }) {
  if (!docs.length) {
    return <p className="text-gray-500 text-center py-8">Нет доступных документов</p>;
  }

  return (
    <div className="space-y-3">
      {docs.map((doc) => (
        <DocumentItem key={doc.id} doc={doc} />
      ))}
    </div>
  );
}

function DocumentItem({ doc }) {
  const file = doc.attributes?.file?.data?.attributes;
  const title = doc.attributes?.title || 'Без названия';
  const fileUrl = file?.url ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${file.url}` : null;

  return (
    <div className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
      {fileUrl ? (
        <a
          href={fileUrl}
          download
          className="flex items-start gap-3"
        >
          <FileIcon extension={file?.ext} />
          <div>
            <p className="font-medium hover:text-blue-600">{title}</p>
            {file?.name && (
              <p className="text-sm text-gray-500 mt-1">
                {file.name} • {file.size ? `${(file.size / 1024).toFixed(1)} KB` : ''}
              </p>
            )}
          </div>
        </a>
      ) : (
        <div className="flex items-start gap-3">
          <FileIcon />
          <p className="font-medium">{title}</p>
        </div>
      )}
    </div>
  );
}

function FileIcon({ extension }) {
  const ext = extension?.replace('.', '') || 'file';
  return (
    <div className="bg-blue-100 text-blue-800 px-3 py-2 rounded-lg text-sm font-medium">
      {ext.toUpperCase()}
    </div>
  );
}

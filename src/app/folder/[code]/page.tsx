'use client';

import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useFolderStore } from '@/store/folderStore';
import { Navigation } from '@/components/Navigation';
import { FileList } from '@/components/FileList';
import { UploadButton } from '@/components/UploadButton';
import { StorageIndicator } from '@/components/StorageIndicator';
import { Folder } from 'lucide-react';

export default function FolderPage() {
  const params = useParams();
  const router = useRouter();
  const folderCode = params.code as string;
  const { getFolder } = useFolderStore();
  const folder = getFolder(folderCode);

  useEffect(() => {
    if (!folder) {
      router.push('/');
    }
  }, [folder, router]);

  if (!folder) return null;

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-black text-white rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Folder className="h-8 w-8" />
              <div>
                <h1 className="text-xl font-semibold">
                  Folder Code: {folderCode}
                </h1>
                <StorageIndicator 
                  used={folder.totalSize}
                  total={useFolderStore.getState().MAX_STORAGE}
                />
              </div>
            </div>
            <UploadButton folderCode={folderCode} />
          </div>
        </div>

        <FileList 
          files={folder.files}
          folderCode={folderCode}
        />
      </main>
    </div>
  );
}
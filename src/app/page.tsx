'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Navigation } from '@/components/Navigation';
import { Card } from '@/components/ui/Card';
import { AccessFolderModal } from '@/components/modals/AccessFolderModal';
import { useFolderStore } from '@/store/folderStore';

export default function Home() {
  const router = useRouter();
  const { createFolder, checkFolderExists } = useFolderStore();
  const [isAccessModalOpen, setIsAccessModalOpen] = useState(false);

  const handleCreateFolder = () => {
    const { code } = createFolder();
    router.push(`/folder/${code}`);
  };

  const handleAccessFolder = (code: string) => {
    if (checkFolderExists(code)) {
      router.push(`/folder/${code}`);
      setIsAccessModalOpen(false);
    } else {
      const modal = document.querySelector('[role="dialog"]');
      const errorElement = modal?.querySelector('[role="alert"]');
      if (errorElement) {
        (errorElement as HTMLElement).textContent = "It's a wrong code, no such file exists!";
      }
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
            Share Files, No Accounts,<br />Just names!
          </h2>
          <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl text-gray-500">
            Safe, Anonymous, and Effortless File Sharing.
          </p>
        </div>

        {/* Action Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8 max-w-4xl mx-auto">
          <Card
            title="Create a folder"
            description="Upload files and keep them safe."
            buttonText="Create Folder"
            buttonHref="#"
            onClick={handleCreateFolder}
          />
          <Card
            title="Access Your Files"
            description="Enter code to quickly retrieve files."
            buttonText="Access Files"
            buttonHref="#"
            onClick={() => setIsAccessModalOpen(true)}
          />
        </div>
      </div>

      <AccessFolderModal 
        isOpen={isAccessModalOpen}
        onClose={() => setIsAccessModalOpen(false)}
        onSubmit={handleAccessFolder}
      />
    </main>
  );
}
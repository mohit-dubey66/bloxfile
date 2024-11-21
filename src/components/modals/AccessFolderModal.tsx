'use client';

import { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { X } from 'lucide-react';

interface AccessFolderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (code: string) => void;
}

export function AccessFolderModal({ isOpen, onClose, onSubmit }: AccessFolderModalProps) {
  const [folderCode, setFolderCode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (folderCode.trim()) {
      onSubmit(folderCode.trim());
    }
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={() => {
        onClose();
        setError('');
        setFolderCode('');
      }}
      title="Access Folder"
    >
      <div className="relative">
        <button
          onClick={() => {
            onClose();
            setError('');
            setFolderCode('');
          }}
          className="absolute right-0 top-0 p-2 rounded-full hover:bg-gray-100"
          aria-label="Close dialog"
        >
          <X className="h-5 w-5" />
        </button>
        
        <h2 className="text-xl font-semibold mb-6">
          Enter access name of your folder!
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              placeholder="Example: my_folder"
              value={folderCode}
              onChange={(e) => {
                setFolderCode(e.target.value);
                setError('');
              }}
              className="w-full rounded-full border border-gray-300 px-4 py-3 pr-24 focus:border-black focus:outline-none"
              aria-label="Folder access code"
            />
            <Button
              type="submit"
              disabled={!folderCode.trim()}
              className="absolute right-0 top-0 bottom-0 rounded-l-none"
            >
              Enter
            </Button>
          </div>
          {error && (
            <p className="mt-2 text-red-500 text-sm" role="alert">
              {error}
            </p>
          )}
        </form>
      </div>
    </Modal>
  );
}
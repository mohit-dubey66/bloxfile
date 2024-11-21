'use client';

import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useFolderStore } from '@/store/folderStore';
import { Button } from './ui/Button';
import { Upload } from 'lucide-react';

interface UploadButtonProps {
  folderCode: string;
}

export function UploadButton({ folderCode }: UploadButtonProps) {
  const { addFile, getFolder, MAX_STORAGE } = useFolderStore();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const folder = getFolder(folderCode);
    if (!folder) return;

    acceptedFiles.forEach((file) => {
      const fileData = {
        name: file.name,
        size: file.size,
        type: file.type,
        uploadedAt: Date.now(),
      };

      const success = addFile(folderCode, fileData);
      if (!success) {
        alert('Not enough storage space!');
      }
    });
  }, [folderCode, addFile, getFolder]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxSize: MAX_STORAGE,
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <Button className="bg-red-700 text-black hover:bg-gray-500">
        <Upload className="mr-2 h-4 w-4" />
        Upload File
      </Button>
    </div>
  );
}
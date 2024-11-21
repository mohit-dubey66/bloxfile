import { Download, Trash2 } from 'lucide-react';
import { useFolderStore } from '@/store/folderStore';
import { formatBytes } from '@/lib/utils';

interface FileListProps {
  files: Array<{
    id: string;
    name: string;
    size: number;
    type: string;
    uploadedAt: number;
  }>;
  folderCode: string;
}

export function FileList({ files, folderCode }: FileListProps) {
  const { removeFile } = useFolderStore();

  if (files.length === 0) {
    return (
      <div className="text-center py-12 bg-gray-50 rounded-xl">
        <p className="text-gray-500">No files uploaded yet.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl overflow-hidden">
      <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50 text-sm font-medium text-gray-500">
        <div className="col-span-6">File Name</div>
        <div className="col-span-2">Size</div>
        <div className="col-span-2">Type</div>
        <div className="col-span-2 text-right">Actions</div>
      </div>
      <div className="divide-y">
        {files.map((file) => (
          <div key={file.id} className="grid grid-cols-12 gap-4 px-6 py-4 items-center">
            <div className="col-span-6 font-medium">{file.name}</div>
            <div className="col-span-2 text-gray-500">{formatBytes(file.size)}</div>
            <div className="col-span-2 text-gray-500">{file.type}</div>
            <div className="col-span-2 flex justify-end space-x-2">
              <button
                onClick={() => {
                  // Handle download
                  const blob = new Blob([''], { type: file.type });
                  const url = window.URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = file.name;
                  a.click();
                }}
                className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100"
              >
                <Download className="h-5 w-5" />
              </button>
              <button
                onClick={() => removeFile(folderCode, file.id)}
                className="p-2 text-red-500 hover:text-red-700 rounded-lg hover:bg-red-50"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
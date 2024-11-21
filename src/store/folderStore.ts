import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { uniqueNamesGenerator, adjectives, animals, colors } from 'unique-names-generator';

interface File {
  id: string;
  name: string;
  size: number;
  type: string;
  uploadedAt: number;
}

interface Folder {
  id: string;
  code: string;
  files: File[];
  totalSize: number;
  createdAt: number;
}

interface FolderState {
  folders: Folder[];
  generateUniqueCode: () => string;
  checkFolderExists: (code: string) => boolean;
  createFolder: () => { code: string };
  getFolder: (code: string) => Folder | null;
  addFile: (code: string, file: Omit<File, 'id'>) => boolean;
  removeFile: (code: string, fileId: string) => void;
  MAX_STORAGE: number;
}

const MAX_STORAGE = 500 * 1024 * 1024; // 500MB in bytes

export const useFolderStore = create<FolderState>()(
  persist(
    (set, get) => ({
      folders: [],
      MAX_STORAGE,

      generateUniqueCode: () => {
        let code: string;
        do {
          code = uniqueNamesGenerator({
            dictionaries: [adjectives, animals, colors],
            separator: '_',
            length: 3,
            style: 'lowerCase'
          });
        } while (get().checkFolderExists(code));
        return code;
      },

      checkFolderExists: (code: string) => {
        return get().folders.some((folder) => folder.code === code);
      },

      createFolder: () => {
        const code = get().generateUniqueCode();
        const newFolder: Folder = {
          id: Math.random().toString(36).substring(7),
          code,
          files: [],
          totalSize: 0,
          createdAt: Date.now(),
        };
        set((state) => ({
          folders: [...state.folders, newFolder],
        }));
        return { code };
      },

      getFolder: (code: string) => {
        return get().folders.find((folder) => folder.code === code) || null;
      },

      addFile: (code: string, file: Omit<File, 'id'>) => {
        const folders = get().folders;
        const folderIndex = folders.findIndex((f) => f.code === code);
        
        if (folderIndex === -1) return false;
        
        const folder = folders[folderIndex];
        const newTotalSize = folder.totalSize + file.size;
        
        if (newTotalSize > MAX_STORAGE) return false;

        const newFile = {
          ...file,
          id: Math.random().toString(36).substring(7),
        };

        const updatedFolder = {
          ...folder,
          files: [...folder.files, newFile],
          totalSize: newTotalSize,
        };

        set((state) => ({
          folders: [
            ...state.folders.slice(0, folderIndex),
            updatedFolder,
            ...state.folders.slice(folderIndex + 1),
          ],
        }));

        return true;
      },

      removeFile: (code: string, fileId: string) => {
        set((state) => {
          const folderIndex = state.folders.findIndex((f) => f.code === code);
          if (folderIndex === -1) return state;

          const folder = state.folders[folderIndex];
          const file = folder.files.find((f) => f.id === fileId);
          if (!file) return state;

          const updatedFolder = {
            ...folder,
            files: folder.files.filter((f) => f.id !== fileId),
            totalSize: folder.totalSize - file.size,
          };

          return {
            folders: [
              ...state.folders.slice(0, folderIndex),
              updatedFolder,
              ...state.folders.slice(folderIndex + 1),
            ],
          };
        });
      },
    }),
    {
      name: 'folder-storage',
    }
  )
);
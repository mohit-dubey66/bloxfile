// 'use client';

// import { useState } from 'react';
// import { CheckCircle2, XCircle } from 'lucide-react';
// import { Modal } from '@/components/ui/Modal';
// import { Button } from '@/components/ui/Button';
// import { useModalStore } from '@/store/modalStore';
// import { useFolderStore } from '@/store/folderStore';

// export function CreateFolderModal() {
//   const [folderName, setFolderName] = useState('');
//   const [isChecking, setIsChecking] = useState(false);
//   const { isCreateModalOpen, closeCreateModal } = useModalStore();
//   const { checkFolderAvailability, createFolder } = useFolderStore();

//   const isAvailable = checkFolderAvailability(folderName);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (isAvailable && folderName) {
//       createFolder(folderName);
//       closeCreateModal();
//     }
//   };

//   return (
//     <Modal
//       isOpen={isCreateModalOpen}
//       onClose={closeCreateModal}
//       title="Claim your folder by giving a name!"
//     >
//       <form onSubmit={handleSubmit} className="mt-6">
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="Example: my_unique_folder"
//             value={folderName}
//             onChange={(e) => setFolderName(e.target.value)}
//             className="w-full rounded-full border border-gray-300 px-4 py-3 pr-24 focus:border-black focus:outline-none"
//           />
//           <Button
//             type="submit"
//             disabled={!isAvailable || !folderName}
//             className="absolute right-0 top-0 bottom-0 rounded-l-none"
//           >
//             Create
//           </Button>
//         </div>
//         {folderName && (
//           <div className="mt-3 flex items-center gap-2">
//             {isAvailable ? (
//               <>
//                 <CheckCircle2 className="h-5 w-5 text-green-500" />
//                 <span className="text-sm text-green-600">
//                   Your folder name is available!
//                 </span>
//               </>
//             ) : (
//               <>
//                 <XCircle className="h-5 w-5 text-red-500" />
//                 <span className="text-sm text-red-600">
//                   This folder name is already taken
//                 </span>
//               </>
//             )}
//           </div>
//         )}
//       </form>
//     </Modal>
//   );
// }
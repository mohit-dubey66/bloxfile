import { create } from 'zustand';

interface ModalState {
  isCreateModalOpen: boolean;
  isAccessModalOpen: boolean;
  openCreateModal: () => void;
  closeCreateModal: () => void;
  openAccessModal: () => void;
  closeAccessModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isCreateModalOpen: false,
  isAccessModalOpen: false,
  openCreateModal: () => set({ isCreateModalOpen: true }),
  closeCreateModal: () => set({ isCreateModalOpen: false }),
  openAccessModal: () => set({ isAccessModalOpen: true }),
  closeAccessModal: () => set({ isAccessModalOpen: false }),
}));
import { create } from "zustand";

const useSidebarState = create((set) => ({
	open: true,
	setOpen: (newOpen) => set({ open: newOpen }),
}));

export default useSidebarState;

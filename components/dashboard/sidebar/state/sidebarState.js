import { create } from "zustand";

const useSidebarState = create((set) => ({
	open: false,
	setOpen: (newOpen) => set({ open: newOpen }),
}));

export default useSidebarState;

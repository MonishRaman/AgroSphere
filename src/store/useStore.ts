import { create } from 'zustand';
import { UserProfile } from '../types';

interface Store {
  isAuthenticated: boolean;
  userProfile: UserProfile | null;
  setAuth: (value: boolean) => void;
  setUserProfile: (profile: UserProfile) => void;
}

export const useStore = create<Store>((set) => ({
  isAuthenticated: false,
  userProfile: null,
  setAuth: (value) => set({ isAuthenticated: value }),
  setUserProfile: (profile) => set({ userProfile: profile }),
}));
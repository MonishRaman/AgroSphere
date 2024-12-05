import { create } from 'zustand';
import { UserProfile } from '../types';

interface Store {
  isAuthenticated: boolean; // Tracks if the user is authenticated
  userProfile: UserProfile | null; // Stores the user's profile (name, photo, etc.)
  setAuth: (value: boolean) => void; // Function to set authentication status
  setUserProfile: (profile: UserProfile) => void; // Function to update user profile
}

export const useStore = create<Store>((set) => ({
  isAuthenticated: false, // Initial authentication state
  userProfile: null, // Initial user profile state
  setAuth: (value) => set({ isAuthenticated: value }), // Updates authentication status
  setUserProfile: (profile) => set({ userProfile: profile }), // Updates user profile
}));
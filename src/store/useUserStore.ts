// stores/userStore.ts
import { create } from 'zustand'

type User = {
  id: string
  username: string
  email: string
  role?: string
}

type UserState = {
  user: User | null
  setUser: (user: User) => void
  clearUser: () => void
  updateUser: (user: Partial<User>) => void
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
  updateUser: (userUpdates) =>
    set((state) => ({
      user: state.user ? { ...state.user, ...userUpdates } : null,
    })),
}))

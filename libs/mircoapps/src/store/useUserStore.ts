import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface UseContext {
  code: string;
  username: string;
  password: string;
}

interface UserStoreProps {
  user?: UseContext | undefined;
  setUser(user: UseContext): void;
  cleanup(): void;
}

const useUserStore = create<UserStoreProps>()(
  persist(
    (set) => ({
      setUser(user) {
        return set({ user });
      },
      cleanup() {
        return set({
          user: undefined,
        });
      },
    }),
    {
      name: 'user',
    }
  )
);

export default useUserStore;

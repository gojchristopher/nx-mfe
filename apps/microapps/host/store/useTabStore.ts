import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { removeDuplicates } from '../utils/removeDuplicates';

export interface TabContext {
  tab: string;
}

interface TabStoreProps {
  tabs: Array<TabContext>;
  setTab(tab: TabContext): void;
  selectedTab: TabContext;
  setSelectedTab(tab: TabContext): void;
  removeTab(tab: TabContext): void;
  reOrderTabs(tabs: TabContext[]): void;
  cleanup(): void;
}

const useTabStore = create<TabStoreProps>()(
  persist(
    (set) => ({
      tabs: [{ tab: 'Dashboard' }],
      selectedTab: { tab: 'Dashboard' },
      setSelectedTab(newValue) {
        return set({ selectedTab: newValue });
      },
      setTab(newTab) {
        return set((state) => ({
          tabs: removeDuplicates([newTab, ...state.tabs], 'tab'),
        }));
      },
      removeTab(removedTab) {
        return set((state) => ({
          tabs: state.tabs.filter(
            (currentTabs) => currentTabs.tab !== removedTab.tab
          ),
        }));
      },
      reOrderTabs(tabs) {
        // return set((state) => {
        //   if (state.tabs !== tabs)
        //     return {
        //       tabs,
        //     };
        // });
        return set({ tabs });
      },
      cleanup() {
        return set({
          tabs: [{ tab: 'Dashboard' }],
          selectedTab: { tab: 'Dashboard' },
        });
      },
    }),
    {
      name: 'tab',
    }
  )
);

export default useTabStore;

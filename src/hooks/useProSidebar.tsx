import React from 'react';
import { useSidebar } from './useSidebar';

interface ProSidebarResult {
  /**
   * a function that enables you to update the sidebar's collapsed status
   */
  collapseSidebar: (collapsed?: boolean) => void;

  /**
   * a function that enables you to update the sidebar's toggled status
   */
  toggleSidebar: (toggled?: boolean) => void;

  /**
   * sidebar breakpoint status
   * value is set to true when screen size reaches the breakpoint
   */
  broken: boolean;

  /**
   * sidebar collapsed status
   */
  collapsed: boolean;

  /**
   * sidebar toggled status
   */
  toggled: boolean;

  /**
   * sidebar rtl status
   */
  rtl: boolean;
}

export const useProSidebar = (): ProSidebarResult => {
  const {
    updateSidebarState,
    updateCollapseState,
    updateToggleState,
    collapsed,
    toggled,
    broken,
    rtl,
  } = useSidebar();

  const collapseSidebar = React.useCallback(
    (value?: boolean) => {
      if (value === undefined) updateCollapseState();
      else updateSidebarState({ collapsed: value });
    },
    [updateCollapseState, updateSidebarState],
  );

  const toggleSidebar = React.useCallback(
    (value?: boolean) => {
      if (value === undefined) updateToggleState();
      else updateSidebarState({ toggled: value });
    },
    [updateToggleState, updateSidebarState],
  );

  return {
    collapseSidebar,
    toggleSidebar,
    collapsed: !!collapsed,
    broken: !!broken,
    toggled: !!toggled,
    rtl: !!rtl,
  };
};

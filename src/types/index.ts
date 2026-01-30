import type { HTMLAttributes } from 'astro/types';

/**
 * Base props for components that extend HTML elements
 */
export type BaseComponentProps<T extends keyof HTMLAttributes> = HTMLAttributes[T];

/**
 * Props for components with optional className
 */
export interface WithClassName {
  class?: string;
}

/**
 * Props for components with children slot
 */
export interface WithChildren {
  children?: unknown;
}

/**
 * Navigation item type
 */
export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
}

/**
 * Main navigation configuration
 */
export interface NavConfig {
  mainNav: NavItem[];
}

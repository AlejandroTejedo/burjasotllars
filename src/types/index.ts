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

/**
 * Property type for real estate listings
 */
export interface Property {
  /** Unique identifier for the property */
  id: string;
  /** Title or name of the property */
  title: string;
  /** Location/address of the property */
  location: string;
  /** Price in euros */
  price: number;
  /** URL of the main property image */
  image?: string;
  /** Number of bedrooms */
  bedrooms?: number;
  /** Number of bathrooms */
  bathrooms?: number;
  /** Area in square meters */
  area?: number;
  /** Whether this is a new listing */
  isNew?: boolean;
  /** Whether this property is featured */
  isFeatured?: boolean;
}

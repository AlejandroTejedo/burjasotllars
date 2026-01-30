/**
 * UI Components Barrel Export
 *
 * Re-exports all base UI components for convenient importing.
 *
 * @example
 * import { Button, Card, Badge, Input } from '@/components/ui';
 */

// Note: Astro components are imported directly from their files
// This file documents the available components

export type { Props as ButtonProps, ButtonVariant, ButtonSize } from './Button.astro';
export type { Props as CardProps, CardVariant } from './Card.astro';
export type { Props as BadgeProps, BadgeVariant } from './Badge.astro';
export type { Props as InputProps, InputType, SelectOption } from './Input.astro';

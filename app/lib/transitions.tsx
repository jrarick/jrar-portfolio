'use client';

import {
  unstable_addTransitionType as addTransitionType,
  startTransition,
  unstable_ViewTransition as ViewTransition,
} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

/**
 * Available transition types for navigation
 */
const transitionTypes = [
  'default',
  'transition-to-detail',
  'transition-to-list',
] as const;

/**
 * Available animation types for transitions
 */
const animationTypes = [
  'auto',
  'none',
  'animate-fade-in',
  'animate-slide-up',
  'animate-morph',
] as const;

/**
 * Type for transition types with their corresponding animations
 */
type TransitionType = (typeof transitionTypes)[number];

/**
 * Type for available animation classes
 */
type AnimationType = (typeof animationTypes)[number];

/**
 * Mapping of transition types to their animation classes
 */
type TransitionMap = { default: AnimationType } & Partial<
  Record<Exclude<TransitionType, 'default'>, AnimationType>
>;

/**
 * Type for transition class names or transition maps
 */
type ViewTransitionClass = AnimationType | TransitionMap;

/**
 * Type for transition element IDs
 */
type TransitionId = `project-${string}` | 'project-title' | 'project-image';

/**
 * Props for TransitionLink component
 */
type TransitionLinkProps = Omit<React.ComponentProps<typeof Link>, 'href'> & {
  type: TransitionType;
  href: string;
  className?: string;
  children: React.ReactNode;
};

/**
 * Extended Link component that adds a type to a navigation transition.
 */
export function TransitionLink({ type, ...props }: TransitionLinkProps) {
  const router = useRouter();

  const handleNavigate = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    startTransition(() => {
      addTransitionType(type);
      router.push(props.href);
    });
  };

  return <Link onClick={handleNavigate} {...props} />;
}

/**
 * Wrapper for page transitions.
 */
export function PageTransition({
  children,
  enter,
  exit,
}: {
  children: React.ReactNode;
  enter: TransitionMap;
  exit: TransitionMap;
}) {
  return (
    <ViewTransition enter={enter} exit={exit}>
      {children}
    </ViewTransition>
  );
}

/**
 * Wrapper for shared element transitions between views.
 */
export function SharedTransition({
  name,
  children,
  share,
}: {
  name: TransitionId;
  children: React.ReactNode;
  share?: ViewTransitionClass | string;
}) {
  return (
    <ViewTransition name={name} share={share}>
      {children}
    </ViewTransition>
  );
}

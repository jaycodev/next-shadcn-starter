'use client'

import { useTheme } from 'next-themes'

interface ThemedIconProps {
  name: string
  alt: string
  className?: string
  themed?: boolean
}

function ThemedIcon({
  name,
  alt,
  className = 'mx-auto h-5 w-auto',
  themed = true,
}: ThemedIconProps) {
  const { resolvedTheme, systemTheme } = useTheme()

  const theme = resolvedTheme || systemTheme || 'dark'
  const src = themed ? `/logos/${name}-${theme}.svg` : `logos/${name}.svg`

  return <img className={className} src={src} alt={alt} />
}

export function LogoTailwind() {
  return <ThemedIcon name="tailwind" alt="Tailwind CSS Logo" />
}

export function IconReact() {
  return <ThemedIcon name="react" alt="React Icon" />
}

export function IconTypeScript() {
  return <ThemedIcon name="typescript" alt="TypeScript Icon" themed={false} />
}

export function LogoTurbopack() {
  return <ThemedIcon name="turbopack" alt="Turbopack Logo" />
}

export function IconMotion() {
  return <ThemedIcon name="motion" alt="Motion Icon" />
}

export function IconRadix() {
  return <ThemedIcon name="radix" alt="Radix UI Icon" />
}

export function IconPNPM() {
  return <ThemedIcon name="pnpm" alt="PNPM Icon" />
}

export function IconEsLint() {
  return <ThemedIcon name="eslint" alt="ESLint Icon" themed={false} />
}

export function IconPrettier() {
  return <ThemedIcon name="prettier" alt="Prettier Icon" />
}

export function IconEditorConfig() {
  return <ThemedIcon name="editorconfig" alt="EditorConfig Icon" />
}

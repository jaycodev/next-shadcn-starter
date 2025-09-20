import { InfiniteSlider } from '@/components/logos/infinite-slider'
import { ProgressiveBlur } from '@/components/logos/progressive-blur'

import {
  IconEditorConfig,
  IconEsLint,
  IconMotion,
  IconPNPM,
  IconPrettier,
  IconRadix,
  IconReact,
  IconTurbopack,
  IconTypeScript,
  LogoTailwind,
} from './logos'

export function LogoProgressive() {
  return (
    <section className="bg-background overflow-hidden">
      <div className="relative m-auto max-w-7xl px-6">
        <div className="relative py-6">
          <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
            <div className="flex font-semibold">
              <LogoTailwind />
            </div>

            <div className="flex gap-2 font-semibold">
              <IconReact />
              React
            </div>

            <div className="flex gap-2 font-semibold">
              <IconTypeScript />
              TypeScript
            </div>

            <div className="flex gap-2 font-semibold">
              <IconTurbopack />
              Turbopack
            </div>

            <div className="flex gap-2 font-semibold">
              <IconMotion />
              Motion
            </div>

            <div className="flex gap-2 font-semibold">
              <IconRadix />
              Radix UI
            </div>

            <div className="flex gap-2 font-semibold">
              <IconPNPM />
              PNPM
            </div>

            <div className="flex gap-2 font-semibold">
              <IconEsLint />
              EsLint
            </div>

            <div className="flex gap-2 font-semibold">
              <IconPrettier />
              Prettier
            </div>

            <div className="flex gap-2 font-semibold">
              <IconEditorConfig />
              EditorConfig
            </div>
          </InfiniteSlider>

          <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
          <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>

          <ProgressiveBlur
            className="pointer-events-none absolute left-0 top-0 h-full w-20"
            direction="left"
            blurIntensity={1}
          />
          <ProgressiveBlur
            className="pointer-events-none absolute right-0 top-0 h-full w-20"
            direction="right"
            blurIntensity={1}
          />
        </div>
      </div>
    </section>
  )
}

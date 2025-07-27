"use client"

import { useMediaQuery } from "@/hooks/use-media-query"
import InteractiveCursor from "@/components/interactive-cursor"

export default function ClientCursorWrapper() {
  const isMobile = useMediaQuery("(max-width: 768px)")

  if (isMobile) {
    return null
  }

  return <InteractiveCursor />
}
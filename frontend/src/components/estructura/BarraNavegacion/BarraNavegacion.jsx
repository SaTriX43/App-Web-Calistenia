'use client'
import { useMediaQuery } from 'react-responsive'
import { BarraNavegacionMobile } from './BarraNavegacionMobile'
import { BarraNavegacionDesktop } from './BarraNavegacionDesktop'

export const BarraNavegacion = () => {

  const esMobile = useMediaQuery({maxWidth : 768})

  return (
    // mobile 
    <>
      {esMobile ? (
        <BarraNavegacionMobile/>
      ) : (
        // desktop 
        <BarraNavegacionDesktop/>
      )}
    </>
  )
}

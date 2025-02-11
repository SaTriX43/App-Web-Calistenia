import { NextResponse } from "next/server";


export function middleware(req) {
  //detecta la ruta
  const {pathname} = req.nextUrl;
  
  if(pathname.startsWith('/parques/agregarUbicacion') || pathname.startsWith('/usuario')) {
    //obtinene la cookie guardada
    const token = req.cookies.get('authToken')?.value

    //si no hay token que me rediriga a /autenticacion/login
    if(!token) {
      const url = req.nextUrl.clone();
      url.pathname = '/autenticacion/login'

      url.searchParams.set('redireccion', pathname)
      return NextResponse.redirect(url)
    }
  }
  //si todo ta bien que me deje seguir
  return NextResponse.next()
}
export const config = {
  matcher: ['/parques/agregarUbicacion/:path*', '/usuario/:path*'],
};
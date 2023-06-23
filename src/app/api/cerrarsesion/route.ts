import { NextResponse, NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'
import { serialize } from 'cookie'

export async function GET() {

    const token = jwt.sign({
        exp: -1,
      }, 'secret')
      const serialized = serialize('token', token, {
        httpOnly: true,
        secure: false,
        maxAge: -1,
        path: '/',
      })

      const res = new Response(JSON.stringify({
        mensaje: 'Sesion cerrada',
      }), {})


      res.headers.append('Set-Cookie', serialized)
    return res;
  }

import jwt, { JwtPayload } from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';
import { removeBearerKeyword } from '../../shared/utils/removeBearerKeyword';

export function middleware(request: NextRequest) {
    const currentDate = new Date();
    const token = removeBearerKeyword(
        request
        .cookies
        ?.['_parsed']
        ?.get('token')
        ?.value
    )
    const isExcludedRoutes = request.url.includes('/auth');
    let isValidToken = false;

    try {
        const decodedToken = jwt.decode(token) as JwtPayload;
        const expire = Number(decodedToken?.exp ?? 0)
        isValidToken = expire * 1000 > currentDate.getTime();
    } catch(err) {
        console.log(err);
    }

    if(isValidToken) {
        if(isExcludedRoutes) return NextResponse.error();
        return NextResponse.next();
    } else {
        if(isExcludedRoutes) return NextResponse.next();
        return NextResponse.error()
    }
}

export const config = {
    matcher: [
        '/auth/:path*',
        '/app',
    ],
}
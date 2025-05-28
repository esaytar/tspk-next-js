import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; 
export const revalidate = 3600;

export async function GET(request) {
  const groupId = process.env.VK_GROUP_ID;
  const token = process.env.VK_SERVICE_TOKEN;

  if (!groupId || !token) {
    return NextResponse.json(
      { error: 'Server configuration error' },
      { status: 500 }
    );
  }

  try {
    const url = new URL('https://api.vk.com/method/wall.get');
    url.searchParams.append('owner_id', `-${groupId}`);
    url.searchParams.append('count', '100');
    url.searchParams.append('access_token', token);
    url.searchParams.append('v', '5.131');

    const response = await fetch(url.toString());
    const data = await response.json();

    if (data.error) {
      console.error('VK API Error:', data.error);
      return NextResponse.json(
        { error: 'VK API: ' + data.error.error_msg },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      data: data.response
    });

  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
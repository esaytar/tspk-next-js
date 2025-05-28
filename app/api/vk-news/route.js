import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch(`https://api.vk.com/method/wall.get?owner_id=-${process.env.VK_GROUP_ID}&count=100&access_token=${process.env.VK_SERVICE_TOKEN}&v=5.131`);
    const data = await response.json();

    // Возвращаем в вашем формате
    return NextResponse.json({
      response: {
        items: data.response?.items || []
      }
    });

  } catch (error) {
    return NextResponse.json({
      response: {
        items: []
      },
      error: error.message
    });
  }
}
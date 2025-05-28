import { NextResponse } from 'next/server';
export const revalidate = 3600;

export async function GET() {
  try {
    const vkResponse = await fetch(`https://api.vk.com/method/wall.get?owner_id=-174700694&count=100&access_token=${process.env.VK_SERVICE_TOKEN}&v=5.131`)
    const vkData = await vkResponse.json()

    if (!vkData.response) {
      throw new Error('VK API вернул неожиданную структуру данных')
    }

    return NextResponse.json({
      success: true,
      response: {
        items: vkData.response.items,
        count: vkData.response.count
      }
    });

  } catch (error) {
    console.error('VK API Error:', error)
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 })
  }
}
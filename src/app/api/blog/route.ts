import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const response = await fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@masaliefmaulana',
    );
    if (response.status === 200) {
      const data = await response.json();
      // Process the data as needed
      const imageUrl = data.feed.image;
      const updatedPosts = data.items.map((post: any) => ({
        ...post,
        image: imageUrl,
      }));
      // return updatedPosts;
      return NextResponse.json(updatedPosts);
    } else {
      console.error('Error fetching data:', response.statusText);
      throw new Error('Error fetching data');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

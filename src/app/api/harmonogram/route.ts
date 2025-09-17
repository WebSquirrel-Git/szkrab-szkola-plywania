import {NextResponse} from 'next/server';
import {getConnection} from '@/src/lib/db';

export async function GET() {
  const db = await getConnection();
  const [rows] = await db.query(
    'SELECT*FROM harmonogram ORDER BY dzien_tygodnia, start_zajec;'
  );
  await db.end();
  return NextResponse.json(rows);
}

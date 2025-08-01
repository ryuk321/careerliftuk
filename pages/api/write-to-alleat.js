import { getAuthClient } from '@/lib/googleSheets';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Only POST allowed' });

  const { businessName, businessType, contactName, phone, email, address, status, remarks } = req.body;

  // Validate required fields
  if (!businessName || !contactName || !phone) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const sheets = await getAuthClient();
    const now = new Date().toISOString();

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'AllEat!A:I',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [now, businessName, businessType, contactName, phone, email, address, status, remarks]
        ],
      },
    });

    return res.status(200).json({ message: 'Sales form submitted successfully!' });
  } catch (err) {
    console.error('Google Sheets error:', err);
    return res.status(500).json({ error: 'Something went wrong!' });
  }
}

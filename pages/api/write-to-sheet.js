import { getAuthClient } from '@/lib/googleSheets';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Only POST allowed' });



//   This is for Sheet Applications
  const { fullName, email, phone, location,jobLocation, postcode, jobType, bio } = req.body;

  // Optional: validate fields
  if (!fullName || !email || !phone) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const sheets = await getAuthClient();
    const now = new Date().toISOString();

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Applications!A:F',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[now,fullName, email, phone, location,jobLocation, postcode, jobType, bio]],
      },
    });

    return res.status(200).json({ message: 'Form submitted successfully!' });
  } catch (err) {
    console.error('Google Sheets error:', err);
    return res.status(500).json({ error: 'Something went wrong!' });
  }
}

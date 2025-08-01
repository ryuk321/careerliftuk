import { getAuthClient } from '@/lib/googleSheets';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Only POST allowed' });



//   This is for Sheet Applications
  const { fullName,companyName, email, phone, location, postcode, jobType, description,salary,forwhom } = req.body;

  // Optional: validate fields
  if (!fullName || !email || !phone || !jobType) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const sheets = await getAuthClient();
    const now = new Date().toISOString();

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Recruiters!A:F',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[now,companyName,fullName, email, phone, location, postcode, jobType, description,salary,forwhom]],
      },
    });

    return res.status(200).json({ message: 'Form submitted successfully!' });
  } catch (err) {
    console.error('Google Sheets error:', err);
    return res.status(500).json({ error: 'Something went wrong!' });
  }
}

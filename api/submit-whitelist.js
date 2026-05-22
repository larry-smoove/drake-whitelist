export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const {
    walletAddress,
    privyUserId,
    twitterHandle,
    twitterName,
    otherHandles,
    email,
    accessCode,
    referral,
    submittedAt,
  } = req.body;

  if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE || !process.env.AIRTABLE_TABLE) {
    return res.status(500).json({ error: 'Airtable configuration is missing' });
  }

  const airtablePayload = {
    fields: {
      'Wallet Address': walletAddress,
      'Privy User ID': privyUserId,
      'Twitter Handle': twitterHandle,
      'Twitter Name': twitterName,
      'Other Handles': otherHandles,
      Email: email,
      'Access Code': accessCode,
      Referral: referral,
      'Submitted At': submittedAt,
    },
  };

  try {
    const airtableRes = await fetch(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE}/${encodeURIComponent(process.env.AIRTABLE_TABLE)}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(airtablePayload),
      }
    );

    if (!airtableRes.ok) {
      const errorBody = await airtableRes.json().catch(() => ({}));
      return res.status(airtableRes.status).json({
        error: errorBody?.error?.message || 'Airtable returned an error',
      });
    }

    const data = await airtableRes.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
}

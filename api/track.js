export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false });
  }

  const body = req.body || {};
  const entry = {
    event: body.event || 'page_view',
    path: body.path || '/',
    referrer: body.referrer || 'direct',
    title: body.title || '',
    ts: body.ts || new Date().toISOString(),
    userAgent: req.headers['user-agent'] || ''
  };

  console.log('EF_TRAFFIC', JSON.stringify(entry));
  res.setHeader('Cache-Control', 'no-store');
  return res.status(204).end();
}

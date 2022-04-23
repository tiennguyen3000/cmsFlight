import type { NextApiRequest, NextApiResponse } from 'next';
import BargainFinderMaxApi from 'service/bargainFinderMaxApi';

const ignoreList = ['BargainFinderMaxRqDTO'];

export default async function BargainFinderMax(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const body = req.body;
  console.log(body);
  try {
    const response = await BargainFinderMaxApi.post({ ...body });

    const { error, success, pricedItineraries } = response;
    if (success != undefined && error === undefined) {
      res.status(200).json({ success, pricedItineraries });
    } else {
      res.status(500).json({ error: 'Something went wrong' });
    }
  } catch {
    res.status(500).json({ error: 'Something went wrong' });
  }
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'

import questoes from "../bancoQuestoes";
import QuestaoModel from "../../../model/questao";

type Data = {


}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json(questoes[0]);
}

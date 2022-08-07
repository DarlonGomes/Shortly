import { checkRank } from "../repository/rankRepository.js";
export const rankHandler = async (req,res) => {
    const rows = await checkRank();
    return res.send(rows).status(200);
}
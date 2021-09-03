import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../utils/initSupabase";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    supabase.auth.api.setAuthCookie(req, res);
}

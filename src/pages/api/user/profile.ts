// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { User } from "@supabase/supabase-js";
import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../utils/initSupabase";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const token = req.headers.token as string;

    const user = await supabase.auth.api.getUser(token);
    //   console.log(user);

    let { data, error } = await supabase
        .from("user_data")
        .select("*")
        .eq("user_id", user.data?.id);

    if (error) return res.status(401).json({ error: error.message });

    data = data as any[];

    if (data.length === 0 || data.length > 1) {
        return res.status(403).json({ error: 'Forbidden' });
    }

    return res.status(200).json(data[0]);
}

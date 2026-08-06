import { supabase } from "../../../config/supabase";

export const getAllUsers = async (req, res) => {
  const { data, error } = await supabase.from("users").select();
  res.status(200).send({ users: data });
};

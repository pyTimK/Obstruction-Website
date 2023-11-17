import FHT from "@/classes/templates/FHT";
import { useEffect, useState } from "react";

export const useFHWatch = <T extends { id: string }>(
  fht: FHT<T>,
  id?: string
): [T | null, boolean] => {
  const [obj, setObj] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return fht.watch(id, (obj) => {
      setObj(obj);
      setLoading(false);
    });
  }, [id]);

  return [obj, loading];
};

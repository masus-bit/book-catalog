import { useEffect, useState } from "react";
import { apiLanguagesGetAll } from "../api/languages";
import { Languages } from "../types/languages";
interface UseLanguageGetAll {
  data: Languages.Data[];
  loading: boolean;
}

export const useLanguageGetAll = (): UseLanguageGetAll => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Languages.Data[]>([]);

  useEffect(() => {
    setLoading(true);
    apiLanguagesGetAll()
      .then(setData)
      .catch(console.error)
      .then(() => setLoading(false));
  }, []);
  return {
    data,
    loading,
  };
};

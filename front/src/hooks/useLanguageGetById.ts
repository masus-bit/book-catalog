import { useEffect, useState } from "react";
import { apiLanguagesGetById } from "../api/languages";
import { Languages } from "../types/languages";
interface UseLanguageGetById {
  data: Languages.Data | null;
  loading: boolean;
  setId:(id:number)=>void
}

export const useLanguageGetById = (defaultId?:number): UseLanguageGetById => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Languages.Data|null>(null);
  const [id,setId]=useState<number | undefined>(defaultId)

  useEffect(() => {
      if(id===undefined || isNaN(id)) return

    setData(null)
    setLoading(true);
    apiLanguagesGetById(id)
      .then(setData)
      .catch(console.error)
      .then(() => setLoading(false));
  }, [id]);
  return {
    data,
    loading,
    setId
  };
};
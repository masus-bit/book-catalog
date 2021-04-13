import { useEffect, useState } from "react";
import { apiGenresGetById } from "../api/genres";
import { Genres } from "../types/genres";
interface UseGenresGetById {
  data: Genres.Data | null;
  loading: boolean;
  setId:(id:number)=>void
}

export const useGenreGetById = (defaultId?:number): UseGenresGetById => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Genres.Data|null>(null);
  const [id,setId]=useState<number | undefined>(defaultId)

  useEffect(() => {
      if(id===undefined || isNaN(id)) return

    setData(null)
    setLoading(true);
    apiGenresGetById(id)
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
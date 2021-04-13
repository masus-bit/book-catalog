import { useEffect, useState } from "react";
import { apiGenresGetAll } from "../api/genres";
import { Genres } from "../types/genres";
interface UseGenreGetAll {
  data: Genres.Data[];
  loading: boolean;
}

export const useGenreGetAll = (): UseGenreGetAll => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Genres.Data[]>([]);

  useEffect(() => {
    setLoading(true);
    apiGenresGetAll()
      .then(setData)
      .catch(err=>{
        console.error(err)
        setData([])
      })
      .then(() => setLoading(false));
  }, []);
  return {
    data,
    loading
  };
};

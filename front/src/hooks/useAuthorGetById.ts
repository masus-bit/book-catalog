import { useEffect, useState } from "react";
import { apiAuthorsGetById } from "../api/authors";
import { Authors } from "../types/authors";
interface UseAuthorGetById {
  data: Authors.Data | null;
  loading: boolean;
  setId:(id:number)=>void
}

export const useAuthorGetById = (defaultId?:number): UseAuthorGetById => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Authors.Data|null>(null);
  const [id,setId]=useState<number | undefined>(defaultId)

  useEffect(() => {
      if(id===undefined || isNaN(id)) return

    setData(null)
    setLoading(true);
    apiAuthorsGetById(id)
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
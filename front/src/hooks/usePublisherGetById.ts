import { useEffect, useState } from "react";
import { apiPublishersGetById } from "../api/publishers";
import { Publishers } from "../types/publishers";
interface UsePublisherGetById {
  data: Publishers.Data | null;
  loading: boolean;
  setId:(id:number)=>void
}

export const usePublisherGetById = (defaultId?:number): UsePublisherGetById => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Publishers.Data|null>(null);
  const [id,setId]=useState<number | undefined>(defaultId)

  useEffect(() => {
      if(id===undefined || isNaN(id)) return

    setData(null)
    setLoading(true);
    apiPublishersGetById(id)
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
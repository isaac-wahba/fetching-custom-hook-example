import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
}

const useFetchUsers = (url: string) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<User[]> = await axios.get(url);
        setUsers(response.data);
        setLoading(false);
      } catch (err: any) {
        setError(err?.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { users, loading, error };
};

export default useFetchUsers;

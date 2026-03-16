import { useEffect, useState } from 'react';
import {
  getAllHymns,
  getCurrentHymns,
  getHymnById,
} from '../services/hymnService';
import { Hymn } from '../models/hymnModel';

export const useHymns = () => {
  const [hymns, setHymns] = useState<Hymn[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadHymns();
  }, []);

  const loadHymns = async () => {
    const data = await getAllHymns();
    setHymns(data);
    setLoading(false);
  };

  return { hymns, loading };
};

export const useCurrentHymns = () => {
  const [hymns, setHymns] = useState<Hymn[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadCurrent();
  }, []);

  const loadCurrent = async () => {
    const data = await getCurrentHymns();
    setHymns(data);
    setLoading(false);
  };

  return { hymns, loading };
};

export const useHymn = (id: string) => {
  const [hymn, setHymn] = useState<Hymn | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const loadHymn = async () => {
    const data = await getHymnById(id);
    setHymn(data);
    setLoading(false);
  };

  useEffect(() => {
    if (!id) return;

    loadHymn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return { hymn, loading };
};

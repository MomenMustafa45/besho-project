import {
  getAllHymns,
  getCurrentHymns,
  getHymnById,
} from '../services/hymnService';
import { useQuery } from '@tanstack/react-query';

export const useHymns = () => {
  return useQuery({
    queryKey: ['hymns'],
    queryFn: getAllHymns,
  });
};

export const useCurrentHymns = () => {
  return useQuery({
    queryKey: ['currentHymns'],
    queryFn: getCurrentHymns,
  });
};

export const useHymn = (id: string) => {
  return useQuery({
    queryKey: ['hymn', id],
    queryFn: () => getHymnById(id),
    enabled: !!id,
  });
};

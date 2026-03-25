import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  getDoc,
  doc,
} from 'firebase/firestore';
import { db } from '../firestore';
import { Hymn, mapHymn } from '../models/hymnModel';

const COLLECTION_NAME = 'coptic taraneem';

const hymnsRef = collection(db, COLLECTION_NAME);

export const getAllHymns = async (): Promise<Hymn[]> => {
  const q = query(hymnsRef, orderBy('order'));

  const snapshot = await getDocs(q);

  return snapshot.docs.map(mapHymn);
};

export const getCurrentHymns = async (): Promise<Hymn[]> => {
  const q = query(hymnsRef, where('IsCurrent', '==', true));

  const snapshot = await getDocs(q);

  return snapshot.docs.map(mapHymn);
};

export const getHymnById = async (id: string): Promise<Hymn | null> => {
  const hymnDoc = doc(db, COLLECTION_NAME, id);

  const snapshot = await getDoc(hymnDoc);

  if (!snapshot.exists()) return null;

  return mapHymn(snapshot);
};

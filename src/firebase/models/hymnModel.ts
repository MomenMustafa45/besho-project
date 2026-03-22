import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';

export interface Hymn {
  id: string;
  nameAr: string;
  nameEn: string;
  nameFr?: string;

  createdByAr: string;
  createdByEn: string;
  createdByFr?: string;

  image: string;
  link: string;

  isCurrent: boolean;

  typeAr: string;
  typeEn: string;
  typeFr?: string;

  counter: number;
  order: number;

  isFavorite?: boolean;
}

export const mapHymn = (
  doc: QueryDocumentSnapshot<DocumentData, DocumentData>,
): Hymn => {
  const data = doc.data();

  return {
    id: doc.id,
    nameAr: data.NameAr,
    nameEn: data.NameEn,
    nameFr: data.NameFr,
    createdByAr: data.CreatedByAr,
    createdByEn: data.CreatedByEn,
    image: data.Image,
    link: data.Link,
    isCurrent: data.IsCurrent,
    typeAr: data.TypeAr,
    typeEn: data.TypeEn,
    counter: data.counter,
    order: data.order,
  };
};

import { create } from 'zustand';
import {
  PCimagesChina,
  PCimagesDessert,
  PCimagesJapan,
  PCimagesKorea,
  PCimagesRest,
  PCimagesSchool,
  PCimagesUS,
} from '../constants/PCdata';

// zustand
const useCategoryStore = create((set) => ({
  currentCategory: '중식',
  setCurrentCategory: (category) => set({ currentCategory: category }),
  getCategoryImages: (categories) => {
    const categoryData = {
      중식: PCimagesChina,
      일식: PCimagesJapan,
      양식: PCimagesUS,
      한식: PCimagesKorea,
      분식: PCimagesSchool,
      후식: PCimagesDessert,
      기타: PCimagesRest,
    };
    return categoryData[categories] || [];
  },
}));

export default useCategoryStore;

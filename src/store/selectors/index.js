import { createSelector } from 'reselect';

const getBooksDataObject = (state) => state.booksData;

export const booksDataSelector = createSelector([getBooksDataObject], (booksData) => booksData);

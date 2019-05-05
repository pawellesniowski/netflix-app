export const sortingFunction = (arr, sortBy) => {
    if (sortBy === 'release_date') {
        return arr.sort((a, b) => new Date(a[sortBy]) - (new Date(b[sortBy])));
    } else {
        return arr.sort((a, b) => a[sortBy] - (b[sortBy]));
    }
};

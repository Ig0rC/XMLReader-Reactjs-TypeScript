function formatDate(date: Date): string {
    if (date.getMonth() < 10) {
        const month = `0${date.getMonth() + 1}`;
        return `${date.getDate()}/${month}/${date.getFullYear()}`;
    }

    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

export default formatDate;

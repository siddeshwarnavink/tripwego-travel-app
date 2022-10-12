function currencyFormatter(amount: number) {
    const formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
    });

    return formatter.format(amount).slice(0, -3);
}

export default currencyFormatter;
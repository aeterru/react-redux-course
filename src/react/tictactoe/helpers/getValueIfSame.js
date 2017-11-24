const getValueIfSame = values => values.reduce((result, value) => (
    value && result === value ? value : null
), values[0]);

export default getValueIfSame;
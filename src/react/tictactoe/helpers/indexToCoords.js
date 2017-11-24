const indexToCoords = index => ({
    x: index % 3,
    y: Math.floor(index / 3),
});

export default indexToCoords;
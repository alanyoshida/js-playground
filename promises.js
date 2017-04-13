const dragons = [
	{ name: 'Fluffykins', health: 70 },
	{ name: 'Deathlord', health: 65000 },
	{ name: 'Little pizza', health: 2 },
];

const dragonNames = dragons.map( dragon => dragon.name )

console.log(dragonNames);

const whenDragonLoaded = new Promise((resolve, reject) => {
	setTimeout(() => resolve(dragons), 2000);
});

const names = whenDragonLoaded
				.map(dragon => dragon.name)
				.then(name => console.log(name));

console.log(names);
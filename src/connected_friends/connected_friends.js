const Queue = require("../lib/queue");

const connected = (graph, startUser, endUser) => {
	const users = Object.keys(graph);

	// If 'graph' is empty (has no keys), return false
	if (users.length === 0) {
		return false;
	}
	// If 'startUser' is equal to 'endUser', return true
	if (startUser === endUser) {
		return true;
	}

	// Initialize a new array 'enqueued' that contains 'startUser'
	const enqueued = [startUser];
	// Initialize a new empty queue 'discovered'
	const discovered = new Queue();
	// Enqueue 'startUser'
	discovered.enqueue(startUser);

	// While 'discovered' isn't empty...
	while (discovered.first) {
		// Dequeue a value from 'discovered' and name it 'user'
		const user = discovered.dequeue();
		// For each friend 'followedUser' in 'graph[user]'...
		const following = graph[user];
		for (const followedUser of following) {
			// If 'followedUser' is equal to 'endUser', return true
			if (followedUser === endUser) {
				return true;
			}
			// If 'enqueued' doesn't include 'followedUser'...
			if (!enqueued.includes(followedUser)) {
				// Add 'followedUser' to 'enqueued'
				enqueued.push(followedUser);
				// Enqueue 'followedUser' to 'discovered'
				discovered.enqueue(followedUser);
			}
		}
	}
	// Return false
	return false;
};

module.exports = connected;

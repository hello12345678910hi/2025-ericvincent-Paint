// Utility functions for managing paintings in localStorage

const PAINTINGS_KEY = 'saved_paintings';
const PAINTING_IDS_KEY = 'painting_ids';

/**
 * Generate a unique ID for a painting
 */
export function generatePaintingId() {
	return `painting_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Get all painting IDs from localStorage
 */
export function getPaintingIds() {
	try {
		const ids = localStorage.getItem(PAINTING_IDS_KEY);
		return ids ? JSON.parse(ids) : [];
	} catch (error) {
		console.error('Error getting painting IDs:', error);
		return [];
	}
}

/**
 * Save a painting ID to the list
 */
export function savePaintingId(id) {
	try {
		const ids = getPaintingIds();
		if (!ids.includes(id)) {
			ids.push(id);
			localStorage.setItem(PAINTING_IDS_KEY, JSON.stringify(ids));
		}
	} catch (error) {
		console.error('Error saving painting ID:', error);
	}
}

/**
 * Remove a painting ID from the list
 */
export function removePaintingId(id) {
	try {
		const ids = getPaintingIds();
		const updatedIds = ids.filter((paintingId) => paintingId !== id);
		localStorage.setItem(PAINTING_IDS_KEY, JSON.stringify(updatedIds));
	} catch (error) {
		console.error('Error removing painting ID:', error);
	}
}

/**
 * Save a painting to localStorage
 */
export function savePainting(id, paintingData, metadata = {}) {
	try {
		const painting = {
			id,
			data: paintingData,
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString(),
			...metadata
		};

		localStorage.setItem(`${PAINTINGS_KEY}_${id}`, JSON.stringify(painting));
		savePaintingId(id);

		return true;
	} catch (error) {
		console.error('Error saving painting:', error);
		return false;
	}
}

/**
 * Get a specific painting by ID
 */
export function getPainting(id) {
	try {
		const painting = localStorage.getItem(`${PAINTINGS_KEY}_${id}`);
		return painting ? JSON.parse(painting) : null;
	} catch (error) {
		console.error('Error getting painting:', error);
		return null;
	}
}

/**
 * Get all saved paintings
 */
export function getAllPaintings() {
	try {
		const ids = getPaintingIds();
		const paintings = [];

		for (const id of ids) {
			const painting = getPainting(id);
			if (painting) {
				paintings.push(painting);
			}
		}

		// Sort by creation date (newest first)
		return paintings.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
	} catch (error) {
		console.error('Error getting all paintings:', error);
		return [];
	}
}

/**
 * Get paintings by painter name
 */
export function getPaintingsByPainter(painterName) {
	try {
		const allPaintings = getAllPaintings();
		return allPaintings.filter(
			(painting) =>
				painting.painterName && painting.painterName.toLowerCase() === painterName.toLowerCase()
		);
	} catch (error) {
		console.error('Error getting paintings by painter:', error);
		return [];
	}
}

/**
 * Delete a painting from localStorage
 */
export function deletePainting(id) {
	try {
		localStorage.removeItem(`${PAINTINGS_KEY}_${id}`);
		removePaintingId(id);
		return true;
	} catch (error) {
		console.error('Error deleting painting:', error);
		return false;
	}
}

/**
 * Update painting metadata
 */
export function updatePaintingMetadata(id, metadata) {
	try {
		const painting = getPainting(id);
		if (painting) {
			const updatedPainting = {
				...painting,
				...metadata,
				updatedAt: new Date().toISOString()
			};
			localStorage.setItem(`${PAINTINGS_KEY}_${id}`, JSON.stringify(updatedPainting));
			return true;
		}
		return false;
	} catch (error) {
		console.error('Error updating painting metadata:', error);
		return false;
	}
}

/**
 * Clear all saved paintings
 */
export function clearAllPaintings() {
	try {
		const ids = getPaintingIds();
		for (const id of ids) {
			localStorage.removeItem(`${PAINTINGS_KEY}_${id}`);
		}
		localStorage.removeItem(PAINTING_IDS_KEY);
		return true;
	} catch (error) {
		console.error('Error clearing all paintings:', error);
		return false;
	}
}

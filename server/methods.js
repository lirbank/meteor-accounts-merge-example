// Handle merge of application specific DB items
Meteor.methods({

	// After merging a user we need to change owner on orpahned collection items (i.e. one user 
	// was deleted in the merge, move it's items to the destination user).
	mergeItems: function (sourceUserId, destinationUserId) {

		console.log('Merging DB items', sourceUserId, destinationUserId);

		//  You'd typically do something like:

		/*
		try {
			var affectedRows = Items.update ({"owner":sourceUserId}, {$set: {"owner": destinationUserId}}, {"multi": true});
		} catch (e) {

			// TODO: Items are lost in merge when exception occurs - should clean up orphans too, or
			// make update continue after duplicate error.

			// On error (typically "duplicate item", if you have unique indexes in the items collection), throw exception
			throw new Meteor.Error(500, e.toString());
		}

		return affectedRows;
		*/
	}
});

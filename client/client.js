Template.signIn.events({

	// Sign in, sign up or merge Facebook login service
	'click button#login-facebook': function (e) {
		Meteor.signInWithFacebook ({}, function (error, mergedUsers) {
			if (error) {
				console.log('error', error);
			}

			// mergedUsers is set if a merge occured
			if (mergedUsers) {
				console.log('mergedUsers', mergedUsers);

				// TODO: Meteor.userId() can't be called here since we don't wait for the login to complete in Meteor.signInWithX, thus
				// we have to pass along both sourceUserId and destinationUserId to this callback (mergedUsers). It would be nicer if 
				// 'mergedUsers' was only the sourceUserId (instead of an object).
 
				// The source account (mergedUsers.sourceUserId) has now been deleted, so now is your chance to deal with you application specific
				// DB items to avoid ending up with orphans. You'd typically want to change owner on the items beloning to the deleted 
				// user, or simply delete them.
				Meteor.call ('mergeItems', mergedUsers.sourceUserId, mergedUsers.destinationUserId, function (error, result) {
					if (error) {
						console.log('error', error);
					}
					if (result) {
						console.log('result', result);
					}
				});
			}
		});
		e.preventDefault();
	},

	// Sign in, sign up or merge Google login service
	'click button#login-google': function (e) {
		Meteor.signInWithGoogle ({}, function (error, mergedUsers) {
			if (error) {
				console.log('error', error);
			}

			// mergedUsers is set if a merge occured
			if (mergedUsers) {
				console.log('mergedUsers', mergedUsers);

				// The source account (mergedUsers.sourceUserId) has now been deleted, so now is your chance to deal with you application specific
				// DB items to avoid ending up with orphans. You'd typically want to change owner on the items beloning to the deleted 
				// user, or simply delete them.
				Meteor.call ('mergeItems', mergedUsers.sourceUserId, mergedUsers.destinationUserId, function (error, result) {
					if (error) {
						console.log('error', error);
					}
					if (result) {
						console.log('result', result);
					}
				});
			}
		});
		e.preventDefault();
	},

	// Sign in, sign up or merge Twitter login service
	'click button#login-twitter': function (e) {
		Meteor.signInWithTwitter ({}, function (error, mergedUsers) {
			if (error) {
				console.log('error', error);
			}

			// mergedUsers is set if a merge occured
			if (mergedUsers) {
				console.log('mergedUsers', mergedUsers);

				// The source account (mergedUsers.sourceUserId) has now been deleted, so now is your chance to deal with you application specific
				// DB items to avoid ending up with orphans. You'd typically want to change owner on the items beloning to the deleted 
				// user, or simply delete them.
				Meteor.call ('mergeItems', mergedUsers.sourceUserId, mergedUsers.destinationUserId, function (error, result) {
					if (error) {
						console.log('error', error);
					}
					if (result) {
						console.log('result', result);
					}
				});
			}
		});
		e.preventDefault();
	},

	// Logout
	'click button#logout': function (e) {
		Meteor.logout(function (error) {
			if (error) {
				// console.log('error', error);
			}
		});
		e.preventDefault();
	},
});

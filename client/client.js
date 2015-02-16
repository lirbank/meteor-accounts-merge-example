Template.signIn.events({

  // Sign in, sign up or merge Facebook login service
  'click button#login-facebook': function (e) {
    Meteor.signInWithFacebook ({}, function (error, mergedUserId) {
      if (error) {
        console.log('error', error);
      }

      // mergedUserId is set if a merge occured
      if (mergedUserId) {
        console.log(mergedUserId, 'merged with', Meteor.userId());

        // The source account (mergedUserId) has now been deleted, so now is
        // your chance to deal with you application specific DB items to avoid
        // ending up with orphans. You'd typically want to change owner on the
        // items beloning to the deleted user, or simply delete them.
        Meteor.call ('mergeItems', mergedUserId, function (error, result) {
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
    Meteor.signInWithGoogle ({}, function (error, mergedUserId) {
      if (error) {
        console.log('error', error);
      }

      // mergedUserId is set if a merge occured
      if (mergedUserId) {
        console.log(mergedUserId, 'merged with', Meteor.userId());

        // The source account (mergedUserId) has now been deleted, so now is
        // your chance to deal with you application specific DB items to avoid
        // ending up with orphans. You'd typically want to change owner on the
        // items beloning to the deleted user, or simply delete them.
        Meteor.call ('mergeItems', mergedUserId, function (error, result) {
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
    Meteor.signInWithTwitter ({}, function (error, mergedUserId) {
      if (error) {
        console.log('error', error);
      }

      // mergedUserId is set if a merge occured
      if (mergedUserId) {
        console.log(mergedUserId, 'merged with', Meteor.userId());

        // The source account (mergedUserId) has now been deleted, so now is
        // your chance to deal with you application specific DB items to avoid
        // ending up with orphans. You'd typically want to change owner on the
        // items beloning to the deleted user, or simply delete them.
        Meteor.call ('mergeItems', mergedUserId, function (error, result) {
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

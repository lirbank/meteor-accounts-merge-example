// Set up login services
Meteor.startup( function () {

  // Remove configuration entries in case service is already configured
  ServiceConfiguration.configurations.remove({
    $or: [ {service: "facebook"}, {service: "twitter"}, {service: "google"} ]
  });

  // Add Facebook configuration entry
  ServiceConfiguration.configurations.insert({
    "service": "facebook",
    "appId": "629084243846281",
    "secret": "2d70350bf752992e6b5815043aaf71d3"
  });

  // Add Google configuration entry
  ServiceConfiguration.configurations.insert({
    "service": "google",
    "clientId": "71560727520-ocp9um26hdg7ld22orski9enh2153jti.apps.googleusercontent.com",
    "secret": "HBPFqd1nh9NGveWqNMLy3WBL"
  });

  // Add Twitter configuration entry
  ServiceConfiguration.configurations.insert({
    "service": "twitter",
    "consumerKey": "bRUlh8SiAom7IaJAkZsCE59A6",
    "secret": "clTdriNZDlGvqmWyAEG6TxuDgbNd5MSavtjzbfjgnFbT7lHZDH"
  });

});


// Handle merge of application specific DB items
Meteor.methods({

  // After merging a user we need to change owner on orpahned collection items
  // (i.e. one user was deleted in the merge, move it's items to the
  // destination user).
  mergeItems: function (mergedUserId) {

    console.log('Merging DB items of user', mergedUserId, 'with user', Meteor.userId());

    //  You'd typically do something like:

    /*
    try {
      var affectedRows = Items.update ({"owner":mergedUserId}, {$set: {"owner": Meteor.userId()}}, {"multi": true});
    } catch (e) {

      // TODO: Items are lost in merge when exception occurs - should clean up
      // orphans too, or make update continue after duplicate error.

      // On error (typically "duplicate item", if you have unique indexes in
      // the items collection), throw exception.
      throw new Meteor.Error(500, e.toString());
    }

    return affectedRows;
    */
  }
});

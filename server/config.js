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

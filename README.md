accounts-merge example
=========================

This is an example implementation of the Meteor [accounts-merge package](https://github.com/lirbank/meteor-accounts-merge).

Run it like this:
```sh
$ git clone https://github.com/lirbank/meteor-accounts-merge-example.git
$ cd meteor-accounts-merge-example/
$ meteor
```

## Get login service API keys

The example app is already configured with API keys for three login providers, but you should replace the API credentials with your own. It's done like this:

#### Facebook - Register your app on Facebook:

1. Visit [https://developers.facebook.com/apps](https://developers.facebook.com/apps)
1. Select "Apps", then "Create a New App". (You don't need to enter a namespace.)
1. Select "Settings" and enter a "Contact Email". Then select "Add Platform" and choose "Website".
1. Set Site URL to: `http://localhost:3000/`
1. Select "Status" and make the app and all its live features available to the general public.
1. Select "Dashboard".

Now, copy over "App ID" and "App Secret" to the `server/config.js` file.
  
	
#### Google - Get a Google Client ID:

1. Visit [https://code.google.com/apis/console/](https://code.google.com/apis/console/)
1. If necessary, "Create Project"
1. Click "APIs & auth" and "Credentials" on the left
1. Click the "Create New Client ID" button
1. Choose "Web application" as the type
1. Set Authorized Javascript Origins to: `http://localhost:3000/`
1. Set Authorized Redirect URI to: `http://localhost:3000/_oauth/google?close`
1. Click "Create Client ID"

Now, copy over "Client ID" and "Client secret" to the `server/config.js` file.


#### Twitter - Register your app on Twitter

1. Visit [https://dev.twitter.com/apps/new](https://dev.twitter.com/apps/new)
1. Set Callback URL to: `http://127.0.0.1:3000/_oauth/twitter?close`

Now, copy over "Consumer key" and "Consumer secret" to the `server/config.js` file.

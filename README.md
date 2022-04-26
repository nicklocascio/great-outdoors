# README

Nick Locascio and Keegan MacDonell

## **To Test Our Application**

While our parts are working individually, there are a few bugs that arose when trying to combine the two parts together due to the nature of our different sprints. This section will detail how to see the individual parts working on their own as well as what we have when they are combined together.

### **Feature 6 - Student A (Nick Locascio)**

The self-hosted Parse Server on top of the MongoDB Atlas cluster is fully functional with the version of our application that we turned in for Feature 5, which was essentially the goal from the start. However, since Keegan's feature involved some more robust configuration on the server side with cloud code functions and live queries, things don't work exactly the same when using the server that I set up. If you want to test the AWS Amplify hosted version of my feature working with the self-hosted server and database, you can navigate to the [Feature 6 Hosted Version](https://feature6.great-outdoors.live). The only nuance here is that you must allow insecure content on your browser in order for this to work correctly. Here is how to do that:

If you're on Chrome, click the lock icon next to the URL --> click site settings --> scroll down to insecure content --> change to allow  

The reason that you have to do this is because the server doesn't have an SSL certificate. However, other than that it works exactly as you would expect.

### **Feature 6 - Student B (Keegan MacDonell)**

To test this version, you can navigate to the [Master Hosted Version](https://great-outdoors.live). The difference here is that we are connecting to the Back4App server complete with cloud code functions instead of the self-hosted Parse Sever. 

### **Testing Both Version Together**

To test our half-working connected features, if you download the code and run the app locally, it'll start with the version that connects to the Back4App server. However, if you go into the [environments.js](src/environments.js) file, you will see that the server URL and live query URL for the self-hosted version is in there, just commented out. So, you can comment out the current server/live query URL, uncomment the hosted server/ live query URL, save, and run. Now, the application will be communicating with the self-hosted server. This will allow you to sign up, login, view your profile, and view/post reviews. However, the market and messaging functionalities do not work with the self-hosted server due to the changes that were made in feature 6.
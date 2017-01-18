#Rideshare
This is an application that allows people to post it when they're driving somewhere and wouldn't mind taking additional passengers. Then, other users can perform searches on the data to see if they can hitch a ride somewhere. The website is supposed to facilitate carpooling.
#Running the code
To run the code, you will need to first install solr and set up a core with the schema provided for
the backend (located at backend/schema.xml). For the front end, you will need to first have npm 
installed. Then navigate to the frontend directory and run ```npm install``` to gather all the 
dependencies. To start the frontend, execute ```node_modules/browserify/bin/cmd.js /src/index.js -o src/bundle.js``` 
and then ```node server.js```. Navigate to localhost:3000 to visit the website.
#Preview
##Browse tab
![alt text][browse]

[browse]: https://github.com/HaberR/rideshare/blob/master/browse-tab.png "Browse tab"

##Post tab
![alt text][post]

[post]: https://github.com/HaberR/rideshare/blob/master/post-tab.png "Post tab"

#Design
##backend
The backend is a solr instance. The schema and sample data are included in the folder titled backend. 
##frontend
The frontend makes use of express to set up the server. It uses angular, angular-material, and browserify. 

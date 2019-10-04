


    get:

	   /getAllArticles						// obtain all the articles from database
	   /getAllComments						// obtain all the comments from database




    post:
	     /verify_administrator                      //  verify admin for login, return true or false
		 /verify_user							// verify the common user, return true or false
		 /article/:index						// post the new created article to the database, return true or false
		 /admini_center
		 /forget_password							
		 /commitComment							// commit the user's comment to database, reuturn true or false
		 
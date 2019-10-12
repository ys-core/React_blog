

------------------------------------------------------------------------------------------
    get:

	   /getAllArticles						// get all the articles from database
	   /getAllBoardComments					// get all the comments from database
	   /deleteArticle                       // admin to delete one article
	   /deleteBoardComment                  // admin to delete one board comment





    post:
		 /add_user                              // register new common user
		 /add_admin                             // register new administrator
	     /verify_admin                          //  verify admin for login, return true or false
		 /verify_user							// verify the common user, return true or false
		 
		 /article/:index						// post the new created article to the database, return true or false
		 /admini_center
		 /user_center
		 /forget_password							
		 /commitComment							// commit the user's comment to database, reuturn true or false
		 


创建一篇文章必须包含以下内容

   title, author, key, editTime, category, content

<Link to={`/article/${this.props.content.key}?username=yongsongLee`}> 在to属性中插入动态值和传参
this.props.match.params.index***将获得this.props.content.key的值
this.props.location.search将获得参入的参数?username=yongsongLee
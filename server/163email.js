
const nodemailer = require('nodemailer');

// let config = require('./email/email_config.js');

let mailTransport = nodemailer.createTransport({
	service: 'smtp.163.com',
	host: 'smtp.163.com',
	port: 465,
	secureConnection: true,
	auth:{
		user: 'one_leaf_one_world@163.com',
 		pass: 'yunsongLee520025'	
	},
});




function send(To){

	let mailOptions = {
		from: '"one_leaf_one_world" <one_leaf_one_world@163.com>', //邮件来源
		to: To, //邮件发送到哪里，多个邮箱使用逗号隔开
		subject: 'One_Leaf_One_World', // 邮件主题
		text: 'Hello world ', // 存文本类型的邮件正文
		html:        // html类型的邮件正文
                       '<div style="width:600px;height:border:2px solid green;margin:0 auto;text-align:center;font-size:22px;font-color:yellow;">One_Leaf_One_World</div><br>'+  
		       '<span style="font-size:18px;">'+To+':</span>'+'<br>'+  
                       '<h1 style="text-indent:40px;">This email sent from one_leaf_one_world@163.com</h1><br>',

	        // 下面是发送附件，不需要就注释掉
	        attachments: [{
		       filename: 'index.js',
		       path: './index.js'
		    },
		    {
		       filename: 'content',
		       content: '发送内容'
		    }
	         ]
	};

        mailTransport.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log(error);
		}
		else console.log('sent email successfully');
	});
  
}


exports.send = send; 

var Todo = require('./models/todo'); //mongodb model
function getTodos(res) {
	Todo.find(function(err,todos){
		// 如果有错误的话，发送错误，
		if (err) 
			res.send(err)
		
			//以json的格式 返回所有的todos 
		res.json(todos);
	});
};

module.exports = function(app) {
	// api -------------
	// 得到所有的todos 
	app.get('/api/todos',function(req,res){
		//用mongoose 从数据库中得到所有的todos 
		getTodos(res);
	});
	
	//创建一个todo 并显示所有的todos
	app.post('/api/todos',function(req,res){
		//创建一个todo,通过前台的angularjs 的AJAX请求
		Todo.create({
			text: req.body.text,
			done: false
		},function(err,todo){
			if (err)
				res.send(err);
			getTodos(res);
		});
	});
	
	//删除某个todo
	app.delete('/api/todos/:todo_id',function(req,res){
		Todo.remove({
			_id: req.params.todo_id,
		},function(err,todo){
			if (err) 
				res.send(err);
			getTodos(res);
		});
	});
	
	//程序首页
	app.get('*',function(req,res){
		//加载单个页面 ，通过angularjs进行双向数据绑定
		res.sendfile('./public/index.html');
	});
};
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Random Quote Machine</title>
	<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.css" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="icon/iconfont.css">
	<style type="text/css" media="screen">
		.quote{
			width:500px;
			font-size:20px;
			border:1px solid transparent;
			border-radius:5px;
			/*margin:200px auto 200px;*/
			/*padding: 50px;*/
			background-color: white !important;

		}
		body{
			background-color: rgb(231, 76, 60);
		}
		#pageAuthor{
			font-weight: bolder;
			color: white;
		}
	</style>
	<script type="text/javascript" src="./quote.js"></script>
</head>
<body>
	<div class="container">
		<div class="panel panel-primary quote">
			<!-- <div class="panel-heading">
				Random Quote Machine
			</div> -->
			<div class="panel-collapse" id="myCol">
				<div class="panel-body">
					<span class="iconfont icon-quotation"></span><span class="quote"></span><span class="iconfont icon-quotation-copy"></span>
					<p class="text-right" style="margin-bottom: 0px;">------<span class="author"></span></p>
				</div>
			</div>
			<div class="panel-footer">
				<button type="button" id="shareWeibo" class="btn btn-default"><span class="iconfont icon-xinlangweibo"></span></button>
				<button type="button" id="shareQQ" class="btn btn-default"><span class="iconfont icon-qq"></span></button>
				<button id="changeBtn"type="button" class="btn btn-default pull-right">New quote</button>
			</div>
		</div>
		<p class="text-center" id="pageAuthor">by younguei</p>
	</div>
</body>
</html>

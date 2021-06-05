<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>To Do List</title>

  <meta name="author" content="Shannon A">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">


  <link rel="stylesheet" type="text/css" href="/shannon-nz/css/todo/main.css">


  <script type="text/javascript" src="/shannon-nz/js/jquery.min.js"></script>
   <script>
    var startTime = (new Date()).getTime();
     window.onload = function() {
          var endTime = (new Date()).getTime();
          var millisecondsLoading = endTime - startTime;
          console.log('Load Time: '+millisecondsLoading+'ms')

          $.getScript('/shannon-nz/js/todo/main.js')
     };
  </script>
</head>
<body>

	<nav>
		<div class="root">
			<div class="nav-title">
				<h1>To Do List</h1>
			</div>
      <a href="../?tab=projects" class="back-to-projects">← Back to Projects</a>
			<div class="nav-links">
				<div class="settings-btn">Settings ▾</div>
				<div class="account-btn">My Account ▾</div>
			</div>
		</div>
	</nav>

	<main>
		<div class="root">
			<div class="side-menu-container">
				<a href="javascript:void(0)">Home</a>
				<a href="javascript:void(0)">Favorites</a>
				<a href="javascript:void(0)">Deleted</a>
				<a href="javascript:void(0)">Planned</a>
				<div class="side-menu-breaker"></div>
				<a href="javascript:void(0)" class="custom-list">Tasks</a>
			</div>


			<div class="main-output">
				<div class="main-nav">
					<h1 class="list-title">My New List</h1>
					<div class="list-options-btn">
            <div class="op-dot"></div>
            <div class="op-dot"></div>
            <div class="op-dot"></div>
          </div>
				</div>

			<div class="tasks-container">
					

			</div>
		</div>
	</main>

</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Chat Application | Home</title>
  <meta name="keywords" content="HTML, CSS, JavaScript, PHP, SQL, shannon-nz, shannon, nz">


  <meta name="author" content="Shannon A">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="/shannon-nz/css/chat/main.css">
    <script type="text/javascript" src="/shannon-nz/js/jquery.min.js"></script>
     <script>
      var startTime = (new Date()).getTime();
       window.onload = function() {
            var endTime = (new Date()).getTime();
            var millisecondsLoading = endTime - startTime;
            console.log('Load Time: '+millisecondsLoading+'ms')

            $.getScript('/shannon-nz/js/chat/main.js')
       };
    </script>
</head>
<body>

  <nav>
    <div class="root">
      <div class="nav-title">
        <a href="#" class="title">Chat Application</a>
      </div>
      <div class="back-to-pro">
        <a href="../">← Go back to Profile</a>
      </div>
      <div class="nav-links">
        <a href="#">Nav Link</a>
        <a href="#">Nav Link</a>
        <div class="nav-auth-box">
          <a href="#">Signup</a>
          <p>or</p>
          <a href="#">Login</a>
        </div>
        <a href="#">Account ▾</a>
      </div>
    </div>
  </nav>

  <main>
    <div class="root">

      <div class="auth-root">
        
      </div>

      <div class="not-auth-root">
        
        <div class="index-banner">
          <div class="banner-content">
            <h1>Welcome to Chat Application</h1>
            <p>You can have a look at our preview or signup/login to start using the application.</p>
            <div class="index-banner-auth-box">
              <a href="#">Signup</a>
              <p>or</p>
              <a href="#">Login</a>
            </div>
          </div>
        </div>

        <div class="secondary-index-banner">
          <div class="banner-content">
            <h1>What is Chat Application?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>

      </div>

    </div>
  </main>

  <footer>
    <div class="root">
      <p>Copyright &copy; Shannon A 2021</p>
    </div>
  </footer>

</body>
</html>
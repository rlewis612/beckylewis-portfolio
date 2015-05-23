<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<meta name = "description" content="Contact Becky Lewis. Becky is a web designer/developer currently seeking a new career opportunity in Northwest Arkansas.">
	<meta name="keywords" content="becky lewis, contact, resume, portfolio, web designer, web developer, website, websites, design, arkansas, rogers, fayetteville, lowell, bentonville, springdale, job, opportunity, career, candidate, employment, javascript, jquery, sass, hire me, student, jccc, web technologies, mobile first, mobile-friendly, ux, ui">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<title>Contact Becky Lewis | Web Designer Portfolio</title>
	<link href='http://fonts.googleapis.com/css?family=Raleway:300,400,700' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:300,400,700' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Rock+Salt' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Gloria+Hallelujah' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Nothing+You+Could+Do' rel='stylesheet' type='text/css'>
	<link href="css/global.css" rel="stylesheet" type="text/css" />
</head>
<body><a id="top"></a>
	<header class="header">
		<div class="wrapper-header clearfix">
			<h1 class="logo"><a title="Go home" href="index.html" tabindex="1">Becky Lewis</a></h1>
			<img class="button-menu" title="Open Navigation Menu" alt="Menu icon" src="img/icon-menu.png" tabindex="2" />
			<img class="button-close" title="Close Navigation Menu" alt="Close icon" src="img/icon-close.png" />
		
			<nav class="nav-main">
				<a title="Go Home" href="index.html" tabindex="3">Home</a>
				<a title="Meet Becky Lewis" href="about.html" tabindex="4">About</a>
				<a title="View Becky's Portfolio" href="portfolio.html" tabindex="5">Portfolio</a>
				<a title="View Becky's Resume" href="resume.html" tabindex="5">Resum&eacute;</a>
				<a title="You are here" class="current" href="contact.php" tabindex="6">Contact</a>
			</nav>
		</div>
	</header>

	
	<main>
		<div class="wrapper-main clearfix">
			<h2 class="header-lg">Let's chat .</h2>
			<aside class="aside-rtext">
				<p>Thank you for visiting, I hope you like what you see. I would love to chat. Send me a message or:</p>
				<div id="box-social">
					<h4 class="header-social">Social Me</h4>
					<a class="icon-linkedin" title="Connect with Becky Lewis on LinkedIn" href="https://www.linkedin.com/in/beckylewis888" target="_blank" tabindex="7"></a>
					<a class="icon-twitter" title="Follow Becky Lewis on Twitter" href="https://twitter.com/BeckyAmyLew" target="_blank" tabindex="8"></a>
				</div>
			</aside>
			<section class="col-twothird">

				<?php
			        $name = $_POST['name'];
			        $email = $_POST['email'];
			        $message = $_POST['message'];
			        $human = $_POST['human'];

			        if (isset($_POST['subject'])) {
			        	$subject = $_POST['subject'];
			        }
			        else {
			        	$subject = "Not provided";
			        }

			        $to = 'ralewis612@gmail.com';
			        $headers = 'MIME-Version: 1.0' . "\r\n";
			        $headers .= 'Content-type: text/html; charset: utf8' . "\r\n";
			        $headers .= 'From: Email from Becky Lewis Portfolio Site <' . $email . ">"  . "\r\n";
			        $body = '<p>From: ' . $name . '<br />Email: ' . $email . '<p>' . $message . '</p>';
			            
			        if (isset($_POST['submit']) && $human == '101') {        
			          if (mail($to, $subject, $body, $headers)) { 
			            echo '<p class="message-success">Thank you! Your message has been sent.</p>';
			          } 
			          else { 
			            echo '<p class="message-error">Oops, something went wrong, please try again.</p>'; 
			          } 
			        } 
			        else if (isset($_POST['submit']) && $human != '101') {
			          echo '<p class="message-error">Incorrect answer, please try again.</p>';
			        }
			     ?> 

				<form id="contact-form" action="" method="post">
					<fieldset>
						<label for="name">Name: </label>
						<input type="text" id="name" name="name" placeholder="Joe Smith" tabindex="9" required>
						<label for="email">Email: </label>
						<input type="email" id="email" name="email" placeholder="example@email.com" tabindex="10" required>
						<label for="subject">Subject: </label>
						<input type="text" id="subject" name="subject" placeholder="Sushi?" tabindex="11" >
						<label for="message">Message: </label>
						<textarea id="message" name="message" placeholder="What's on your mind?" tabindex="12" required></textarea>
					</fieldset>
					<fieldset>
						<label for="human">Human? </label>
						<div class="catpcha">
							<p>Captcha: What is 100 + 1?<p/>
	        				<input type="text" id="human" name="human" placeholder="Your final answer." tabindex="13" required>
	        			</div>
	        		</fieldset>
					<div class="box-contact-btns">
						<button type="submit" name="submit" tabindex="14">Send</button>
						<button type="reset" tabindex="15">Clear</button>
					</div>
				</form>	
			</section>
		</div>
	</main>
	<a href="#top"><img class="img-uparrow" alt="Up Arrow" src="img/up-arrow.png"></a>

	<script>
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		ga('create', 'UA-61553240-1', 'auto');
		ga('send', 'pageview');
	</script>
	<script type="text/javascript" src="js/jquery-2.1.3.min.js"></script>
	<script type="text/javascript" src="js/portfolio.min.js"></script>
	<script type="text/javascript" src="js/global.js"></script>
</body>
</html>
<!DOCTYPE html>
<html lang="en-CA" class="en">
<head>
	<title>Truesight Collective</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
	<meta property="og:title" content="Truesight Collective">
	<!-- <meta property="og:description" name="description" content=""> -->
	<!-- <meta property="og:image" name="image" content=""/> -->
	<meta property="og:image:width" content="400" />
	<meta property="og:image:height" content="400" />
	<meta property="og:url" content="http://truesightcollective.com">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="stylesheet" type="text/css" href="https://cloud.typography.com/7598432/6062812/css/fonts.css" />
	<link href="https://fonts.googleapis.com/css?family=Faster+One|Monoton|Akronim|Metal+Mania" rel="stylesheet">
	<link href="css/style.css" rel="stylesheet">
	<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
	<!--[if lt IE 9]>
	    <script src="js/html5shiv.js"></script>
	    <script src="https://cdnjs.cloudflare.com/ajax/libs/bluebird/3.3.5/bluebird.min.js"></script>
	<![endif]-->
	<script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>
	<script src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"></script>
	<!-- GOOGLE ANALYTICS -->
</head>
<?php include 'variables.php'; ?>
<body>
	<a class="screen-reader-text" href="#content">Skip to content</a>
	<header>
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<div class="container">
				<a class="navbar-brand" href="#">Truesight Collective</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"><span class="screen-reader-text">View/hide navigation</span></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav mr-auto">
						<?php foreach ($nav as $navitem):?>
							<?php if($navitem['dropdown'] == true): ?>
							<li class="nav-item dropdown">
								<a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><?php echo $navitem['name'];?></a>
								<div class="dropdown-menu" aria-labelledby="navbarDropdown">
									<?php foreach ($navitem['dropdown_contents'] as $dropdown):?>
										<a class="dropdown-item" href="<?php echo $dropdown['url'];?>"><?php echo $dropdown['name'];?></a>
										<div class="dropdown-divider"></div>
									<?php endforeach;?>
								</div>
							</li>
							<?php else: ?>
								<li class="nav-item">
									<a class="nav-link" href="<?php echo $navitem['url'];?>"><?php echo $navitem['name'];?></a>
								</li>
							<?php endif;?>
						<?php endforeach;?>
					</ul>
				</div>
			</div>
		</nav>
	</header>
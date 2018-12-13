<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Leerplan</title>
    
	<link rel="stylesheet" href="leerplan.css">
	<script src='lp.js'></script>
	
    <!--[if IE]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
  </head>
  <body>

  <div class="wrapper">

  <header class="header">
  <img class="profile" src="../images/profiel/paul_face.jpg" />
  <h2 class="headertekst">Paul Ensing</h2>
 
  <select name="week">
  <option>Week 1</option>
  <option>Week 2</option>
  <option>Week 3</option>
  
  <?php
  
  echo "<option>Week 4</option>";
  
  ?>
  
  <?php 
for ($x = 0; $x <= 10; $x++) {
    echo "<option>Week" . $x . "</option>";
} 
?>
  
  </select>
  
  </header>

  
  
  <section class="blocks">
  
  <div class="category">
  <h2>Front-end development</h2>
  <input type="checkbox" name="html" value="">HTML<br>
  <input type="checkbox" name="css" value="">CSS<br>
  <input type="checkbox" name="bootstrap" value="">Bootstrap<br>
  <input type="checkbox" name="javascript" value="">Javascript<br>
  <input type="checkbox" name="angular" value="">Angular<br>
  </div>
  <div class="category">
  <h2>General development</h2>
  <input type="checkbox" name="html" value="">Scrum<br>
  <input type="checkbox" name="css" value="">IDE<br>
  <input type="checkbox" name="bootstrap" value="">Version control<br>
  <input type="checkbox" name="javascript" value="">Cloud deployment<br>
  <input type="checkbox" name="angular" value="">OWASP websecurity<br>
  </div>
  <div class="category">
  <h2>Back-end development</h2>
  <input type="checkbox" name="php" value="">PHP<br>
  <input type="checkbox" name="laravel" value="">Laravel<br>
  <input type="checkbox" name="mysql" value="">MySQL<br>
  <input type="checkbox" name="linux" value="">Linux<br>
  </div>
  <div class="category">
  <h2>Soft skills</h2>
  <input type="checkbox" name="improve" value="">Self improvement<br>
  <input type="checkbox" name="com" value="">Communication<br>
  <input type="checkbox" name="solv" value="">Problem solving<br>
  <input type="checkbox" name="manage" value="">Time management<br>
  </div>
  
  </section>
  
  </wrapper>

  </body>
</html>
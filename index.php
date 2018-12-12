<?php include('server.php') ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ajax Crud</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h2><center>CRUD WITH AJAX</h2>
    <div class="wrapper">
        
        <?php echo $comments; ?>

        <form class="comment_form">
        <div>
            <label for="name">Name:</label>
            <input type="text" name="name" id="name">
        </div>
        <div>
            <label for="comment">Comment:</label>
            <textarea name="comment" id="comment" cols="30" rows="5"></textarea>
        </div>
        <button type="button" id="submit_btn">POST</button>
        <button type="button" id="update_btn" style="display: none;">UPDATE</button>
        </form>
    </div>
</body>
</html>

<!-- Tambahkan jquery -->

<script src="jquery.min.js"></script>
<script src="scripts.js"></script>
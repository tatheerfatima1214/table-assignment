<!doctype html>
<head></head>
<body>
 <?php 
//include(classwork.php);
//    $error=[];
//    $valid_fields=["first_name"];
//    foreach($valid_fields as $value)
//    {
//     if(isset($_post['submit'])){
//         if(empty(trim($post[$value]))){
//             $error[$value]=$error_message[$key];
//         }
//     }
//    }
if(isset($post[submit])){
    $error=[];
    if(empty(trim($post[first_name])))
    {
        $error=['first_name']='name field is required';
    }
    if(!(count($error)>0))
    {
        echo 'form submitted';
    }
}
   ?> 
   <form method="post">
<label>name</label>
<input type="text" name="first_name" value="<?php echo isset($post["first_name"]) ? $_post['first_name']:'?>"> 
<label>phone number</label>
<input type="number" name="number">
<input type="submit" name="submit">
</form>
</body>
</html>


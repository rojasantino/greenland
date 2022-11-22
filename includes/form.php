<?php
$name = $_POST['name'];
$email = $_POST['email'];
$address = $_POST['address'];
$phone = $_POST['phone'];
$service = $_POST['select-service'];
$msg = $_POST['message'];

$con = mysqli_connect('localhost','root','','greenland');
if(!$con){
    echo "error :".mysqli_connect_error();
}else{
    $sql = "INSERT INTO users(name,email,address,phone,service,msg) VALUES('$name','$email','$address','$phone','$service','$msg')";
    $value = mysqli_query($con,$sql);
    if($value === TRUE){
        echo "success";
    }else{
        echo 'failure';
    }
}




<?php
 
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST");
    header("Access-Control-Allow-Headers: Content-Type");
 
    $conn = new mysqli("localhost", "root", "", "bazaar_db");
    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }
    else{
        $eData = file_get_contents("php://input");
        $dData = json_decode($eData, true);
 
        $user = $dData['user'];
 
        $result = "";
 
        if($user != ""){
            $sql = "SELECT * FROM user WHERE user='$user';";
            $res = mysqli_query($conn, $sql);
            if(mysqli_num_rows($res) != 0){
                $result = "Username is already taken!";
            }
            else{
                $result = "";
            }
        }
        else{
            $result = "";
        }
 
        $conn -> close();
        $response[] = array("result" => $result);
        echo json_encode($response);
    }
 
?>

<?php
 
    header("Access-Control-Allow-Origin: *"); //add this CORS header to enable any domain to send HTTP requests to these endpoints:
    header("Access-Control-Allow-Methods: GET, POST");
    header("Access-Control-Allow-Headers: Content-Type");
 
    $mysqli = new mysqli("localhost", "root", "", "bazaar_db");
    if ($mysqli -> connect_errno) {
        echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
        exit();
    }
    else{
        
        $eData = file_get_contents("php://input");
        $dData = json_decode($eData, true);
 
        $user = $dData['user'];
        $email = $dData['email'];
        $roles = $dData['role'];
        $pass = $dData['pass'];
 
        $result = "";
 
        if($user != "" and $email != "" and $pass != ""){
            $sql = "INSERT INTO user(user, email, roles, pass) VALUES('$user', '$email','pppp','$pass');";
            $res = mysqli_query($conn, $sql);
            if($res){
                $result = "You have registered successfully!";
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
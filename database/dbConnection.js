
import mysql from 'mysql2';


export const dbConnection = () => {
  const connection =   mysql.createConnection("mysql://ud7vwbgztvopa3e7:KjGgTy2MtXxY5rbBEZcz@bkyx8kzw0acpvg4nzdnv-mysql.services.clever-cloud.com:3306/bkyx8kzw0acpvg4nzdnv") 

    connection.connect((err)=>{
        if(err) return console.log(" database Error" , err);
            console.log("database connected successfully");
    })
    return connection
}

import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

//const fastApiPerfil = "http://0.0.0.0:12545/perfil/";
const oracleLogin = "https://g722d0e58d6fa66-clasesdb.adb.sa-santiago-1.oraclecloudapps.com/ords/valortrack/api/v1/login/";

export async function GET(request: NextRequest, response: NextResponse) {

  const cookie = request.cookies.get("token");
  if (cookie) {
    const decoded = jwt.verify(cookie.value as string, "secret") as jwt.JwtPayload;
    const userid = decoded.userid;
    const name = decoded.name;
    const gender = decoded.gender;
    const parsedDate = new Date(decoded.birthdate);
    // THIS FORMAT NUMBER DD/MM/YYYY, IF THE DAY OR MONTH IS LESS THAN 10, IT WILL ADD A 0 AT THE BEGINNING
    const birthdate = `${parsedDate.getDate().toString().padStart(2, "0")}/${(parsedDate.getMonth() + 1).toString().padStart(2, "0")}/${parsedDate.getFullYear()}`;
    const phone = decoded.phone;
    const correo = decoded.mail;
    const clave = decoded.password;

    const res = await fetch(oracleLogin, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ correo, clave }),
        credentials: "include",
    });

    if (res.status === 200) {
        return new Response(
            JSON.stringify({
                mensaje: "Usuario logeado correctamente",
                userid: userid,
                name: name,
                gender: gender,
                birthdate: birthdate,
                phone: phone,
                mail: correo
            }), {status: 200, statusText: res.statusText, headers: {"Content-Type": "application/json",},});          
    };
    return new Response("Error en el login", { status: res.status, statusText: res.statusText });

  }
}



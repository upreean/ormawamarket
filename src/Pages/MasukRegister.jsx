import React from "react";
import "./CSS/MasukRegister.css";

const MasukRegister = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Register</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Masukkan Nama" />
          <input type="email" placeholder="Alamat Email" />
          <input type="password" placeholder="Kata Sandi" />
        </div>
        <button>Selanjutnya</button>
        <p className="loginsignup-login">
          Sudah Punya Akun?<span> Masuk Yuk!</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>
            Dengan melanjutkan, saya setuju dengan Syarat Penggunaan & Kebijakan
            Privasi
          </p>
        </div>
      </div>
    </div>
  );
};

export default MasukRegister;

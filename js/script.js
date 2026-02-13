
welcomeMessage();

function welcomeMessage() {
  // Show popup
  let name = prompt("Welcome to Healing Company! What is your name?");

  // Validate input
  if (name === null || name.trim() === "") {
    name = "Guest";
  }

  // Show result on the page
  document.getElementById("welcome-speech").innerHTML =
    `Hello, ${name}! <br>
    Welcome to Healing Company.`;

}

function submitFunction(event){
    event.preventDefault(); // supaya form tidak reload

    let nama = document.getElementById("guestName").value;
    let ttl = document.getElementById("guestTTL").value;
    let gender = document.querySelector('input[name="guestGender"]:checked');
    let pesan = document.getElementById("guestMessage").value;

    //mengambil data hari ini
    let today = new Date();
    today.setHours(0,0,0,0);

    // ubah tipe ttl jadi date
    let birthDate = new Date(ttl);
    birthDate.setHours(0,0,0,0); //supaya hari ini juga tidak lolos

    //Cek Validasi input
    // Validasi
    if (
        nama.trim() === "" ||
        ttl.trim() === "" ||
        isNaN(birthDate.getTime()) ||
        birthDate >= today ||
        gender === null ||
        pesan.trim() === ""
    ) {
        alert("Upss! Data atau pesan yang Anda isi masih salah. Cek lagi dan silahkan kirimkan ulang pesan Anda.");
    }else{
        // merapikan tanggal
        let tanggalRapi = birthDate.toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric"});

        // pesan balasan ditampilkan di html
        document.getElementById("reply-message").innerHTML =
            `Halo, ${nama}! Terima kasih sudah menghubungi Healing Company.<br>
            Data Anda:<br>
            - Jenis kelamin: ${gender.value}<br>
            - Tanggal lahir: ${tanggalRapi}<br>
            - Pesan: "${pesan}"<br><br>
            Pesan Anda sudah kami terima dengan baik ^_^`;
    }
}

//supaya balik ke atas lagi kalau di reload
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

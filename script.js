function calculateMEOWS() {
    let score = 0;

    // Mengambil input dari form
    const respiratoryRate = parseInt(document.getElementById("respiratoryRate").value);
    const oxygenSaturation = parseInt(document.getElementById("oxygenSaturation").value);
    const oxygenSupplement = document.getElementById("oxygenSupplement").value.toLowerCase();
    const temperature = parseFloat(document.getElementById("temperature").value);
    const systolicBP = parseInt(document.getElementById("systolicBP").value);
    const diastolicBP = parseInt(document.getElementById("diastolicBP").value);
    const pulseRate = parseInt(document.getElementById("pulseRate").value);
    const consciousness = document.getElementById("consciousness").value.toLowerCase();
    const pain = document.getElementById("pain").value.toLowerCase();
    const discharge = document.getElementById("discharge").value.toLowerCase();
    const proteinuria = document.getElementById("proteinuria").value;

    // Frekuensi Pernafasan
    if (respiratoryRate < 12) {
        score += 3;
    } else if (respiratoryRate >= 12 && respiratoryRate <= 20) {
        score += 0;
    } else if (respiratoryRate >= 21 && respiratoryRate <= 25) {
        score += 2;
    } else if (respiratoryRate > 25) {
        score += 3;
    }

    // Saturasi Oksigen
    if (oxygenSaturation < 92) {
        score += 3;
    } else if (oxygenSaturation >= 92 && oxygenSaturation <= 95) {
        score += 2;
    } else if (oxygenSaturation > 95) {
        score += 0;
    }

    // Penggunaan Oksigen
    if (oxygenSupplement === "ya") {
        score += 2;
    }

    // Suhu
    if (temperature < 36) {
        score += 3;
    } else if (temperature >= 36.1 && temperature <= 37.2) {
        score += 2;
    } else if (temperature >= 37.5 && temperature <= 37.7) {
        score += 2;
    } else if (temperature > 37.7) {
        score += 3;
    }

    // Tekanan Darah Sistolik
    if (systolicBP < 90) {
        score += 3;
    } else if (systolicBP >= 90 && systolicBP <= 140) {
        score += 0;
    } else if (systolicBP >= 141 && systolicBP <= 150) {
        score += 1;
    } else if (systolicBP >= 151 && systolicBP <= 160) {
        score += 2;
    } else if (systolicBP > 160) {
        score += 3;
    }

    // Tekanan Darah Diastolik
    if (diastolicBP >= 60 && diastolicBP <= 90) {
        score += 0;
    } else if (diastolicBP >= 91 && diastolicBP <= 100) {
        score += 1;
    } else if (diastolicBP >= 101 && diastolicBP <= 110) {
        score += 2;
    } else if (diastolicBP > 110) {
        score += 3;
    }

    // Nadi
    if (pulseRate < 50) {
        score += 3;
    } else if (pulseRate >= 50 && pulseRate <= 60) {
        score += 2;
    } else if (pulseRate >= 61 && pulseRate <= 100) {
        score += 0;
    } else if (pulseRate >= 101 && pulseRate <= 110) {
        score += 1;
    } else if (pulseRate >= 111 && pulseRate <= 120) {
        score += 2;
    } else if (pulseRate > 120) {
        score += 3;
    }

    // Tingkat Kesadaran
    if (consciousness === "alert") {
        score += 0;
    } else {
        score += 3;
    }

    // Nyeri
    if (pain === "abnormal") {
        score += 3;
    }

    // Pengeluaran/Lochia
    if (discharge === "abnormal") {
        score += 3;
    }

    // Protein Urin
    if (proteinuria === "+") {
        score += 2;
    } else if (proteinuria === "++") {
        score += 3;
    }

    // Menampilkan skor dan kategori
    let category = '';
    let explanation = '';
    if (score <= 4) {
        category = "Rendah (Hijau)";
        explanation = "Pasien menunjukkan tanda-tanda vital yang normal dan tidak ada tanda-tanda gawat darurat. Lanjutkan pemantauan rutin setiap 4 jam.";
    } else if (score >= 5 && score <= 6) {
        category = "Sedang (Kuning)";
        explanation = "Pasien menunjukkan tanda-tanda peringatan, dan kemungkinan resiko gawat darurat. Pemantauan lebih intensif, evaluasi kondisi pasien lebih mendalam, pertimbangkan pemeriksaan tambahan (EKG atau USG), konsultasi dengan spesialis.";
    } else if (score > 7) {
        category = "Tinggi (Merah)";
        explanation = "Pasien beresiko tinggi mengalami komplikasi serius. Pantau pasien secara intensif (ICU), intervensi medis sesegera mungkin, konsultasi spesialis.";
    }

    // Menampilkan hasil
    document.getElementById("meowsScore").textContent = score;
    document.getElementById("scoreCategory").textContent = category;
    document.getElementById("explanation").textContent = explanation;
    document.getElementById("result").style.display = "block";
}
